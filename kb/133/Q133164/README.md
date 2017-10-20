---
layout: page
title: "Q133164: HOWTO: Define Multiple-Line Grid Headers"
permalink: /kb/133/Q133164/
---

## Q133164: HOWTO: Define Multiple-Line Grid Headers

{% raw %}

	Article: Q133164
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbvfp300 kbvfp500
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the header object in a Grid does not support multiple-line captions.
	It is possible, however, to simulate multiple-line header captions by placing a
	label on top of the header. This article provides an example that shows you how.
	
	MORE INFORMATION
	================
	
	Visual FoxPro does not natively support multiple-line headers. However, by
	modifying the height of the header and placing labels with a transparent
	backcolor on top of the header, you can achieve the visual representation of a
	multiple-line header.
	
	The following example illustrates this process using the Form Designer.
	
	Step-by-Step Example
	--------------------
	
	1. Create a form.
	
	2. From the Form Controls toolbar, select the Grid object, and place a grid on
	  the form.
	
	3. In the Property sheet, modify the Columncount property of the grid to 2.
	
	4. In the Property sheet, change the HeaderHeight to 45, and set the column's
	  header to a blank space, as follows:
	
	        Grid1.HeaderHeight = 45
	        Grid1.Column1.Header1.Caption = " "
	
	5. Change the Caption property of Header1, contained in Column1:
	
	        Caption= " "  &&Press the Spacebar and Click the check mark
	
	6. Select the Label control from the Form Controls toolbar, and place a label on
	  top of the header.
	
	7. In the Property sheet, change the following properties for the label
	  control:
	
	        BackStyle:  0-Transparent
	
	8. On the Caption property, click the Fx button. After deleting the current
	  text, type the following line in the expression builder:
	
	        "First Line" + CHR(13) + "Second Line"
	
	9. Save and run the form.
	
	The header in the first column of the grid displays a two-line caption.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbvfp300 kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
