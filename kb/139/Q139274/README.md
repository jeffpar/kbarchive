---
layout: page
title: "Q139274: Updated System Environment Variables Result in STOP 0x0000021a"
permalink: kb/139/Q139274/
---

## Q139274: Updated System Environment Variables Result in STOP 0x0000021a

	Article: Q139274
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you update the system environment variables with a large number of
	additions in Control Panel System and restart Windows NT, the following STOP
	error message appears:
	
	  STOP: 0xc000021a
	
	CAUSE
	=====
	
	This problem occurs due to a problem in the SMSS (Session Manager Subsystem)
	initialization code.
	
	WORKAROUND
	==========
	
	To work around this problem in Windows NT version 3.5, choose Last Known Good
	when you reboot. This causes the changes you have made to the system environment
	not to be available. However, invoking the Last Known Good in Windows NT version
	3.51 without a Service Pack added does not work and can corrupt your Windows NT
	installation.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt trap 0x21a crash blue screen
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
