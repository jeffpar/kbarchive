---
layout: page
title: "Q164267: NTFS May Cause Windows NT to Fail During a Rename"
permalink: /kb/164/Q164267/
---

## Q164267: NTFS May Cause Windows NT to Fail During a Rename

{% raw %}

	Article: Q164267
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NTFS can cause a system to fail during a rename. The STOP message will vary, but
	the most common is STOP 0x0000000A.
	
	CAUSE
	=====
	
	Under certain circumstances, a code path can be executed twice during a rename.
	When this happens, NTFS calculates the buffer for the file name incorrectly and
	tries to copy 4 GB of RAM. The system will STOP with varying messages, depending
	on what memory is overwritten and what else is running on the system.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5x.
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodnt move file system crash crashed hang hung freeze frozen lock locked up filename
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
