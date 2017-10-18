---
layout: page
title: "Q168606: XFOR: MS Mail Migration Stops with Event ID 7000 and 7007"
permalink: kb/168/Q168606/
---

## Q168606: XFOR: MS Mail Migration Stops with Event ID 7000 and 7007

	Article: Q168606
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you migrate Microsoft Mail users to Microsoft Exchange Server, the
	following Event IDs may occur:
	
	  Event ID:   7000
	  Source:  MSExchangeMig
	  Type: Error
	  Category:   None
	  Description:
	  Could not migrate PAB file for account: <user id>. PAB (MMF)Path '<path
	  to mmf file>'.
	
	  Event ID:   7007
	  Source:  MSExchangeMig
	  Type: Error
	  Category:   None
	  Description:
	  Could not migrate MMF file for Account: <user account>. MMF Path '<path
	  to MMF file>'.
	
	CAUSE
	=====
	
	These events usually occur when the user being migrated has the Microsoft Mail
	Windows client open; this locks the mail message file (MMF) located on the
	Microsoft Mail postoffice.
	
	These events can also occur if the password written to the mail message file
	(MMF) is different than the account password on the Microsoft Mail Post Office.
	
	Note: This situation can occur if the Mail Administrator recovers the user's
	password and performs a migration before the user logs into the Microsoft Mail
	client to synchronize the mmf password to the recovered password on the Post
	Office.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Ensure all users being migrated have logged off the Microsoft Mail client
	  prior to migration.
	
	- Ensure all users that have had their password recovered by the Microsoft Mail
	  Administrator program have logged on and off the Microsoft Mail client prior
	  to migration to ensure the password on the mmf is synch- ronized to the
	  recovered password on the Post Office.
	
	Additional query words: fail
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
