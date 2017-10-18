---
layout: page
title: "Q150812: Stop Msg: Octopus Driver May Cause Stop 0x00000050"
permalink: kb/150/Q150812/
---

## Q150812: Stop Msg: Octopus Driver May Cause Stop 0x00000050

	Article: Q150812
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an Octopus driver with a Windows NT server, the following stop
	error message appears:
	
	  STOP: 0x00000050 (0xff162000, 0x00000000, 0x00000000, 0x00000000)
	  PAGE_FAULT_IN_NONPAGED_AREA
	
	Note: The first parameter may differ, depending upon the computer's
	configuration, but the first three hexidecimal digits should be same for each
	stop thereafter.
	
	MORE INFORMATION
	================
	
	The computer stops responding after the Octopus kernel mode driver requests
	Windows NT to write to the Octopus log file with an invalid length parameter.
	
	Octopus has developed a fix for this problem.
	
	Users with version 1.5 should have build 1.5H or later. The driver should be
	dated 5-15-96 or later.
	
	Users with version 1.6 should have version build 147a or later. The Driver should
	be dated 3-26-96 or later.
	
	For more information contact Octopus at:
	
	- Support Phone Number: (215) 321-8750
	
	- WEB site address: WWW.OCTOPUSTECH.COM
	
	
	The third-party products discussed here are manufactured vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: prodnt stop 0x50
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.50 3.51
	
	=============================================================================
	
