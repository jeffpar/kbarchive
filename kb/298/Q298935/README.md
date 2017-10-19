---
layout: page
title: "Q298935: SMS: Clients Remove Components and Clintx86.ofr Is Incomplete"
permalink: /kb/298/Q298935/
---

## Q298935: SMS: Clients Remove Components and Clintx86.ofr Is Incomplete

	Article: Q298935
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) clients may be uninstalled and reinstalled
	daily. Also, the Clintx86.ofr file on each client access point (CAP) may be
	incomplete. This file controls which client components should be installed for
	the site.
	
	The Client Agent properties for the site in the SMS Administrator console show
	the proper settings that specify which client agents should be installed (or
	enabled) for all clients in the site, but the agents are uninstalled even though
	they are enabled for the site. When this situation occurs, the Client
	Installation Data Manager (CIDM) component reports status message ID 2918.
	Entries that are similar to the following sample entries may be recorded in the
	Cidm.log file:
	
	  Warning - Could not read offers from source file
	  E:\SMS\inboxes\clicfg.src\CLINTX86.OFR (Win32 error: 2)
	
	  ERROR: Could not copy file from E:\SMS\inboxes\clicfg.src\OFR1DD.tmp to
	  E:\SMS\inboxes\clicfg.src\CLINTX86.OFR (Win32 error: 112)
	
	  Warning - Could not write offers from source file
	  E:\SMS\inboxes\clicfg.src\CLINTX86.OFR (Win32 error: 112)
	
	CAUSE
	=====
	
	Win32 error 112 indicates that there is not enough space on the disk. Win32
	error 2 indicates that the specified file cannot be found. These errors occur if
	the CAP does not have sufficient free disk space to function correctly.
	
	RESOLUTION
	==========
	
	To resolve this issue, free some disk space on the CAPs.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
