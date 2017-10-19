---
layout: page
title: "Q160678: Possible Access Violation in Win32k.sys Under High Stress"
permalink: /kb/160/Q160678/
---

## Q160678: Possible Access Violation in Win32k.sys Under High Stress

	Article: Q160678
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible for an application that is doing intensive screen output to
	generate an access violation in WIN32K. This may result in the system crashing
	with a STOP 0x0000001E error message.
	
	CAUSE
	=====
	
	There is a problem in a GDI text handling function that can cause WIN32K to
	reference an invalid memory address.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0.
	This problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
