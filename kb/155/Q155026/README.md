---
layout: page
title: "Q155026: Stop 0xC000021a in Windows Subsystem with Status c00000005"
permalink: kb/155/Q155026/
---

## Q155026: Stop 0xC000021a in Windows Subsystem with Status c00000005

	Article: Q155026
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
	
	The following error message may appear in the Windows Subsystem:
	
	  Stop 0xC000021A
	
	This error can occur when you move a scroll bar or move through a window either
	by scrolling or paging up or down.
	
	CAUSE
	=====
	
	This error happens when you try to scroll more of an area than is available. For
	instance, you try to scroll 50 lines when only 40 are available.
	
	
	RESOLUTION
	==========
	
	Obtain the fix referenced below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: 3.50 3.51 prodnt GP Fault ntblue blue screen
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
