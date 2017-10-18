---
layout: page
title: "Q146398: XCLN: PAB with .MMF Extension Is Not Recognized"
permalink: kb/146/Q146398/
---

## Q146398: XCLN: PAB with .MMF Extension Is Not Recognized

	Article: Q146398
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to import a Personal Address Book (PAB) into the exchange client,
	if the PAB has an extension that is .MMF instead of .PAB you will receive the
	following error:
	
	  File "FILENAME.MMF" is not a recognized MMF File.
	
	If the Personal Address Book file has any entry other than MMF, the file will
	import correctly. On the other hand, if you have a actual MMF file that has the
	extension of .PAB, it will also import correctly.
	
	RESOLUTION
	==========
	
	Rename the Personal Address Book extension to anything other than .MMF and the
	import will work correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0
	Windows, Windows NT, and Windows 95 clients. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	
	Additional query words: pab address
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
