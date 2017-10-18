---
layout: page
title: "Q154983: Dual Screens at High Resolutions Don't Display Correctly"
permalink: kb/154/Q154983/
---

## Q154983: Dual Screens at High Resolutions Don't Display Correctly

	Article: Q154983
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	
	If you have a dual screen system operating at a high resolution (2048 pixels wide
	across both screens, and more than 64K colors), and your hardware does not
	support OPENGL, you may have trouble with the right side of the display after
	performing a screen update.
	
	
	CAUSE
	=====
	
	The viewport limit is currently set to 2K. This is insufficient to hold
	information necessary for such a large resolution. Any information that cannot
	be held is not updated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
