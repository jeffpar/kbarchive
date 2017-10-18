---
layout: page
title: "Q277673: Windows NT Backup Software May Have Handle Leak"
permalink: kb/277/Q277673/
---

## Q277673: Windows NT Backup Software May Have Handle Leak

	Article: Q277673
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the V3 Pro Antivirus software on Windows NT 4.0, there may be
	a handle leak in a backup process (such as Ntbackup.exe or some third-party
	backup software).
	
	CAUSE
	=====
	
	This behavior is caused by the V3 Pro Antivirus software. Backup software
	creates many event handles named \BaseNamedObjects\V3SOCKHOOK, but theV3 Pro
	Antivirus software may not signal these events, so these handles leak.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact the manufacturer of the V3 Pro Antivirus
	software, Ahnlab (http://www.ahnlab.com) to obtain the latest update. Or, remove
	the V3 Pro Antivirus software.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: leak event
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
