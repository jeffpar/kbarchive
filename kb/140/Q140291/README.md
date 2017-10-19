---
layout: page
title: "Q140291: HOWTO: Call the Graph Wizard &amp; Create a Chart Programmatically"
permalink: /kb/140/Q140291/
---

## Q140291: HOWTO: Call the Graph Wizard &amp; Create a Chart Programmatically

	Article: Q140291
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500
	Last Modified: 15-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can create a Chart in Microsoft Graph from the data in the currently
	selected work area by calling the Graph Wizard programmatically.
	
	MORE INFORMATION
	================
	
	To create a Chart programmatically, use this syntax:
	
	     SELECT <table to be graphed>
	     DO (_GENGRAPH) WITH <parm1> [,<parm2>] [,<parm3>]...[,<parm9>].
	
	NOTE: If DO command listed above causes the error "File does not exist," an
	alternative command is:
	
	      DO HOME() + 'wizards\wzgraph.app' WITH <parm1> [,<parm2>] ... [,<parm9>]
	
	IMPORTANT: this code will not work in an executable run outside of Visual FoxPro.
	The Graph Wizard will always take its data from the currently selected table.
	
	The Graph Wizard application (Wzgraph.app) accepts these parameters:
	
	  parm1 - "AUTOGRAPH" (required)
	  parm2 - chart type (numeric)
	  parm3 - chart subtype (numeric)
	  parm4 - title (character)
	  parm5 - series by row / column (logical)
	  parm6 - has legend (logical)
	  parm7 - use autoformat (logical)
	  parm8 - output DBF (character)
	  parm9 - don't display graph with MODIFY GENERAL (logical)
	
	How the Parameters Interact with Each Other
	-------------------------------------------
	
	Parm1 - "AUTOGRAPH"
	
	If a character string other than "AUTOGRAPH" is specified, Visual FoxPro will
	present either Step 1 (if no table is open) or Step 2 of the interactive Graph
	Wizard. If you use "AUTOGRAPH" and no table is open, the Graph Wizard returns an
	error, if a table is open, the resulting behavior depends on the value of
	parm8.
	
	Parm8 - output DBF
	
	If Parm8 is omitted or empty (for example, " "), you will be prompted for an
	output file name. If you supply the name of an output file, it must be an
	existing .dbf file that contains a General field. If the file does not exist,
	the Graph Wizard returns this error:
	
	  The table you selected is already in use.
	
	WARNING: If the file exists, but does not contain a General field, the file is
	deleted and replaced with a new table of that name containing a single record
	with a single General field that contains the Graph object. Each call to
	(_GENGRAPH) with the same file name in parm8 adds a new record to the table and
	places the generated graph in the General field.
	
	If you are using Visual FoxPro 6.0, the .dbf name must have a .dbf file extension
	because by default the data is saved to a .scx file.
	
	Parm7 - use autoformat
	
	The value of this parameter influences how the numbers passed to parm2 and parm3
	are interpreted.
	
	Parm2 - chart type and parm3 - chart subtype
	
	If parm7 is true (.T.), parm2 will be 1-15 corresponding to the options in the
	Gallery list that is displayed when you click AutoFormat on the Format menu in
	MSGraph. Parm3 will be the number of the selected format displayed for the
	specific Gallery selected.
	
	If parm7 is false (.F.), parm2 will be 1-14 corresponding to the chart types that
	are displayed when you click Chart Type on the Format menu in MSGraph. The first
	1-8 are the 2-D charts (counted from left to right and top to bottom), 9-14 are
	the 3-D chart types. Parm3 will be one of the Subtypes that are displayed when
	you click the Options button in the Chart Type window. Valid numbers depend on
	which Chart Type is specified.
	
	Parm4 - title
	
	This is the title that will appear on the chart. If left empty or omitted, the
	chart will have no title. This is the same as setting the ChartTitle property of
	the chart.
	
	Parm5 - series by row /column
	
	This is the equivalent to clicking either Series in Rows or Series in Columns on
	the Data menu in MSGraph. True (.T.) indicates Series in Rows, and false (.F.)
	indicates Series in Columns. These settings are explained in the Microsoft Graph
	Help file.
	
	Parm6 - has legend
	
	If this is true (.T.), the chart displays a legend. This is the same as setting
	the HasLegend property of the chart.
	
	Parm9 - don't display graph with MODIFY GENERAL
	
	If this is false (.F.) the General field is displayed in a window as though the
	MODIFY GENERAL command had been issued.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
