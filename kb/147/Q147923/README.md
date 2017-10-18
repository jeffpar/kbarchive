---
layout: page
title: "Q147923: SHUTCMD.EXE Does Not Restart Remote Computer"
permalink: kb/147/Q147923/
---

## Q147923: SHUTCMD.EXE Does Not Restart Remote Computer

	Article: Q147923
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The remote computer does not reboot when you use SHUTCMD.EXE, which is included
	in the Windows NT Resource Kit. However, if you use the Shutcmd command within
	15 minutes since a clean shutdown of the computer, the command completes
	successfully.
	
	CAUSE
	=====
	
	This problem occurs when you use the graphical scheduler that is included in the
	Windows NT Resource Kit. If you add the shutcmd command in a batch file and
	specify the AT command to execute the batch file, the same symptom mentioned
	above occurs.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.50 3.51 prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbMSPressSearch kbWinNTS351search kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : 3.51
	
	=============================================================================
	
