---
layout: page
title: "Q157822: XCLN: ErrMsg &quot;An extension failed to initialize...&quot;"
permalink: /kb/157/Q157822/
---

## Q157822: XCLN: ErrMsg &quot;An extension failed to initialize...&quot;

	Article: Q157822
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to start the Microsoft Exchange Windows NT client with the
	Exchange Server and Microsoft Mail services running, you may receive the
	following error message
	
	  An extension failed to initialize. The extension entry contains invalid
	  parameters.
	
	  <extension>
	
	where <extension> is an MS Mail 3.x extension such as "0;;;;;;;;;;".
	
	CAUSE
	=====
	
	There is an Msmail.ini file in the Winroot directory. WINROOT is the directory
	which Windows NT Workstation or Windows NT Server was installed.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Rename the \Winroot\Msmail.ini file to *.old.
	
	  NOTE:In some cases the file that needs to be renamed/deleted is msmail32.ini
	  rather than msmail.ini.
	  -OR-
	
	- Remark out the invalid entry or entries referenced in the error message by
	  placing a semicolon at the beginning of the line. The invalid entry or
	  entries may be located in one (or more) of the following sections of the
	  Msmail.ini file:
	
	  [Custom Commands] [Custom Menus] [Custom Messages]
	
	MORE INFORMATION
	================
	
	The Microsoft Mail service for the Microsoft Exchange client checks for and uses
	entries in the MSMAIL.INI file.
	
	For additional information about how Exchange clients use the Msmail.ini, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q141272 XCLN Win: How Exchange Clients Use MSMAIL.INI and SHARED.INI
	
	Additional query words: sfs pcmail
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT
	Version           : :4.0
	
	=============================================================================
	
