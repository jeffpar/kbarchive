---
layout: page
title: "Q92792: WFWG: Segment Load Failure with NCR MCA 486"
permalink: kb/092/Q92792/
---

## Q92792: WFWG: Segment Load Failure with NCR MCA 486

	Article: Q92792
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using an NCR MCA 486 system and you choose the Custom option when you
	run the Windows for Workgroups Setup program, the Setup program fails after you
	choose which components you want to install. Each time a file is copied, you
	receive the following error message:
	
	  Application error. Winsetup caused a Segment Load Failure in module setup.exe
	  at 0005:128B.
	
	CAUSE
	=====
	
	This problem is caused by the default settings in the .ADF configuration files.
	If the NCR MCA setup is configured for "Automatic Config," the small computer
	systems interface (SCSI) adapter is resent to DOS 4.01 and sets the logical SCSI
	device number to 7.
	
	WORKAROUND
	==========
	
	To work around this problem, change the DOS version to MS-DOS 5 and the device
	number to zero.
	
	MORE INFORMATION
	================
	
	This affects NCR MCA systems that have been upgraded to MS-DOS 5.0 when you
	select "Automatic Config" during MCA Setup.
	
	Additional query words: 3.10 bus WFWFEST
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
