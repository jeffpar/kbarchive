---
layout: page
title: "Q197302: How to Install MS Loopback with Unattended Installations"
permalink: /kb/197/Q197302/
---

## Q197302: How to Install MS Loopback with Unattended Installations

	Article: Q197302
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS Loopback Adapter is a valuable tool for testing in a virtual network
	environment where access to a network is not feasible. Also, MS Loopback is
	essential if there are conflicts with a network card or a network adapter
	driver. Network clients, protocols, and so on, can be bound to MS Loopback and
	then the network adapter driver, or network adapter, can be installed at a later
	time, but the network configuration information will still be retained. The MS
	Loopback Adapter can be installed during the unattended installation process.
	
	MORE INFORMATION
	================
	
	Modify the Unattend.txt file as follows to install only the MS Loopback Adapter
	and not to detect a network adapter on the target system:
	
	     [Network]
	     InstallAdapters = AdaptersList
	     InstallProtocols = ProtocolsSection
	     JoinWorkgroup = MyGroup
	     DoNotInstallInternetServer = Yes
	
	     [AdaptersList]
	     LOOP = LOOPParamSection
	
	     [LOOPParamSection]
	
	If you are installing the TCP/IP protocol, specify the following settings:
	
	     [ProtocolsSection]
	     TC = TCParameters
	
	     [TCParameters]
	     DHCP = No
	     IPAddress = 10.10.10.1
	     Subnet = 255.255.255.0
	
	REFERENCES
	==========
	
	For additional information about troubleshooting using MSloopback, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q126690 Windows NT 4.0 Setup Troubleshooting Guide
	
	  Q155197 Unattended Setup Parameters for Unattend.txt File
	
	Also, consult the following resource on the Microsoft Web site:
	
	  http://www.microsoft.com/ntworkstation/info/deployguide.htm
	
	Additional query words: unattend deploy msloopback
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
