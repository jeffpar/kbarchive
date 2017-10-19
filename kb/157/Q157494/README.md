---
layout: page
title: "Q157494: PPC 4.0 Cirrus Driver Fails to Redraw &amp; Fill Objects Correctly"
permalink: /kb/157/Q157494/
---

## Q157494: PPC 4.0 Cirrus Driver Fails to Redraw &amp; Fill Objects Correctly

	Article: Q157494
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows NT 4.0 for the PowerPC with a video card that uses the
	Cirrus driver (Cirrus.dll), the fill color in objects may be lost when the
	objects are overlapped or moved. This problem may appear in programs such as
	Paintbrush when you create round rectangles, ellipses, and polygons filled with
	different colors.
	
	CAUSE
	=====
	
	A problem has been identified in Cirrus.dll.
	
	WORKAROUND
	==========
	
	To work around this problem, run the program in standard VGA mode, or use a
	different video card that supports a different driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
