---
layout: page
title: "Q146044: XCLN: Err Msg: The Set of Folders Could Not Be Opened..."
permalink: kb/146/Q146044/
---

## Q146044: XCLN: Err Msg: The Set of Folders Could Not Be Opened...

	Article: Q146044
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error message may appear when you attempt to start up offline or
	when you try to access a mailbox when working offline:
	
	  The set of folders could not be opened. The information store could not be
	  opened.
	
	CAUSE
	=====
	
	There are several possible causes of this error message:
	
	- Offline store use has been disabled, but you start up offline.
	
	- After the first profile is created, Microsoft Exchange no longer prompts the
	  user with the question "Do you travel with this computer?" Because of this,
	  the offline store is not created automatically for new profiles even though
	  they may be used offline. If Microsoft Exchange Server is started offline for
	  any reason, the above error message will be displayed unless you manually
	  create the offline store before starting offline.
	
	WORKAROUND
	==========
	
	Restart the Microsoft Exchange client and work online, then go back to the
	offline folder status button and specify the profile to use.
	
	
	
	Additional query words: profiles offline
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0
	
	=============================================================================
	
