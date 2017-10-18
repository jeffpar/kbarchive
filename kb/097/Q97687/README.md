---
layout: page
title: "Q97687: Starting Word for Windows with Template Other Than Normal"
permalink: kb/097/Q97687/
---

## Q97687: Starting Word for Windows with Template Other Than Normal

	Article: Q97687
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro kbualink97 kbusage kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	By default, when you start Word, it opens a new document based on the Normal
	template (Normal.dot). You can, however, specify starting Word and opening a new
	document based on an alternative template by using a command-line switch.
	
	MORE INFORMATION
	================
	
	To specify an alternative template using a command-line switch, follow these
	steps:
	
	1. Create a shortcut for Word.
	
	2. Right-click the shortcut. Click Properties.
	
	3. Click the Shortcut tab and change the Target line to:
	
	  c:\<WordFolder>\winword.exe /t<templatename>
	
	  where <WordFolder> is the path to the Winword.exe program, and
	  <templatename> is the full path to the template. If the path or the
	  template file name uses a long file name, enclose the path and template name
	  in quotation marks. Make sure there is no space between the /t switch and
	  <templatename>.
	
	
	For more information about controlling what happens when you start Word 97, click
	the Office Assistant, type "start Word," click Search, and then click to view
	"Control what happens when you start Word."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar.
	
	Additional query words: switch winword start-up parameters word7 arguments startup another word8 word97 8.0
	
	======================================================================
	Keywords          : kbmacro kbualink97 kbusage kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
