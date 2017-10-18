---
layout: page
title: "Q193405: Err Msg: Event ID 7024: The Task Scheduler Service Terminated..."
permalink: kb/193/Q193405/
---

## Q193405: Err Msg: Event ID 7024: The Task Scheduler Service Terminated...

	Article: Q193405
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:4.01; WINNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg msient
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Explorer version 4.01 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you reinstall Windows NT 4.0 Service Pack 3, you may see the following error
	message in Event Viewer:
	
	  Event ID: 7024
	  Description: The task scheduler service terminated with server specific
	  error 2148073478
	
	CAUSE
	=====
	
	This behavior can occur if you reinstall Service Pack 3 when Internet Explorer
	4.01 is installed on the computer.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Run box, type in "regsvr32 rsabase.dll" (without the quotation marks)
	  and click OK.
	
	3. Stop and then restart the Task Scheduler service. To do so, follow these
	  steps:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Services.
	
	  c. In the list of services, click Task Scheduler, click Stop, and then click
	     Yes when you are prompted to stop the Task Scheduler service.
	
	  d. Click Start, and then click Close.
	
	  If the behavior persists, continue with step 4.
	
	4. In Control Panel, double-click Add/Remove Programs.
	
	5. On the Install/Uninstall tab, click Task Scheduler 1.0 (Remove Only), click
	  Add/Remove, click Yes when you are prompted to remove Task Scheduler, and
	  then click Yes when you are prompted to restart your computer.
	
	6. Click Start, point to Settings, and then click Control Panel.
	
	7. Double-click Add/Remove Programs.
	
	8. On the Install/Uninstall tab, click Microsoft Internet Explorer 4.0 in the
	  list of installed programs, and then click Add/Remove.
	
	9. In the Internet Explorer 4.0 Active Setup box, click "Add a component to
	  Internet Explorer," and then click OK.
	
	10. Click Yes when you are prompted with the following message:
	
	  Active Setup is about to determine what Internet components are installed on
	  your computer. Is this OK?
	
	11. In the Component Download page, click the Task Scheduler check box to select
	  it, and then click Next.
	
	12. Click a download site, and then click Install Now. Follow any additional
	  instructions on the screen.
	
	13. Restart your computer once Task Scheduler is installed.
	
	======================================================================
	Keywords          : kberrmsg msient 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbIEsearch kbZNotKeyword2 kbIENT400Search kbZNotKeyword3 kbIE401WinNT400
	Version           : WINDOWS:4.01; WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
