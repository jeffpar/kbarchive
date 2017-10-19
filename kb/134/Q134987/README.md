---
layout: page
title: "Q134987: Installing 3.51 Service Pack 1 with Shell Technology Preview"
permalink: /kb/134/Q134987/
---

## Q134987: Installing 3.51 Service Pack 1 with Shell Technology Preview

	Article: Q134987
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	When you execute the Windows NT 3.51 Service Pack 1 UPDATE.EXE on your Windows
	NT 3.51 computer that is running the Shell Technology Preview (or the Shell
	Technology Preview Update - the second beta release), the following two error
	messages appear:
	
	  Setup cannot update your Windows NT files because your system is a version
	  later than NT 3.51. The update can only be applied to Windows NT 3.51.
	
	  Setup failed to update the system.
	
	CAUSE
	=====
	
	When Windows NT 3.51 Service Pack 1 UPDATE.EXE asks for version information, the
	Shell Technology Preview reports that Windows NT version 4.0 is running
	(although it is not).
	
	RESOLUTION
	==========
	
	To install Service Pack 1:
	
	1. Remove the Shell Technology Preview by running SHUPDATE.CMD /U.
	
	2. Install Service Pack 1 by running UPDATE.EXE.
	
	3. Reinstall the Shell Technology Preview by running SHUPDATE.CMD.
	
	See the Shell Technology Preview README.WRI file for more information on
	installing and removing the software.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Shell Technology
	Preview (beta). The above procedures are documented in the Shell Technology
	Preview Update README.WRI file. However, it is not documented in the Shell
	Technology Preview README.WRI file or in the Windows NT 3.51 Service Pack 1
	README.TXT file.
	
	Additional query words: prodnt SUR
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
