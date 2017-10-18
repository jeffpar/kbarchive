---
layout: page
title: "Q164628: XADM: Export Populates Addresses Column Randomly"
permalink: kb/164/Q164628/
---

## Q164628: XADM: Export Populates Addresses Column Randomly

	Article: Q164628
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you perform a directory export in the Exchange Server Administrator
	program, in the resulting export file (with the extension .csv) the E-Mail
	Addresses column may be populated randomly with the various e-mail address types
	for each mailbox, instead of the e-mail address types all being populated in the
	same order for each mailbox. This is by design.
	
	MORE INFORMATION
	================
	
	When an export is performed on Exchange Server, the E-Mail Addresses column of
	the export file is, by default, populated with the default Exchange Server
	e-mail addresses in the following order:
	
	  MS:<MS Mail address>
	  SMTP:<SMTP address>
	  X400:<X.400 address>
	  CCMAIL:<cc:Mail address> (only in Exchange Server 5.0)
	
	However, if you manually change one of these e-mail addresses for a particular
	mailbox on that server using the Exchange Server Administrator program, and then
	perform the directory export, the e-mail address types may be populated in a
	different order in the E-Mail Addesses column for that mailbox. For example, the
	order may be: CCMAIL, then MS, then SMTP, and then X.400.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
