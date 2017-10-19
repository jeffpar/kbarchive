---
layout: page
title: "Q120055: OS/2 IOPL Applications May Fail in Windows NT"
permalink: /kb/120/Q120055/
---

## Q120055: OS/2 IOPL Applications May Fail in Windows NT

	Article: Q120055
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10
	
	WINDOWS
	
	kb3rdparty kbbug3.10
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An OS/2 application with Ring2 code (an IOPL application) running in Windows NT
	may hang with the error message:
	
	  Error OS/2 error code 8
	
	Note: This is an OS/2 message. Other OS/2 applications may fail to run after a
	number of Ring2 applications are loaded.
	
	CAUSE
	=====
	
	By design, an OS/2 application with Ring2 code and no IN/OUT instructions cannot
	run on Windows NT. After you run about 90 such applications, no additional OS/2
	applications can be run until you stop and restart OS2SRV or reboot your
	computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
