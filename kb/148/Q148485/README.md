---
layout: page
title: "Q148485: Service Pack 4 Causes Some Installation Programs To Fail"
permalink: /kb/148/Q148485/
---

## Q148485: Service Pack 4 Causes Some Installation Programs To Fail

	Article: Q148485
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP4,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51 SP4, 4.0 
	- Microsoft Windows NT Server version 3.51 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install Windows NT 3.51 Service Pack 4, if you attempt to install or
	upgrade any application that replaces Windows NT 3.51 files that are in use, the
	installation may fail. For example, when you attempt to install the Shell
	Technology Preview for Windows NT 3.51, the Setup fails and your computer no
	longer boots up.
	
	CAUSE
	=====
	
	Windows NT 3.51 Service Pack 4 replaces SMSS.EXE. The Shell Technology Preview
	Setup and some third-party installation programs call the
	MoveFileEx(MOVEFILE_DELAY_UNTIL_REBOOT) API to replace some Windows NT system
	files during a Setup reboot. The Service Pack 4 SMSS.EXE does not properly
	replace the files during reboot.
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 Service
	Pack 4. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt new shell
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTSsearch kbWinNTS351search kbWinNTS351sp4 kbWinNTW351SP4
	Version           : :3.51 SP4,4.0
	
	=============================================================================
	
