---
layout: page
title: "Q134793: PRB: Text Labels Do Not Float with Memo Fields in a Report"
permalink: kb/134/Q134793/
---

## Q134793: PRB: Text Labels Do Not Float with Memo Fields in a Report

	Article: Q134793
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
	
	When text labels are placed next to memo fields in a report, the text label does
	not float with the memo field it is placed next to.
	
	RESOLUTION
	==========
	
	Place a floating invisible horizontal line between the two lines of text and
	fields. See steps 9-11 of the "Steps to Reproduce Behavior" section of this
	article.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the TESTDATA database in the Visual FoxPro SAMPLES\DATA directory.
	
	2. On the File menu, click New. Select the Report option, and then click the New
	  File button.
	
	3. On the Report menu, click Quick Report. In the Open dialog box, select the
	  Employee table from the list of tables in the TestData database. Click OK.
	
	4. In the Quick Report dialog box, click the second Field Layout choice to place
	  the fields vertically on the report. Click the Fields button to bring up the
	  Field Picker dialog box. In the All Fields list, scroll down to find the
	  Notes field, and double-click it to move it to the Selected Fields list. Then
	  click OK in the Field Picker dialog box. Click OK in the Quick Report dialog
	  box.
	
	5. Click Notes field box to select it. Click and drag the right handle on the
	  field to stretch the size out to about four inches.
	
	6. Double-click the gray bar for the Detail band. Change the height to 0.5 and
	  choose OK.
	
	7. Hold down the SHIFT key, and click the Notes label and the Notes field to
	  select both objects. On the Edit menu, click Copy. Then on the Edit menu,
	  click Paste to paste a copy of the label and field. Use the mouse or arrow
	  keys to move the new objects below the original objects, so that they are not
	  overlapping.
	
	8. On the View menu, click Preview. Notice that the second Notes label did not
	  float to be placed next to the second copy of the memo field. Press the ESC
	  key to close the preview and go back to the Report Designer.
	
	9. Use the Line tool on the Report Controls toolbar to draw a horizontal line
	  separating the two lines of labels and fields as the diagram below indicates.
	  If the Report Controls toolbar is not visible, select it from the View menu.
	
	  text             memo
	  ---------------------
	  text             memo
	
	10. Double-click the newly drawn line. Select Float in the Object Position
	  portion of the Rectangle/Line dialog box, and click OK.
	
	11. Select the Background Color button on the Color Palette toolbar. Then select
	  the White button. This will make the line invisible. If the Color Palette
	  toolbar is not visible, select it from the View menu.
	
	12. On the View menu, click Preview. Note that the second Notes text field is
	  placed next to the first line of the second copy of the memo field.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
