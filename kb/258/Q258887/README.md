---
layout: page
title: "Q258887: Err Msg: Error 26151. Installation of Telnet Client Failed"
permalink: /kb/258/Q258887/
---

## Q258887: Err Msg: Error 26151. Installation of Telnet Client Failed

	Article: Q258887
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbsetup
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows Services for UNIX Version 2.0, you may receive the
	following error message:
	
	  Error 26151. Installation of Telnet Client failed.
	
	CAUSE
	=====
	
	This issue can occur if the Windows 2000 Telnet client and server files are
	missing when Windows Services for Unix Setup attempts to back them up.
	
	NOTE: If you uninstall a beta version of Services for Unix, you may remove these
	files.
	
	RESOLUTION
	==========
	
	To resolve this issue, restore the Telnet client and server files from the
	Windows 2000 CD-ROM.
	
	Type the following commands at a command prompt, pressing ENTER after each
	command:
	
	  copy <CD-ROM>:\i386\telnet.exe <WINNT>\system32
	  expand -r <CD-ROM>:\i386\tlntsvr.ex_ <WINNT>\system32
	  expand -r <CD-ROM>:\i386\tlntsvrp.dl_ <WINNT>\system32
	  expand -r <CD-ROM>:\i386\tlntsess.ex_ <WINNT>\system32
	
	where <WINNT> is the system folder in which Windows is installed and
	<CD-ROM> is your CD-ROM drive that contains the Windows 2000 CD-ROM.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 2000.
	
	Additional query words: sfu solar coaster solarcoaster
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbsetup 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
