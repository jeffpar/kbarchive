---
layout: page
title: "Q124641: Event ID 7000: RDR Service Failed to Start"
permalink: /kb/124/Q124641/
---

## Q124641: Event ID 7000: RDR Service Failed to Start

	Article: Q124641
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	When you reboot a computer running Windows NT Server the following text is
	written to the System Log (Event Id 7000):
	
	  The RDR service failed to start due to the following error; An Instant of the
	  service is already running.
	
	  The SRV service failed to start due to the following error; An Instant of the
	  service is already running.
	
	This problem occurs when you are using a beta release of System Management
	Server.
	
	To correct this problem, remove the beta version of SMS or install a
	released version of SMS.
	
	Additional query words: sms prodnt stop errors prodsms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
