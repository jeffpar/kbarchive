---
layout: page
title: "Q317499: BUG: Mouse Clicks Do Not Work on a Scrollable SDI Form"
permalink: /kb/317/Q317499/
---

## Q317499: BUG: Mouse Clicks Do Not Work on a Scrollable SDI Form

{% raw %}

	Article: Q317499
	Product(s): Microsoft FoxPro
	Version(s): 6.0,7.0
	Operating System(s): 
	Keyword(s): kbCtrl kbDesigner kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a top-level (SDI) form in Visual FoxPro 6.0 or 7.0, mouse clicks
	on controls on the form may seem to be ignored. This problem may occur if the
	form is scrollable (with a ScrollBars property of more than 0), the form
	contains a toolbar, and the toolbar is docked to the top of the form.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Set the ScrollBars property of the form to 0.
	
	2. Build a parent SDI form that contains a child MDI form (ShowWindow = 1 in the
	  top-level form) and the toolbar. Configure the child form so that it has no
	  title bar or border, and is maximized. In the Activate of the parent form,
	  create the toolbar and child form. Because the child form is maximized and
	  has no border or title bar, it seems as if there is only one form. The
	  problem that is described in this article does not occur if the toolbar is
	  docked to the top because it is actually docked in the parent form instead of
	  the child form (which contains the controls).
	
	  The following sample code demonstrates this workaround:
	
	  *-----------------------------------
	  * Sample workaround code from Microsoft Knowledge Base
	  * article Q317499.
	  *-----------------------------------
	  PUBLIC oform1
	
	  oform1=NEWOBJECT("frmPARENT")
	  oform1.SHOW
	  RETURN
	
	  **************************************************
	  DEFINE CLASS frmPARENT AS FORM
	       TOP = 21
	       LEFT = 34
	       HEIGHT = 235
	       WIDTH = 422
	       SHOWWINDOW = 2
	       CAPTION = "Form1"
	       NAME = "Form1"
	       mytoolbar = .F.
	       frmChild = .F.
	
	       PROCEDURE ACTIVATE
	            IF VARTYPE(THIS.mytoolbar) != "O"
	                 THIS.mytoolbar = NEWOBJECT("testtoolbar")
	                              THIS.mytoolbar.DOCK(0)
	                 THIS.mytoolbar.VISIBLE = .T.
	                 THIS.frmChild = NEWOBJECT("frmChild")
	                 THIS.frmChild.VISIBLE=.T.
	            ENDIF
	       ENDPROC
	  ENDDEFINE
	
	  **************************************************
	
	  DEFINE CLASS frmChild AS FORM
	       TOP = 0
	       LEFT = 0
	       HEIGHT = 344
	       WIDTH = 428
	       SHOWWINDOW = 1
	       SCROLLBARS = 3
	       BORDERSTYLE = 0
	       CAPTION = ""
	       TITLEBAR = 0
	       WINDOWSTATE = 2
	       NAME = "Form1"
	
	       ADD OBJECT pageframe1 AS PageFrame WITH ;
	            PAGECOUNT = 2, ;
	            TOP = 72, ;
	            LEFT = 72, ;
	            WIDTH = 241, ;
	            HEIGHT = 169, ;
	            NAME = "Pageframe1", ;
	            Page1.CAPTION = "Page1", ;
	            Page1.NAME = "Page1", ;
	            Page2.CAPTION = "Page2", ;
	            Page2.NAME = "Page2"
	
	       PROCEDURE CLICK
	            WAIT WINDOW "ChildForm Click!" NOWAIT
	       ENDPROC
	  ENDDEFINE
	
	  **************************************************
	
	  DEFINE CLASS testtoolbar AS ToolBar
	       CAPTION = "Toolbar1"
	       HEIGHT = 28
	       LEFT = 0
	       TOP = 0
	       WIDTH = 33
	       SHOWWINDOW = 1
	       NAME = "testtoolbar"
	
	       ADD OBJECT command1 AS CommandButton WITH ;
	            TOP = 3, ;
	            LEFT = 5, ;
	            HEIGHT = 22, ;
	            WIDTH = 23, ;
	            CAPTION = "", ;
	            NAME = "Command1"
	  ENDDEFINE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	If the form is scrollable (the ScrollBars property is anything but 0) and the
	toolbar is docked at the top, clicking directly on the form controls is ignored.
	If you click next to the controls, you may be able to find and use the controls.
	However, three-dimensional effects (such as depressing a command button) do not
	work, and you cannot switch pages in a PageFrame. The keyboard continues to work
	correctly for all controls in the following sample code.
	
	If you undock the toolbar or dock it anywhere but at the top, you can use the
	mouse on the controls. If you dock the toolbar at the top again, the problem
	returns.
	
	1. Add the following code to a new program (.prg) file in Visual FoxPro 6.0 or
	  7.0, and then run the program.
	
	2. When the form appears, a toolbar is docked to the top. Click any of the
	  controls on the form and note that the clicks are ignored.
	
	3. Toggle the MakeScrollable variable near the top of the code and then run the
	  program again to see and resolve the problem:
	
	  MakeScrollable = .T. (Form.ScrollBars = 3) --> Problem exists
	  MakeScrollable = .F. (Form.ScrollBars = 0) --> No problem
	
	  PUBLIC MakeScrollable, ;
	       oform1
	       
	  *~ Toggle this to see and resolve the problem:
	  *~ Form.Scrollbars > 0 - Problem exists
	  *~ Form.Scrollbars = 0 - No problem
	  MakeScrollable = .T.
	
	  oform1=NEWOBJECT("form1")
	  oform1.SHOW
	  RELEASE ALL
	  RETURN
	
	  ****************************************************
	
	  DEFINE CLASS form1 AS form
	
	       Top = 35
	       Left = 66
	       Height = 333
	       Width = 441
	       ShowWindow = 2
	       ScrollBars = 3
	       mytoolbar = .F.
	       Caption = "Form1"
	       Name = "form1"
	
	       ADD OBJECT pageframe1 AS PageFrame WITH ;
	            PageCount = 2, ;
	            Top = 36, ;
	            Left = 0, ;
	            Width = 332, ;
	            Height = 218, ;
	            Name = "Pageframe1", ;
	            Page1.Caption = "Page1", ;
	            Page1.Name = "Page1", ;
	            Page2.Caption = "Page2", ;
	            Page2.Name = "Page2"
	
	       ADD OBJECT command1 AS CommandButton WITH ;
	            Top = 48, ;
	            Left = 336, ;
	            Height = 27, ;
	            Width = 84, ;
	            Caption = "Command1", ;
	            Name = "Command1"
	
	       ADD OBJECT combo1 AS ComboBox WITH ;
	            Height = 24, ;
	            Left = 336, ;
	            Top = 84, ;
	            Width = 100, ;
	            Name = "Combo1"
	
	       ADD OBJECT list1 AS ListBox WITH ;
	            Height = 170, ;
	            Left = 336, ;
	            Top = 120, ;
	            Width = 100, ;
	            Name = "List1"
	
	       ADD OBJECT check1 AS CheckBox WITH ;
	            Top = 276, ;
	            Left = 36, ;
	            Height = 17, ;
	            Width = 60, ;
	            Caption = "Check1", ;
	            Name = "Check1"
	
	       ADD OBJECT commandgroup1 AS CommandGroup WITH ;
	            ButtonCount = 2, ;
	            Value = 1, ;
	            Height = 66, ;
	            Left = 120, ;
	            Top = 264, ;
	            Width = 94, ;
	            Name = "Commandgroup1", ;
	            Command1.Top = 5, ;
	            Command1.Left = 5, ;
	            Command1.Height = 27, ;
	            Command1.Width = 84, ;
	            Command1.Caption = "Command1", ;
	            Command1.Name = "Command1", ;
	            Command2.Top = 34, ;
	            Command2.Left = 5, ;
	            Command2.Height = 27, ;
	            Command2.Width = 84, ;
	            Command2.Caption = "Command2", ;
	            Command2.Name = "Command2"
	
	       ADD OBJECT edit1 AS EditBox WITH ;
	            Height = 53, ;
	            Left = 228, ;
	            Top = 264, ;
	            Width = 100, ;
	            Name = "Edit1"
	
	       PROCEDURE Activate
	            THIS.mytoolbar = NEWOBJECT("testtoolbar")
	            THIS.mytoolbar.DOCK(0)
	            THIS.mytoolbar.VISIBLE = .T.
	       ENDPROC
	
	  ENDDEFINE
	
	  **************************************************
	
	  DEFINE CLASS testtoolbar AS ToolBar
	       CAPTION = "Toolbar1"
	       HEIGHT = 28
	       LEFT = 0
	       TOP = 0
	       WIDTH = 33
	       SHOWWINDOW = 1
	       NAME = "testtoolbar"
	
	       ADD OBJECT command1 AS CommandButton WITH ;
	            TOP = 3, ;
	            LEFT = 5, ;
	            HEIGHT = 22, ;
	            WIDTH = 23, ;
	            CAPTION = "", ;
	            NAME = "Command1"
	  ENDDEFINE
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbDesigner kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP700
	Version           : :6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
