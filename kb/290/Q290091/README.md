---
layout: page
title: "Q290091: XADM: Remove all Proxy Addresses from Mailbox w/ Directory Imprt"
permalink: /kb/290/Q290091/
---

## Q290091: XADM: Remove all Proxy Addresses from Mailbox w/ Directory Imprt

	Article: Q290091
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Exchange Server Administrator program, the administrator can remove all
	e-mail addresses from a mailbox by accessing the E-mail Addresses tab on the
	properties of each mailbox and clicking Remove for each address that is listed.
	This process may be time-consuming when there are a large number of mailboxes
	that are involved. To save time, the administrator may prefer to perform this
	task by using a comma separated value (CSV) Directory Import.
	
	RESOLUTION
	==========
	
	To use CSV Directory Import to remove all e-mail address types from mailboxes:
	
	1. Perform a directory export of the Recipient container(s) or the Global
	  Address List.
	
	2. Each row represents an exported recipient. Delete any rows that contain
	  recipients that you do not intend to modify.
	
	3. Create a column header entitled "Secondary-Proxy-Addresses" (without the
	  quotation marks), and insert "~DEL" (without the quotation marks) for each
	  cell below this header.
	
	4. Clear the contents of all cells below the E-mail Addresses column, and insert
	  a string in the following format. Include an address type for each address
	  generator in your site:
	
	  ~DEL<SMTP:>%~DEL<X400:>%~DEL<NOTES:>
	
	5. Perform a Directory Import of the .csv file.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
