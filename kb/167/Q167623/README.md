---
layout: page
title: "Q167623: WD97: &quot;Check Drive&quot; Error When File Name Has Extended Characters"
permalink: /kb/167/Q167623/
---

## Q167623: WD97: &quot;Check Drive&quot; Error When File Name Has Extended Characters

{% raw %}

	Article: Q167623
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:7.0,7.0a,97
	Operating System(s): 
	Keyword(s): kbnetwork kbusage kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word for Windows 95, versions 7.0, 7.0a 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you save a file with a file name that contains extended characters, you may
	receive the following error message:
	
	  Check the drive to make sure the door is closed and it contains the correct
	  disk or CD.
	
	This problem occurs when all of the following conditions are true:
	
	- You are saving the file to another Windows 95 computer over a network. (The
	  problem does not occur if you are saving to an NT server.)
	
	  -and-
	
	- You are using a non-English language version of Word and you are using the
	  U.S. code page.
	
	  -and-
	
	- The name you are giving the file contains extended characters.
	
	CAUSE
	=====
	
	The extended characters you are typing in the file name is not supported by the
	U.S. code page.
	
	WORKAROUND
	==========
	
	To resolve this problem, use one of the following workarounds:
	
	- Save the file to the local hard disk drive and then copy it to the server.
	
	  -or-
	
	- Give the file a name that does not contain extended characters.
	
	  -or-
	
	- Change the code page to match the country settings your are using.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The most common extended characters that cause this problem are listed in the
	following table.
	
	  Character         Keystroke to get the character
	  ------------------------------------------------
	
	  "a" accent grave          ALT+0224
	  "a" accent acute          ALT+0225
	  "o" accent grave          ALT+0242
	  Dieresis "i"              ALT+0239
	  Tilde "n"                 ALT+0241
	  Derisis "y"               ALT+0255
	
	Microsoft Word cannot open files with extended characters in the file name across
	a network on systems running Windows 95 or 98. \**
	
	
	REFERENCES
	==========
	
	For more information about code pages, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q163813 WD97: International Characters Incorrectly Mapped
	
	  Q159471 WD97: How to Install the Far East Support Files
	
	  Q159418 WD97: Some Printers Won't Print Unicode Characters
	
	  Q163393 "Cant Save File" After Changing Regional/Keyboard Setting
	
	  Q150620 Error Message Changing the Default Language
	
	  Q134599 Cannot Access Shared Folder with Extended Characters in Name
	
	  Q136510 Unexpected Behavior with ALT+<num> Key Combinations in Notepad
	
	  Q131702 Cannot Delete Files or Folders with Extended Characters
	
	For more information about non-English language support, click the Office
	Assistant, type " foreign language," click Search, and then click "What's new in
	multilingual support?"
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: codepage
	
	======================================================================
	Keywords          : kbnetwork kbusage kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbWord700Search kbZNotKeyword2 kbWord700 kbWord700a
	Version           : WINDOWS:7.0,7.0a,97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
