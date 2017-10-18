---
layout: page
title: "Q154021: INFO: ColorSource Property Has Different Values for Each Object"
permalink: kb/154/Q154021/
---

## Q154021: INFO: ColorSource Property Has Different Values for Each Object

	Article: Q154021
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is a property in Visual FoxPro 5.0 and 6.0 called ColorSource. The
	ColorSource property determines how a control's colors are set and is available
	at both design time and run time. Most objects in Visual FoxPro 5.0 and 6.0 have
	a ColorSource property, but the available values for the property are different
	for each object.
	
	MORE INFORMATION
	================
	
	The values that are available for the ColorSource property are:
	
	  0 - Object[ASCII 146]s Color Properties. The control uses its color property
	          settings (ForeColor, BackColor, and so on).
	
	  1 - Form[ASCII 146]s Color Scheme. The control uses the color scheme of the form
	          in which it is placed.
	
	  2 - ColorScheme Property Scheme. The control uses the color scheme
	          specified in its ColorScheme property.
	
	  3 - Default Scheme. The control uses its default color scheme. For most
	          controls, the default color scheme is the form[ASCII 146]s color scheme;
	          forEditBoxes and ListBoxes, the default color scheme is Scheme
	          2, User Menus.
	
	 4 - Windows Control Panel (3D Colors) (Default). The control uses the
	        3D color settings specified in the Windows Control Panel.
	
	  5 - Windows Control Panel (Windows Colors). The control uses the color
	          settings specified in the Windows Control Panel.
	
	The following Visual Fox Pro 5.0 and 6.0 controls have the listed ControlSource
	values:
	
	                     0     1     2     3     4     5
	  ---------------------------------------------------
	  CheckBoxes         x     x     x     x     x     -
	  CommandButtons     x     x     x     x     x     -
	  CommandGroup       x     -     -     -     x     -
	  ComboBoxes         x     x     x     x     x     -
	  Containers           (no ColorSource Property)
	  EditBoxes          x     x     x     x     x     -
	  Forms              x     -     -     -     x     x
	  Grids                (no ColorSource Property)
	  Images               (no ColorSource Property)
	  Labels             x     x     x     x     x     -
	  Lines              x     -     -     -     x     -
	  ListBoxes          x     x     x     x     x     -
	  OLEBoundControls     (None)
	  OLEControls          (no ColorSource Property)
	  OptionButtons      x     x     x     x     x     -
	  OptionGroups       x     -     -     -     x     -
	  Pages              x     -     -     -     x     -
	  PageFrames         x     -     -     -     x     -
	  Shapes             x     x     x     x     x     -
	  Spinners           x     x     x     x     x     -
	
	where "x" is applicable and "-" is not applicable.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
