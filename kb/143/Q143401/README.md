---
layout: page
title: "Q143401: PRB: Cannot Shorten Report Bands of Wizard-Generated Reports"
permalink: /kb/143/Q143401/
---

## Q143401: PRB: Cannot Shorten Report Bands of Wizard-Generated Reports

{% raw %}

	Article: Q143401
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a report has been generated using the Report Wizard, the report bands
	(Detail, Group or Page Header bands) act as if they cannot be shrunk above the
	position of a memo field or a long character field, even if the memo or long
	character field and its label has been deleted or moved.
	
	CAUSE
	=====
	
	When other fields lie below the memo or long character field, the Report Wizard
	adds an invisible line below each memo field and long character field to control
	the floating characteristics of these fields and their labels.
	
	RESOLUTION
	==========
	
	If it is necessary to edit a Wizard-generated report, ensure that the line below
	the memo or long character field is moved with these fields or is deleted from
	the report.
	
	STATUS
	======
	
	This behavior is by design. The Report Wizard adds the invisible line below
	these fields that have a potential to grow and float to keep the labels
	positioned with their respective field.
	
	MORE INFORMATION
	================
	
	The Report Wizard should always add an invisible line below a memo or long
	character field when there are other fields are below these fields. The Report
	Wizard's apparent threshold width of the character field before placing a line
	underneath is around 60 to 65 characters. Of the three types of Report Wizards,
	the standard Report Wizard and the One-to-Many Report Wizard seem to exhibit
	this behavior most. In the standard Report Wizard, it is usually the Detail band
	that appears to not shorten. In the One-to- Many Report Wizard, it could be the
	Group Header, the Detail band, or both, depending on whether a memo or long
	character field is added to the respective band.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Employee table in the Vfp\Samples\Data subdirectory.
	
	2. On the Tools menu, click Wizards, and then click Report.
	
	3. Select the Report Wizard, and click OK.
	
	4. In the Available Fields list, scroll down and move Notes to the Selected
	  Fields list. Then move the First_Name and Last_name fields to the Selected
	  Fields list.
	
	5. Click the Next button twice until Step 3 is reached. In the Step 3 - Layout
	  dialog box, click Rows in the Field Layout section.
	
	6. Click Finish. In Step 5 - Finish, select the "Save report and modify it in
	  the Report Designer." Click the Finish button, and give the report a name.
	  Then click Save.
	
	7. With the report open in the Report Designer, select the Last Name label
	  control, and press the DELETE key or choose Clear from the Edit menu. Repeat
	  this process for the First Name label and the Last_name and First_name
	  fields.
	
	8. Try to close the Detail band by clicking the band itself and dragging it
	  upward, or double-click the Detail band, reduce the height spinner value, and
	  choose OK.
	
	The Detail band should not close up all the way to the notes field. This is
	because of the invisible line.
	
	To find out where the lines are, choose Select All from the Edit menu, or use the
	mouse to draw and drag a selection box along the right edge of the report above
	the Detail band. The Select All method will select all controls on the report
	but should show the selection handles at either end of the line. They appear as
	small gray boxes at the left and right edges of the report. If you need to see
	the line, be sure the line is selected, and then choose Pen from the Format
	menu. Change the point size to something other than None.
	
	NOTE: It may be necessary to move the Detail band down to view the selection
	boxes of the line, especially if the Detail band was moved up against the
	invisible line in Step 8.
	
	REFERENCES
	==========
	
	For more information on designing reports and using the Report Designer, please
	see Chapter 9 in the "Visual FoxPro User's Guide."
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
