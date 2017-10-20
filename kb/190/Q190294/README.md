---
layout: page
title: "Q190294: Use of all Numeric NetBIOS Names Can Cause Problems"
permalink: /kb/190/Q190294/
---

## Q190294: Use of all Numeric NetBIOS Names Can Cause Problems

{% raw %}

	Article: Q190294
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): Windows:3.11,95,98;WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbNetBIOS kbSDKPlatform kbGrpDSNet
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use all numeric NetBIOS computer names, some TCP/IP utilities will
	misinterpret these NetBIOS names as IP addresses.
	
	For example, if you have a computer named 4754755 and its IP address is
	10.1.5.17. When pinging the computer, ping will misinterpret the computer name
	as an IP address and will send an echo request to 0.72.141.67 rather than
	10.1.5.17. This will result in a request timed out error.
	
	RESOLUTION
	==========
	
	The use of all numeric NetBIOS computer names should be avoided when you are
	using the TCP/IP protocol.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For more information about NetBIOS over TCP, please see:
	
	- RFC 1001 - Protocol Standard for a NetBIOS Service on a TCP/UDP Transport:
	  Concepts and Methods
	
	- RFC 1002 - Protocol Standard for a NetBIOS Service on a TCP/UDP Transport:
	  Detailed Specifications
	
	RFCs may be obtained via the Internet as follows:
	
	Paper copies of all RFCs are available from the NIC, either individually or on a
	subscription basis (for more information, contact NIC@NIC.DDN.MIL). Online
	copies are available via FTP or Kermit from NIC.DDN.MIL as rfc/rfc####.txt or
	rfc/rfc####.PS (#### is the RFC number without leading zeros).
	
	Additionally, RFCs may be requested through electronic mail from the automated
	NIC mail server by sending a message to SERVICE@NIC.DDN.MIL with a subject line
	of "rfc ####" for text versions, or a subject line of "rfc ####.PS" for
	PostScript versions. To obtain the RFC index, the subject line of your message
	should read "rfc index".
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbNetBIOS kbSDKPlatform kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin3xSearch kbWin95search kbWin98search kbZNotKeyword3 kbWin311 kbWin98
	Version           : Windows:3.11,95,98;WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
