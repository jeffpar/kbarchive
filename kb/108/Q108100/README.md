---
layout: page
title: "Q108100: PC-NFS Error: NFS903F Missing or Invalid PROTOCOL.INI Data"
permalink: /kb/108/Q108100/
---

## Q108100: PC-NFS Error: NFS903F Missing or Invalid PROTOCOL.INI Data

	Article: Q108100
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Sun Select's PC-NFS with Windows for Workgroups 3.11, you may receive
	the following error message upon executing the PC-NFS files in the AUTOEXEC.BAT
	file:
	
	  NFS903F Missing or invalid PROTOCOL.INI data.
	
	CAUSE
	=====
	
	This error occurs when the PC-NFS protocol is bound to more than one network
	card in the PROTOCOL.INI file. PC-NFS allows for only one binding. Windows for
	Workgroups 3.11, when installed on a machine with more than one network card,
	adds the PC-NFS protocol to all network adapters listed in the PROTOCOL.INI
	file.
	
	RESOLUTION
	==========
	
	To eliminate this error message, the PC-NFS protocol should be removed from all
	but one of the network cards listed in PROTOCOL.INI. To do this, use the
	following steps:
	
	1. If Windows for Workgroups fails to start after receiving the error message at
	  startup, start Windows with the following command:
	
	  win /n
	
	  This starts Windows for Workgroups 3.11 without loading the network drivers.
	
	2. Double-click the Network Setup icon in the Network group, then choose the
	  Drivers button.
	
	3. Locate the network adapter(s) to which you do NOT want to bind the PC- NFS
	  protocol. Select PC-NFS Protocol under each of these listed adapters and then
	  choose Remove.
	
	4. Choose OK, and allow Windows for Workgroups to make all suggested changes to
	  your configuration files. Once this is done, reboot the machine.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows for Workgroups
	version 3.11. We are researching this problem and will post new information here
	as it becomes available.
	
	Additional query words: err msg 3rdparty 3.11 pc nfs Sun Select unix
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
