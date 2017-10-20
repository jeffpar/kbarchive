---
layout: page
title: "Q85903: CodeView Err Msg: Attempted to Run Protected Mode..."
permalink: /kb/085/Q85903/
---

## Q85903: CodeView Err Msg: Attempted to Run Protected Mode...

{% raw %}

	Article: Q85903
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start Microsoft CodeView under Windows 3.0 in a 386 enhanced mode
	MS-DOS session, the following error message is displayed:
	
	  You have attempted to run a protected-mode application under 386 enhanced
	  mode. To run the application, exit and run Windows using either the WIN /s or
	  the WIN /r command.
	
	However, using WIN with the /s or /r option is unnecessary. To avoid the error
	message, start CodeView with the /e option, as follows, to tell CodeView that
	expanded memory is available:
	
	  cv /e
	
	This information applies to Microsoft CodeView versions 2.35, 3.0, 3.1, 3.11, and
	3.14 for MS-DOS, and to Windows version 3.0.
	
	MORE INFORMATION
	================
	
	If, after you receive the error message, you return to the MS-DOS session and
	wait a few seconds, CodeView may start. To avoid the error message, start
	CodeView as follows with the expanded memory (/E) option (where
	<FILENAME.EXE> is the name of the program you want to open):
	
	  cv /e <filename.exe>
	
	To increase the size of programs that can be loaded into CodeView in conjunction
	with the /e switch, create a PIF (program information file) for CodeView, and
	specify -1 for the expanded memory KB limit. This will instruct Windows to give
	the program all the EMS that it needs.
	
	CodeView will run without the above error message in a Windows 3.0 MS-DOS session
	in standard mode with the WIN /S option.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  memory and requirements and real-mode and codeview and cv.exe
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
