---
layout: page
title: "Q184124: Service Still Runs Although WinNT Prompts to Turn Off Computer"
permalink: kb/184/Q184124/
---

## Q184124: Service Still Runs Although WinNT Prompts to Turn Off Computer

	Article: Q184124
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Disk activity remains constant even though Windows NT Server or Workstation
	displays the following message:
	
	  It is now safe to turn off your computer.
	
	CAUSE
	=====
	
	This behavior can be caused by a service not properly notifying the Windows NT
	Service Control Manager (SCM) that it is still running. It is the service's
	responsibility to let the SCM know that it is still active. If the SCM is aware
	that a service is still pending shut down, it, by default, will wait 20 seconds
	before killing the service. If the service has incorrectly notified the SCM, the
	SCM may assume that the service has shut down.
	
	This behavior has been seen with virus-scanning software
	
	RESOLUTION
	==========
	
	As a workaround, verify that a scheduled scan is not due to run before you start
	the Shut Down procedure.
	
	MORE INFORMATION
	================
	
	For other services experiencing the problem, the amount of time that Windows NT
	waits for services to shut down can be increased using the
	WaitToKillServiceTimeout value name in the registry.
	
	For additional information on increasing the wait time, please see the following
	article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q146092
	  TITLE : How to Increase Shutdown Time For Services To Close Properly
	
	Additional query words: HD light flash flashes blink blinking blinks disk drive restart
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
