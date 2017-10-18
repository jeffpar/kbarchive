---
layout: page
title: "Q146345: XADM: Adding Too Many Proxy Addresses To a Mailbox"
permalink: kb/146/Q146345/
---

## Q146345: XADM: Adding Too Many Proxy Addresses To a Mailbox

	Article: Q146345
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You will receive the following error when you add too many proxy names to a
	mailbox:
	
	  The maximum number of administrative connections to the server has been
	  exceeded. Try again later or connect to a different server.
	
	  Microsoft Exchange Directory
	  ID no:DS_E_ADMIN_LIMIT_EXCEEDED
	
	MORE INFORMATION
	================
	
	The above error message will be displayed when adding additional proxy e- mail
	addresses to a mailbox if the total number of proxy addresses is more than 200.
	In most cases the error will be displayed when selecting OK from the E-Mail
	Addresses tab after adding the proxy addresses.
	
	The error message is not displayed when entering the addresses with the New
	button. The error is only displayed after committing the new addresses.
	
	This error will be displayed regardless of the type of address you are adding.
	
	WORKAROUND
	==========
	
	You will need to remove redundant or unneeded proxy addresses in order to add a
	new one.
	
	
	Additional query words: IMC internet mail connector macmail pcmail microsoft
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
