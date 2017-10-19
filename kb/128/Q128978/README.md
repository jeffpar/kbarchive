---
layout: page
title: "Q128978: Dead Gateway Detection in TCP/IP for Windows NT"
permalink: /kb/128/Q128978/
---

## Q128978: Dead Gateway Detection in TCP/IP for Windows NT

	Article: Q128978
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Microsoft TCP/IP for Windows NT provides a method of detecting whether or not
	the default gateway is still functioning. Dead gateway detection is enabled by
	default (on NT 3.51, 4.0 and above) when you install the TCP/IP protocol.
	However, Microsoft TCP/IP does not provide a method to detect when the default
	gateway returns to operation.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	For the dead gateway detection to work correctly, you must specify more than one
	default gateway address in the Advanced Options of the TCP/IP configuration
	dialog box in the Network portion of Control Panel. If the default gateway fails
	to respond to TCP requests after several tries, IP will direct packets to the
	address specified for a backup gateway.
	
	
	Here is an example of how Windows NT will behave when the current default gateway
	is unavailable, and you have more than one default gateway configured:
	
	Windows NT will switch to the next default gateway on the list. When the original
	default gateway comes back up, it broadcasts its routes to other intelligent
	routers.
	
	When Windows NT tries to access a network through the current default gateway, it
	will be informed of a better route (the original default gateway). Windows NT
	will add a host route to it's routing table, but will NOT switch back to the
	original default gateway. To switch back to using the original default gateway
	you will need to reboot the Windows NT Server.
	
	Note: If the second default gateway becomes unavailable, it will switch to the
	next default gateway configured on the list. When the end of the list of default
	gateways is reached, the search returns to the beginning again.
	
	For information about obtaining a RFC document, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q185262: How to Obtain Request for Comments Documents from the Internet
	
	The registry setting that enables dead gateway detection can be found in the
	following location of the Windows NT 3.5 Registry:
	
	  Key: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	
	  Value Name: EnableDeadGWDetect
	  Value Type: REG_DWORD
	  Value Range: 0 or 1 (False, True)
	
	  Default setting is 1 (True)
	
	Note: Dead gateway detection is enabled by default on Windows NT 3.51, 4.0 and
	above. This registry change applies to Windows NT 3.5 only.
	
	For additional information about dead gateway detection in Windows NT, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q171564 TCP/IP Dead Gateway Detection Algorithm Updated for Windows NT
	
	REFERENCES
	==========
	
	"Inter-Networking with Microsoft TCP/IP Using Microsoft Windows NT",
	Participant's Workbook, Microsoft WWT, 1993, pg. 72; Appendix A, pg. 217.
	
	Additional query words: prodnt gate routing pathway shortest
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
