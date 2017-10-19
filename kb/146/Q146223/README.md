---
layout: page
title: "Q146223: FIX: Position Error: Outline Control on Classed Pageframe"
permalink: /kb/146/Q146223/
---

## Q146223: FIX: Position Error: Outline Control on Classed Pageframe

	Article: Q146223
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an outline control is placed on a page of a pageframe and that pageframe is
	saved as a class, the class is repositioned during its use in designing a form.
	The outline control will first appear in its original design location when the
	form is run. Then if you click an alternate tab of the pageframe followed by
	clicking the original tab, the outline control jumps to that location on the
	page in the form.
	
	WORKAROUND
	==========
	
	To correct this behavior in the design of the form, use the following steps,
	which are based on building a test example as specified in the "Steps to
	Reproduce Problem" section of this article.
	
	1. Place the following two commands in the form's Activate event:
	
	     Thisform.<the name of the class>.Pageframe1.activepage = 1
	     Thisform.refresh
	
	2. Place the following command in the Init event of the form:
	
	        Thisform.refresh
	
	3. Place the following command in the Init event of the pageframe of the current
	  instantiation of the class:
	
	     This.activepage = 2
	
	4. Place the following command in the Activate event of the page that contains
	  the Outline control:
	
	     This.refresh
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Using the Visual FoxPro interface, create a new class consisting of a pageframe
	that contains an OLE container control that contains the Outline control on the
	first page. Place this class in the upper-left corner of a form. Drag the class
	to the lower-right corner of the form. Run the form and observe the position of
	the outline control. Here are the steps:
	
	1. On the File menu, click New, select Class, and click the New Class button. In
	  the New Class dialog box, click Based on, and then click Pageframe. Give it a
	  class name of Outltest, and store it in a class library named Testvcx.vcx.
	
	2. In the Class Designer, right-click the pageframe, and select Edit.
	
	3. From the Forms Control toolbar, select the OLE Container Control tool, and
	  place it on the first page of the pageframe, which is in Edit mode.
	
	4. In the Insert Object dialog box, click Insert Control. Then from the Control
	  Type list, select the Outline Control. Position and size the outline control
	  on the pageframe so that it looks as you would want it to look on a user's
	  form. Then save the new class, and close the Class Designer by using the menu
	  options or by pressing CTRL+W.
	
	5. In the Command window, type:
	
	  " MODIFY FORM outltest. " (without the quotation marks)
	
	6. On the Forms Controls toolbar, click the View Classes button. Click Add, and
	  sele Testvcx.vcx from the Open dialog box. Click Open.
	
	7. From the Forms Controls toolbar, click the Outltest class tool, and place the
	  class on the form in the upper-left corner. Drag the class to the lower-right
	  corner of the form.
	
	8. Click the exclamation mark tool on the Visual FoxPro toolbar to Run the form.
	  Observe that the OLE Outline control is positioned off of the pageframe.
	  Click the tab for page 2 of the pageframe, and then click the tab for page.
	  Observe that the Outline control is now located where it should be.
	
	Additional query words: jump misplace
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
