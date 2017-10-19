---
layout: page
title: "Q132051: How the Color of Screen and GET Objects Is Converted"
permalink: /kb/132/Q132051/
---

## Q132051: How the Color of Screen and GET Objects Is Converted

	Article: Q132051
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using FoxPro version 2.x for Windows, you can control the color of screens by
	using the Screen Layout dialog box, and you can control the color of GET objects
	interactively from the Object menu. This article describes how user-defined
	colors set in the Screen Builder are converted when a FoxPro version 2.x screen
	is ported to a Visual FoxPro version 3.0 form.
	
	MORE INFORMATION
	================
	
	In FoxPro version 2.x for MS-DOS, you can change the color of GET objects by
	choosing Color from the Screen menu. The dialog box allows you to control the
	color schemes used with GET fields and the color pairs used with SAY fields. On
	the other hand, the screen interface for FoxPro for Windows and FoxPro for
	Macintosh version 2.x allows the manipulation of color pairs, as opposed to
	color scheme, for each GET object.
	
	The Converter is a tool that allows you to transport your version 2.x projects,
	screens, and reports to Visual FoxPro projects, forms, and reports. A converted
	form emulates a READ and this implementation uses form sets, forms, and page
	frames. You can either perform a visual or a functional conversion. This article
	explores functional conversion only. For more information about converting your
	application, search for "Converting" in the Visual FoxPro Help menu.
	
	Color Properties Exposed in a Visual FoxPro Form
	------------------------------------------------
	
	Visual FoxPro exposes several properties to customize the colors of controls and
	forms. The BackColor, ForeColor, DisabledBackColor, and DisabledForeColor
	properties specify the background and foreground colors used to display text and
	graphics. They correspond to the concept of color pairs (background and
	foreground). For a list of controls that use these properties, search for
	"ForeColor" or any other property in the Visual FoxPro Help menu.
	
	The ColorSource property determines how a control's colors are set. When it is
	set to 2, the ColorScheme property specifies the color scheme used with the
	control. These properties are used by a converted form.
	
	Conversion of Form Colors
	-------------------------
	
	FoxPro for MS-DOS does not provide an interactive way to control the background
	color of the screen. In FoxPro version 2.x for Windows and FoxPro for Macintosh,
	if you modify the background color of a window, the BACKCOLOR and FILLCOLOR
	properties of the new form are set to the colors you specify. If you did not
	alter the color of the screen, the Visual FoxPro form uses the Windows
	Background color set in the Control Panel.
	
	Conversion Control Colors
	-------------------------
	
	The color of GET objects created in a FoxPro for Windows or FoxPro for Macintosh
	screen is converted as follows:
	
	- The information selected as FillColor in a version 2.x screen is stored in
	  the BackColor property.
	
	- The information selected as PenColor in a version 2.x screen is stored in the
	  ForeColor property.
	
	- The COLORSCHEME property is set to 3-Default Scheme.
	
	It is not possible to customize the color of command buttons.
	
	The Converter does not convert the color of GET objects from screens that were
	created in FoxPro for MS-DOS.
	
	
	To edit the color of the converted objects, modify the BackColor and ForeColor
	properties. If you prefer to use color schemes, you can set the ColorSource
	property to 2-ColorSchemePropertyScheme, and then set the ColorScheme property
	to the user-defined schemes. Use the following syntax to define color schemes:
	
	     SET COLOR OF SCHEME <n> to <10 color pairs>
	
	Conversion of READ COLOR Clause
	-------------------------------
	
	The READ COLOR clause is not converted from a version 2.x screen to a Visual
	FoxPro form. To obtain the effect provided by a READ COLOR, you can set the
	ForeColor and BackColor properties of the active control in the GotFocus event
	handler, and change it back in the LostFocus event handler.
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
