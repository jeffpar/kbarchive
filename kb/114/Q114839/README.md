---
layout: page
title: "Q114839: Net Start Fails When TCP/IP is the Only Protocol"
permalink: /kb/114/Q114839/
---

## Q114839: Net Start Fails When TCP/IP is the Only Protocol

{% raw %}

	Article: Q114839
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft TCP/IP, version 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use TCP/IP as the only network protocol on a Windows for Workgroups
	3.11 network installation (using the SETUP /N command), upon starting the
	computer, when the NET START command is started and after seeing the banner for
	the TCP/IP driver successful load you may receive the following message:
	
	  ERROR 7361: IPX or NetBIOS must be running in order to load the network
	  services.
	
	CAUSE
	=====
	
	When you install Windows for Workgroups 3.11 in network mode, network
	functionality is enabled by default so that the real mode full redirector loads
	and the following lines are added :
	
	  AUTOEXEC.BAT :
	
	  NET START
	
	  SYSTEM.INI / [Network]:
	
	  AutoStart=FULL
	
	The TCP/IP protocol needs to load several modules (UMB, TCPTSR, TINYRFC,
	NMTSR.EXE, EMSBFR.EXE) after the NDIS2 protocol binding and before the
	redirector load, and thus the error message.
	
	WORKAROUND
	==========
	
	Edit AUTOEXEC.BAT and replace the line
	
	  NET START
	
	with:
	
	  NET START NETBIND
	
	After the lines that load other modules needed by TCP/IP (UMB, TCPTSR, TINYRFC,
	NMTSR.EXE, EMSBFR.EXE) add one of the following lines:
	
	  NET START WORKSTATION
	
	-or-
	
	  NET LOGON
	
	This will correct the binding sequence of both TCP/IP and the redirector. You may
	also delete the Autostart=FULL line in SYSTEM.INI and adding a NET START
	WORKSTATION line after all TCP/IP components have loaded but this has the
	disadvantage that any further modification using the Network Setup applet will
	reinsert the AutoStart=FULL line in SYSTEM.INI, thus reenabling the error
	condition. On the contrary NET START NETBIND is not modified by the Network
	Setup Applet.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: wfw wfwg 3.11 nttcp ntprotocol
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbWFW310 kbWFW311 kbTCPIP100a
	Version           : :1.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
