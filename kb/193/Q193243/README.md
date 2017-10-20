---
layout: page
title: "Q193243: HOWTO: Set the Default Window's Printer Using OLE Automation"
permalink: /kb/193/Q193243/
---

## Q193243: HOWTO: Set the Default Window's Printer Using OLE Automation

{% raw %}

	Article: Q193243
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how you can use OLE automation to open the Printer Setup
	dialog box in Word 97 for Windows and change the default Windows printer.
	
	MORE INFORMATION
	================
	
	Microsoft Word has the ability to open a Printer Setup dialog box that allows
	the user to select another printer as the default printer. The following code
	demonstrates how to accomplish this task:
	
	     *** Begin code example ***
	     oWord=CREATEOBJECT("Word.Application")
	     dlg = oWord.Dialogs(97)   && Open printer setup dialog box in Word.
	     WITH dlg
	        .Show
	     ENDWITH
	     oWord.Quit
	  *** End code example ***
	
	When the code executes, a Printer Setup dialog box appears that contains the
	current Windows printers. From this dialog box, you can reset the current
	default printer. After choosing the printer, Word briefly appears but then
	closes.
	
	REFERENCES
	==========
	
	Microsoft Word Visual Basic Help
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words: kbVFp600 kbVFp500a kbOLE
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
