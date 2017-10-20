---
layout: page
title: "Q134438: PRB: Initializing Spell Checker Error When Running Spellchk"
permalink: /kb/134/Q134438/
---

## Q134438: PRB: Initializing Spell Checker Error When Running Spellchk

{% raw %}

	Article: Q134438
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the spell checker in Visual FoxPro, the following error can occur:
	
	  error initializing spell checker: problem with state of spell checker module.
	  code 142.
	
	CAUSE
	=====
	
	Visual FoxPro makes a call to the \Windows\Msapps\Proof directory and uses files
	located in that directory to aid in spell checking a document. There is a file
	in the Proof directory called Custom.dic that saves customized words that can be
	used when spell checking. This is the file that is causing the problem.
	
	RESOLUTION
	==========
	
	Remove or rename the Custom.dic file to eliminate the error message. By renaming
	the file, some or most of the custom words can be saved and added to a new
	file.
	
	If custom words in the Custom.dic file need to be saved, add a few lines at a
	time to a new file. Then check to see if they are valid by spell checking a
	document in Visual FoxPro. Continue in this way until the error occurs. Then
	you'll know which lines to omit.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	As Visual FoxPro spell checks a document, it looks in the Custom.dic file and
	uses any custom words contained in it to check against words used in the
	document it is spell checking. If there are any unusual characters in this file,
	Visual FoxPro displays the error. Other applications, such as Microsoft Word,
	operate correctly even though these characters are in the Custom.dic file.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using Notepad, open the Custom.dic file located in the \Windows\Msapps\Proof
	  directory.
	
	2. Add an ASCII character by holding down the ALT key as you enter 0236 by using
	  the numeric keypad. This makes a character that looks like "I" with a dash
	  above it.
	
	3. Save the file, and close Notepad.
	
	4. Start Visual FoxPro, and try spell checking a document to see the error
	  message.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
