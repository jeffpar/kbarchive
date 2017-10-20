---
layout: page
title: "Q93236: Using IBM DLC with Windows for Workgroups 3.10"
permalink: /kb/093/Q93236/
---

## Q93236: Using IBM DLC with Windows for Workgroups 3.10

{% raw %}

	Article: Q93236
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SUMMARY
	=======
	
	Windows for Workgroups was not designed to support the use of IBM LAN Support
	drivers. These drivers provide a data link control interface and perform many of
	the same functions as Windows for Workgroups real-mode components.
	
	MORE INFORMATION
	================
	
	IBM LAN Support drivers DXMAxMOD.SYS and DXMCxMOD.SYS form a monolithic
	stack and perform a similar function to the Windows for Workgroups real-
	mode protocol manager and NDIS driver. Since these drivers do provide
	NetBIOS services, the Windows for Workgroups network, including peer-to-
	peer functionality, can be made to work with them.
	
	The drivers cannot be used with Windows for Workgroups unless the protocol
	manager (PROTMAN.DOS) and Network Driver Interface Specification (NDIS)
	driver (for example, IBMTOK.DOS) have been removed from the CONFIG.SYS
	file. By making the modifications below, you can configure your Windows for
	Workgroups network to run with the IBM LAN Support drivers.
	
	<B>WARNING</B>: Once these changes have been made, you will undo them if you make
	any changes through Control Panel, Networks, Adapters. This writes the
	removed files back into the CONFIG.SYS and AUTOEXEC.BAT files.
	
	Installing IBM LAN Support Drivers (Data Link Control)
	------------------------------------------------------
	
	1. Edit the CONFIG.SYS file and remove the following lines:
	
	     Device=c:\windows\protman.dos /i:c:\windows  <-- the protocol
	                                                       manager
	     Device=c:\windows\IBMTOK.DOS                 <-- the NDIS
	                                                      driver
	
	2. Add the following IBM LAN Support driver lines:
	
	     Device=c:\lansup\DXMA0MOD.SYS
	     Device=c:\lansup\DXMC0MOD.SYS
	     Device=c:\windows\workgrp.sys /n
	     Device=c:\lansup\DXMT0MOD.sys O=N ST=10 S=25 C=22 ES=2 EST=2
	
	  In the above syntax, ST=stations, S=sessions, C=commands,
	  ES=extra.saps and EST=extra.stations.
	
	3. Edit the AUTOEXEC.BAT file and remove the following line:
	
	     Net Start
	
	4. Restart the computer and Windows for Workgroups.
	
	The data link control IBM LAN Support drivers are most commonly used by
	3270 terminal emulators to communicate with IBM mainframes and by 5250
	terminal emulators to communicate with IBM AS/400s, using Advanced Program-
	to-Program Communications (APPC).
	
	For help with data link control IBM LAN support drivers, call IBM product
	support services.
	
	For additional information on integrating Microsoft data link control with
	Windows for Workgroups, consult the Windows for Workgroups Resource Kit,
	Appendix E.
	
	Support provided by Microsoft Product Support Services for LAN Manager
	is available on a fee-basis. For additional information about Microsoft
	support options, call the Microsoft Sales Information Center at
	(800) 426-9400, Monday through Friday, 6:30 A.M. to 5:30 P.M., Pacific
	time, excluding holidays.
	
	Additional query words: 3.10 DXMA0MOD.SYS DXMC0MOD.SYS DXMT0MOD.SYS datalink SDLC DLC reboot boot real mode
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
