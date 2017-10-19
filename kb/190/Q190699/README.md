---
layout: page
title: "Q190699: XADM: Microsoft Exchange Key Management Server Event ID 5057"
permalink: /kb/190/Q190699/
---

## Q190699: XADM: Microsoft Exchange Key Management Server Event ID 5057

	Article: Q190699
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Key Management Server Service from Control Panel
	Services, the following event may be logged in the application log:
	
	  Event ID: 5057
	  Category: none
	  Source: Microsoft Exchange Key Management service
	  Description:
	  The supplied password is invalid.
	  The startup parameters in services have been entered incorrectly, or the
	  floppy that is used to supply the startup parameters is corrupted.
	
	WORKAROUND
	==========
	
	If you enter the startup parameters manually, remember that the password is case
	sensitive. Or try inserting one of the backup floppies that contain the Key
	Management Server service's password.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
