---
layout: page
title: "Q221122: XGEN: Exchange Server Event ID Descriptions Are Missing"
permalink: /kb/221/Q221122/
---

## Q221122: XGEN: Exchange Server Event ID Descriptions Are Missing

	Article: Q221122
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you uninstall a third-party application that may have relied on shared
	.dlls and registry keys from an Exchange Server computer, all Exchange
	Server-related Event IDs in the Event Viewer's application log are missing their
	descriptions. All Exchange Server-related descriptions show up as:
	
	  The description for Event ID (<Event ID>) in Source (<Component
	  Name>) could not be found.
	
	You may be missing the following files from Exchsrvr\Res folder:
	
	- Eventmsg.dll: Used for the Windows NT Event Viewer Service.
	
	- Ccmsg.dll: Used to display Exchange Server chat events.
	
	- Dsmsg.dll: Used to display Exchange Server directory events.
	
	- Imap4evt.dll: Used to display Exchange Server IMAP4 events.
	
	- Imcsmg.dll: Used to display Exchange Server Internet Mail Connector or
	  Internet Mail Service events.
	
	- Mdbmsg.dll: Used to display Exchange Server information store events.
	
	- Mtamsg.dll: Used to display Exchange Server message transfer agent (MTA)
	  events.
	
	- Nntpevt.dll: Used to display Exchange Server Network News Transport Protocol
	  (NNTP) events.
	
	- Pop3evt.dll: Used to display Exchange Server Post Office Protocol (POP3)
	  events.
	
	You may also possibly be missing any or all Exchange Server-related keys under
	the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Application\
	
	CAUSE
	=====
	
	After you uninstall an application that may have depended on or used any of
	these files or registry keys, the files or keys may be removed along with the
	application.
	
	WORKAROUND
	==========
	
	- Reinstall Exchange Server.
	
	-or-
	
	- Manually replace missing files and recreate the registry keys:
	
	  1. Copy all files from Server\Setup\I386\Res folder on the Exchange Server
	     5.5 CD into the Exchsrvr\Res folder on your Exchange Server computer,
	     choosing to overwrite the existing files.
	
	  2. Make a backup of your registry.
	
	  3. Export the following registry keys from a working Exchange Server 5.5
	     computer:
	
	(NOTE: There may be additional keys missing depending on the server's
	configuration. Adding these keys should bring back most Exchange Server-related
	Event ID descriptions but may not bring back all.)
	
	      - MSExchange NNTP Interface
	      - MSExchange POP3 Interface
	      - MSExchangeAdmin
	      - MSExchangeCCMC
	      - MSExchangeDS
	      - MSExchangeDSExp
	      - MSExchangeDSImp
	      - MSExchangeDX
	      - MSExchangeFB
	      - MSExchangeIMC
	      - MSExchangeIS
	      - MSExchangeIS Private
	      - MSExchangeIS Public
	      - MSExchangeMig
	      - MSExchangeMigDS
	      - MSExchangeMTA
	      - MSExchangeNTExt
	      - MSExchangeNWExt
	      - MSExchangeSA
	      - MXExchangeSetup
	      - MSExchangeWEB
	      - MSProxy
	      - NTBackup
	      - MSExchangeATMTA
	      - MSExchangeMSMI
	      - PCMTA
	      - ESE97
	      - MSExchange IMAP4 Interface
	      - MSExchangeES
	
	- Copy the resulting exported registry keys (*.reg files) from the working
	  Exchange Server computer into the problem Exchange Server computer's
	  registry.
	
	- After the importation is finished, double-click on each registry key file to
	  re-register the key into the registry.
	
	Exchange Server-related Event ID descriptions should now be viewable, including
	events already written to the event log.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
