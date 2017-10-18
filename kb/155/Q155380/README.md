---
layout: page
title: "Q155380: XCLN: Unable to Load Top Level Information"
permalink: kb/155/Q155380/
---

## Q155380: XCLN: Unable to Load Top Level Information

	Article: Q155380
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run Setup.exe for the Microsoft Exchange client, the
	following error message may appear:
	
	  Unable to Load Top Level Information
	
	CAUSE
	=====
	
	This can occur if the Win.ini file, or the Registry for the Windows NT or
	Windows 95 clients, has a predefined entry for the Microsoft Exchange client
	under the [MS Setup (ACME) Table Files] section. For example:
	
	Win.ini
	
	  [MS Setup (ACME) Table Files]
	  exchng.exe@v4.0.993.4(1033)=C:\EXCHANGE\exchng.stf
	
	Registry
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\MS Setup (ACME)\Table Files
	
	WORKAROUND
	==========
	
	Use the workaround for your Microsoft Exchange client.
	
	Microsoft Exchange Windows 3.x client:
	
	- Remove or remark (by placing a semicolon at the beginning of the line) the
	  following entry from the Win.ini:
	
	     [MS Setup (ACME) Table Files]
	     exchng.exe@v4.0.993.4(1033)=C:\EXCHANGE\exchng.stf
	
	You can now run Setup as usual.
	
	Microsoft Exchange Windows NT client or Microsoft Exchange Windows 95 client:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT or Windows 95. Microsoft cannot guarantee
	that problems resulting from the incorrect use of Registry Editor can be solved.
	Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     Software\Microsoft\MS Setup (ACME)\Table Files
	
	3. Delete this key.
	
	4. Quit Registry Editor.
	
	You can now run Setup as usual.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
