---
layout: page
title: "Q195404: HOWTO: Keep Word Print Dialog Box on Top Using APIs"
permalink: /kb/195/Q195404/
---

## Q195404: HOWTO: Keep Word Print Dialog Box on Top Using APIs

	Article: Q195404
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a,6.0
	Operating System(s): 
	Keyword(s): kbole kbAPI kbvfp500 kbvfp600
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to display the Microsoft Word for Windows 97 print dialog
	box that always remains on top of all windows or applications without making
	Word visible.
	
	MORE INFORMATION
	================
	
	One problem encountered when you open Word's print dialog box from Visual FoxPro
	using OLE automation and do not show Word or the document window is that the
	following message may appear:
	
	  This action cannot be completed because the other application is busy. Choose
	  'Switch To' to activate the busy application and correct the problem.
	
	This usually occurs because Word's print dialog box appears behind the current
	window. To prevent this message, use the FindWindowA and SetWindowPos
	Application Program Interface (API) calls to make the print dialog box remain on
	top.
	
	Sample Code
	-----------
	
	     ***** Begin code sample *****
	     DECLARE LONG FindWindowA IN WIN32API ;
	        STRING class, ;
	        STRING title
	
	     DECLARE SetWindowPos IN WIN32API ;
	        LONG HWND, ;
	        LONG hwndafter, ;
	        LONG x, ;
	        LONG y, ;
	        LONG cx, ;
	        LONG cy, ;
	        LONG flags
	
	     oWord = CREATEOBJECT("Word.Application" )
	     oWord.Documents.Add
	     * Check background printing.
	     lBackground = oWord.Options.PrintBackground()
	     IF lBackground
	        oWord.Options.PrintBackground = .F.   && Turn off.
	     ENDIF
	
	     dlg = oWord.Dialogs(88)   && Open Print dialog box in Word.
	     dlg.SHOW
	
	     * Get the window handle to Word 97.
	     wordhandle = 0
	     DO WHILE wordhandle = 0
	        * Pass the class name for Word 97 "OpusApp" to FindWindowA
	        wordhandle = FindWindowA("OpusApp", NULL)
	     ENDDO
	
	     * Variables used in the SetWindowPos API.
	     swp_nosize = 1
	     swp_nomove = 2
	     hwnd_topmost = -1
	     hwnd_notopmost = -2
	
	     * Call SetWindowPos to make the print dialog stay on top.
	     lretval = 0
	     lretval = SetWindowPos(wordhandle,hwnd_topmost,;
	                  0,0,0,0,swp_nosize+swp_nomove)
	
	     * Turn on background printing if it was on before.
	     IF lBackground
	        oWord.Options.Printbackground = !oWord.Options.Printbackground
	     ENDIF
	     oWord.Quit
	     RETURN
	     ***** End code sample *****
	
	NOTE: On some machines, Word displays briefly and disappears whenever the print
	dialog box closes.
	
	REFERENCES
	==========
	
	"PC Magazine's Visual Basic Programmer's Guide to the Windows API" by Daniel
	Appleman, pages 215 and 243, Ziff-Davis Press.
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbAPI kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
