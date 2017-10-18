---
layout: page
title: "Q170393: HOWTO: Prevent Word Printing Error with OLE Automation"
permalink: kb/170/Q170393/
---

## Q170393: HOWTO: Prevent Word Printing Error with OLE Automation

	Article: Q170393
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbinterop
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Often times when using OLE automation to Microsoft Word for Windows that opens
	and prints a file, and then releases or closes the Word object, the following
	warning message is displayed:
	
	  Word is currently printing. Quitting Word will cancel all pending print jobs.
	  Do you want to quit Word?
	
	MORE INFORMATION
	================
	
	The cause of this problem can be attributed to background printing being turned
	on in Word. There are a several ways to turn off background printing, which are
	outlined below. Each method has code that could be used depending on whether
	Word 97 or an earlier version of Word is being used. The Word.Basic object can
	be used, for the most part, with all versions of Word. The main difference in
	the examples below is the way Word is exited and the object released. This is
	why in the methods using Word.Basic, it is necessary to find which version of
	Word is loaded before the Word object is released.
	
	Method 1
	--------
	
	Use the Word command that turns off background printing through the Tools Options
	menu.
	
	Using the Word.Basic object for Word 95 and older:
	
	     oWord = CREATEOBJECT('Word.Basic')
	     WITH oWord
	        cWordVersion = oWord.AppInfo(2)          &&Get Word version
	        .FileNew
	        oValue = .CurValues.ToolsOptionsPrint    &&Get background setting
	        .AppShow
	        nsetting = oValue.background
	        IF oValue.background = 1
	           .ToolsOptionsPrint(,,,,,,,,,,,0)
	        ENDIF
	        .Insert ("This is a test.")
	        .ToolsOptionsPrint(,,,,,,,,,,,0,,,"")
	        .FilePrintDefault
	
	        IF nsetting = 1                &&Reset Background printing
	           .ToolsOptionsPrint(,,,,,,,,,,,1)
	        ELSE
	           .ToolsOptionsPrint(,,,,,,,,,,,0)
	        ENDIF
	        IF VAL(cWordVersion) < 8       &&If version=7, then it's Word 95
	           .FileClose(2)               &&Close without prompt to save
	           oWord = ""                  &&Release Word object
	        ELSE                           &&Else, it's Word 97
	           .FileClose(2)
	           .FileQuit
	        ENDIF
	     ENDWITH
	
	Using the Word.Application object for Word 97:
	
	     oWord = CREATEOBJECT('Word.Application')
	     WITH oWord
	        cWordVersion = oWord.Version                 &&Get Word version
	        .Documents.Add
	        .Visible = .T.
	        .Selection.InsertAfter ("This is a test.")
	        lBackground = .Options.PrintBackground()
	        IF lBackground
	           .Options.PrintBackground = .F.
	        ENDIF
	        .Wordbasic.FilePrintDefault
	        IF lBackground
	           .Options.Printbackground = !.Options.Printbackground
	        ENDIF
	        .Application.Quit(0)           &&Quit, don't save & don't prompt
	     ENDWITH
	
	Method 2
	--------
	
	Use the Word command that suppresses background printing on the print command
	itself.
	
	Using the Word.Basic object for Word 95 and older:
	
	     oWord = CREATEOBJECT('Word.Basic')
	     WITH oWord
	        cWordVersion = oWord.AppInfo(2)              &&Get Word version
	        .FileNew
	        .AppShow
	        .Insert ("This is a test.")
	        .FilePrint(0)                  &&"0" = background printing
	        IF VAL(cWordVersion) < 8       &&If version=7, then it's Word 95
	           .FileClose(2)               &&Close without prompt to save
	           oWord = ""                  &&Release Word object
	        ELSE                           &&Else, it's Word 97
	           .FileClose(2)
	           .FileQuit
	        ENDIF
	     ENDWITH
	
	Using the Word.Application object for Word 97:
	
	     oWord = CREATEOBJECT('Word.Application')
	     WITH oWord
	        cWordVersion = oWord.Version                 &&Get Word version
	        .Documents.Add
	        .Visible = .T.
	        .Selection.InsertAfter ("This is a test.")
	        .Wordbasic.FilePrint(0)
	        .Application.Quit(0)           &&Quit, don't save & don't prompt
	     ENDWITH
	
	Method 3
	--------
	
	Create a macro in the template that the new or existing file is based on, usually
	Normal.dot. Then run the macro during the OLE automation session. In testing,
	this method seems slower than the above methods.
	
	Visual FoxPro code using the Word.Basic object for Word 95 and older:
	
	     oWord = CREATEOBJECT('Word.Basic')
	     WITH oWord
	        cWordVersion = oWord.AppInfo(2)              &&Get Word version
	        .FileNew
	        .AppShow
	        .Insert ("This is a test.")
	        .ToolsMacro("turnoffbackground",1)           && Run Word macro
	        IF VAL(cWordVersion) < 8       &&If version=7, then it's Word 95
	           .FileClose(2)               &&Close without prompt to save
	           oWord = ""                  &&Release Word object
	        ELSE                           &&Else, it's Word 97
	           .FileClose(2)
	           .Filequit
	        ENDIF
	     ENDWITH
	
	Visual FoxPro code using the Word.Application object for Word 97:
	
	     oWord = CREATEOBJECT('Word.Application')
	     WITH oWord
	        .Documents.Add
	        .Visible = .T.
	        .Selection.InsertAfter ("This is a test.")
	        .Run("turnoffbackground")      && Run Word macro
	        .Application.Quit(0)           &&Quit, don't save & don't prompt
	     ENDWITH
	
	Word macro code for use in Method 3:
	
	For Word 95, create the following macro. This sample macro is named
	turnoffbackground.
	
	     Sub MAIN
	     REM Macro to toggle background printing and reset to original value
	     REM Get current value for Background printing from ToolsOptions
	
	        Dim dlg As ToolsOptionsPrint
	        GetCurValues dlg
	        cursetting = dlg.Background
	
	        If dlg.Background = 1 Then
	           dlg.Background = 0
	        End If
	        ToolsOptionsPrint dlg
	
	        REM Reset Background option to original value
	        If cursetting = 1 Then
	           dlg.Background = 1
	        Else
	           dlg.Background = 0
	        End If
	        ToolsOptionsPrint dlg
	     End Sub
	
	For Word 97, create the following macro. This sample macro is named
	turnoffbackground.
	
	     Sub turnoffbackground()
	     REM Macro to toggle off background printing and turn back on if set on.
	     REM Get current settings
	
	        cursetting = Options.PrintBackground
	        If cursetting = "True" Then
	           Options.PrintBackground = False
	        End If
	        ActiveDocument.PrintOut
	        If cursetting = "True" Then
	           Options.PrintBackground = True
	        End If
	     End Sub
	
	REFERENCES
	==========
	
	Microsoft Word Visual Basic Help
	
	(c) Microsoft Corporation <year>, All Rights Reserved. Contributions by
	Dean Christopher, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kberrmsg kbinterop 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
