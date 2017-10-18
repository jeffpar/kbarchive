---
layout: page
title: "Q251018: XFOR: Configure Migration with cc:Mail 32-bit Executables"
permalink: kb/251/Q251018/
---

## Q251018: XFOR: Configure Migration with cc:Mail 32-bit Executables

	Article: Q251018
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 17-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Exchange Server Migration Wizard with Lotus cc:Mail 32-bit
	executables (Export32.exe and Import32.exe), the migration may not work and you
	may receive the following error message:
	
	  Memory Error
	
	CAUSE
	=====
	
	This issue can occur because the updated 32-bit executables introduce
	incompatibilities with the Migration Wizard.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	To install the fix:
	
	1. Rename the Import32.exe and Export32.exe files to Import.exe and Export.exe,
	  respectively.
	
	2. Copy the Mlmig32.dll, Import.exe, Export.exe, Impexp.ri, Cdmw800.dll,
	  Cfw803.dll, and Ciw803.dll files to the Exchsrvr\Bin folder.
	
	3. Map a network drive to the cc:Mail post office.
	
	4. Begin migration.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
