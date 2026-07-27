/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 HENTUX & AtlasXCORD Contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import { OptionType } from "@utils/types";
import { useEffect, UserStore, useState } from "@webpack/common";

const settings = definePluginSettings({
    showAtlasXCORDDonor: {
        type: OptionType.BOOLEAN,
        description: "Enable to show AtlasXCORD Donor badges in chat.",
        hidden: true,
        default: true
    },
    AtlasXCORDDonorPosition: {
        type: OptionType.NUMBER,
        description: "The position of the AtlasXCORD Donor badges.",
        hidden: true,
        default: 0
    },
    showAtlasXCORDContributor: {
        type: OptionType.BOOLEAN,
        description: "Enable to show AtlasXCORD Contributor badges in chat.",
        hidden: true,
        default: true
    },
    AtlasXCORDContributorPosition: {
        type: OptionType.NUMBER,
        description: "The position of the AtlasXCORD Contributor badge.",
        hidden: true,
        default: 1
    },
    showVencordDonor: {
        type: OptionType.BOOLEAN,
        description: "Enable to show Vencord donor badges in chat.",
        hidden: true,
        default: true
    },
    VencordDonorPosition: {
        type: OptionType.NUMBER,
        description: "The position of the Vencord Donor badges.",
        hidden: true,
        default: 4
    },
    showVencordContributor: {
        type: OptionType.BOOLEAN,
        description: "Enable to show Vencord contributor badges in chat.",
        hidden: true,
        default: true
    },
    VencordContributorPosition: {
        type: OptionType.NUMBER,
        description: "The position of the Vencord Contributor badge.",
        hidden: true,
        default: 5
    },
    showDiscordProfile: {
        type: OptionType.BOOLEAN,
        description: "Enable to show Discord profile badges in chat.",
        hidden: true,
        default: true
    },
    DiscordProfilePosition: {
        type: OptionType.NUMBER,
        description: "The position of the Discord profile badges.",
        hidden: true,
        default: 6
    },
    showDiscordNitro: {
        type: OptionType.BOOLEAN,
        description: "Enable to show Discord Nitro badges in chat.",
        hidden: true,
        default: true
    },
    DiscordNitroPosition: {
        type: OptionType.NUMBER,
        description: "The position of the Discord Nitro badge.",
        hidden: true,
        default: 7
    },
    badgeSettings: {
        type: OptionType.COMPONENT,
        description: "Setup badge layout and visibility",
        component: () => <BadgeSettings />
    }
});

export default settings;

const BadgeSettings = () => {
    const [images, setImages] = useState([
        { src: "https://badge.AtlasXCORD.org/donor.webp", shown: settings.store.showAtlasXCORDDonor, title: "AtlasXCORD donor badges", key: "AtlasXCORDDonor", position: settings.store.AtlasXCORDDonorPosition },
        { src: "https://AtlasXCORD.org/assets/favicon.png", shown: settings.store.showAtlasXCORDContributor, title: "AtlasXCORD contributor badge", key: "AtlasXCORDContributer", position: settings.store.AtlasXCORDContributorPosition },
        { src: "https://cdn.discordapp.com/emojis/1026533070955872337.png", shown: settings.store.showVencordDonor, title: "Vencord donor badges", key: "VencordDonor", position: settings.store.VencordDonorPosition },
        { src: "https://cdn.discordapp.com/emojis/1092089799109775453.png", shown: settings.store.showVencordContributor, title: "Vencord contributor badge", key: "VencordContributer", position: settings.store.VencordContributorPosition },
        { src: "https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png", shown: settings.store.showDiscordProfile, title: "Discord profile badges (HypeSquad, Discord Staff, Early Supporter, etc.)", key: "DiscordProfile", position: settings.store.DiscordProfilePosition },
        { src: "https://cdn.discordapp.com/badge-icons/2ba85e8026a8614b640c2837bcdfe21b.png", shown: settings.store.showDiscordNitro, title: "Nitro badge", key: "DiscordNitro", position: settings.store.DiscordNitroPosition }
    ]);

    useEffect(() => {
        images.forEach(image => {
            switch (image.key) {
                case "AtlasXCORDDonor":
                    settings.store.AtlasXCORDDonorPosition = image.position;
                    settings.store.showAtlasXCORDDonor = image.shown;
                    break;
                case "AtlasXCORDContributer":
                    settings.store.AtlasXCORDContributorPosition = image.position;
                    settings.store.showAtlasXCORDContributor = image.shown;
                    break;
                case "VencordDonor":
                    settings.store.VencordDonorPosition = image.position;
                    settings.store.showVencordDonor = image.shown;
                    break;
                case "VencordContributer":
                    settings.store.VencordContributorPosition = image.position;
                    settings.store.showVencordContributor = image.shown;
                    break;
                case "DiscordProfile":
                    settings.store.DiscordProfilePosition = image.position;
                    settings.store.showDiscordProfile = image.shown;
                    break;
                case "DiscordNitro":
                    settings.store.DiscordNitroPosition = image.position;
                    settings.store.showDiscordNitro = image.shown;
                    break;
                default:
                    break;
            }
        });
    }, [images]);

    const handleDragStart = (e: any, index: number) => {
        if (!images[index].shown) {
            e.preventDefault();
        } else {
            e.dataTransfer.setData("index", index);
        }
    };

    const handleDragOver = e => {
        e.preventDefault();
    };

    const handleDrop = (e: any, dropIndex: number) => {
        const dragIndex = e.dataTransfer.getData("index");
        const newImages = [...images];
        const draggedImage = newImages[dragIndex];

        newImages.splice(dragIndex, 1);
        newImages.splice(dropIndex, 0, draggedImage);

        newImages.forEach((image, index) => {
            image.position = index;
        });

        setImages(newImages);
    };

    const toggleDisable = (index: number) => {
        const newImages = [...images];
        newImages[index].shown = !newImages[index].shown;
        setImages(newImages);
    };

    return (
        <>
            <BaseText>Drag the badges to reorder them, you can click to enable/disable a specific badge type.</BaseText>
            <div className="vc-sbic-badge-settings">
                <img className="vc-sbic-settings-avatar" src={UserStore.getCurrentUser().getAvatarURL()}></img>
                <BaseText className="vc-sbic-settings-username">{(UserStore.getCurrentUser() as any).globalName}</BaseText>
                {images
                    .sort((a, b) => a.position - b.position)
                    .map((image, index) => (
                        <div
                            key={image.key}
                            className={`vc-sbic-image-container ${!image.shown ? "vc-sbic-disabled" : ""}`}
                            onDragOver={e => handleDragOver(e)}
                            onDrop={e => handleDrop(e, index)}
                            onClick={() => toggleDisable(index)}
                        >
                            <img
                                src={image.src}
                                draggable={image.shown}
                                onDragStart={e => handleDragStart(e, index)}
                                title={image.title}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
};
