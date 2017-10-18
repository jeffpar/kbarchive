---
layout: page
title: "Q131017: How to Use Data Sessions in a Toolbar to Show Changes"
permalink: kb/131/Q131017/
---

## Q131017: How to Use Data Sessions in a Toolbar to Show Changes

	Article: Q131017
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes two methods you can use to use data sessions in a toolbar
	to reflect changes among multiple instances of both parent and child forms.
	Multiple instances of both parent and child forms can be reflected in the
	toolbar and menu as focus shifts from one form to another.
	
	MORE INFORMATION
	================
	
	The main reason the DataSessionID property is read/write is so you can set
	non-databound forms or toolbars to link up with another private data session's
	form, formset, or toolbar. The toolbar can query the _Screen.Activeform property
	to determine which form is currently active. Each form can have a property
	identifying whether it's in the process of an edit or not.
	
	Method One
	----------
	
	Make sure the toolbox class has DataSessions=2. Then within a method of a toolbox
	subclass, try the following logic to manipulate data of the active form:
	
	     Thisform.DataSessionID=_screen.ActiveForm.DataSessionID
	
	Method Two
	----------
	
	Use a timer to determine the status of the active form, enabling or disabling
	controls on the toolbar as appropriate. In the toolbar's INIT event, add a Timer
	to the screen as follows:
	
	     _Screen.AddObject("ToolBartimer" MyTimerClass)
	
	If you want the toolbar and the form to share data sessions, place the following
	code in the Timer event method:
	
	     MyToolBar.DataSessionID = IIF(TYPE("_Screen.ActiveForm") == "O",;
	        _Screen.ActiveForm.DataSessionID,1)
	
	In the Timer event code, use the GETFLDSTATE(-1) function to determine if the
	data on the active form has been changed or deleted as in this example code:
	
	  IF ( ("2" $ GETFLDSTATE(-1)) OR ;
	       ("3" $ GETFLDSTATE(-1)) OR ;
	       ("4" $ GETFLDSTATE(-1)) )
	     MyToolBar.cmdNewButton.Enabled  = .F.
	     MyToolBar.cmdSaveButton.Enabled = .T.
	     MyToolBar.cmdUndoButton.Enabled = .T.
	  ELSE
	     MyToolBar.cmdNewButton.Enabled  = .T.
	     MyToolBar.cmdSaveButton.Enabled = .F.
	     MyToolBar.cmdUndoButton.Enabled = .F.
	  ENDIF
	
	NOTE: Make sure your toolbar does not contain any bound controls. Changing the
	datasession of a bound form is not recommended.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
