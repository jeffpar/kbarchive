---
layout: page
title: "Q195932: DHCP Server of Service Pack 4 Ignores Reservations"
permalink: kb/195/Q195932/
---

## Q195932: DHCP Server of Service Pack 4 Ignores Reservations

	Article: Q195932
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your DHCP server has IP address reservations that are outside of your DHCP
	scope. After you apply Service Pack 4, clients that match these reservations no
	longer receive IP addresses from the server.
	
	CAUSE
	=====
	
	The Service Pack 4 release includes several quality improvement fixes to correct
	known Dynamic Host Configuration Protocol (DHCP) problems. One was to check for
	invalid database records that contain out of scope IP addresses. Unfortunately,
	this also includes "Out of Scope" reservations which are legal.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition or the individual software
	update. For information on obtaining the latest service pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT version 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 5.
	
	MORE INFORMATION
	================
	
	For more information about changes to DHCP in Service Pack 4, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q184693 DNS/DHCP/WINS Release Notes for Windows NT 4.0 SP4 Update
	
	  Q196066 Limitations Creating DHCP Reservations
	
	Additional query words: 4.00 sp4
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
