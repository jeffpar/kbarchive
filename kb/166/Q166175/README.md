---
layout: page
title: "Q166175: Windows NT May Crash When Dismounting NTFS Volume"
permalink: /kb/166/Q166175/
---

## Q166175: Windows NT May Crash When Dismounting NTFS Volume

{% raw %}

	Article: Q166175
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A system running Windows NT 4.0 may crash with the following stop message:
	
	  STOP 0x0000001E (0xC0000005, 0x801113B7, 0x00000000, 0x00000040)
	  KMODE_EXCEPTION_NOT_HANDLED
	
	This will occur during a dismount of an NTFS volume.
	
	NOTE: The second parameter (0x801113B7) may vary.
	
	CAUSE
	=====
	
	This is caused by a reference to the NTFS log file being held by the memory
	manager after NTFS has de-referenced it.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: 0x1e
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
