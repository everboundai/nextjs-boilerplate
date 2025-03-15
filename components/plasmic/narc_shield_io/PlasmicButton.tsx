// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hvnx4UaRLT5bKWhR7H1S1X
// Component: ifGm70vZk4tf

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { BaseButton } from "@plasmicpkgs/react-aria/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: hvnx4UaRLT5bKWhR7H1S1X/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: ifGm70vZk4tf/css

import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: AIpMzHuRtvey/icon
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: tCEaXGcEydsM/icon

createPlasmicElementProxy;

export type PlasmicButton__VariantMembers = {
  color:
    | "neutral"
    | "muted"
    | "success"
    | "warning"
    | "errorDestructive"
    | "blue";
  type: "soft" | "bordered";
  size: "extraSmall" | "small" | "large" | "extraLarge";
  iconStart: "iconStart";
  iconEnd: "iconEnd";
  roundedFull: "roundedFull";
  flatSide: "top" | "right" | "bottom" | "left";
};
export type PlasmicButton__VariantsArgs = {
  color?: SingleChoiceArg<
    "neutral" | "muted" | "success" | "warning" | "errorDestructive" | "blue"
  >;
  type?: SingleChoiceArg<"soft" | "bordered">;
  size?: SingleChoiceArg<"extraSmall" | "small" | "large" | "extraLarge">;
  iconStart?: SingleBooleanChoiceArg<"iconStart">;
  iconEnd?: SingleBooleanChoiceArg<"iconEnd">;
  roundedFull?: SingleBooleanChoiceArg<"roundedFull">;
  flatSide?: MultiChoiceArg<"top" | "right" | "bottom" | "left">;
};
type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "color",
  "type",
  "size",
  "iconStart",
  "iconEnd",
  "roundedFull",
  "flatSide"
);

export type PlasmicButton__ArgsType = {
  disabled?: boolean;
  submitsForm?: boolean;
  resetsForm?: boolean;
  ariaLabel?: string;
  onClick?: (event: any) => void;
  start?: React.ReactNode;
  label?: React.ReactNode;
  end?: React.ReactNode;
};
type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "disabled",
  "submitsForm",
  "resetsForm",
  "ariaLabel",
  "onClick",
  "start",
  "label",
  "end"
);

export type PlasmicButton__OverridesType = {
  root?: Flex__<typeof BaseButton>;
  softBackground?: Flex__<"div">;
  border?: Flex__<"div">;
  interactionEffect?: Flex__<"div">;
};

export interface DefaultButtonProps {
  disabled?: boolean;
  submitsForm?: boolean;
  resetsForm?: boolean;
  ariaLabel?: string;
  onClick?: (event: any) => void;
  start?: React.ReactNode;
  label?: React.ReactNode;
  end?: React.ReactNode;
  color?: SingleChoiceArg<
    "neutral" | "muted" | "success" | "warning" | "errorDestructive" | "blue"
  >;
  type?: SingleChoiceArg<"soft" | "bordered">;
  size?: SingleChoiceArg<"extraSmall" | "small" | "large" | "extraLarge">;
  iconStart?: SingleBooleanChoiceArg<"iconStart">;
  iconEnd?: SingleBooleanChoiceArg<"iconEnd">;
  roundedFull?: SingleBooleanChoiceArg<"roundedFull">;
  flatSide?: MultiChoiceArg<"top" | "right" | "bottom" | "left">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      },
      {
        path: "iconStart",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.iconStart
      },
      {
        path: "iconEnd",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.iconEnd
      },
      {
        path: "roundedFull",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.roundedFull
      },
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type
      },
      {
        path: "flatSide",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.flatSide
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const [$ccVariants, setDollarCcVariants] = React.useState<
    Record<string, boolean>
  >({
    hovered: false,
    pressed: false,
    focused: false,
    focusVisible: false,
    disabled: false
  });
  const updateVariant = React.useCallback(
    (changes: Record<string, boolean>) => {
      setDollarCcVariants(prev => {
        if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
          return prev;
        }
        return { ...prev, ...changes };
      });
    },
    []
  );

  return (
    <BaseButton
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootcolor_blue]: hasVariant($state, "color", "blue"),
          [sty.rootcolor_errorDestructive]: hasVariant(
            $state,
            "color",
            "errorDestructive"
          ),
          [sty.rootcolor_muted]: hasVariant($state, "color", "muted"),
          [sty.rootcolor_neutral]: hasVariant($state, "color", "neutral"),
          [sty.rootcolor_success]: hasVariant($state, "color", "success"),
          [sty.rootcolor_warning]: hasVariant($state, "color", "warning"),
          [sty.rootflatSide_bottom]: hasVariant($state, "flatSide", "bottom"),
          [sty.rootflatSide_left]: hasVariant($state, "flatSide", "left"),
          [sty.rootflatSide_right]: hasVariant($state, "flatSide", "right"),
          [sty.rootflatSide_top]: hasVariant($state, "flatSide", "top"),
          [sty.rooticonEnd]: hasVariant($state, "iconEnd", "iconEnd"),
          [sty.rooticonStart]: hasVariant($state, "iconStart", "iconStart"),
          [sty.rootroundedFull]: hasVariant(
            $state,
            "roundedFull",
            "roundedFull"
          ),
          [sty.rootsize_extraLarge]: hasVariant($state, "size", "extraLarge"),
          [sty.rootsize_extraSmall]: hasVariant($state, "size", "extraSmall"),
          [sty.rootsize_large]: hasVariant($state, "size", "large"),
          [sty.rootsize_small]: hasVariant($state, "size", "small"),
          [sty.roottype_bordered]: hasVariant($state, "type", "bordered"),
          [sty.roottype_bordered_color_blue]:
            hasVariant($state, "color", "blue") &&
            hasVariant($state, "type", "bordered"),
          [sty.roottype_bordered_color_errorDestructive]:
            hasVariant($state, "color", "errorDestructive") &&
            hasVariant($state, "type", "bordered"),
          [sty.roottype_bordered_color_muted]:
            hasVariant($state, "color", "muted") &&
            hasVariant($state, "type", "bordered"),
          [sty.roottype_bordered_color_neutral]:
            hasVariant($state, "color", "neutral") &&
            hasVariant($state, "type", "bordered"),
          [sty.roottype_bordered_color_success]:
            hasVariant($state, "color", "success") &&
            hasVariant($state, "type", "bordered"),
          [sty.roottype_bordered_color_warning]:
            hasVariant($state, "color", "warning") &&
            hasVariant($state, "type", "bordered"),
          [sty.roottype_soft]: hasVariant($state, "type", "soft"),
          [sty.roottype_soft_color_errorDestructive]:
            hasVariant($state, "color", "errorDestructive") &&
            hasVariant($state, "type", "soft"),
          [sty.roottype_soft_color_muted]:
            hasVariant($state, "color", "muted") &&
            hasVariant($state, "type", "soft"),
          [sty.roottype_soft_color_neutral]:
            hasVariant($state, "color", "neutral") &&
            hasVariant($state, "type", "soft"),
          [sty.roottype_soft_color_success]:
            hasVariant($state, "color", "success") &&
            hasVariant($state, "type", "soft"),
          [sty.roottype_soft_color_warning]:
            hasVariant($state, "color", "warning") &&
            hasVariant($state, "type", "soft")
        }
      )}
      isDisabled={args.disabled}
      onPress={args.onClick}
      plasmicUpdateVariant={updateVariant}
      resetsForm={args.resetsForm}
      submitsForm={args.submitsForm}
    >
      {(
        hasVariant($state, "type", "bordered") && $ccVariants["pressed"]
          ? true
          : hasVariant($state, "type", "bordered") && $ccVariants["hovered"]
          ? true
          : hasVariant($state, "type", "soft")
          ? true
          : false
      ) ? (
        <div
          data-plasmic-name={"softBackground"}
          data-plasmic-override={overrides.softBackground}
          className={classNames(projectcss.all, sty.softBackground, {
            [sty.softBackgroundcolor_errorDestructive]: hasVariant(
              $state,
              "color",
              "errorDestructive"
            ),
            [sty.softBackgroundcolor_muted]: hasVariant(
              $state,
              "color",
              "muted"
            ),
            [sty.softBackgroundcolor_neutral]: hasVariant(
              $state,
              "color",
              "neutral"
            ),
            [sty.softBackgroundcolor_success]: hasVariant(
              $state,
              "color",
              "success"
            ),
            [sty.softBackgroundcolor_warning]: hasVariant(
              $state,
              "color",
              "warning"
            ),
            [sty.softBackgroundroundedFull]: hasVariant(
              $state,
              "roundedFull",
              "roundedFull"
            ),
            [sty.softBackgroundsize_large]: hasVariant($state, "size", "large"),
            [sty.softBackgroundtype_bordered]: hasVariant(
              $state,
              "type",
              "bordered"
            ),
            [sty.softBackgroundtype_bordered_color_blue]:
              hasVariant($state, "type", "bordered") &&
              hasVariant($state, "color", "blue"),
            [sty.softBackgroundtype_soft]: hasVariant($state, "type", "soft")
          })}
        />
      ) : null}
      {(hasVariant($state, "type", "bordered") ? true : false) ? (
        <div
          data-plasmic-name={"border"}
          data-plasmic-override={overrides.border}
          className={classNames(projectcss.all, sty.border, {
            [sty.bordercolor_errorDestructive]: hasVariant(
              $state,
              "color",
              "errorDestructive"
            ),
            [sty.bordercolor_muted]: hasVariant($state, "color", "muted"),
            [sty.bordercolor_neutral]: hasVariant($state, "color", "neutral"),
            [sty.bordercolor_success]: hasVariant($state, "color", "success"),
            [sty.bordercolor_warning]: hasVariant($state, "color", "warning"),
            [sty.borderflatSide_bottom]: hasVariant(
              $state,
              "flatSide",
              "bottom"
            ),
            [sty.borderflatSide_left]: hasVariant($state, "flatSide", "left"),
            [sty.borderflatSide_right]: hasVariant($state, "flatSide", "right"),
            [sty.borderflatSide_top]: hasVariant($state, "flatSide", "top"),
            [sty.borderroundedFull]: hasVariant(
              $state,
              "roundedFull",
              "roundedFull"
            ),
            [sty.bordersize_large]: hasVariant($state, "size", "large"),
            [sty.bordertype_bordered]: hasVariant($state, "type", "bordered"),
            [sty.bordertype_bordered_color_muted]:
              hasVariant($state, "color", "muted") &&
              hasVariant($state, "type", "bordered"),
            [sty.bordertype_soft]: hasVariant($state, "type", "soft")
          })}
        />
      ) : null}
      <div
        data-plasmic-name={"interactionEffect"}
        data-plasmic-override={overrides.interactionEffect}
        className={classNames(projectcss.all, sty.interactionEffect, {
          [sty.interactionEffectcolor_blue]: hasVariant(
            $state,
            "color",
            "blue"
          ),
          [sty.interactionEffectcolor_errorDestructive]: hasVariant(
            $state,
            "color",
            "errorDestructive"
          ),
          [sty.interactionEffectcolor_muted]: hasVariant(
            $state,
            "color",
            "muted"
          ),
          [sty.interactionEffectcolor_neutral]: hasVariant(
            $state,
            "color",
            "neutral"
          ),
          [sty.interactionEffectcolor_success]: hasVariant(
            $state,
            "color",
            "success"
          ),
          [sty.interactionEffectcolor_warning]: hasVariant(
            $state,
            "color",
            "warning"
          ),
          [sty.interactionEffectroundedFull]: hasVariant(
            $state,
            "roundedFull",
            "roundedFull"
          ),
          [sty.interactionEffectsize_large]: hasVariant(
            $state,
            "size",
            "large"
          ),
          [sty.interactionEffectsize_small]: hasVariant(
            $state,
            "size",
            "small"
          ),
          [sty.interactionEffecttype_bordered]: hasVariant(
            $state,
            "type",
            "bordered"
          ),
          [sty.interactionEffecttype_bordered_color_success]:
            hasVariant($state, "color", "success") &&
            hasVariant($state, "type", "bordered"),
          [sty.interactionEffecttype_soft]: hasVariant($state, "type", "soft")
        })}
        style={
          hasVariant($state, "type", "bordered") && $ccVariants["pressed"]
            ? { display: "block" }
            : undefined
        }
      />

      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__crGKa, {
          [sty.freeBoxcolor_neutral__crGKaY8IZh]: hasVariant(
            $state,
            "color",
            "neutral"
          ),
          [sty.freeBoxroundedFull__crGKaqk0XE]: hasVariant(
            $state,
            "roundedFull",
            "roundedFull"
          ),
          [sty.freeBoxsize_extraLarge__crGKaF8O78]: hasVariant(
            $state,
            "size",
            "extraLarge"
          ),
          [sty.freeBoxsize_extraSmall__crGKaLiHad]: hasVariant(
            $state,
            "size",
            "extraSmall"
          ),
          [sty.freeBoxsize_large__crGKaYf21H]: hasVariant(
            $state,
            "size",
            "large"
          ),
          [sty.freeBoxsize_small__crGKaETf9K]: hasVariant(
            $state,
            "size",
            "small"
          ),
          [sty.freeBoxtype_bordered__crGKa66JfA]: hasVariant(
            $state,
            "type",
            "bordered"
          ),
          [sty.freeBoxtype_bordered_color_success__crGKa66JfASLlnS]:
            hasVariant($state, "color", "success") &&
            hasVariant($state, "type", "bordered"),
          [sty.freeBoxtype_soft__crGKaNz6Jk]: hasVariant($state, "type", "soft")
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__bPtKo, {
            [sty.freeBoxcolor_neutral__bPtKoY8IZh]: hasVariant(
              $state,
              "color",
              "neutral"
            ),
            [sty.freeBoxiconStart__bPtKoyqH1Y]: hasVariant(
              $state,
              "iconStart",
              "iconStart"
            ),
            [sty.freeBoxsize_extraLarge__bPtKoF8O78]: hasVariant(
              $state,
              "size",
              "extraLarge"
            ),
            [sty.freeBoxsize_large__bPtKoYf21H]: hasVariant(
              $state,
              "size",
              "large"
            ),
            [sty.freeBoxsize_small__bPtKoETf9K]: hasVariant(
              $state,
              "size",
              "small"
            ),
            [sty.freeBoxtype_bordered__bPtKo66JfA]: hasVariant(
              $state,
              "type",
              "bordered"
            ),
            [sty.freeBoxtype_soft_color_neutral__bPtKoNz6JkY8IZh]:
              hasVariant($state, "color", "neutral") &&
              hasVariant($state, "type", "soft")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <CircleIcon
                className={classNames(projectcss.all, sty.svg__nUwwl)}
                role={"img"}
              />
            ),

            value: args.start,
            className: classNames(sty.slotTargetStart, {
              [sty.slotTargetStartcolor_errorDestructive]: hasVariant(
                $state,
                "color",
                "errorDestructive"
              ),
              [sty.slotTargetStartcolor_muted]: hasVariant(
                $state,
                "color",
                "muted"
              ),
              [sty.slotTargetStartcolor_neutral]: hasVariant(
                $state,
                "color",
                "neutral"
              ),
              [sty.slotTargetStartcolor_success]: hasVariant(
                $state,
                "color",
                "success"
              ),
              [sty.slotTargetStartcolor_warning]: hasVariant(
                $state,
                "color",
                "warning"
              ),
              [sty.slotTargetStarticonStart]: hasVariant(
                $state,
                "iconStart",
                "iconStart"
              ),
              [sty.slotTargetStartsize_extraLarge]: hasVariant(
                $state,
                "size",
                "extraLarge"
              ),
              [sty.slotTargetStartsize_extraSmall]: hasVariant(
                $state,
                "size",
                "extraSmall"
              ),
              [sty.slotTargetStartsize_large]: hasVariant(
                $state,
                "size",
                "large"
              ),
              [sty.slotTargetStartsize_small]: hasVariant(
                $state,
                "size",
                "small"
              ),
              [sty.slotTargetStarttype_bordered]: hasVariant(
                $state,
                "type",
                "bordered"
              ),
              [sty.slotTargetStarttype_bordered_color_errorDestructive]:
                hasVariant($state, "color", "errorDestructive") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetStarttype_bordered_color_muted]:
                hasVariant($state, "color", "muted") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetStarttype_bordered_color_neutral]:
                hasVariant($state, "color", "neutral") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetStarttype_bordered_color_success]:
                hasVariant($state, "color", "success") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetStarttype_bordered_color_warning]:
                hasVariant($state, "color", "warning") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetStarttype_soft]: hasVariant(
                $state,
                "type",
                "soft"
              ),
              [sty.slotTargetStarttype_soft_color_errorDestructive]:
                hasVariant($state, "color", "errorDestructive") &&
                hasVariant($state, "type", "soft"),
              [sty.slotTargetStarttype_soft_color_muted]:
                hasVariant($state, "color", "muted") &&
                hasVariant($state, "type", "soft"),
              [sty.slotTargetStarttype_soft_color_neutral]:
                hasVariant($state, "color", "neutral") &&
                hasVariant($state, "type", "soft"),
              [sty.slotTargetStarttype_soft_color_success]:
                hasVariant($state, "color", "success") &&
                hasVariant($state, "type", "soft"),
              [sty.slotTargetStarttype_soft_color_warning]:
                hasVariant($state, "color", "warning") &&
                hasVariant($state, "type", "soft")
            })
          })}
        </div>
        {renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jrVps
              )}
            >
              {"Text"}
            </div>
          ),
          value: args.label,
          className: classNames(sty.slotTargetLabel, {
            [sty.slotTargetLabelcolor_errorDestructive]: hasVariant(
              $state,
              "color",
              "errorDestructive"
            ),
            [sty.slotTargetLabelcolor_muted]: hasVariant(
              $state,
              "color",
              "muted"
            ),
            [sty.slotTargetLabelcolor_neutral]: hasVariant(
              $state,
              "color",
              "neutral"
            ),
            [sty.slotTargetLabelcolor_success]: hasVariant(
              $state,
              "color",
              "success"
            ),
            [sty.slotTargetLabelcolor_warning]: hasVariant(
              $state,
              "color",
              "warning"
            ),
            [sty.slotTargetLabeliconEnd]: hasVariant(
              $state,
              "iconEnd",
              "iconEnd"
            ),
            [sty.slotTargetLabeliconStart]: hasVariant(
              $state,
              "iconStart",
              "iconStart"
            ),
            [sty.slotTargetLabelsize_extraLarge]: hasVariant(
              $state,
              "size",
              "extraLarge"
            ),
            [sty.slotTargetLabelsize_extraSmall]: hasVariant(
              $state,
              "size",
              "extraSmall"
            ),
            [sty.slotTargetLabelsize_large]: hasVariant(
              $state,
              "size",
              "large"
            ),
            [sty.slotTargetLabelsize_small]: hasVariant(
              $state,
              "size",
              "small"
            ),
            [sty.slotTargetLabeltype_bordered]: hasVariant(
              $state,
              "type",
              "bordered"
            ),
            [sty.slotTargetLabeltype_bordered_color_errorDestructive]:
              hasVariant($state, "color", "errorDestructive") &&
              hasVariant($state, "type", "bordered"),
            [sty.slotTargetLabeltype_bordered_color_muted]:
              hasVariant($state, "color", "muted") &&
              hasVariant($state, "type", "bordered"),
            [sty.slotTargetLabeltype_bordered_color_neutral]:
              hasVariant($state, "color", "neutral") &&
              hasVariant($state, "type", "bordered"),
            [sty.slotTargetLabeltype_bordered_color_success]:
              hasVariant($state, "color", "success") &&
              hasVariant($state, "type", "bordered"),
            [sty.slotTargetLabeltype_bordered_color_warning]:
              hasVariant($state, "color", "warning") &&
              hasVariant($state, "type", "bordered"),
            [sty.slotTargetLabeltype_soft]: hasVariant($state, "type", "soft"),
            [sty.slotTargetLabeltype_soft_color_errorDestructive]:
              hasVariant($state, "color", "errorDestructive") &&
              hasVariant($state, "type", "soft"),
            [sty.slotTargetLabeltype_soft_color_muted]:
              hasVariant($state, "color", "muted") &&
              hasVariant($state, "type", "soft"),
            [sty.slotTargetLabeltype_soft_color_neutral]:
              hasVariant($state, "color", "neutral") &&
              hasVariant($state, "type", "soft"),
            [sty.slotTargetLabeltype_soft_color_success]:
              hasVariant($state, "color", "success") &&
              hasVariant($state, "type", "soft"),
            [sty.slotTargetLabeltype_soft_color_warning]:
              hasVariant($state, "color", "warning") &&
              hasVariant($state, "type", "soft")
          })
        })}
        <div
          className={classNames(projectcss.all, sty.freeBox__lue4R, {
            [sty.freeBoxiconEnd__lue4R3KWGq]: hasVariant(
              $state,
              "iconEnd",
              "iconEnd"
            ),
            [sty.freeBoxsize_extraLarge__lue4RF8O78]: hasVariant(
              $state,
              "size",
              "extraLarge"
            ),
            [sty.freeBoxsize_large__lue4RYf21H]: hasVariant(
              $state,
              "size",
              "large"
            ),
            [sty.freeBoxsize_small__lue4RETf9K]: hasVariant(
              $state,
              "size",
              "small"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ChevronDownIcon
                className={classNames(projectcss.all, sty.svg__o3X1H)}
                role={"img"}
              />
            ),

            value: args.end,
            className: classNames(sty.slotTargetEnd, {
              [sty.slotTargetEndcolor_errorDestructive]: hasVariant(
                $state,
                "color",
                "errorDestructive"
              ),
              [sty.slotTargetEndcolor_muted]: hasVariant(
                $state,
                "color",
                "muted"
              ),
              [sty.slotTargetEndcolor_neutral]: hasVariant(
                $state,
                "color",
                "neutral"
              ),
              [sty.slotTargetEndcolor_success]: hasVariant(
                $state,
                "color",
                "success"
              ),
              [sty.slotTargetEndcolor_warning]: hasVariant(
                $state,
                "color",
                "warning"
              ),
              [sty.slotTargetEndiconEnd]: hasVariant(
                $state,
                "iconEnd",
                "iconEnd"
              ),
              [sty.slotTargetEndiconStart]: hasVariant(
                $state,
                "iconStart",
                "iconStart"
              ),
              [sty.slotTargetEndsize_extraLarge]: hasVariant(
                $state,
                "size",
                "extraLarge"
              ),
              [sty.slotTargetEndsize_extraSmall]: hasVariant(
                $state,
                "size",
                "extraSmall"
              ),
              [sty.slotTargetEndsize_large]: hasVariant(
                $state,
                "size",
                "large"
              ),
              [sty.slotTargetEndsize_small]: hasVariant(
                $state,
                "size",
                "small"
              ),
              [sty.slotTargetEndtype_bordered]: hasVariant(
                $state,
                "type",
                "bordered"
              ),
              [sty.slotTargetEndtype_bordered_color_errorDestructive]:
                hasVariant($state, "color", "errorDestructive") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetEndtype_bordered_color_muted]:
                hasVariant($state, "color", "muted") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetEndtype_bordered_color_neutral]:
                hasVariant($state, "color", "neutral") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetEndtype_bordered_color_success]:
                hasVariant($state, "color", "success") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetEndtype_bordered_color_warning]:
                hasVariant($state, "color", "warning") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetEndtype_soft]: hasVariant($state, "type", "soft"),
              [sty.slotTargetEndtype_soft_color_errorDestructive]:
                hasVariant($state, "color", "errorDestructive") &&
                hasVariant($state, "type", "soft"),
              [sty.slotTargetEndtype_soft_color_muted]:
                hasVariant($state, "color", "muted") &&
                hasVariant($state, "type", "soft"),
              [sty.slotTargetEndtype_soft_color_neutral]:
                hasVariant($state, "color", "neutral") &&
                hasVariant($state, "type", "soft"),
              [sty.slotTargetEndtype_soft_color_success]:
                hasVariant($state, "color", "success") &&
                hasVariant($state, "type", "soft"),
              [sty.slotTargetEndtype_soft_color_warning]:
                hasVariant($state, "color", "warning") &&
                hasVariant($state, "type", "soft")
            })
          })}
        </div>
      </Stack__>
    </BaseButton>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "softBackground", "border", "interactionEffect"],
  softBackground: ["softBackground"],
  border: ["border"],
  interactionEffect: ["interactionEffect"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof BaseButton;
  softBackground: "div";
  border: "div";
  interactionEffect: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicButton__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    softBackground: makeNodeComponent("softBackground"),
    border: makeNodeComponent("border"),
    interactionEffect: makeNodeComponent("interactionEffect"),

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
