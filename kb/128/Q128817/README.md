---
layout: page
title: "Q128817: How to Display Check Boxes in Reports"
permalink: /kb/128/Q128817/
---

## Q128817: How to Display Check Boxes in Reports

{% raw %}

	Article: Q128817
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Visual FoxPro report can print information from fields or variables. It is
	also possible to print check boxes in a report. This article gives you two
	methods.
	
	MORE INFORMATION
	================
	
	Check boxes in a report provide a way to easily view logical information such as
	answers to a survey. The Visual FoxPro Report Designer does not include a check
	box control. However, you can display a check box by using one of the following
	two methods.
	
	Method One: Use a Bitmap
	------------------------
	
	1. Create two bitmaps. One bitmap represents the box checked while the other one
	  represents the box unchecked.
	
	2. To display a bitmap, select the Picture/OLE Bound Control from the Report
	  Controls toolbox, and place the image on your report.
	
	3. In the Report Picture Dialog, select the Print When command button. When the
	  Print When dialog is displayed, click the Print Only When Expression is True
	  text box, and type a condition that evaluates to .T. to display the checked
	  check box.
	
	4. Repeat the same process to display the bitmap for the unchecked box. Type a
	  condition that evaluates to .F. in the Print Only When Expression is True
	  text box.
	
	5. Superimpose the two controls. When the report is run, the appropriate bitmap
	  will be displayed.
	
	Method Two: Use an Expression with a Wingdings Font
	---------------------------------------------------
	
	1. Select the Field Control from the Report Controls toolbox.
	
	2. Type the following line in the expression box dialog, and click OK.
	
	     IIF(<logical expression>,'x','o')
	
	3. While the new field is highlighted in the report, select the Font option from
	  the Format menu.
	
	4. Change the font to Wingdings. When the report is run, the expression will
	  evaluate to a check box.
	
	For information about using these methods with FoxPro version 2.x, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q114135 How to Print Check boxes Instead of Y/N in FoxPro Reports
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
