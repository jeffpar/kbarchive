---
layout: page
title: "Q107376: Intel SatisFAXtion 100 &amp; 400E Are Class 1 and CAS Compatible"
permalink: kb/107/Q107376/
---

## Q107376: Intel SatisFAXtion 100 &amp; 400E Are Class 1 and CAS Compatible

	Article: Q107376
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Intel SatisFAXtion 100 fax modem as either a Class 1 or CAS
	modem type with Microsoft At Work PC Fax.
	
	MORE INFORMATION
	================
	
	The Intel SatisFAXtion 100 and 400E fax modems are CAS only when either
	CASMGR.EXE or CASMODEM.EXE (provided by Intel) is installed in the AUTOEXEC.BAT
	file. If neither driver is installed, the fax modem becomes Class 1 compatible,
	which is the desired configuration for use with Microsoft At Work PC Fax.
	
	The advantage to Class 1 is that Microsoft At Work PC Fax can control more
	aspects of the fax modem and allow binary file transfer.
	
	CASMGR is a driver supplied by Intel for communicating between MS-DOS and the CAS
	hardware on the fax modem.
	
	Additional query words: 3.11 CLASS1 100 EFAX satisfaction 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
