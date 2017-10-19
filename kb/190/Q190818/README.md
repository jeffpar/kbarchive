---
layout: page
title: "Q190818: HOWTO: Programmatically Scroll a Visual FoxPro Form"
permalink: /kb/190/Q190818/
---

## Q190818: HOWTO: Programmatically Scroll a Visual FoxPro Form

	Article: Q190818
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Unlike the grid control, which has a scroll method that can be called to
	programmatically scroll through the grid records, a form has no such method.
	
	You must use the SetViewPort method to programmatically scroll a Visual FoxPro
	6.0 form.
	
	MORE INFORMATION
	================
	
	The following sample form programmatically scrolls using the Page Up and Page
	Down keys:
	
	  Sample Code
	  -----------
	
	     PUBLIC oform
	     oform=NewObject("ScrollForm")
	     oform.show
	
	     DEFINE CLASS ScrollForm AS form
	        Top = 0
	        Left = 0
	        Height = 101
	        Width = 168
	        ScrollBars = 2
	        Caption = "Use PgUp/PgDwn to Scroll Form"
	        vertscrollpos = 0
	        Name = "Form1"
	        ADD OBJECT shape1 AS shape WITH ;
	           Top = 12, ;
	           Left = 12, ;
	           Height = 421, ;
	           Width = 553, ;
	           Name = "Shape1"
	        ADD OBJECT command1 AS commandbutton WITH ;
	           Top = 24, ;
	           Left = 36, ;
	           Height = 27, ;
	           Width = 84, ;
	           Caption = "Close", ;
	           Name = "Command1"
	        PROCEDURE KeyPress
	           LPARAMETERS nKeyCode, nShiftAltCtrl
	           IF nKeyCode=3
	              Thisform.vertscrollpos=Thisform.vertscrollpos+Thisform.height
	              Thisform.SetViewPort(0,Thisform.vertscrollpos)
	              Thisform.Refresh
	           ENDIF
	           IF nKeyCode=18
	              Thisform.vertscrollpos=Thisform.vertscrollpos-thisform.height
	              Thisform.SetViewPort(0,Thisform.vertscrollpos)
	              Thisform.Refresh
	           ENDIF
	        ENDPROC
	        PROCEDURE command1.Click
	           thisform.release
	        ENDPROC
	     ENDDEFINE
	
	Additional query words: kbOOP kbVFp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
