---
layout: page
title: "Q179984: Bookshelf 98 Err Msg: Install Aborted! Internal Error"
permalink: /kb/179/Q179984/
---

## Q179984: Bookshelf 98 Err Msg: Install Aborted! Internal Error

{% raw %}

	Article: Q179984
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Bookshelf 98, you may receive the following error
	message:
	
	  Install Aborted! Internal Error
	
	CAUSE
	=====
	
	This behavior can occur if the path specified for the TEMP environment variable
	in the Autoexec.bat file is invalid.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable the Set Temp statement in the Autoexec.bat file.
	To do so, use the following steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "notepad c:\autoexec.bat" (without the quotation
	  marks), and then click OK.
	
	3. In the Autoexec.bat window, type "rem" (without the quotation marks) followed
	  by a blank space at the beginning of any line that begins with "set temp="
	  (without quotation marks).
	
	4. On the File menu, click Save.
	
	5. On the File menu, click Exit.
	
	6. Restart the computer.
	
	MORE INFORMATION
	================
	
	If you have a TEMP environment variable set in your Autoexec.bat file, Windows
	95 preserves the setting for MS-DOS-based programs to use. If the TEMP
	environment variable is not set in the Autoexec.bat file, Windows 95 creates and
	maintains the following folder for its own use and the use of Windows-based
	programs
	
	  <drive>:\<windows>\Temp
	
	where <drive> is the drive on which Windows 95 is installed and
	<windows> is the folder in which Windows 95 is installed.
	
	If you delete this folder, Windows 95 re-creates the folder the next time you
	start Windows 95.
	
	Additional query words: 98 multimedia mmtitles temporary tmp
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1998
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
