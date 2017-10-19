---
layout: page
title: "Q193930: XFOR: Exchange and Internet Mail Client Co-existence"
permalink: /kb/193/Q193930/
---

## Q193930: XFOR: Exchange and Internet Mail Client Co-existence

	Article: Q193930
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Customers want to maintain connectivity and co-existence with both Internet
	Mail/POP3 and Exchange Server services, but they do not want the users to be
	able to select Exchange Server users from the global address list (GAL).
	
	For example, users are using Microsoft Outlook 97 as their client. They have two
	services for each profile: Internet Mail Service and an Exchange Server service.
	Also, each user has two SMTP aliases: Internet Mail/POP3 system (for example,
	Adam) and another for Exchange Server (for example Adam.Barr).
	
	To enable this functionality, create alternate recipients for each Exchange
	Server mailbox, and hide the Exchange Server mailbox, by following these steps:
	
	1. Create a custom recipient (CR) that maps to each user's alias on the POP3
	  system (for example, a CR whose SMTP address would be
	  Adam@acme.microsoft.com).
	
	2. In the Properties for each native Exchange Server recipient, select the
	  Delivery Options tab, and under Alternate Recipients, click the option button
	  next to the text field, and click Modify. Select the CR you created in Step
	  1, and click OK.
	
	3. While still in the recipient's Properties, select the Advanced tab, and clear
	  the "Hide from address book" check box. Click OK.
	
	The net effect of this is that the Exchange Server recipients do not appear in
	the GAL (so they can't be selected from within the organization). Also, any mail
	accidentally sent to the Exchange Server mailbox gets copied/forwarded to the
	alternate recipient, which just happens to be the user's POP3 mailbox.
	Additionally, hiding the Exchange Server mailbox from the address book does not
	affect inbound routing of messages from other systems.
	
	Now, administrators can migrate users to Exchange Server on a user-by-user basis.
	As users are migrated, simply remove the CR, unhide the mailbox, and switch
	"Alternate Recipient" back to "None."
	
	The example companies, organizations, products, people and events depicted herein
	are fictitious. No association with any real company, organization, product,
	person or event is intended or should be inferred.
	
	Additional query words: XCLN
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
