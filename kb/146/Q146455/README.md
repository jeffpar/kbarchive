---
layout: page
title: "Q146455: XADM: Generated SMTP Addresses for Duplicate Mailboxes"
permalink: kb/146/Q146455/
---

## Q146455: XADM: Generated SMTP Addresses for Duplicate Mailboxes

	Article: Q146455
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have multiple users with the same surname and given name, only the
	first generated SMTP address uses the complete surname and given name
	combination. All subsequently generated SMTP addresses use their alias and an
	iteration number.
	
	MORE INFORMATION
	================
	
	The first time that a unique SMTP address is generated for a recipient, the
	template information from the Configuration container, Site Addressing object,
	and Site Addressing property page is used to generate the SMTP address. For
	example, if you set up the SMTP site address to be %s.%g@company.com, the SMTP
	address will be surname.givenname@company.com.
	
	If you have two or more people with the same surname and given name, every
	subsequent duplicate name uses the alias for that person and an appended
	iteration number. For example, the next person with the same name ends up with
	an SMTP address of:
	
	  gsurname2@company.com
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
