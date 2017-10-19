---
layout: page
title: "Q248195: XFOR: Config. Interoperability w. cc:Mail 8.5 32-bit Executables"
permalink: /kb/248/Q248195/
---

## Q248195: XFOR: Config. Interoperability w. cc:Mail 8.5 32-bit Executables

	Article: Q248195
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbsetup exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade a cc:Mail post office to version 8.5, if you use the 16-bit
	versions of the Import.exe and Export.exe files, the Lotus cc:Mail post office
	is corrupted.
	
	This article provides a procedure that enables Exchange Server to run with the
	32-bit executables that are required for compatibility with Lotus cc:Mail
	version 8.5.
	
	CAUSE
	=====
	
	Exchange Server is designed to work with the 16-bit executables, the Import.exe
	and Export.exe files, of cc:Mail versions earlier than 8.5. When Lotus
	introduced cc:Mail 8.5, it switched to 32-bit executables, the Import32.exe and
	Export32.exe files, and the supporting dynamic link libraries, the Cdmw800.dll,
	Cfw803.dll, and Ciw803.dll files.
	
	RESOLUTION
	==========
	
	To run the Microsoft Exchange Connector for Lotus cc:Mail with the new cc:Mail
	8.5 post office:
	
	1. Stop the Connector for cc:Mail.
	
	2. Rename the Import32.exe and Export32.exe files to Import.exe and Export.exe,
	  respectively.
	
	3. Copy the Import.exe, Export.exe, Cdmw800.dll, Cfw803.dll, and Ciw803.dll
	  files to a directory that is in the path of the Exchange Server computer, for
	  example, the Winnt directory.
	
	4. Copy the Impexp.ri file to the <drive>\Exchsrvr\Ccmcdata directory.
	
	5. Restart the Connector for cc:Mail.
	
	The connector functions normally, that includes directory synchronization.
	
	Additional query words: upgrade, synchronize import exe export cdmw800 dll cfw803 ciw803
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbsetup exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
