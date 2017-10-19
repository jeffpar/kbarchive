---
layout: page
title: "Q145964: XCLN: Upgrade Fails; Err Msg: Application(s) Are Running"
permalink: /kb/145/Q145964/
---

## Q145964: XCLN: Upgrade Fails; Err Msg: Application(s) Are Running

	Article: Q145964
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to upgrade your Microsoft Exchange client, you may receive the
	following error message:
	
	  Setup has determined that the following application(s) are running:
	
	  Microsoft Exchange
	
	  We recommend that you close these application(s) before continuing.
	
	Under Windows for Workgroups 3.11, the error message states that Microsoft Mail
	is running.
	
	CAUSE
	=====
	
	Microsoft Exchange was run in this session before the attempt to upgrade and the
	mail spooler is still running.
	
	WORKAROUND
	==========
	
	Reboot the computer and start the upgrade process before launching Microsoft
	Exchange.
	
	MORE INFORMATION
	================
	
	Note that if Microsoft Exchange or Schedule+ is in the startup group, it will
	need to be removed from the startup group before rebooting.
	
	Additional query words: err setup upgrade
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
