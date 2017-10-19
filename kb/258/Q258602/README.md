---
layout: page
title: "Q258602: XADM: Clients Cannot Reply After Exchange Server Computer Moved"
permalink: /kb/258/Q258602/
---

## Q258602: XADM: Clients Cannot Reply After Exchange Server Computer Moved

	Article: Q258602
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange Server Move Server Wizard creates an X.500 proxy address and retains
	the X.400 proxy address for each user by using the old organization name and
	site name. These proxy addresses enable other clients to reply to messages that
	the clients received before the move.
	
	If you manually move Exchange Server to another site by performing a directory
	export or directory import, old proxy addresses are not maintained. Non-delivery
	reports (NDRs) are returned if clients reply to messages that the clients
	received before the move.
	
	MORE INFORMATION
	================
	
	To prevent NDRs to reply messages, add secondary X.500 and X.400 proxy addresses
	manually:
	
	1. Start the Exchange Server Administrator program.
	
	2. Double-click the recipient mailbox that belongs to the moved server.
	
	3. Click the E-mail Addresses tab, and then click Add.
	
	4. In the New E-Mail Address dialog box, click X.400 Address, and then click OK.
	
	5. In the following boxes, type the appropriate information:
	
	  a. Given name (g): First name of the user.
	
	  b. Surname (s): Last name of the user.
	
	  c. Organization (0): Name of the old Exchange Server site.
	
	  d. PRMD (p): Name of the Exchange Server organization.
	
	6. Click OK, and then click Add again.
	
	7. In the New E-Mail Address dialog box, click Other Address.
	
	8. In the E-mail Address box, type the following
	
	  /o=<organization>/ou=<site>/cn=Recipients/cn=<X.500_name>
	
	  where <organization> is the name of the Exchange Server organization,
	  <site> is the name of the old Exchange Server site, and
	  <X.500_name> is the X.500 common name for the user.
	
	  For example, if you move a server in an Exchange Server organization that is
	  named ExchOrg from a site that is named Boston and the user's X.500 common
	  name is MailUser, the X.500 address is the following:
	
	  /o=ExchOrg/ou=Boston/cn=Recipients/cn=MailUser
	
	  Keep the case of the letters consistent with what is displayed in the Exchange
	  Server Administrator program.
	
	9. In the "E-mail type" box, type "X500" (without the quotation marks).
	
	You can also add these addresses by using Exchange Server directory import.
	
	For additional information about Exchange Server export and import, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q155414 XADM: Bulk Import/Export FAQ
	
	  Q155594 XADM: Generic Import Format to Add SMTP Secondary Proxy Address
	
	Additional query words: MSW
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
