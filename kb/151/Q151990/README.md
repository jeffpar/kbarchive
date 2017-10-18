---
layout: page
title: "Q151990: Mail Client Incorrectly Resolves Names with Extended Characters"
permalink: kb/151/Q151990/
---

## Q151990: Mail Client Incorrectly Resolves Names with Extended Characters

	Article: Q151990
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Windows NT 32-bit Mail client (Msmail32.exe), you may receive
	unexpected results when you check names or try to locate names in the Address
	Book using the keyboard. These unexpected results occur when the name includes
	extended characters.
	
	CAUSE
	=====
	
	There is a problem in a string-comparison routine in Store32.dll that was
	exposed when comparing strings containing extended characters.
	
	RESOLUTION
	==========
	
	Make sure that the appropriate sort order has been applied to the Post Office
	where the address book resides. For example when a Scandanavian sort order is
	required run "resort.exe -s". Once the Post Office has been sorted, the Global
	Address List (GAL) should be rebuilt ensuring the appropriate sort order is also
	applied to the GAL (Rebuild.exe). You can now install the associated hotfix on
	all affected Windows NT workstations and then restart them.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: 3.51 prodnt msmail
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
