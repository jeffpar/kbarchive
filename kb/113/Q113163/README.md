---
layout: page
title: "Q113163: CPAV Reports COMMAND.COM Infected with Unknown Virus"
permalink: kb/113/Q113163/
---

## Q113163: CPAV Reports COMMAND.COM Infected with Unknown Virus

	Article: Q113163
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Central Point Anti-Virus (CPAV) version 2.1 prior to running MS-DOS
	6.2 Step-Up and then run it again after running Step-Up, CPAV reports the
	following message:
	
	  File COMMAND.COM is infected by an unknown virus
	  The virus size is 1,694 bytes
	  Infection type is End COM
	  Clean, Continue or Stop
	
	NOTE: CPAV may also report the above error message for the file TREE.COM. Central
	Point Anti-Virus version 9.0 has also exhibited this behavior.
	
	CAUSE
	=====
	
	According to Central Point Technical Support, this error is not actually caused
	by a virus. Central Point Anti-Virus detects a change in the file size of
	COMMAND.COM and reports "unknown virus" based on this change.
	
	The "virus" size is 1,694 bytes, which is exactly the difference in the size of
	MS-DOS 6.0 COMMAND.COM and MS-DOS 6.2 COMMAND.COM.
	
	WORKAROUND
	==========
	
	According to Central Point Technical Support, you can work around this problem
	by choosing Stop when the above message appears. Next, delete the SMARTCHK.CPS
	files from the root directory and the DOS directory; or, delete all SMARTCHK.CPS
	files on the drive (to do that, choose Delete Smartchecks from the Scan menu in
	CPAV. Then, run CPAV again.
	
	MORE INFORMATION
	================
	
	For more information, contact Central Point Technical Support.
	
	Central Point Anti-Virus is manufactured by Central Point Software, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 6.20 9.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	
