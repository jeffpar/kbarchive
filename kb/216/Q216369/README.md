---
layout: page
title: "Q216369: Unable to Create a Large Number of DHCP Scopes"
permalink: kb/216/Q216369/
---

## Q216369: Unable to Create a Large Number of DHCP Scopes

	Article: Q216369
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a large number of Dynamic Host Configuration Protocol (DHCP)
	scopes with exclusions within each scope, the following error message may be
	displayed when the computer is restarted twice:
	
	  Windows NT could not start because the following file is missing or corrupt:
	  \%SystemRoot%\System32\Config\System\Hardware Profile/Last Known Good menu
	
	CAUSE
	=====
	
	This problem can occur because the scopes, exclusions, or reservations added to
	the DHCP scopes generate large amounts of KEY data to the registry.
	
	The SYSTEM hive is limited in size and must fit below 16 MB to start the system.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	The resolution to this problem is not found in the DHCP service but rather in
	how the size of the registry is managed. Documentation on the actual fix is
	available in the following Microsoft Knowledge Base article:
	
	  Q197632 Registry Hive Fragmentation Leads to Excessive Size
	
	
	Additional query words: sp5
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
