---
layout: page
title: "Q249816: APPC App Fails with Primary RC = F004, Secondary RC = 00000000"
permalink: /kb/249/Q249816/
---

## Q249816: APPC App Fails with Primary RC = F004, Secondary RC = 00000000

	Article: Q249816
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On the TP_STARTED call, an APPC application may fail and the following error
	message may occur:
	
	  Primary Return Code = F004 (AP_COMM_SUBSYSTEM_NOT_LOADED)
	  Secondary Return Code = 00000000 (no applicable subcode)
	
	The APPC Programmer's Guide in the online SDK documentation describes the F004
	error as follows:
	
	  A required component could not be loaded or has terminated while processing
	  the verb. Thus, communication could not take place. Contact the system
	  administrator for corrective action.
	
	CAUSE
	=====
	
	This error can be caused by the application calling an incorrect version of the
	Wappc32.dll file. This file is installed with SNA Server in the Sna\System
	directory.
	
	RESOLUTION
	==========
	
	If there is a duplicate Wappc32.dll file on the computer in the \WINNT\System32
	directory for example, delete or rename it.
	
	MORE INFORMATION
	================
	
	In one customer instance, there were two versions of the Wappc32.dll file on the
	system because the IBM version was installed in the \WINNT\System32 directory
	when the customer installed the IBM emulator program.
	
	Note: There are other issues that can cause the F004 error with different
	secondary return codes. For additional information, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q148359 SNA Server APPC Error: F004 AP_COMM_SUBSYSTEM_NOT_LOADED
	
	  Q150841 Troubleshooting Common APPC Error Codes
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
