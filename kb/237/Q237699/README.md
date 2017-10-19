---
layout: page
title: "Q237699: Error Message: Stop 0x0000000A in ScsiPort.sys on SMP Systems"
permalink: /kb/237/Q237699/
---

## Q237699: Error Message: Stop 0x0000000A in ScsiPort.sys on SMP Systems

	Article: Q237699
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a program that makes a ScsiBusScan() call (for example, Disk
	Administrator), the following error message may be displayed on a blue screen:
	
	  STOP 0x0000000A (0x0000000C, 0x0000000A, 0x00000001, 0x801de690)
	  IRQL_NOT_LESS_OR_EQUAL
	  Address 801de690 has base at 801de000 - scsiport.sys
	
	NOTE: The fourth parameter may vary from system to system, but is always based in
	Scsiport.sys.
	
	CAUSE
	=====
	
	The problem may occur if there are multiple programs issuing the
	IOCTL_SCSI_RESCAN_BUS I/O control at the same time. There is a race condition
	that can cause the same request to get issued twice.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date     Time    Size     File name      Platform
	  --------------------------------------------------
	  9/1/99   7:14p   35,504   Scsiport.sys   Intel
	  9/1/99   7:13p   56,400   Scsiport.sys   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
