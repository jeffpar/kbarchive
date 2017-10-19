---
layout: page
title: "Q114135: How to Print Check Boxes Instead of Y/N in FoxPro Reports"
permalink: /kb/114/Q114135/
---

## Q114135: How to Print Check Boxes Instead of Y/N in FoxPro Reports

	Article: Q114135
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Logical fields can be represented on reports as check boxes in FoxPro for
	Windows and FoxPro for Macintosh.
	
	MORE INFORMATION
	================
	
	If a logical field is simply placed in a report, the value .F. or .T. is
	printed. To improve the appearance of your report, you can enter the picture "Y"
	in the Format box in the Report Expression dialog box. This will cause all false
	values to print as N, while all true values will print as Y.
	
	While this technique is certainly adequate and has been available since FoxBASE,
	FoxPro for Windows and FoxPro for Macintosh offer a graphical solution that many
	people find more visually attractive. Instead of using Y and N, check boxes are
	used on screens to indicate individual choices that are either turned on or off.
	In the case of the report, the field label indicates the choice and the check
	box for each record either contains an X to indicate that the particular option
	was selected or is blank to show that the option was not selected.
	
	To Create This Effect in the Report Writer
	------------------------------------------
	
	1. Use the Box tool to place a small box at the appropriate location.
	
	2. Use the Field tool to place a field on the report, and then enter and save
	  the following expression in the Expression box:
	
	        IIF(.T.,"X","")
	
	3. From the Object menu, choose Font, and then choose Arial, 12, and Bold.
	
	4. Drag the field over the center of the small box. Ideally, the field should
	  extend slightly above and below the box equally, but the box should extend
	  equally to the left and right of the field. Resize the box as needed to
	  produce this effect.
	
	5. Press CTRL+I or choose Preview from the Report menu, and verify that the X is
	  centered in the box. If not, close the preview, select the field, and use the
	  arrow keys to reposition the field until it is centered exactly.
	
	6. Once the X is properly positioned, open the Report Expression dialog box, and
	  replace the .T. in the expression with the name of the logical field in the
	  database.
	
	Additional query words: VFoxWin FoxMac FoxWin 2.50 graphic extended characters RWriter Report Designer
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	
	=============================================================================
	
