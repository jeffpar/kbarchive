---
layout: page
title: "Q167673: DOC: Online Help References Removed Features of Form Designer"
permalink: /kb/167/Q167673/
---

## Q167673: DOC: Online Help References Removed Features of Form Designer

	Article: Q167673
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbdocerr kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The online Help file for Visual FoxPro 5.0 and 5.0a references a Form and a Page
	drop-down list in the Form Designer. However, the Form Designer in Visual FoxPro
	5.0 and 5.0a does not contain these items. The Form Designer in Visual FoxPro
	3.0 and 3.0b does contain these items.
	
	The Form Designer online Help topic states:
	
	  Form   Specifies the active form within a form set. The Form drop-down
	  list is enabled only when the Form Designer contains a form set.
	
	  Page   Specifies the active page within a page frame. The Page box is
	  enabled only when the type of control being modified is a page frame.
	
	MORE INFORMATION
	================
	
	To access the Help file topic on the Form Designer, type "HELP FORM DESIGNER"
	(without the quotation marks) in the Command window. Then choose Form Designer
	in the Help Topics dialog box, and choose Form Designer again in the Topics
	Found dialog box.
	
	Steps to Reproduce
	------------------
	
	1. In Visual FoxPro 3.0 or 3.0b, open the Form Designer. Note that the Form and
	  Page drop-down list appear.
	
	2. Choose Form from the main menu and click on Create Form Set.
	
	3. Place a page frame object on the form.
	
	4. Choose Add New Form from the Form menu pad.
	
	5. Notice the Form and Page drop-down list are active.
	
	6. Perform the same steps in either Visual FoxPro 5.0 or 5.0a. Neither the Form
	  or Page drop-down list objects appear.
	
	7. In Visual FoxPro 5.0 or 5.0a, you must use the Properties dialog box to
	  select individual forms in a form set or pages within a page frame object.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	
	=============================================================================
	
