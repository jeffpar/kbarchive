---
layout: page
title: "Q158010: XCLN: Setup Could Not Write to File Mapiform.vbx"
permalink: /kb/158/Q158010/
---

## Q158010: XCLN: Setup Could Not Write to File Mapiform.vbx

	Article: Q158010
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use the Chess form and you quit and log off the client, if you run the
	Microsoft Exchange client Setup, the following error message may appear:
	
	  Setup could not write to file: "c:\win95\system\mapiform.vbx" This file is
	  currently being used by another application. Close any open applications.
	
	CAUSE
	=====
	
	Mapiform.vbx should be unloaded after you have quit the Microsoft Exchange
	client and closed all messages and executable files, but Chess.exe is not
	unloaded when you quit and log off the client. Therefore, Mapiform.vbx and
	Mapi.dll remain loaded in memory and affect Setup when it tries to update or
	remove them. This only occurs with the Chess form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: eform e-form
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
