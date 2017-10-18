---
layout: page
title: "Q197632: Registry Hive Fragmentation Leads to Excessive Size"
permalink: kb/197/Q197632/
---

## Q197632: Registry Hive Fragmentation Leads to Excessive Size

	Article: Q197632
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Processes that use the registry to repeatedly modify the same values in small
	increments can cause excessive memory fragmentation in the corresponding
	registry hive. The sum of the fragmented cells can become so large that the hive
	size winds up many times larger than the sum of actual data in the hive.
	Eventually, the sum of the hive will exceed the Registry Size Limit (RSL),
	causing subsequent modifications to fail until the RSL is increased. As an
	example consider the SAM hive used to store Windows NT accounts. The SAM size
	frequently exceeds projected sizes due to the fact that it fragments the SAM
	hive when adding members to large groups.
	
	CAUSE
	=====
	
	In the SAM example, when a user is added to a large group it causes the registry
	value for that group to be replaced and the old value added to a hash of free
	lists by size of allocation. The freed cell is coalesced with the nearest
	neighbor cell in memory, if it's a free cell, to create a slightly larger cell
	to add to the free lists. Over several additions, the free lists can contain
	several cells that are never used because they're too small. Over time the sum
	of the free cells become so large that the sum of the hives exceeds RSL.
	
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
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
