---
layout: page
title: "Q69695: PC Setup: CONFIG.SYS Not Modified by Install Programs"
permalink: /kb/069/Q69695/
---

## Q69695: PC Setup: CONFIG.SYS Not Modified by Install Programs

	Article: Q69695
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The installation programs for the Microsoft Mail server, MS-DOS client, and
	Windows client do not modify the CONFIG.SYS file. You MUST add the following
	line to support the use of the drive letter M as the default Mail database
	drive:
	
	  LASTDRIVE=Z
	
	By default, MS-DOS can only access five drive devices (A-E) without the use of
	the LASTDRIVE statement. To function properly, the line should be added if the
	default drive letter (M) is to be used.
	
	This does not apply to Novell; Novell recommends that you set the LASTDRIVE
	statement to the last PHYSICAL local disk drive and not the last possible drive
	letter.
	
	Additional query words: 2.10 3.00 admin adm
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0
	
	=============================================================================
	
