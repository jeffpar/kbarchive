---
layout: page
title: "Q228845: Zone Transfers Are Incomplete When Deleting a Delegation"
permalink: kb/228/Q228845/
---

## Q228845: Zone Transfers Are Incomplete When Deleting a Delegation

	Article: Q228845
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you delete a delegation from the parent zone on the primary Domain Name
	System (DNS) server, secondary DNS servers do not receive the change in the next
	zone transfer or in any subsequent transfers.
	
	CAUSE
	=====
	
	This behavior occurs because deleting the delegation does not increment the
	Start of Authority (SOA). If a record is added to the parent zone to force an
	SOA increment, the change is still not sent in the zone transfer.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this problem, manually delete the delegation from the DNS zone
	file on any secondary DNS servers:
	
	1. Stop the DNS server service on the secondary DNS server.
	
	2. Locate the %SystemRoot%/System32/Dns folder.
	
	3. Open the the zone file (for example, filename.com.dns) in Notepad.
	
	4. Delete the NS and A records for the delegation.
	
	5. Save the zone file with the same name.
	
	6. Restart the DNS server service.
	
	NOTE: You can also simply delete the zone file and allow a new zone transfer
	containing the updated zone information to occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words: child
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
