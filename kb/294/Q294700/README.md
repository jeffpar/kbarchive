---
layout: page
title: "Q294700: XCCC: Error Message: OWA Failed to Install Properly"
permalink: kb/294/Q294700/
---

## Q294700: XCCC: Error Message: OWA Failed to Install Properly

	Article: Q294700
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to install Outlook Web Access (OWA) on a server that is running
	Windows NT Server 4.0, you may receive the following error message:
	
	  OWA failed to install properly
	
	  An unknown error has occurred
	
	  Unknown facility 076a-c00e<xxxx>
	
	CAUSE
	=====
	
	This issue can occur if the Windows NT Server 4.0-based server is running a
	corrupted version of Veritas Backup Exec backup software.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Remove the corrupted installation of Backup Exec, and then restart the
	  server.
	
	2. Reapply the Windows NT Server service pack that you are running, and then
	  restart the server.
	
	3. Install OWA.
	
	4. Re-apply the Exchange Server service pack that you are running.
	
	5. Run Exchange Server Performance Optimizer.
	
	6. Restart the server, and then reinstall Backup Exec.
	
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : :4.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
