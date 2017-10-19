---
layout: page
title: "Q143112: Tips for Using the Class Browser in Visual FoxPro 3.0b"
permalink: /kb/143/Q143112/
---

## Q143112: Tips for Using the Class Browser in Visual FoxPro 3.0b

	Article: Q143112
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article presents two tips to help you use the Class Browser with Visual
	FoxPro 3.0b. The first tip shows you how to display the list of classes in a
	list box instead of an outline control. The second tip provides an example that
	adds a page to the page frame in the Browser window.
	
	MORE INFORMATION
	================
	
	How to List the Classes in a List Box
	-------------------------------------
	
	When the Class Browser is started, the list of classes in the visual class
	library (VCX) is displayed hierarchically in an outline control. You can pass a
	parameter to the Class Browser to display the list of classes in a list box. To
	achieve this, call the following commands on startup:
	
	     ON SELECTION BAR 10 OF _mtools DO (_browser) WITH ,,.T.
	     SET SYSMENU SAVE
	
	How to Add a Page to the Class Browser Page Frame
	-------------------------------------------------
	
	This sample program adds a page to the page frame that displays information about
	class object members. The page frame name is pgfMembers. For more information
	about the Class Browser object members, search for "Class Browser Object
	Members" in the Help menu. To run this program, copy it in a program file and
	run the program.
	
	   * AddPage.prg
	   *
	   * Adds a page to the Class Browser's page frame, and adds new controls.
	   * This demo adds an expand check box and a font button for the Class
	   * Browser, although any controls could be added.
	
	   IF TYPE('_oBrowser')#'O' OR ISNULL(_oBrowser)
	      DO (_browser)
	   ENDIF
	   _oBrowser.LockScreen=.T.
	   WITH _oBrowser.pgfMembers
	      .PageCount=6             && Adds a page to the page frame
	      .Page1.Name='fpgFont'
	      .fpgFont.Caption='My Page'
	      .fpgFont.AddObject('chkExpand','ExpandCheckBox')
	      * Adds a check box to the new page
	      WITH .fpgFont.chkExpand
	         .Top=6
	         .Left=5
	         .Visible=.T.
	      ENDWITH
	      .fpgFont.AddObject('cmdFont','FontButton') && Adds a command button
	      WITH .fpgFont.cmdFont
	         .Top=31
	         .Left=5
	         .Visible=.T.
	      ENDWITH
	      .Top=_oBrowser.pgfMembers.Top
	      .ActivePage=6
	   ENDWITH
	   _oBrowser.SetFont(_oBrowser.FontName,_oBrowser.FontSize)
	   _oBrowser.LockScreen=.F.
	
	   * check box class definition.
	   * The check box controls whether or not the list of classes is expanded.
	   DEFINE CLASS ExpandCheckBox AS check box
	      Caption='Expand'
	      FontBold=.F.
	      BackStyle=0
	      Height=20
	      Width=60
	
	      FUNCTION Init
	      this.Value=thisform.lAutoExpand
	      ENDFUNC
	
	      FUNCTION InteractiveChange &&Toggles the value of lAutoExpand
	      thisform.lAutoExpand=(NOT thisform.lAutoExpand)
	      thisform.RefreshClassList(thisform.cClass)
	      thisform.Refresh()
	      ENDFUNC
	
	   ENDDEFINE
	
	  * Command Button class definition
	   DEFINE CLASS FontButton AS CommandButton
	      Caption='Font...'
	      FontBold=.F.
	      Height=20
	      Width=60
	
	      FUNCTION Click
	      this.SetFont()
	      ENDFUNC
	
	      FUNCTION GetFont()
	      RETURN GETFONT()
	      ENDFUNC
	
	      FUNCTION SetFont()
	      LOCAL lcFontName,lnAtPos1,lnAtPos2,llFontBold,;
	         llFontItalic,llLockScreen
	      lcFontName=this.GetFont()
	      IF EMPTY(lcFontName)
	         RETURN .F.
	      ENDIF
	      llLockScreen=thisform.LockScreen
	      thisform.LockScreen=.T.
	      lnAtPos1=AT(',',lcFontName)
	      lnAtPos2=AT(',',lcFontName,2)
	      * Sets the font of the whole form.
	      thisform.SetFont(LEFT(lcFontName,lnAtPos1-1), ;
	            VAL(SUBSTR(lcFontName,lnAtPos1+1,lnAtPos2-1)))
	      llFontBold=(RIGHT(lcFontName,1)=='B' OR RIGHT(lcFontName,2)=='BI')
	      llFontItalic=(RIGHT(lcFontName,1)=='I')
	      IF thisform.FontBold#llFontBold
	         thisform.SetAll('FontBold',llFontBold)
	      ENDIF
	      IF thisform.FontItalic#llFontItalic
	         thisform.SetAll('FontItalic',llFontItalic)
	      ENDIF
	      thisform.LockScreen=llLockScreen
	      ENDFUNC
	
	   ENDDEFINE
	
	Additional query words: customize
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b
	Version           : WINDOWS:3.0b
	
	=============================================================================
	
