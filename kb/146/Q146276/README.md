---
layout: page
title: "Q146276: XCLN: Sectool.exe Loses Message Body Information"
permalink: kb/146/Q146276/
---

## Q146276: XCLN: Sectool.exe Loses Message Body Information

	Article: Q146276
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Sectool.exe on messages converted from a PC Mail 3.2 MMF, it wipes
	out all information in the body of the message.
	
	
	RESOLUTION
	==========
	
	1. Upgrade PC mail to version 3.5.
	
	2. Move all mail to the PC Mail server.
	
	3. Delete the .mmf file.
	
	4. Create a new .mmf file.
	
	5. Export the .mmf to Microsoft Exchange.
	
	6. Run Sectool.exe.
	
	NOTE: Do not simply upgrade a version 3.2 .mmf to version 3.5. This will not fix
	the problem.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
