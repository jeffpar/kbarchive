---
layout: page
title: "Q181952: XFOR: PAB Addresses Invalid After Converting to DirSync Server"
permalink: /kb/181/Q181952/
---

## Q181952: XFOR: PAB Addresses Invalid After Converting to DirSync Server

	Article: Q181952
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Exchange users who send messages to Microsoft Mail custom recipients selected
	from their personal address book (PAB) may receive non-delivery reports (NDRs).
	The NDR includes the following:
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject:   <subject>
	     Sent:   <date / time>
	
	  The following recipient(s) could not be reached:
	
	     <recipient> on <date / Time>
	           The recipient name is not recognized
	           MSEXCH:MSExchangeMTA:<Site>:<Server name>
	
	In addition, the event viewer may log the following errors:
	
	  Event ID:   2245
	  Source:   MSExchangeMTA
	  Type:   Warning
	  Category:   Directory Access
	
	  Directory operation (ds_read) failed with problem DS_E_NO_SUCH_OBJECT.
	  Attribute . Directory Name (string):
	  /O=<org>/OU=<site>/CN=<container>/CN=<MS MAIL PO>/CN=<USERDN>.
	  [RD Server DISP:ROUTER 10 114] (8)
	
	  Event ID:   142
	  Source:   MsExchangeMTA
	  Type:   Warning
	  Category:   X400 Service
	
	  The MTA was unable to route to recipient
	  DN:/o=<org>/ou=<site>/cn=<container>/cn=<MS Mail PO>/cn=<Recipient
	  DN>[ASCII 167]. The message (MTS-ID): <X400 address>, recipient:
	  DN:/o=<org>/ou=<site>/cn=<container>/cn=<MS MailPO>/cn=<recipient
	  DN>[ASCII 167], recipient number 1. Check the routing table for a
	  possible incorrect routing configuration. [MTA DISP:ROUTER 10 119] (12)
	
	  Event ID:   290
	  Source:   MSExchangeMTA
	  Type:   Warning
	  Category:   X400 Service
	
	  A non-delivery report (reason code unable-to-transfer and diagnostic
	  code unrecognized-OR-name) is being generated for message <X400
	  address>. It was originally destined for
	  DN:/o=<org>/ou=<site>/cn=<container>/cn=<MS Mail
	  PO>/cn=<recipient DN>[ASCII 167] (recipient number 1), and was to be
	  redirected to . [MTA DISP:RESULT 16 136] (12)
	
	CAUSE
	=====
	
	This problem may occur after the Exchange Server computer is converted from a
	dirsync requestor to a dirsync server. When the first dirsync process was run,
	all MS Mail custom recipients participating in it were given a Distinguished
	Name (DN). This DN consists of the user name followed by a hexadecimal number;
	for example, AdminAB57B22C. This DN is used to uniquely identify each user
	within Exchange. When Exchange users place custom recipients in their PAB, the
	custom recipient's DN is also copied.
	
	If the Exchange Server computer is converted from a dirsync requestor to a
	dirsync server, the custom recipients are recreated in the Exchange global
	address list (GAL) during dirsync, and each custom recipient is a given new DN.
	The custom recipient addresses in the Exchange user's PAB are not automatically
	updated and still contain the old DN. The custom recipient Net/PO/Alias names
	will appear the same; however, the hexadecimal number immediately following the
	name will be different.
	
	When the Exchange user addresses messages to these custom recipients via the PAB,
	the Exchange MTA reviews the X400 address. Because the DN hexadecimal numbers
	are different, the MTA does not find a matching object in the directory, an NDR
	is returned to the sender, and the above events are logged in the event log.
	
	RESOLUTION
	==========
	
	After the Exchange Server computer is converted to the dirsync server and
	dirsync has occurred, all Exchange users should remove all custom recipients
	from their PAB, select those custom recipients again from the Exchange global
	address list (GAL), and add them again to the PAB. The Exchange users can also
	manually enter the MS Mail users into the PAB instead of selecting them from the
	GAL.
	
	MORE INFORMATION
	================
	
	A similar situation will arise in the global address list (GAL) and distribution
	lists (DL) when you remove the dirsync requestor object. All custom recipients
	will be deleted from the Exchange GAL and from all DLs. After the Exchange
	Server computer is converted to a dirsync server and dirsync has occurred,
	custom recipients will be recreated. Custom recipients, however, will not be
	recreated in the distribution list and must be added manually.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
