import { Application } from "typedoc";
import { PluginBooleanOption } from "typedoc-plugin-base/dist/plugin_boolean_option";
import { PluginEnumOption } from "typedoc-plugin-base/dist/plugin_enum_option";
import { PluginNumberOption } from "typedoc-plugin-base/dist/plugin_number_option";
import { PluginStringOption } from "typedoc-plugin-base/dist/plugin_string_option";

/**
 * Supported image output formats.
 */
export enum ImageFormat {
    PNG = "png",
    SVG = "svg",
}

/**
 * Supported image output locations.
 */
export enum ImageLocation {
    Local = 1,
    Remote = 2,
}

/**
 * Supported class diagram types when automatically generating class diagrams.
 */
export enum ClassDiagramType {
    None = 1,
    Simple = 2,
    Detailed = 3,
}

/**
 * Supported class diagram positions when automatically generating class diagrams.
 */
export enum ClassDiagramPosition {
    Above = 1,
    Below = 2,
}

/**
 * Supported visibility styles for members when automatically generating class diagrams.
 */
export enum ClassDiagramMemberVisibilityStyle {
    Text = 1,
    Icon = 2,
}

/**
 * Font styles supported by PlantUML.
 */
export enum FontStyle {
    Undefined = "",
    Normal = "normal",
    Plain = "plain",
    Italic = "italic",
    Bold = "bold",
}

/**
 * Class storing the options of the plugin.
 */
export class PlantUmlPluginOptions {
    /** The image format used for generating UML diagrams. */
    protected outputImageFormatOption: PluginEnumOption<ImageFormat>;

    /** The location where the generated UML diagrams should be stored. */
    protected outputImageLocationOption: PluginEnumOption<ImageLocation>;

    /** Specifies whether UML class diagrams should be created automatically. */
    protected autoClassDiagramTypeOption: PluginEnumOption<ClassDiagramType>;

    /** Specifies where on the page the automatically created class diagram should be put. */
    protected autoClassDiagramPositionOption: PluginEnumOption<ClassDiagramPosition>;

    /** Specifies whether to hide empty properties and methods in the automatically created class diagram. */
    protected autoClassDiagramHideEmptyMembersOption: PluginBooleanOption;

    /** Specifies the boundary before swiching from top->down to left->right direction for class diagrams. */
    protected autoClassDiagramTopDownLayoutMaxSiblingsOption: PluginNumberOption;

    /** Specifies whether UML class diagrams should be created automatically. */
    protected autoClassDiagramMemberVisibilityStyleOption: PluginEnumOption<ClassDiagramMemberVisibilityStyle>;

    /**
     * Specifies whether to hide the circled character in front of class names
     * in the automatically created class diagram.
     */
    protected autoClassDiagramHideCircledCharOption: PluginBooleanOption;

    /** Specifies whether to hide the shadowing in the automatically created class diagrams */
    protected autoClassDiagramHideShadowOption: PluginBooleanOption;

    /** Specifies the background color used for boxes in automatically created class diagrams. */
    protected autoClassDiagramBoxBackgroundColorOption: PluginStringOption;

    /** Specifies the border color used for boxes in automatically created class diagrams. */
    protected autoClassDiagramBoxBorderColorOption: PluginStringOption;

    /** Specifies the border radius used for boxes in automatically created class diagrams. */
    protected autoClassDiagramBoxBorderRadiusOption: PluginNumberOption;

    /** Specifies the border width used for boxes in automatically created class diagrams. */
    protected autoClassDiagramBoxBorderWidthOption: PluginNumberOption;

    /** Specifies the color used for arrows in automatically created class diagrams. */
    protected autoClassDiagramArrowColorOption: PluginStringOption;

    /** Specifies the name of the font used for the class name in automatically created class diagrams. */
    protected autoClassDiagramClassFontNameOption: PluginStringOption;

    /** Specifies the font size for the class name in automatically created class diagrams. */
    protected autoClassDiagramClassFontSizeOption: PluginNumberOption;

    /** Specifies the font style for the class name in automatically created class diagrams. */
    protected autoClassDiagramClassFontStyleOption: PluginEnumOption<FontStyle>;

    /** Specifies the font color for the class name in automatically created class diagrams. */
    protected autoClassDiagramClassFontColorOption: PluginStringOption;

    /** Specifies the name of the font used for the class attributes in automatically created class diagrams. */
    protected autoClassDiagramClassAttributeFontNameOption: PluginStringOption;

    /** Specifies the font size for the class attributes in automatically created class diagrams. */
    protected autoClassDiagramClassAttributeFontSizeOption: PluginNumberOption;

    /** Specifies the font style for the class attributes in automatically created class diagrams. */
    protected autoClassDiagramClassAttributeFontStyleOption: PluginEnumOption<FontStyle>;

    /** Specifies the font color for the class attributes in automatically created class diagrams. */
    protected autoClassDiagramClassAttributeFontColorOption: PluginStringOption;

    /**
     * Intializes a new plugin options instance.
     */
    constructor() {
        this.outputImageFormatOption = new PluginEnumOption<ImageFormat>(
            "umlFormat",
            "png|svg",
            ImageFormat.PNG,
            new Map([
                ["png", ImageFormat.PNG],
                ["svg", ImageFormat.SVG],
            ])
        );

        this.outputImageLocationOption = new PluginEnumOption<ImageLocation>(
            "umlLocation",
            "local|remote",
            ImageLocation.Local,
            new Map([
                ["local", ImageLocation.Local],
                ["remote", ImageLocation.Remote],
            ])
        );

        this.autoClassDiagramTypeOption = new PluginEnumOption<ClassDiagramType>(
            "umlClassDiagramType",
            "none|simple|detailed",
            ClassDiagramType.None,
            new Map([
                ["none", ClassDiagramType.None],
                ["simple", ClassDiagramType.Simple],
                ["detailed", ClassDiagramType.Detailed],
            ])
        );

        this.autoClassDiagramPositionOption = new PluginEnumOption<ClassDiagramPosition>(
            "umlClassDiagramPosition",
            "above|below",
            ClassDiagramPosition.Below,
            new Map([
                ["above", ClassDiagramPosition.Above],
                ["below", ClassDiagramPosition.Below],
            ])
        );

        this.autoClassDiagramHideEmptyMembersOption = new PluginBooleanOption(
            "umlClassDiagramHideEmptyMembers",
            "true|false",
            true
        );

        this.autoClassDiagramTopDownLayoutMaxSiblingsOption = new PluginNumberOption(
            "umlClassDiagramTopDownLayoutMaxSiblings",
            "An integer indicating the max number of siblings to be used with the default top down layout.",
            6,
            0,
            Infinity
        );

        this.autoClassDiagramMemberVisibilityStyleOption = new PluginEnumOption<ClassDiagramMemberVisibilityStyle>(
            "umlClassDiagramMemberVisibilityStyle",
            "text|icon",
            ClassDiagramMemberVisibilityStyle.Icon,
            new Map([
                ["text", ClassDiagramMemberVisibilityStyle.Text],
                ["icon", ClassDiagramMemberVisibilityStyle.Icon],
            ])
        );

        this.autoClassDiagramHideCircledCharOption = new PluginBooleanOption(
            "umlClassDiagramHideCircledChar",
            "true|false",
            false
        );

        this.autoClassDiagramHideShadowOption = new PluginBooleanOption(
            "umlClassDiagramHideShadow",
            "true|false",
            false
        );

        this.autoClassDiagramBoxBackgroundColorOption = new PluginStringOption(
            "umlClassDiagramBoxBackgroundColor",
            "transparent|#RGBHEX",
            ""
        );

        this.autoClassDiagramBoxBorderColorOption = new PluginStringOption(
            "umlClassDiagramBoxBorderColor",
            "transparent|#RGBHEX",
            ""
        );

        this.autoClassDiagramBoxBorderRadiusOption = new PluginNumberOption(
            "umlClassDiagramBoxBorderRadius",
            "The box border radius in pixel used when automatically creating class diagrams.",
            0,
            0,
            Infinity
        );

        this.autoClassDiagramBoxBorderWidthOption = new PluginNumberOption(
            "umlClassDiagramBoxBorderWidth",
            "The box border width in pixel used when automatically creating class diagrams.",
            -1, // because 0 can be used to hide borders
            0,
            Infinity
        );

        this.autoClassDiagramArrowColorOption = new PluginStringOption(
            "umlClassDiagramArrowColor",
            "transparent|#RGBHEX",
            ""
        );

        this.autoClassDiagramClassFontNameOption = new PluginStringOption(
            "umlClassDiagramClassFontName",
            "The name of the font used for the class name when automatically creating class diagrams.",
            ""
        );

        this.autoClassDiagramClassFontSizeOption = new PluginNumberOption(
            "umlClassDiagramClassFontSize",
            "The font size in pixel used for the class name when automatically creating class diagrams.",
            0,
            0,
            Infinity
        );

        this.autoClassDiagramClassFontStyleOption = new PluginEnumOption<FontStyle>(
            "umlClassDiagramClassFontStyle",
            "normal|plain|italic|bold",
            FontStyle.Undefined,
            new Map([
                ["normal", FontStyle.Normal],
                ["plain", FontStyle.Plain],
                ["italic", FontStyle.Italic],
                ["bold", FontStyle.Bold],
            ])
        );

        this.autoClassDiagramClassFontColorOption = new PluginStringOption(
            "umlClassDiagramClassFontColor",
            "transparent|#RGBHEX",
            ""
        );

        this.autoClassDiagramClassAttributeFontNameOption = new PluginStringOption(
            "umlClassDiagramClassAttributeFontName",
            "The name of the font used for the class attributes when automatically creating class diagrams.",
            ""
        );

        this.autoClassDiagramClassAttributeFontSizeOption = new PluginNumberOption(
            "umlClassDiagramClassAttributeFontSize",
            "The font size in pixel used for the class attributes when automatically creating class diagrams.",
            0,
            0,
            Infinity
        );

        this.autoClassDiagramClassAttributeFontStyleOption = new PluginEnumOption<FontStyle>(
            "umlClassDiagramClassAttributeFontStyle",
            "normal|plain|italic|bold",
            FontStyle.Undefined,
            new Map([
                ["normal", FontStyle.Normal],
                ["plain", FontStyle.Plain],
                ["italic", FontStyle.Italic],
                ["bold", FontStyle.Bold],
            ])
        );

        this.autoClassDiagramClassAttributeFontColorOption = new PluginStringOption(
            "umlClassDiagramClassAttributeFontColor",
            "transparent|#RGBHEX",
            ""
        );
    }

    /**
     * Adds the command line options of the plugin to the TypeDoc application.
     * @param typedoc The TypeDoc application.
     */
    public addToApplication(typedoc: Application): void {
        this.outputImageFormatOption.addToApplication(typedoc);
        this.outputImageLocationOption.addToApplication(typedoc);
        this.autoClassDiagramTypeOption.addToApplication(typedoc);
        this.autoClassDiagramPositionOption.addToApplication(typedoc);
        this.autoClassDiagramHideEmptyMembersOption.addToApplication(typedoc);
        this.autoClassDiagramTopDownLayoutMaxSiblingsOption.addToApplication(typedoc);
        this.autoClassDiagramMemberVisibilityStyleOption.addToApplication(typedoc);
        this.autoClassDiagramHideCircledCharOption.addToApplication(typedoc);
        this.autoClassDiagramHideShadowOption.addToApplication(typedoc);
        this.autoClassDiagramBoxBackgroundColorOption.addToApplication(typedoc);
        this.autoClassDiagramBoxBorderColorOption.addToApplication(typedoc);
        this.autoClassDiagramBoxBorderRadiusOption.addToApplication(typedoc);
        this.autoClassDiagramBoxBorderWidthOption.addToApplication(typedoc);
        this.autoClassDiagramArrowColorOption.addToApplication(typedoc);
        this.autoClassDiagramClassFontNameOption.addToApplication(typedoc);
        this.autoClassDiagramClassFontSizeOption.addToApplication(typedoc);
        this.autoClassDiagramClassFontStyleOption.addToApplication(typedoc);
        this.autoClassDiagramClassFontColorOption.addToApplication(typedoc);
        this.autoClassDiagramClassAttributeFontNameOption.addToApplication(typedoc);
        this.autoClassDiagramClassAttributeFontSizeOption.addToApplication(typedoc);
        this.autoClassDiagramClassAttributeFontStyleOption.addToApplication(typedoc);
        this.autoClassDiagramClassAttributeFontColorOption.addToApplication(typedoc);
    }

    /**
     * Reads the values of the plugin options from the application options.
     * @param appOptions The TypeDoc application.
     */
    public readValuesFromApplication(typedoc: Application): void {
        this.outputImageFormatOption.readValueFromApplication(typedoc);
        this.outputImageLocationOption.readValueFromApplication(typedoc);
        this.autoClassDiagramTypeOption.readValueFromApplication(typedoc);
        this.autoClassDiagramPositionOption.readValueFromApplication(typedoc);
        this.autoClassDiagramHideEmptyMembersOption.readValueFromApplication(typedoc);
        this.autoClassDiagramTopDownLayoutMaxSiblingsOption.readValueFromApplication(typedoc);
        this.autoClassDiagramMemberVisibilityStyleOption.readValueFromApplication(typedoc);
        this.autoClassDiagramHideCircledCharOption.readValueFromApplication(typedoc);
        this.autoClassDiagramHideShadowOption.readValueFromApplication(typedoc);
        this.autoClassDiagramBoxBackgroundColorOption.readValueFromApplication(typedoc);
        this.autoClassDiagramBoxBorderColorOption.readValueFromApplication(typedoc);
        this.autoClassDiagramBoxBorderRadiusOption.readValueFromApplication(typedoc);
        this.autoClassDiagramBoxBorderWidthOption.readValueFromApplication(typedoc);
        this.autoClassDiagramArrowColorOption.readValueFromApplication(typedoc);
        this.autoClassDiagramClassFontNameOption.readValueFromApplication(typedoc);
        this.autoClassDiagramClassFontSizeOption.readValueFromApplication(typedoc);
        this.autoClassDiagramClassFontStyleOption.readValueFromApplication(typedoc);
        this.autoClassDiagramClassFontColorOption.readValueFromApplication(typedoc);
        this.autoClassDiagramClassAttributeFontNameOption.readValueFromApplication(typedoc);
        this.autoClassDiagramClassAttributeFontSizeOption.readValueFromApplication(typedoc);
        this.autoClassDiagramClassAttributeFontStyleOption.readValueFromApplication(typedoc);
        this.autoClassDiagramClassAttributeFontColorOption.readValueFromApplication(typedoc);
    }

    /**
     * Returns the image format used for generating UML diagrams.
     * @returns The image format used for generating UML diagrams.
     */
    get outputImageFormat(): ImageFormat {
        return this.outputImageFormatOption.val;
    }

    /**
     * Returns the location where the generated UML diagrams should be stored.
     * @returns The location where the generated UML diagrams should be stored.
     */
    get outputImageLocation(): ImageLocation {
        return this.outputImageLocationOption.val;
    }

    /**
     * Returns whether UML class diagrams should be created automatically.
     * @returns Whether UML class diagrams should be created automatically.
     */
    get autoClassDiagramType(): ClassDiagramType {
        return this.autoClassDiagramTypeOption.val;
    }

    /**
     * Returns where on the page the automatically created class diagram should be put.
     * @returns Where on the page the automatically created class diagram should be put.
     */
    get autoClassDiagramPosition(): ClassDiagramPosition {
        return this.autoClassDiagramPositionOption.val;
    }

    /**
     * Returns whether to hide empty properties and methods in the automatically created class diagram.
     * @returns Whether to hide empty properties and methods in the automatically created class diagram.
     */
    get autoClassDiagramHideEmptyMembers(): boolean {
        return this.autoClassDiagramHideEmptyMembersOption.val;
    }

    /**
     * Returns the boundary before swiching from top->down to left->right direction for class diagrams.
     * @returns The boundary before swiching from top->down to left->right direction for class diagrams.
     */
    get autoClassDiagramTopDownLayoutMaxSiblings(): number {
        return this.autoClassDiagramTopDownLayoutMaxSiblingsOption.val;
    }

    /**
     * Returns how the member visibility is rendered in the automatically created class diagram.
     * @returns How the member visibility is rendered in the automatically created class diagram.
     */
    get autoClassDiagramMemberVisibilityStyle(): ClassDiagramMemberVisibilityStyle {
        return this.autoClassDiagramMemberVisibilityStyleOption.val;
    }

    /**
     * Returns whether to hide the circled character in front of class names for class diagrams.
     * @returns Whether to hide the circled character in front of class names for class diagrams.
     */
    get autoClassDiagramHideCircledChar(): boolean {
        return this.autoClassDiagramHideCircledCharOption.val;
    }

    /**
     * Returns whether to hide the shadows in the automatically created class diagram.
     * @returns Whether to hide the shadows in the automatically created class diagram.
     */
    get autoClassDiagramHideShadow(): boolean {
        return this.autoClassDiagramHideShadowOption.val;
    }

    /**
     * Returns the background color that should be used for boxes in automatically created class diagrams.
     * @returns The background color that should be used for boxes in automatically created class diagrams.
     *          An empty string if no value was specified by the caller.
     *          In this case the PlantUML default value should be used.
     */
    get autoClassDiagramBoxBackgroundColor(): string {
        return this.autoClassDiagramBoxBackgroundColorOption.val;
    }

    /**
     * Returns the border color that should be used for boxes in automatically created class diagrams.
     * @returns The border color that should be used for boxes in automatically created class diagrams.
     *          An empty string if no value was specified by the caller.
     *          In this case the PlantUML default value should be used.
     */
    get autoClassDiagramBoxBorderColor(): string {
        return this.autoClassDiagramBoxBorderColorOption.val;
    }

    /**
     * Returns the border radius that should be used for boxes in automatically created class diagrams.
     * @returns The border radius that should be used for boxes in automatically created class diagrams.
     */
    get autoClassDiagramBoxBorderRadius(): number {
        return this.autoClassDiagramBoxBorderRadiusOption.val;
    }

    /**
     * Returns the border width that should be used for boxes in automatically created class diagrams.
     * @returns The border width that should be used for boxes in automatically created class diagrams.
     *          The value -1 if no value was specified by the caller.
     *          In this case the PlantUML default value should be used.
     */
    get autoClassDiagramBoxBorderWidth(): number {
        return this.autoClassDiagramBoxBorderWidthOption.val;
    }

    /**
     * Returns the color that should be used for arrows in automatically created class diagrams.
     * @returns The color that should be used for arrows in automatically created class diagrams.
     *          An empty string if no value was specified by the caller.
     *          In this case the PlantUML default value should be used.
     */
    get autoClassDiagramArrowColor(): string {
        return this.autoClassDiagramArrowColorOption.val;
    }

    /**
     * Returns the name of the font that should be used for the class name in automatically created class diagrams.
     * @returns The name of the font that should be used for the class name in automatically created class diagrams.
     *          An empty string if no value was specified by the caller.
     *          In this case the PlantUML default value should be used.
     */
    get autoClassDiagramClassFontName(): string {
        return this.autoClassDiagramClassFontNameOption.val;
    }

    /**
     * Returns the font size that should be used for class names in automatically created class diagrams.
     * @returns The font size that should be used for class names in automatically created class diagrams.
     *          The value 0 if no value was specified by the caller.
     *          In this case the PlantUML default value should be used.
     */
    get autoClassDiagramClassFontSize(): number {
        return this.autoClassDiagramClassFontSizeOption.val;
    }

    /**
     * Returns the font style that should be used for the class name in automatically created class diagrams.
     * @returns The font style that should be used for the class name in automatically created class diagrams.
     */
    get autoClassDiagramClassFontStyle(): FontStyle {
        return this.autoClassDiagramClassFontStyleOption.val;
    }

    /**
     * Returns the font color that should be used for the class name in automatically created class diagrams.
     * @returns The font color that should be used for the class name in automatically created class diagrams.
     *          An empty string if no value was specified by the caller.
     *          In this case the PlantUML default value should be used.
     */
    get autoClassDiagramClassFontColor(): string {
        return this.autoClassDiagramClassFontColorOption.val;
    }

    /**
     * Returns the name of the font that should be used for class attributes in automatically created class diagrams.
     * @returns The name of the font that should be used for class attributes in automatically created class diagrams.
     *          An empty string if no value was specified by the caller.
     *          In this case the PlantUML default value should be used.
     */
    get autoClassDiagramClassAttributeFontName(): string {
        return this.autoClassDiagramClassAttributeFontNameOption.val;
    }

    /**
     * Returns the font size that should be used for class attributes in automatically created class diagrams.
     * @returns The font size that should be used for class attributes in automatically created class diagrams.
     *          The value 0 if no value was specified by the caller.
     *          In this case the PlantUML default value should be used.
     */
    get autoClassDiagramClassAttributeFontSize(): number {
        return this.autoClassDiagramClassAttributeFontSizeOption.val;
    }

    /**
     * Returns the font style that should be used for the class attributes in automatically created class diagrams.
     * @returns The font style that should be used for the class attributes in automatically created class diagrams.
     */
    get autoClassDiagramClassAttributeFontStyle(): FontStyle {
        return this.autoClassDiagramClassAttributeFontStyleOption.val;
    }

    /**
     * Returns the font color that should be used for the class attributes in automatically created class diagrams.
     * @returns The font color that should be used for the class attributes in automatically created class diagrams.
     *          An empty string if no value was specified by the caller.
     *          In this case the PlantUML default value should be used.
     */
    get autoClassDiagramClassAttributeFontColor(): string {
        return this.autoClassDiagramClassAttributeFontColorOption.val;
    }
}
