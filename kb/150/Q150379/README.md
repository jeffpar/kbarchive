---
layout: page
title: "Q150379: XCLN: Error: Some Extensions Could Not be Loaded"
permalink: /kb/150/Q150379/
---

## Q150379: XCLN: Error: Some Extensions Could Not be Loaded

	Article: Q150379
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start a Microsoft Exchange client you might encounter the error:
	
	  Some extensions could not be loaded. Check to make sure that the extensions
	  specified in your Shared.ini and Msmail.ini files are correct. The Shared.ini
	  or Shared32.ini file could not be found at "<path>". Please check that
	  the path to this file is specified correctly in your Msmail.ini file or in
	  the registry.
	
	where <path> is specific to each system.
	
	MORE INFORMATION
	================
	
	The problem may be that the SharedExtensionsDir value in the Msmail.ini file or
	in the registry is incorrect. Either remove the value or enter the correct path
	for the Shared(32).ini file.
	
	The registry locations for SharedExtensionsDir is:
	
	  HKEY_CURRENT_USER\software\Microsoft\Mail\Microsoft
	                   \Mail\SharedExtensionsDir: Reg_SZ: <path>
	
	and the location in the Msmail.ini file is:
	
	  [Microsoft Mail]
	  SharedExtensionsDir=<path>
	
	REFERENCES
	==========
	
	For additional information about the SharedExtentionsDir value, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q141272 XCLN Win: How Exchange Clients Use MSMAIL.INI and SHARED.INI
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
