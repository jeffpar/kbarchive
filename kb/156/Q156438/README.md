---
layout: page
title: "Q156438: Internet Mail or News Reader Software Hangs or Times Out"
permalink: /kb/156/Q156438/
---

## Q156438: Internet Mail or News Reader Software Hangs or Times Out

	Article: Q156438
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Internet mail or news reader may stop responding (hang) or time out in
	Windows 95.
	
	CAUSE
	=====
	
	This problem can occur if requests are routed through a "black hole" router.
	
	A black hole router does not return an Internet Control Message Protocol (ICMP)
	"destination unreachable" message when it needs to fragment a packet that has
	its Don't Fragment bit enabled.
	
	RESOLUTION
	==========
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	To correct this problem, add the string value
	
	  PMTUBlackHoleDetect
	
	to the following registry key:
	
	  Hkey_Local_Machine\System\CurrentControlSet\Services\VxD\MSTCP
	
	Add a data value of 1 for the new PMTUBlackHoleDetect string value.
	
	This setting specifies whether the stack attempts to detect Maximum Transmission
	Unit (MTU) routers that do not send ICMP fragmentation- needed messages. Setting
	this parameter when it is not needed can cause performance degradation. The
	default is 0.
	
	If you continue to experience the problem described in this article, add the
	string value
	
	  PMTUDiscovery
	
	to the following registry key:
	
	  Hkey_Local_Machine\System\CurrentControlSet\Services\VxD\MSTCP
	
	Add a data value of 1 for the new PMTUDiscovery string value.
	
	This setting specifies whether Microsoft TCP/IP attempts to perform path MTU
	discovery as specified in RFC 1191. The default is 1.
	
	MORE INFORMATION
	================
	
	Eudora versions 2.0.3 and 2.1.0 are examples of programs known to exhibit the
	problem described in this article. Eudora may pause when you try to send a
	message with more than 10 lines. After a few minutes, Eudora reports a time-out
	error.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
