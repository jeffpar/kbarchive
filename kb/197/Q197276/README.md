---
layout: page
title: "Q197276: PRB: Closing Top-Level Form with Docked Toolbar Leaves Image"
permalink: kb/197/Q197276/
---

## Q197276: PRB: Closing Top-Level Form with Docked Toolbar Leaves Image

	Article: Q197276
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A phantom image of a form is left on the screen after you have closed it. You
	cannot close or move this image of the form, and it stays on the Windows
	taskbar. After you click on the taskbar button on the Windows taskbar, the image
	of the form might disappear but the taskbar button does not close.
	
	CAUSE
	=====
	
	This can be occur when you use a docked toolbar that has code in one of the
	toolbar buttons to close a top-level form. Top-level forms are also known as SDI
	forms.
	
	RESOLUTION
	==========
	
	Undock the toolbar before using a button on the toolbar to close the form.
	
	You can undock the toolbar by copying the following code into the Click event of
	the Exit button on the toolbar:
	
	     IF This.Parent.Docked
	        This.Parent.Dock(-1)
	     ENDIF
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy the following code into a new program file and save it:
	
	        PUBLIC oform1
	        oform1=CREATEOBJECT("form1")
	        oform1.Show
	        RETURN
	
	        **************************************************
	        *-- Form:         form1
	        *-- ParentClass:  form
	        *-- BaseClass:    form
	        *
	        DEFINE CLASS form1 AS form
	
	           ShowWindow = 2
	           DoCreate = .T.
	           AutoCenter = .T.
	           Caption = "SDI Form With Toolbar"
	           Name = "Form1"
	           tool = .F.
	
	           PROCEDURE Activate
	              WITH THIS
	                 IF TYPE(".tool")!='O' AND !ISNULL(.TOOL)
	                    .TOOL = CREATE("MTOOL")
	                    .TOOL.SHOW()
	                 ENDIF
	              ENDWITH
	           ENDPROC
	
	           PROCEDURE QueryUnload
	              THIS.TOOL.cmdEXIT.CLICK()
	           ENDPROC
	
	        ENDDEFINE
	        *-- EndDefine: form1
	        **************************************************
	
	        **************************************************
	        *-- Class:        mtool
	        *-- ParentClass:  toolbar
	        *-- BaseClass:    toolbar
	        *
	        DEFINE CLASS mtool AS toolbar
	
	           Caption = "Toolbar1"
	           Height = 36
	           Left = 104
	           Top = 22
	           Width = 47
	           ControlBox = .F.
	           ShowWindow = 1
	           Name = "mtool"
	
	              ADD OBJECT cmdexit AS commandbutton WITH ;
	                AutoSize = .T., ;
	                Top = 5, ;
	                Left = 5, ;
	                Height = 27, ;
	                Width = 37, ;
	                Caption = "Exit", ;
	                Name = "cmdEXIT"
	
	              PROCEDURE cmdexit.Click
	                 *!*IF THIS.PARENT.DOCKED
	                 *!*   THIS.PARENT.DOCK(-1)
	                 *!*ENDIF
	                 oform1.RELEASE
	              ENDPROC
	        ENDDEFINE
	        *
	        *-- EndDefine: mtool
	        **************************************************
	
	2. Run the program. The toolbar with the Exit button should appear on top of the
	  form. Note that the ShowWindow property of the form in the code above is 2,
	  which means it is a top-level form. Click Exit to close the form and toolbar.
	
	3. Run the program again. This time drag the toolbar to one of the sides of the
	  form and dock it. Click Exit. The toolbar closes, but the form does not
	  close. Try closing the form or moving it. Neither method works. Close Visual
	  FoxPro to clear out the form.
	
	4. To see the resolution to this problem, uncomment the following lines from the
	  cmdexit.Click Procedure in the program code:
	
	        IF THIS.PARENT.DOCKED
	           THIS.PARENT.DOC(-1)
	        ENDIF
	
	5. Run the program, dock the toolbar, and click Exit. You might be able to see
	  the toolbar undock before the form closes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
