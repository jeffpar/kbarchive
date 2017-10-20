---
layout: page
title: "Q194306: HOWTO: Make Word Print Duplex Using Automation"
permalink: /kb/194/Q194306/
---

## Q194306: HOWTO: Make Word Print Duplex Using Automation

{% raw %}

	Article: Q194306
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use OLE automation from Visual FoxPro to
	Microsoft Word for Windows 97 to print a document duplex.
	
	MORE INFORMATION
	================
	
	Since the dialog box that sets duplex printing is part of the printer setup,
	there is not a direct command that you can issue that causes a document to print
	duplex. However, there are three ways that do work allowing you to print
	documents duplex.
	
	The printer used in this test is a Hewlett-Packard LaserJet printer, which
	supports duplex printing.
	
	Method 1
	--------
	
	Use the PRINT field in Word to send the printer escape code that puts the printer
	in duplex mode. The following code demonstrates this:
	
	     oWord=CREATEOBJECT("Word.Application")
	     WITH oWord
	        .Visible=.T.
	        .Documents.Add
	
	        .Activewindow.View.ShowFieldCodes=0   && Don't view field codes.
	        * Insert PRINT field & Hewlett-Packard escape code for duplex, long-
	        * edge binding.
	        * It is an ampersand, lower-case L, numeric 1, and upper-case S.
	        .Selection.Fields.Add(.Selection.Range,-1,"PRINT 27 &l1S")
	        .Selection.Moveright
	
	        .Selection.Insertafter("Page 1")
	        .Selection.Moveright
	
	        odlog=oWord.Dialogs(159) && Insert page break w/ Dialogs collection.
	        odlog.Execute
	
	        .Selection.Insertafter("Page 2")
	        .Selection.Moveright
	
	        .Printout(0)                   && 0 turns off background printing.
	
	        .Application.Quit(0)           && Quit, don't save & don't prompt.
	     ENDWITH
	
	This code does not work if the Word document contains mixed orientation, that is
	portrait and landscape sections.
	
	NOTE: This code only works with the Service Release-1 (SR-1) for Word 97. Prior
	versions of Word 97 do not duplex print using this code.
	
	For the Word document to print correctly, it should not contain headers or
	footers on every page. However, it should print duplex if the document is setup
	to have a different first page header or footer only and the PRINT field is
	inserted on the first line of the header followed by a carriage return.
	
	Method 2
	--------
	
	Use the SendKeys command to send keystrokes to Word, which simulates using
	keystrokes to open the Print dialog box.
	
	     oWord=CREATEOBJECT("Word.Application")
	     WITH oWord
	        .Visible=.T.
	        .Documents.Add
	
	        * This code creates a two page document to print.
	        .Selection.Insertafter("Page 1 - With SendKeys")
	        .Selection.Moveright
	        odlog=oWord.Dialogs(159) && Insert page break w/ Dialogs collection.
	        odlog.Execute
	        .Selection.Insertafter("Page 2 - With SendKeys")
	        .Selection.Moveright
	        * End of document creation.
	
	        .Application.Activate
	        .Wordbasic.Sendkeys("%fp%p%d{enter}{tab}{enter}", -1)
	        =INKEY(2)   && May need to wait couple seconds before quitting.
	        .Application.Quit(0)           && Quit, don't save & don't prompt.
	     ENDWITH
	
	In the Sendkeys command, the % sign represents using the ALT key to access
	Windows menus. The INKEY() command allows Word to process the keystrokes before
	Visual FoxPro for Windows processes the Quit. This may need to be adjusted up,
	down, or removed depending on the application.
	
	To use Sendkeys, Word must be visible, not minimized, since the keystrokes must
	go to an active window. You can move Word off screen by using the AppMove
	command, so that Word does not show, but the dialog box still displays. Also,
	using Sendkeys can be disconcerting because the menus and dialog boxes open and
	process as if you were in Word and pressed the ALT+F keys to open the File
	menu.
	
	Method 3
	--------
	
	Create a Word macro that issues the Sendkeys. If the macro is named SendKey, then
	run the macro from Visual FoxPro using the following command:
	
	       oWord=CREATEOBJECT("Word.Application")
	         WITH oWord
	         .Visible=.T.
	         .Documents.Add
	         .Application.Activate
	         .Run("SendKey")
	         .Application.Quit(0)           && Quit, don't save & don't prompt.
	      ENDWITH
	
	The minimum code for the Word macro to send the keys for duplex printing
	follows:
	
	     Sub SendKey()
	        SendKeys "%fp%p%d{enter}{tab}{enter}"
	     End Sub
	
	NOTE: Please see the NOTE in Method 2 for problems you may encounter using
	SendKeys.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q69939 How to Use Percent, Caret, and Plus SendKeys in WinWord
	
	  Q135569 WD: PCL Escape Codes to Use with the PRINT Field
	
	
	For more information about obtaining Word for Windows 97 Service Release 1
	(SR-1), please see the following article in the Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	
	Microsoft Word Visual Basic Help
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words: kbVFp600 kbole kbInterOp kbvfp500a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
