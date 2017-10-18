---
layout: page
title: "Q148345: Remote Shutdown Fails When Logon Screensaver Starts"
permalink: kb/148/Q148345/
---

## Q148345: Remote Shutdown Fails When Logon Screensaver Starts

	Article: Q148345
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to remotely shut down Windows NT 3.51 using the
	InitiateSystemShutdown API after it starts the Logon screensaver, the remote
	shutdown fails. This occurs for both SHUTCMD.EXE and SHUTGUI.EXE from the
	Windows NT Resource Kit 3.51.
	
	CAUSE
	=====
	
	This occurs if you have not logged on to Windows NT. By default, the Logon
	screensaver starts 15 minutes after the computer boots and there is no activity.
	This problem does not occur if the Logon screensaver starts through Control
	Panel Desktop after someone logs on to Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix
	to this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt 3.51 ss
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
