---
layout: page
title: "Q182510: XADM: Error Message: Could Not Open Emsmdb32.dll During Upgrade"
permalink: /kb/182/Q182510/
---

## Q182510: XADM: Error Message: Could Not Open Emsmdb32.dll During Upgrade

	Article: Q182510
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage exc5
	Last Modified: 02-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the upgrade to Exchange Server 5.0 Service Pack 2, you may receive the
	following error message:
	
	  Could not open the file named d:\<%winnt%>\system32\EMSMDB32.DLL. It
	  is
	  in use by another application.
	
	CAUSE
	=====
	
	An application such as the Microsoft Exchange Administrator program has the file
	locked open.
	
	WORKAROUND
	==========
	
	To work around this problem, make sure the Microsoft Exchange Administrator and
	other Exchange Server-aware applications are not in use during the upgrade
	process.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q162658 XCLN: Exchange Setup for Windows NT Fails on Emsmdb32.dll
	
	You may receive this error if you are running Norton Antivirus during the
	upgrade. To resolve the issue, turn off Norton Antivirus to allow the service
	pack setup to finish.
	
	Additional query words: 50sp2
	
	======================================================================
	Keywords          : kbusage exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	
