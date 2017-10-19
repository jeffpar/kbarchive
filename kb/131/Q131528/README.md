---
layout: page
title: "Q131528: PRB: Dynamic Grid Properties Don't Appear in Property Sheet"
permalink: /kb/131/Q131528/
---

## Q131528: PRB: Dynamic Grid Properties Don't Appear in Property Sheet

	Article: Q131528
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	None of the dynamic properties for a Grid, such as DynamicAlignment,
	DynamicBackColor, DynamicCurrentControl, DynamicFontBold, DynamicFontItalic,
	DynamicFontName, and DynamicForeColor, are displayed in the Property sheet.
	
	CAUSE
	=====
	
	The dynamic properties apply to the Grid columns, not to the grids. They are
	available only for Grid columns, not for the grid itself.
	
	WORKAROUND
	==========
	
	If you set the Grid ColumnCount to at least 1, the Dynamic Properties are
	available for the column(s). If you do not set the Grid ColumnCount to at least
	1, the Dynamic properties for the Grid columns can only be specified in a
	program. To see a code sample, please see the code example in the "Grid Control"
	topic in the Visual FoxPro Help menu.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For more information about controlling grids, refer to the Grid Control topic in
	Visual FoxPro's online Help.
	
	Additional query words: VFoxWin Layout DynamicFontOutline DynamicFontShadow DynamicFontSize DynamicFontStrikethru DynamicFontUnderline
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
