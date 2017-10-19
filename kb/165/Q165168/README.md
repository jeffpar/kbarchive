---
layout: page
title: "Q165168: FIX: Modal Form and SET SYSMENU OFF Cause Menu to Disappear"
permalink: /kb/165/Q165168/
---

## Q165168: FIX: Modal Form and SET SYSMENU OFF Cause Menu to Disappear

	Article: Q165168
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Top-Level menu appears in a Top-Level form that calls a modal form with the
	system menu set off, closing the modal form causes the Top-Level form menu to
	disappear.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been corrected in Visual FoxPro
	5.0a for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Top-Level menu using the Menu Builder. Select General Options from
	  the View menu, and then select "Top-Level Form" in the resulting dialog box.
	  Name the menu "Ztop" (without the quotation marks).
	
	2. Create a modal form called Zmodal and set the following properties:
	
	        ShowWindow = 1-In Top-Level Form
	        WindowType = 1-Modal
	
	3. Create a Top-Level form called Ztopform and set the following properties:
	
	        ShowWindow = 2-As Top-Level Form
	
	4. In the DblClick Event of the Ztopform form, place the following code:
	
	        DO Form Zmodal
	
	5. In the Init of the Ztopform form, place the following code:
	
	        DO Ztop.mpr WITH THISFORM,.T.
	
	6. Close the form and type the following in the Command window:
	
	        SET SYSMENU OFF
	
	7. Run the Ztopform and double-click the form to invoke the modal form.
	
	8. Close the modal form. In Visual FoxPro 5.0, the menu on the Top-Level form
	  disappears.
	
	Additional query words: top level
	
	======================================================================
	Keywords          : kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
