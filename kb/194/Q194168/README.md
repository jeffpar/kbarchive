---
layout: page
title: "Q194168: Dns.exe Dr. Watson When Changing the TTL of a Cached Record"
permalink: kb/194/Q194168/
---

## Q194168: Dns.exe Dr. Watson When Changing the TTL of a Cached Record

	Article: Q194168
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer running both Windows NT Server and the Domain Name Service (DNS)
	may receive the following Dr. Watson access violation when you attempt to use
	DNS Administrator to change the time-to-live (TTL) of cached records in a
	delegating subzone:
	
	  Access Violation (0xC0000005), Address: 0x0100bb78 or 0x0100c6c1 on
	  DNS.exe.
	
	You may also receive this error:
	
	  Unable to register record <cached record>. Please correct the record
	  data and try again.
	
	Following these errors, the DNS server will stop and it will be necessary to
	restart the service to resume DNS service.
	
	CAUSE
	=====
	
	The delegating DNS server is not authoritative for the cached record. The
	delegating DNS server should not be able to change the properties of a cached
	record.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q154556 Delegation Requires a Stop and Restart of the DNS Server
	
	  Q160459 DNS Delegation May Fail
	
	  Q159310 Updated Version of DNS.EXE fixes Several Problems
	
	Additional query words: NTS DNS Delegation Delegating Delegated Dr.Watson Access Violation Exception
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
