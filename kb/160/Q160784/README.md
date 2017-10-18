---
layout: page
title: "Q160784: XADM: Errmsg: Initialization of Dynamic Link Library Kernel32"
permalink: kb/160/Q160784/
---

## Q160784: XADM: Errmsg: Initialization of Dynamic Link Library Kernel32

	Article: Q160784
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the National Language Support (NLS) Configuration Tool on your
	Windows NT Server computer, when you reboot, the following error message is
	displayed during the initialization portion of Kernel32.dll:
	
	  STOP: C0000142 {DLL INITIALIZATION FAILED}
	  Initialization of the dynamic link library
	  C:\<winntroot>\SYTEM32\KERNEL32.DLL failed
	  .the process is
	  terminating abnormally
	
	Depending on your specific configuration, your system may reboot, causing it to
	loop. Choosing LastKnownGoodConfiguration has no effect, nor does running
	Windows NT Recovery. A complete reinstall and backup recovery is necessary at
	this point.
	
	IMPORTANT: The NLS Configuration Tool is not supported on Windows NT Server
	versions 3.5 and earlier.
	
	WORKAROUND
	==========
	
	If code pages need to be installed on the Windows NT Server computer, follow the
	directions provided to manually install them. This utility has been replaced on
	the Web Site, so there should not be any further problems using this tool, if
	you downloaded the file recently.
	
	MORE INFORMATION
	================
	
	The NLS utility is used to install code pages to your Windows NT Server. It
	installs the code pages that are available in Windows NT Server. If you
	experience any problems, call Microsoft Technical Support, report the site the
	utility was downloaded from, and the date and time it was downloaded.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
