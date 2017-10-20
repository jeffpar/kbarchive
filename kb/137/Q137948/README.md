---
layout: page
title: "Q137948: FIX: Report Writer Left-Aligns Numeric Fields Added w/ Toolbar"
permalink: /kb/137/Q137948/
---

## Q137948: FIX: Report Writer Left-Aligns Numeric Fields Added w/ Toolbar

{% raw %}

	Article: Q137948
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUGkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a numeric field or variable is added from the Controls toolbar, the field
	is formatted to be left-aligned (left-justified).
	
	WORKAROUND
	==========
	
	To return to the behavior observed in FoxPro for Windows 2.6, either delete the
	'@B' from the format template box or select the three-dot button after the
	Format box and clear the Left Justify check box from the Editing Options in the
	Format dialog box.
	
	NOTE: In FoxPro for Windows 2.6, if the data type was changed to numeric, the
	Left Justify check box was disabled (grayed out).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	If the field is dragged from the data environment or added with the Quick form
	option, it aligns correctly.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create or modify a report.
	
	2. Click the Field control button on the Controls toolbar, and add the field to
	  the report.
	
	3. In the Report Expression dialog box, click the three-dot button after the
	  Expression box.
	
	4. In the Fields box, double-click the name of the field in Fields list or the
	  variable in the Variables list.
	
	5. Click OK.
	
	6. In the Report Expression dialog box, click the three-dot button after the
	  Format box.
	
	7. In the Format dialog box, ensure that the data type selected is Numeric.
	
	8. Enter 999,999 (for an example) in the format template box.
	
	9. Click OK two times to return to the Report.
	
	10. Preview the report. Notice that the numeric fields are now left-aligned
	  (left-justified). Close the preview.
	
	11. Double-click the Field control. The Format template box will now have an @B
	  999,999. The "B" is the Picture clause indicating it has been left-aligned.
	
	12. Choose the three-dot button after the Format box. Look at the Editing
	  Options. The Left Justify box is now checked.
	
	REFERENCES
	==========
	
	Visual FoxPro for Windows "User's Guide," version 3.0, Chapter 9, "Designing
	Reports and Labels."
	
	Additional information can be found by searching for "Format Template" and
	@...SAY in the Visual FoxPro Help file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
