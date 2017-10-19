---
layout: page
title: "Q131781: Program Items Replaced With Question Marks After Migration"
permalink: /kb/131/Q131781/
---

## Q131781: Program Items Replaced With Question Marks After Migration

	Article: Q131781
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you migrate Windows for Workgroups 3.11 program groups to Windows NT 3.5,
	the program items in the program groups are replaced with yellow questions
	marks.
	
	CAUSE
	=====
	
	This problem occurs if you use a 256-color or greater video driver in Windows
	for Workgroups 3.11 and the same resolution driver is not used in Windows NT
	3.5.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Highlight each individual program item and press ALT+ENTER for its Program
	  Item Properties. Choose OK.
	
	  -or-
	
	- Before you migrate your group, change the Windows for Workgroups 3.11 video
	  driver to standard 16-color VGA.
	
	Additional query words: prodnt 3.11 wfw migrated icons item
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : 3.50
	
	=============================================================================
	
