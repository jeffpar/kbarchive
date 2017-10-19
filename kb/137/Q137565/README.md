---
layout: page
title: "Q137565: System Error 53 When Connecting to a FQDN"
permalink: /kb/137/Q137565/
---

## Q137565: System Error 53 When Connecting to a FQDN

	Article: Q137565
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Fully Qualified Domain Name (FQDN) from a
	Windows NT computer, you may receive the following error message:
	
	  System error 53 has occurred. The network path was not found.
	
	NOTE: You may also receive this error if you misspell the name of the remote
	computer.
	
	CAUSE
	=====
	
	When you attempt to establish a NetBIOS over TCP/IP connection (such as a file
	share or print share) to a remote computer, your computer must:
	
	- Locate the IP address for the remote computer.
	
	- Establish a TCP/IP connection to the remote computer.
	
	- Establish a NetBIOS session to one of the NetBIOS names registered on the
	  remote computer.
	
	Windows NT 4.0 computers use the following logic when using a FQDN for this
	process: (for example, when you type "net use \\host1.domain2.com\public")
	
	- Use a DNS or hosts file to locate the IP address for host1.domain2.com.
	
	- Establish a TCP/IP connection to that IP address.
	
	- Try to establish a NetBIOS session to the NetBIOS name "host1".
	
	- If that fails, send an Adapter Status Query to the IP address, and parse the
	  returned NetBIOS name table for the server name.
	
	- Establish a NetBIOS session to the server name.
	
	For cases when the hostname does not match the NetBIOS (server) name, this
	process relies upon the Adapter Status Query, which is a UDP datagram sent to
	UDP port 137. In some cases, such as certain firewall environments, the Adapter
	Status Query may fail.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	An updated version of Rdr.sys offers a new registry parameter to slightly change
	the above logic:
	
	- Use a DNS or hosts file to locate the IP address for host1.domain2.com.
	
	- Establish a TCP/IP connection to that IP address.
	
	- Try to establish a NetBIOS session to the NetBIOS name "host1".
	
	- If that fails, try to establish a NetBIOS session to the NetBIOS name
	  "*SMBSERVER ".
	
	Please see the following article in the Microsoft Knowledge Base for more
	information on the *SMBSERVER name and why it is registered on Windows NT
	servers:
	
	  ARTICLE-ID: Q161431
	  TITLE : Connecting to NetBIOS Resources Using DNS Names or IP Addresses
	
	The new registry parameter that allows control of this behavior is:
	
	  Value: FqdnUsesSmbServerName
	  Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Rdr\Parameters
	  Value Type: REG_DWORD - Boolean
	  Valid Range: 0,1 (False,True)
	  Default: 0 (False)
	  Description: Setting this parameter to "1" causes your computer to try a
	               NetBIOS session to the name "*SMBSERVER      " instead of
	               using an Adapter Status Query when the hostname part of a
	               FQDN does not match the NetBIOS computername on the target
	               system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
