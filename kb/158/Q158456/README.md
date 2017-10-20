---
layout: page
title: "Q158456: Hardware Requirements for Remote Boot of Windows NT 4.0"
permalink: /kb/158/Q158456/
---

## Q158456: Hardware Requirements for Remote Boot of Windows NT 4.0

{% raw %}

	Article: Q158456
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the hardware requirements for setting up a remote-boot
	server and clients under Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	Network Requirements
	--------------------
	
	Server and clients must be on the same subnet.
	
	Network Interface Cards (NICs)
	------------------------------
	
	SERVER: The Windows NT 4.0 Server can accommodate any NIC listed in the Windows
	NT 4.0 hardware compatibility list (HCL) that supports DLC and NetBEUI.
	
	CLIENTS: For information on client-NIC compatibility, please see the following
	article here in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q158455
	  TITLE : Supported Network Adapters for Remote-Boot Clients and WinNT 4.0
	
	System Requirements
	-------------------
	
	SERVER: The server's hardware must be listed in the HCL for Windows NT 4.0.
	
	CLIENTS: The clients' hardware must be listed in the HCL for the operating system
	being used.
	
	Disk Space Requirements on the Server
	-------------------------------------
	
	0perating System                        Space Required
	------------------------------------------------------
	LAN Manager version 2.2c for DOS        5.1 MB
	MS-DOS 3.30                             0.7 MB
	MS-DOS 4.01                             1.5 MB
	MS-DOS 5.00                             2.8 MB
	MS-DOS 6.x                              5.9 MB
	WINDOWS 3.1                            12.4 MB
	WINDOWS 95                              2.0 MB
	WINDOWS 95 SBS                           90 MB
	
	NOTE: Additional disk space is required for personal profiles and any program or
	files the client may load and save.
	
	Additional query words: nt rpl remote boot
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
