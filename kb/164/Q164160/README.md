---
layout: page
title: "Q164160: Text Background Not Computed Correctly for Text Reflection"
permalink: /kb/164/Q164160/
---

## Q164160: Text Background Not Computed Correctly for Text Reflection

	Article: Q164160
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a font test with the application Text.exe (in advanced mode), there
	is a mismatch of text and background on the screen.
	
	CAUSE
	=====
	
	The key is to be in mapping mode mm_loenglish, advanced mode, world xform 22
	component should be -1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt text background font textout hp
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
