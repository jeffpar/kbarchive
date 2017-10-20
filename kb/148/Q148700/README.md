---
layout: page
title: "Q148700: DRWTSN32.EXE Causes STOP 0x0000001E"
permalink: /kb/148/Q148700/
---

## Q148700: DRWTSN32.EXE Causes STOP 0x0000001E

{% raw %}

	Article: Q148700
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following STOP error message appears when DRWTSN32.EXE is called to handle a
	user mode exception (this STOP error message is preceded by Dr. Watson errors in
	the event log):
	
	  STOP: 0x0000001E (0xC0000005, 0x801992b7, 0x00000000, 0x00000010)
	
	NOTE: The first, second, and fourth parameters (such as 0xC0000005, 0x801992b7,
	and 0x00000010) are specific to your system configuration.
	
	
	CAUSE
	=====
	
	This problem occurs due to a corrupted handle table in AFD.SYS. When you call
	DRWTSN32.EXE, a null pointer to the handle table is passed and the STOP error
	message mentioned above appears.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Windows NT 3.51 Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 3.51 prodnt sp3 sp4
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
