---
layout: page
title: "Q290226: XADM: Cannot Apply Exchange Server 5.5 SP3 with Error 0xc0020002"
permalink: kb/290/Q290226/
---

## Q290226: XADM: Cannot Apply Exchange Server 5.5 SP3 with Error 0xc0020002

	Article: Q290226
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An error message occurs when you try to apply Exchange Server 5.5 Service Pack 3
	(SP3) after you receive the following message:
	
	  Setup will reinstall Microsoft Exchange Server files for your current Setup
	  Configuration. Existing databases will be preserved, but the Microsoft
	  Exchange services will be stopped during the reinstall.
	
	The error message is:
	
	  The System cannot find the file specified:
	  Microsoft Windows NT
	  ID no: 0xc0020002
	
	When you check the Exchange Server Setup.log file, you may notice that only one
	line is logged in the file:
	
	  ++++ Microsoft Exchange Setup initialized ++++
	
	No information indicates which file cannot be found.
	
	CAUSE
	=====
	
	This issue can occur if you removed the Key Management Service (KMS) component
	incorrectly.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the KMS component and apply it again. If you
	cannot remove the KMS component when you run Setup.exe, you must remove it
	manually:
	
	1. Stop KMS.
	
	2. Start Registry Editor (Regedt32.exe).
	
	3. Remove the following registry keys:
	
	   - HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeKMS
	
	   - HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\KMServer
	
	   - HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Setup\Key Management Server
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
