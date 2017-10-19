---
layout: page
title: "Q140304: How to Remove Objects from a Container at Run Time"
permalink: /kb/140/Q140304/
---

## Q140304: How to Remove Objects from a Container at Run Time

	Article: Q140304
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to remove objects from a form or any other
	container within a form at run time. Specifically, it shows how to create a
	toolbar that has a single command button that can remove all of the objects from
	an active form.
	
	MORE INFORMATION
	================
	
	Using the RemoveObject method, and an array created using the AMEMBERS()
	function, you can remove all of the objects from within any container object.
	
	Step-by-Step Example
	--------------------
	
	1. Create a program containing the following code:
	
	     PUBLIC oRemoveIt
	     oRemoveIt=CREATEOBJECT("RemoveIt")
	     oRemoveIt.SHOW
	     oRemoveIt.DOCK(0)      && This docks the toolbar on the top
	
	     DEFINE CLASS RemoveIt AS toolbar
	        Height = 27
	        Left = 0
	        Top = 0
	        Width = 665
	        Name = "RemoveIt"
	
	        ADD OBJECT command1 AS commandbutton WITH ;
	           Top = 4, ;
	           Left = 6, ;
	           Height = 24, ;
	           Width = 24, ;
	           FontSize = 8, ;
	           Picture = "C:\VFP\Samples\Graphics\BMPs\Fox\Delete.bmp", ;
	           Caption = "", ;
	           Default = .F., ;
	           ToolTipText = "Remove Objects From Active Form", ;
	           Name = "Command1"
	
	        PROCEDURE command1.Click
	           IF TYPE('_screen.ActiveForm')=='O'
	              IF NOT ISNULL (_Screen.ActiveForm)
	                 =AMEMBERS(FormObjects,_Screen.ActiveForm,2)
	                 FOR i = 1 to ALEN(FormObjects)
	                    _Screen.ActiveForm.RemoveObject(FormObjects(i))
	                 ENDFOR
	              ENDIF
	           ELSE
	              =MESSAGEBOX("No Form is currently open.","")
	           ENDIF
	        ENDPROC
	
	     ENDDEFINE
	
	2. Save and run the program. The result should be a single tool button on a
	  toolbar that is docked at the top of the main Visual FoxPro window. If the
	  tool button is clicked while a form is open, all of the form's objects will
	  be removed.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
