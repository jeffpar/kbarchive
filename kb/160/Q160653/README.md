---
layout: page
title: "Q160653: NTFS Fails Assertion Under High Stress During Transfer"
permalink: /kb/160/Q160653/
---

## Q160653: NTFS Fails Assertion Under High Stress During Transfer

{% raw %}

	Article: Q160653
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT 4.0 that is running the checked build of Windows
	NT under high stress may assert with the following message in Ntfs.sys.
	
	  Assertion failed: NextIsAllocated || FlagOn(Vcb->VcbState,
	  VCB_STATE_RESTART_IN_PROGRESS) ||
	  (Scb == Vcb->MftScb) || CompressedStream
	
	CAUSE
	=====
	
	NTFS failed the assertion under high stress preparing a nonbuffered transfer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
