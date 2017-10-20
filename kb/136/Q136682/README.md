---
layout: page
title: "Q136682: Sharing Violation Accessing an Executable on an NTFS MAC Volume"
permalink: /kb/136/Q136682/
---

## Q136682: Sharing Violation Accessing an Executable on an NTFS MAC Volume

{% raw %}

	Article: Q136682
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt run an executable file on an Windows NT Macintosh volume from a
	Macintosh client, a sharing violation error appears if another Macintosh client
	is already running that executable.
	
	CAUSE
	=====
	
	For an application to share its executable file, its sharing option must be
	enabled. Most applications set the sharing option to "on" when they are
	installed on a server.
	
	RESOLUTION
	==========
	
	If your executable file's sharing option is not enabled, you must use the
	Macintosh Resource Editor (Resedit) to turn on the sharing feature.
	
	NOTE: Some applications do not support this mode.
	
	WARNING: Using the Macintosh Resource Editor (Resedit) incorrectly can cause
	serious, system-wide problems that may require you to reinstall your Macintosh
	system software or the modified program to correct problems. Microsoft cannot
	guarantee that any problems resulting from the use of Resedit can be solved. Use
	this tool at your own risk.
	
	To turn on multiple user sharing of programs for Macintosh clients:
	
	1. Connect to the Windows NT server that has the program.
	
	2. Close all programs that are running on your Macintosh computer.
	
	3. Start the Resedit program, if you do not have Resedit you can obtain a copy
	  from your local reseller or Apple Computer Corporation.
	
	4. From the Resedit file menu choose Get file/Folder Info...
	
	5. Choose your program from the Macintosh directory list. If the program is on a
	  server, first select the Desktop folder and then select the network drive you
	  connected to in step one.
	
	6. Once you have selected the program, choose the Get Info button.
	
	7. Check the Shared box in the Info for <program_name> dialog box.
	
	8. From the Resedit File menu choose Quit.
	
	9. Choose the Yes button when Resedit prompts you to save information for
	  <program_name>.
	
	The Macintosh computer is manufactured by Apple Computer Corporation; a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: mac sfm share exe
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
