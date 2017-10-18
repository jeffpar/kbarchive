---
layout: page
title: "Q241942: HOWTO: Prevent Word Printing Error with BackgroundPrintingStatus"
permalink: kb/241/Q241942/
---

## Q241942: HOWTO: Prevent Word Printing Error with BackgroundPrintingStatus

	Article: Q241942
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2000,3.0,3.0b,5.0,5.0a,6.0,97
	Operating System(s): 
	Keyword(s): kbAutomation kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using OLE Automation to Microsoft Word 2000 or Microsoft Word 97 for
	Windows SR-1 or higher that prints a file, and then releases, closes, or quits
	the Word object, the following warning message might appear:
	
	  Word is currently printing. Quitting Word will cancel all pending print jobs.
	  Do you want to quit Word?
	
	The BackgroundPrintingStatus property of the Word.Application object returns the
	number of jobs in Word's Background Printing queue. By checking the value of
	this property, you can avoid the error message without disabling Background
	Printing.
	
	MORE INFORMATION
	================
	
	The following sample code shows one way to use this property:
	
	  oWord = CREATEOBJECT('Word.Application')
	  WITH oWord
	     .Documents.Add()
	     .Visible = .T.
	     .Selection.InsertAfter("Mark, why does that crate have air holes?")
	     .PrintOut()
	     DO WHILE .BackgroundPrintingStatus > 0
	        DOEVENTS()        && Make sure you leave the OS enough time to update 
	                          && the property
	        *!* =INKEY(.1)	&& Use INKEY if you're running under VFP 3.0 
	    ENDDO
	     .Application.Quit(0) && Quit, don't save and don't prompt
	  ENDwith
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Garrett Fitzgerald, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	For additional information, click the article number about suppressing errors in
	Word below to view the article about suppressing errors in Word in the Microsoft
	Knowledge Base:
	
	  Q170393 HOWTO: Prevent Word Printing Error with OLE Automation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2000,3.0,3.0b,5.0,5.0a,6.0,97
	Issue type        : kbhowto
	
	=============================================================================
	
