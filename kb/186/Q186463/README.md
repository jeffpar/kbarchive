---
layout: page
title: "Q186463: Windows NT Replies to Address Mask Requests"
permalink: /kb/186/Q186463/
---

## Q186463: Windows NT Replies to Address Mask Requests

	Article: Q186463
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Your computers running Windows NT may be responding to Address Mask requests on
	the network, which could enable malicious users to discover some of your network
	topology information.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Tcpip\Parameters
	
	3. Click Add Value on the Edit menu.
	
	4. Create a new value using the following information:
	
	  Value Name: EnableAddrMaskReply
	  Data Type : Reg_DWORD
	  Data      : 1 (default=0)
	
	5. Click OK, close Registry Editor, and restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	RFC 1122, section 3.2.2.9:
	
	  A system MUST NOT send an Address Mask Reply unless it is an
	  authoritative agent for address masks. An authoritative agent
	  may be a host or a gateway, but it MUST be explicitly configured
	  as an address mask agent. ...
	
	RFCs may be obtained through the Internet as follows:
	
	Paper copies of all RFCs are available from the NIC, either individually or on a
	subscription basis (for more information contact NIC@NIC.DDN.MIL). Online copies
	are available through FTP or Kermit from NIC.DDN.MIL as rfc/rfc####.txt or
	rfc/rfc####.PS (#### is the RFC number without leading zeros).
	
	Additionally, RFCs may be requested through electronic mail from the automated
	NIC mail server by sending a message to SERVICE@NIC.DDN.MIL with a subject line
	of "rfc ####" for text versions, or a subject line of "rfc ####.PS" for
	PostScript versions. To obtain the RFC index, the subject line of your message
	should read "rfc index".
	
	Additional query words: ICMP subnetmask rfc1122
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
