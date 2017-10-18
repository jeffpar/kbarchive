---
layout: page
title: "Q119372: Setting the Name Resolution Search Order for TCP/IP-32"
permalink: kb/119/Q119372/
---

## Q119372: Setting the Name Resolution Search Order for TCP/IP-32

	Article: Q119372
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Microsoft TCP/IP-32 stack uses various means to resolve a host name to an IP
	address of a given host. Four mechanisms are used; Local Cached Information,
	Hosts File, DNS Servers, and NetBIOS name resolution mechanisms. The default
	resolution order for resolving a host name is Local Cached Information ->
	Hosts File -> DNS Servers -> NetBt (NetBIOS over TCP/IP). NetBIOS over
	TCP/IP name resolution can consist of local subnet broadcasts.
	
	
	MORE INFORMATION
	================
	
	Under most circumstances, the default resolution order does not need to be
	changed. However, if a change is necessary there are SYSTEM.INI parameters that
	you can use to alter this default behavior. This is done by using the four
	parameters: LocalPriority, HostsPriority, DnsPriority, and NetbtPriority. These
	parameters are Specified in the [DNS] section of the SYSTEM.INI file. Valid
	values can be between -32768 and 32767. The lower the value, the higher the
	priority in the search order. If you specify any of these parameters in the
	SYSTEM.INI, only those parameters specified will take effect, and none of the
	other resolution methods will be used.
	
	Example
	-------
	
	  [DNS]
	  DnsPriority=1
	  HostsPriority=2
	
	Will search the configured DNS server first, followed by the local HOSTS file.
	Local Cached Information and NetBIOS name resolution mechanisms would not be
	used.
	
	Additional query words: wfw wfwg prodtcp32 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : :3.11; WINDOWS:3.11
	
	=============================================================================
	
