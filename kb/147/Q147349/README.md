---
layout: page
title: "Q147349: No Sound On Some PCMCIA Modems in Windows NT 3.51"
permalink: /kb/147/Q147349/
---

## Q147349: No Sound On Some PCMCIA Modems in Windows NT 3.51

	Article: Q147349
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The modem speaker does not work on some PCMCIA modems in Windows NT 3.51.
	
	CAUSE
	=====
	
	PCCARDS use configuration registers 1 to 4. The second register is used to
	inform the modem that the audio pin is wired. In Windows NT, this register is
	not being set.
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51 card
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
