---
layout: page
title: "Q159994: SFM Does Not Unlock Record After PC Releases Lock"
permalink: /kb/159/Q159994/
---

## Q159994: SFM Does Not Unlock Record After PC Releases Lock

	Article: Q159994
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A file lock may not appear to be free on a Macintosh computer attached to a MAC
	Volume when the following occurs:
	
	1. A personal computer-based application locks a record in the file on a
	  Macintosh Volume.
	
	2. The Macintosh attempts to lock the same record and gets a return code
	  indicating that the record is already locked.
	
	3. The personal computer-based application releases its lock on the record.
	
	4. The record still appears to be locked when viewed from the Macintosh even
	  though it is not locked.
	
	CAUSE
	=====
	
	The cached information for the lock in Services for Macintosh is not cleared out
	when the personal computer lock is removed.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: sfm
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
