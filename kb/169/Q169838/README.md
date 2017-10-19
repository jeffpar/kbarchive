---
layout: page
title: "Q169838: DHCP Client Experiences Delays During Name Resolution"
permalink: /kb/169/Q169838/
---

## Q169838: DHCP Client Experiences Delays During Name Resolution

	Article: Q169838
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a dynamic host configuration protocol (DHCP) client is moved from a subnet
	where a Domain Name Service (DNS) server is configured through DHCP, to a subnet
	where no DNS server is used or available, delays may occur when names are being
	resolved. This can result in slow startup of applications such as Microsoft
	Outlook or Microsoft Exchange, or Web browsers.
	
	CAUSE
	=====
	
	If a network client obtains a DHCP lease from one server and then releases that
	lease, two registry values are not cleaned up:
	
	 HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\TCPIP
	    \Parameters\DhcpNameServer
	
	-and-
	
	 HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\TCPIP
	    \Parameters\DhcpDomain
	
	The Microsoft DHCP client software does not properly remove these values when a
	lease is released.
	
	WORKAROUND
	==========
	
	To work around this problem, perform one of the following:
	
	- Configure the DHCP scope for the subnet that the client is moving to, to
	  assign a DNS server if one is available.
	
	  -or-
	
	- Use Registry Editor to clear these values after the client is moved to the
	  new subnet.
	
	  If you expect to change frequently between DNS and non-DNS enabled
	  environments, you can use a registry file to easily disable the DNS entries
	  in the registry. To do this, perform the following steps:
	
	
	WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	  1. Use a text editor (such as Notepad) to create the following file and name
	     it Disabledns.reg:
	
	     REGEDIT4
	
	     ; Disable DNS entries in the registry.
	     ; There are 2 entries for this key, NameServer and DHCPNameServer
	     ; DHCPNameServer is written by the DHCP client service, if enabled.
	     ; But if the NameServer parameter has a valid value, it will
	     ; override the DHCPNameServer parameter.
	
	     [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	        \Tcpip\Parameters]
	        ; "NameServer"=""
	        "DhcpNameServer"=""
	
	  2. Save Disabledns.reg to your desktop, or create a shortcut to this file on
	     your desktop.
	
	     Running this file clears the DhcpNameServer registry entry. After you are
	     connected to the network, renewing the IP address from the DHCP server
	     recreates the correct entries in the registry and lets you use the name
	     server again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: delay name resolution ipconfig /release
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	
	=============================================================================
	
