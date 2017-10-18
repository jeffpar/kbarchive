---
layout: page
title: "Q188680: XADM: How to Change cc:Mail Proxy Address for New Mailboxes"
permalink: kb/188/Q188680/
---

## Q188680: XADM: How to Change cc:Mail Proxy Address for New Mailboxes

	Article: Q188680
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Exchange Administrator program, the default cc:Mail site addressing proxy
	address is Last, First @ Site. It is possible to change the order and syntax of
	the string.
	
	MORE INFORMATION
	================
	
	To change the cc:Mail proxy generator, complete the following steps:
	
	1. Open the Microsoft Exchange Administrator program. Click Configuration, click
	  Site Addressing, and click the Site Addressing tab.
	
	2. Select the cc:Mail proxy and click Edit.
	
	3. To change the Syntax to First, Last @ Site, type %g, %s in front of at Site,
	  as shown below:
	
	  %g, %s at Site
	
	  Parameters that can be used are:
	
	  %i for the Initial
	  %g for the First name
	  %s for the Last name
	  %d for the Display name
	  %m for the Alias
	
	4. Click OK twice. The following message appears:
	
	  The Site Addressing of type(s) [CCMAIL] have been modified. Do you want to
	  update all Recipient E-mail addresses to match the new site address(es)?
	
	5. Click Yes to update all Exchange mailboxes in the site, or click No to have
	  the new settings affect only new mailboxes.
	
	6. If you click Yes, the following message appears, followed by an Event ID:
	
	  A Process has been started to update the Recipient E-mail Addresses.
	
	  Event ID: 2043
	  Source:   MSExchangeSA
	  Type:     Informational
	  Category: General
	  Description:
	  Starting the Bulk e-mail address process
	
	  Event ID: 2044
	  Source:   MSExchangeSA
	  Type:     Informational
	  Category: General
	  Description:
	  Completed the Bulk e-mail address process. <n> recipients scanned,
	  <n> successfully updated, <n> unsuccessfully updated.
	
	The following may be logged if the Exchange mailbox contains only a First name
	(Given Name) or Last name (Surname):
	
	  Event ID: 2053
	  Source:   MSExchangeSA
	  Type:     Informational
	  Category: General
	  Description:
	  The e-mail address 'CCMAIL:USER at SITE' created during update process
	  for display name 'User' (mailbox name 'USER') is not unique. The unique
	  e-mail address 'CCMAIL:USER1 at SITE' was substituted.
	
	Additional query words: directory import bulk migration generation
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
