---
layout: page
title: "Q172088: FIX: SelText in Edit Box Limited to 255 Characters"
permalink: /kb/172/Q172088/
---

## Q172088: FIX: SelText in Edit Box Limited to 255 Characters

	Article: Q172088
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 3.x and 5.x for Windows and Visual FoxPro 3.0b for the
	Macintosh, the SelText property for an Editbox selects only up to 255
	characters.
	
	RESOLUTION
	==========
	
	The workaround is to use the SUBSTR function as illustrated below:
	
	     SelectedText = SUBSTR(ThisForm.edit1.Value, ;
	                           ThisForm.edit1.SelStart + 1, ;
	                           ThisForm.edit1.SelLength)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program with the following code:
	
	        PUBLIC x
	        x=CREATEOBJECT('form1')
	        x.Show
	
	        DEFINE CLASS form1 AS form
	
	           Top = 0
	           Left = 0
	           Height = 250
	           Width = 425
	           DoCreate = .T.
	           Caption = "Form1"
	           Name = "Form1"
	
	           ADD OBJECT edit1 AS editbox WITH ;
	             Height = 229, ;
	             Left = 11, ;
	             Top = 10, ;
	             Width = 276, ;
	             Name = "Edit1"
	
	           ADD OBJECT command1 AS commandbutton WITH ;
	             Top = 25, ;
	             Left = 300, ;
	             Height = 27, ;
	             Width = 84, ;
	             Caption = "Click Me", ;
	             Name = "Command1"
	
	           PROCEDURE edit1.Init
	             This.HideSelection = .F.
	             This.Value = REPLICATE( "abcedfghijklmnopqrstuvwxyz", 15 )
	             This.SelStart = 0
	             This.SelLength = LEN( This.Value )
	           ENDPROC
	
	           PROCEDURE command1.Click
	             =MESSAGEBOX("SelLegth "+STR(Thisform.edit1.SelLength))
	             =MESSAGEBOX("SelText "+STR(LEN(Thisform.edit1.SelText)))
	             =MESSAGEBOX(Thisform.edit1.SelText)
	           ENDPROC
	
	        ENDDEFINE
	
	2. Run the .prg file and click the CLICK ME button.
	
	The second message box shows only 255 characters for the SelText property instead
	of 390.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
