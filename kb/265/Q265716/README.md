---
layout: page
title: "Q265716: XADM: Installing Exchange Server 5.5 SP1 Does Not Update DLLs"
permalink: /kb/265/Q265716/
---

## Q265716: XADM: Installing Exchange Server 5.5 SP1 Does Not Update DLLs

	Article: Q265716
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Service Pack 1 (SP1) for Microsoft Exchange Server, version
	5.5, on a computer running Microsoft Windows NT 4.0 SP3 and Seagate's BackupExec
	version 7.0 with Exchange Add-In, you may receive a message that the following
	dynamic-link library (DLL) files cannot be updated:
	
	  %winnt%\system32\edbbcli.dll %winnt%\system32\emsmdb.dll
	  %winnt%\system32\escprint.dll
	  %winnt%\system32\libxds.dll
	
	A Windows NT dialog box appears with the following options:
	
	- Abort
	
	- Retry
	
	- Ignore
	
	Note: All Exchange services were stopped prior to the application of Exchange
	Server 5.5 SP1.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Stop all Seagate's BackupExec services.
	
	2. In the Windows dialog box, click Retry to install Exchange Server 5.5 SP1.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5 SP1
	Issue type        : kbprb
	
	=============================================================================
	
