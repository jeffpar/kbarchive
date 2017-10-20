---
layout: page
title: "Q152346: Some DEC TLZ06 4MM DAT Tape Drives Not Recognized by Windows NT"
permalink: /kb/152/Q152346/
---

## Q152346: Some DEC TLZ06 4MM DAT Tape Drives Not Recognized by Windows NT

{% raw %}

	Article: Q152346
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install the 4 millimeter DAT device driver, if you are using a Digital
	Equipment TLZ06 4MM DAT tape drive, you may receive the following error in the
	event log:
	
	  Event ID: 7026
	  Source: Service Control Manager
	  Description: The following boot-start or system-start driver(s) failed
	  to load:
	
	            4mmdat.sys
	
	Some models of the Digital Equipment TLZ06 4MM DAT tape drives contain a new
	firmware version which is not recognized by the Windows NT 4mmdat.sys device
	driver.
	
	CAUSE
	=====
	
	The identifier string embedded in the tape drive's firmware was changed to read
	DEC TLZ6, but the 4mmdat.sys device driver is looking for a string of DEC
	TLZ06--this difference in identifier strings prevents the driver from
	recognizing the tape drive.
	
	To verify that this is the problem, use Registry Editor to look at the firmware's
	identifier string as follows:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE)
	
	2. From the HKEY_LOCAL_MACHINE window, go to the following key:
	
	  \Hardware\Devicemap\SCSI\SCSIport(x)\ScsiBus(Y)\Target(z)
	
	  where x= the scsiport number that the tape drive is attached
	  where y= the scsibus number that the tape drive is attached
	  where z= the scsi I.D. number that the tape drive is configured for.
	
	3. Look at the identifier value found under the tape drive's target(z) number.
	  If the identifier string does not read:
	
	  DEC TLZ06
	
	  but instead reads DEC TLZ6, this is the cause of the device driver failure.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5.x We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	The TLZ06 4MM DAT tape drive is manufactured by Digital Equipment Corp., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
