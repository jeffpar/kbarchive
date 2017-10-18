---
layout: page
title: "Q138780: How to Use the Name Argument of an @...GET in Visual FoxPro"
permalink: kb/138/Q138780/
---

## Q138780: How to Use the Name Argument of an @...GET in Visual FoxPro

	Article: Q138780
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
	
	Visual FoxPro's Online Help for Controls and Objects states:
	
	  In Visual FoxPro, a NAME clause has been added to each of the controls
	  created in previous FoxPro versions. The NAME clause creates an object
	  reference for controls created with @ ... GET and @ ... EDIT, allowing you to
	  manipulate the controls with Visual FoxPro properties, events, and methods.
	  The NAME clause provides an intermediate step to upgrade your applications
	  using Visual FoxPro object-oriented programming techniques.
	
	But it does not provide an example. This article will show how to incorporate the
	NAME clause into a program with @...GETs.
	
	MORE INFORMATION
	================
	
	When using the NAME clause, you can run the control's default methods and
	events, but you will not be able to write new code for any of methods or events.
	The only exception is for the WHEN and VALID events because the WHEN and VALID
	are clauses of the @...GET command. You are able to assign values to any of the
	objects Properties at runtime.
	
	An important point to remember is that Visual FoxPro creates a PageFrame and a
	Page to handle the READ level for any @...GET commands in a FoxPro 2.6 program.
	The page and its controls become active at the READ and terminate when the READ
	terminates.
	
	For more information on converting to Visual FoxPro see 'Converting from FoxPro
	2.6' under Getting Started in the Using Visual FoxPro section of online Help.
	
	Sample Code Showing How to Use the NAME Clause
	----------------------------------------------
	
	  DEFINE WINDOW mywin NAME MyWin;
	     FROM 1,1 TO 30,50 ;
	     FLOAT ;
	     NOCLOSE ;
	     MINIMIZE ;
	     SYSTEM
	  ACTIVATE WINDOW mywin
	
	  @ 3,5 GET a NAME Text1;
	     SIZE 1.4,15;
	     DEFAULT SPACE(15);
	     PICTURE "@K"
	  @ 3,25 GET b NAME Text2;
	     SIZE 1.4,15;
	     DEFAULT SPACE(15);
	     PICTURE "@K"
	  @ 10,5 GET x Name Button1;
	     PICTURE "@*HN Button 1" ;
	     SIZE 2,10 ;
	     DEFAULT 1 ;
	     STYLE "B" ;
	     VALID Validx()
	  @ 10,25 GET y NAME Button2;
	     PICTURE "@*HN Button 2" ;
	     SIZE 2,10 ;
	     DEFAULT 1 ;
	     STYLE "B" ;
	     VALID Validy()
	  @ 20,15 GET z NAME Button3;
	     PICTURE "@*HN Close" ;
	     SIZE 2,10 ;
	     DEFAULT 1 ;
	     STYLE "B" ;
	     VALID Validz()
	
	  ** The next four lines of code give the @...GETs for the text boxes
	  ** a 3D look.
	  MyWin.PageFrame1.Page1.Text1.SpecialEffect = 0
	  MyWin.PageFrame1.Page1.Text2.SpecialEffect = 0
	  MyWin.PageFrame1.Page1.Text1.BorderStyle = 1
	  MyWin.PageFrame1.Page1.Text2.BorderStyle = 1
	  MyWin.Refresh()
	  MyWin.Caption = "Window Caption" && Sets the Title Bar Caption
	  MyWin.PageFrame1.Page1.Text1.Value = "Press Button 1"
	  ** The buttons become part of a command group. The next line of
	  ** code sets the focus to Button1.
	  MyWin.PageFrame1.Page1.Button1.Command1.SetFocus()
	
	  READ CYCLE
	  RELEASE WINDOW mywin
	
	  FUNCTION Validx    &&  x VALID
	     ** Changes the values of the text boxes and the captions
	     ** of the command buttons.
	     MyWin.PageFrame1.Page1.Text1.Value = "Thank You"
	     MyWin.PageFrame1.Page1.Text2.Value = "Press Button 2"
	     MyWin.PageFrame1.Page1.Button1.Command1.Caption = "Press 2"
	     MyWin.PageFrame1.Page1.Button2.Command1.Caption = "Button 2"
	
	  FUNCTION Validy    &&  y VALID
	     ** Changes the values of the text boxes and the captions
	     ** of the command buttons.
	     MyWin.PageFrame1.Page1.Text1.Value = "Press Button 1"
	     MyWin.PageFrame1.Page1.Text2.Value = "Thank You"
	     MyWin.PageFrame1.Page1.Button1.Command1.Caption = "Button 1"
	     MyWin.PageFrame1.Page1.Button2.Command1.Caption = "Press 1"
	
	  FUNCTION Validz   && z VALID
	     CLEAR READ
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
