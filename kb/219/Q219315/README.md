---
layout: page
title: "Q219315: WINS Service Will Not Start with Inconsistent Database"
permalink: /kb/219/Q219315/
---

## Q219315: WINS Service Will Not Start with Inconsistent Database

	Article: Q219315
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbWinNT400sp5fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure a computer running Microsoft Windows Internet Name Service
	(WINS) for WINS replication with more than 255 other WINS servers, the WINS
	service may stop responding (hang) and the following error may appear in the
	Event Viewer log:
	
	  The Database has been found to be inconsistent. More specifically, the number
	  of owners found in the Name Address Mapping table are different from the
	  number found in the Owner Address Mapping table.
	
	CAUSE
	=====
	
	The WINS service tracks other WINS servers in the replication matrix by using a
	table in the WINS database. This table maps the IP addresses of all other WINS
	servers to a unique ID number. Each WINS server numbers itself as 0 and assigns
	other numbers incrementally to new WINS servers as they are discovered through
	replication. When the table increases past 255 entries, the server removes
	entries from the owner to IP address mapping table. The number of owners in the
	Name Address Mapping table and the Owner Address Mapping table are then
	inconsistent and WINS cannot start.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
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
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows NT version 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
