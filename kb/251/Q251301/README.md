---
layout: page
title: "Q251301: ErrMsg: Error Occurred Getting Driver List from Inf File"
permalink: /kb/251/Q251301/
---

## Q251301: ErrMsg: Error Occurred Getting Driver List from Inf File

	Article: Q251301
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the properties of the SCSI tool in Control Panel, you may receive
	the following error message:
	
	  Error
	
	  Error occurred getting driver list from inf file. Error=536870386
	
	CAUSE
	=====
	
	This issue can occur if the version of the Cfgmgr32.dll file in the System32
	folder is the wrong version.
	
	RESOLUTION
	==========
	
	To resolve this issue, extract a new copy of the Cfgmgr32.dll file to the
	%SystemRoot%\System32 folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	If the Cfgmgr32.dll file is in use when you try to rename it, use the Inuse.exe
	tool to replace the file the next time you restart the computer. For additional
	information about the Inuse.exe tool, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q228930 How to Replace Currently Locked Files with Inuse.exe
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
