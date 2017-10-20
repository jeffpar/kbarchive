---
layout: page
title: "Q170907: Err Msg: Explorer.exe - Exception: Access Violation (0xC0000005)"
permalink: /kb/170/Q170907/
---

## Q170907: Err Msg: Explorer.exe - Exception: Access Violation (0xC0000005)

{% raw %}

	Article: Q170907
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log in to Windows NT, you may receive the following error message:
	
	  Explorer.exe - Exception: access violation (0xc0000005)
	
	CAUSE
	=====
	
	This error message can occur if the Windows 95 version of the Explorer.exe file
	has been copied to the root folder or the Windows NT folder.
	
	RESOLUTION
	==========
	
	If there is a Windows 95 version of the Explorer.exe file in the root folder,
	follow these steps:
	
	1. Click OK to acknowledge the Dr. Watson error message.
	
	2. Press CTRL+ALT+DELETE, and then click Task Manager.
	
	3. Click New Task.
	
	4. Load Explorer.exe from the Winnt folder.
	
	5. Click Start, click Run, type "%SystemRoot%\explorer.exe" in the Run box, and
	  then click OK.
	
	6. Rename the Windows 95 version of the Explorer.exe file in the root folder, or
	  move it to another folder.
	
	7. Restart the computer.
	
	If there is a Windows 95 version of the Explorer.exe file in the Windows NT
	folder, follow these steps:
	
	1. Click OK to acknowledge the Dr. Watson error message.
	
	2. Press CTRL+ALT+DELETE, and then click Task Manager.
	
	3. Click New Task.
	
	4. Load the Windows NT command prompt by typing "cmd.exe" (without quotation
	  marks.
	
	5. At the command prompt, rename the Explorer.exe file in the Windows NT folder.
	  For example, type:
	
	  ren c:\winnt\explorer.exe c:\winnt\explorer.w95
	
	6. With the Windows NT CD-ROM inserted in the CD-ROM drive, change to the CD-ROM
	  drive letter.
	
	7. Change to the appropriate machine folder. For example, change to the I386
	  folder for Intel-based computers.
	
	8. Expand the Explorer.exe file from the I386 folder on the Windows NT CD-ROM to
	  the %SystemRoot% folder on the hard disk. For example, type the following
	  command:
	
	  expand explorer.ex_ %systemroot%\explorer.exe
	
	9. In Task Manager, click New Task.
	
	10. Type "explorer.exe" (without the quotation marks).
	
	11. Restart the computer.
	
	Additional query words: 0x5
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
