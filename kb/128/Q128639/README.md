---
layout: page
title: "Q128639: MSDLC Hangs Computers Running Processor Speeds Over 66 MHz"
permalink: /kb/128/Q128639/
---

## Q128639: MSDLC Hangs Computers Running Processor Speeds Over 66 MHz

	Article: Q128639
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft Windows 3.1 
	- Microsoft LAN Manager 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to load MSDLC.EXE in Windows or Windows for Workgroups with
	computer processors running at speeds greater than 66 MHz and initiate the host
	session, Microsoft Data Link Control (MSDLC) either does not respond to host
	commands or the processor stops responding (hangs) forcing a system reboot.
	MSDLC.EXE loads fine from MS-DOS.
	
	
	CAUSE
	=====
	
	The timer routine is not set properly for Pentium processors resulting in
	unnecessary network traffic. In addition, a FRMR routine ran due to the high
	network traffic. This is not appropriate for the Class II, CCB II protocol in
	the DLC stack. This causes the system to hang.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MSDLC. A fix to this problem for
	Microsoft LAN Manager version 2.2 and Microsoft Windows for Workgroups version
	3.11 is in development, but has not been regression- tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt prodlm22 2.20 2.2c win31x wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbLanManSearch kbWFWSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:95; :
	
	=============================================================================
	
