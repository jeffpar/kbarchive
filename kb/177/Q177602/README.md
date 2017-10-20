---
layout: page
title: "Q177602: NET USE to a NetWare resource with CSNW / GSNW i"
permalink: /kb/177/Q177602/
---

## Q177602: NET USE to a NetWare resource with CSNW / GSNW i

{% raw %}

	Article: Q177602
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to a computer running Windows NT Workstation with
	Client Services for NetWare (CSNW) installed and to a computer running Windows
	NT Server with Gateway Services for NetWare (GSNW) installed.
	
	When using a NET USE command to connect to a NetWare resource, the time it takes
	to connect is notably longer than when using NET USE to connect to a Microsoft
	resource.
	
	CAUSE
	=====
	
	In Windows NT 3.51, the network provider search order is controlled by options
	set using the Networks button in the Network tool of Control Panel. In Windows
	NT 4.0, it is controlled by using the Network Access Order button found on the
	Services tab of the Network tool in Control Panel. These buttons are unavailable
	unless CSNW or GSNW are installed. If the Network Access order has Microsoft
	Windows Network listed as the highest priority under Network Providers, the
	delay in connecting to NetWare resources will occur.
	
	MORE INFORMATION
	================
	
	With both the Microsoft and NetWare (CSNW/GSNW) redirectors installed and with
	Microsoft networks having priority, Windows NT will attempt to resolve any
	machine name specified with NET USE through whatever NetBIOS name resolution
	methods available. These methods can include NetBIOS broadcast for NetBEUI and
	NWLink, and a multitude of methods for TCP/IP, including NetBIOS name cache,
	WINS, b-node broadcast, LMHOSTS file, HOSTS file, and DNS. Only after these
	methods fail will the NET USE command be passed from the Microsoft redirector to
	the NetWare redirector. After the NetWare redirector receives the command, name
	resolution is very quick through a SAP query.
	
	RESOLUTION
	==========
	
	To resolve this issue, change the network provider access order such that the
	NetWare or Compatible Network is highest on the list. With this change, all NET
	USE commands will be passed first to the NetWare redirector for name resolution.
	This change may also be better for situations where File Manager or Explorer is
	used more often than NET USE. However, this change is not desirable in many
	cases.
	
	An alternate syntax for the NET USE command exists that is invalid for use with
	Microsoft resources but is valid for use with CSNW or GSNW. Use of this syntax
	will cause the Microsoft redirector to instantly pass the command to the NetWare
	redirector. The following standard command is valid for Microsoft or NetWare
	resources:
	
	" NET USE X: \\SERVER\RESOURCE " (without the quotation marks)
	
	Where X: is the desired drive letter to use (or * for the next available drive
	letter), SERVER is the name of the Microsoft or NetWare server, and RESOURCE is
	the Microsoft share or NetWare volume.
	
	For faster results when connecting to a NetWare resource, use the following
	syntax:
	
	" NET USE X: SERVER\RESOURCE: " (without the quotation marks)
	
	Where X: (or *) is the drive letter to use, SERVER is the name of the NetWare
	server, and RESOURCE: is the name of the NetWare volume. This syntax will be
	rejected by the Microsoft redirector and passed directly to the NetWare
	redirector. The command will complete much more quickly, reducing both the time
	to connect and network traffic generated to complete the command.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
