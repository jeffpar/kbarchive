---
layout: page
title: "Q123486: Err Msg: Setup Error 110 During Installation of Microsoft DLC"
permalink: /kb/123/Q123486/
---

## Q123486: Err Msg: Setup Error 110 During Installation of Microsoft DLC

{% raw %}

	Article: Q123486
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): kbnetserv
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running only the Enhanced Mode NDIS driver [NDIS3] on your network
	interface card, you may have problems loading a real mode protocol such as
	Microsoft DLC. At first, a "Setup Error: 320:" message appears warning you that
	you have selected a real-mode protocol, but your network card is set up to run
	only protected mode protocols.
	
	NOTE: This message also appears when you attempt to install TCP/IP 16-bit
	protocol.
	
	If you modify the Network Interface Card driver to include a real mode NDIS2
	driver, and load the real mode protocol, the following error message appears:
	
	  Network Setup, Setup Error 110: Could not find or open the WIN.INI file.
	  The file may be missing or read-only. The changed settings will not take
	  effect.
	
	RESOLUTION
	==========
	
	To avoid this problem, do one of the following:
	
	- Before you add the real mode protocol, change the Network Interface Card,
	  NIC, driver to Real Mode and Enhanced Mode NDIS Driver [NDIS2/NDIS3]. Reboot
	  the system, then return to Network Setup to add the real mode protocol.
	
	-or-
	
	- Update your installation of Windows for Workgroups with the files from the
	  Windows NT Server version 3.5 CD-ROM under CLIENTS\WFW\UPDATE. This will
	  allow a simultaneous update of the NIC NDIS driver and the addition of a real
	  mode protocol.
	
	Additional query words: wfw wfwg adapter prodwfw 3.11
	
	======================================================================
	Keywords          : kbnetserv 
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
