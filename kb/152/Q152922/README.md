---
layout: page
title: "Q152922: XGEN: SMTP Addresses Don't Extract from MAC Mail to Exchange PAB"
permalink: kb/152/Q152922/
---

## Q152922: XGEN: SMTP Addresses Don't Extract from MAC Mail to Exchange PAB

	Article: Q152922
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 21-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SMTP addresses are not extracted when migrating MAC Mail personal address list
	(PAL) entries to Microsoft Exchange Windows client personal address book (PAB).
	The following is an example of what occurs with a valid SMTP address:
	
	  entry,User 1,user1@company.com
	
	Note that the SMTP address type is not specified.
	
	CAUSE
	=====
	
	The extractor does not attempt to recognize SMTP addresses and tag them as such.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Service Pack o4 Microsoft Exchange
	Server 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Service Pack 2 is required to create a Windows PAB from the MAC PAL. It is not
	possible to create an Exchange MAC PAB from a MAC PAL. For more information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152895 XADM: Unable to Migrate PABs for Appletalk Mail Users
	
	SMTP addresses are the only address types that are correctly migrated. X.400, PC
	Mail, and Exchange addresses are not migrated although they might appear to be
	after the migration. After you import the PAB (the Migrate.pab file is created
	by running the Appletalk Mail Source Extractor) into a Microsoft Exchange
	Windows client, the only names that are valid are the ones with SMTP addresses.
	All other addresses will give the following undeliverable message from the
	System Administrator:
	
	  No transport provider was available for delivery to this recipient.
	
	Additional query words: 2397 Q152895
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
