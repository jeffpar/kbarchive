---
layout: page
title: "Q161900: FIX: Clicking from ListBox on Form to Command Window Gives GPF"
permalink: kb/161/Q161900/
---

## Q161900: FIX: Clicking from ListBox on Form to Command Window Gives GPF

	Article: Q161900
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Repetitive clicking between a multi-line Editbox control on a form, where the
	Editbox contains many rows of data, and the Command window results in an
	operating system-level error. A dialog box appears that states the following:
	
	  This program has performed an illegal operation and will be shut down.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. fix
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy and paste the following code into a program named Test.prg in Microsoft
	  Visual FoxPro version 5.0 running on Windows 95:
	
	     **************************************************
	     *-- Program: test.prg
	     *-- Code to illustrate page fault in
	     *-- Visual FoxPro for Windows 5.0
	
	     PUBLIC oForm
	     oForm = CREATEOBJECT("testform")
	     oForm.Show
	
	     **************************************************
	     *-- Form:         testform
	     *-- ParentClass:  form
	     *-- BaseClass:    form
	     *
	     DEFINE CLASS testform AS FORM
	        Top = 0
	        Left = 0
	        DoCreate = .T.
	        Caption = "Testform Form"
	        Name = "testform"
	
	        ADD OBJECT edit1 AS editbox WITH ;
	           Height = 217, ;
	           Left = 12, ;
	           Top = 12, ;
	           Width = 121, ;
	           Name = "Edit1"
	
	        PROCEDURE Click
	           KEYBOARD REPLICATE("a"+CHR(13), 60 )
	        ENDPROC
	
	     ENDDEFINE
	     *
	     *-- EndDefine: testform
	     **************************************************
	
	2. Run the program by issuing the following command in the Command window:
	
	        DO TEST.PRG
	
	3. With the mouse, click four or five times in the gray area of the form.
	
	4. Click in the Command window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
