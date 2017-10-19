---
layout: page
title: "Q156730: XFOR: CSI Type Addresses Show Up in Exchange GAL"
permalink: /kb/156/Q156730/
---

## Q156730: XFOR: CSI Type Addresses Show Up in Exchange GAL

	Article: Q156730
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.5
	Operating System(s): 
	Keyword(s): kbnetwork exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Custom recipients coming into Microsoft Exchange Server from an FFAPI postoffice
	are listed in the Microsoft Exchange Server global address list (GAL) as CSI
	type.
	
	CAUSE
	=====
	
	When Microsoft Exchange Server is a directory synchronization (dir-sync)
	requester, and an FFAPI postoffice is participating in dir-sync, it is possible
	for the FFAPI user list to populate the Microsoft Exchange Server GAL with
	custom recipients of the MS address type after the first dir-sync cycle.
	However, subsequent cycles of dir-sync that include an Add record of an FFAPI
	user produce a custom recipient with a CSI user type.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	To verify what type of address type a custom recipient has:
	
	1. Double-click the custom recipient in the Microsoft Exchange Server GAL.
	
	2. On the General tab, review the information associated with the E-mail button
	  (lower left corner of the window). For example, an FFAPI address that has
	  dirsync'd into Microsoft Exchange Server with a CSI address shows
	  CSI:NET/PO/USER in the e-mail field.
	
	To find out whether FFAPI addresses are actually dirsync'ing from Microsoft Mail
	into Microsoft Exchange Server with a CSI type address:
	
	1. Carry out Listq against the Msttrans.glb file on the Microsoft Mail dir- sync
	  server. For more information, see the following Microsoft Knowledge Base
	  article:
	
	  Q96060 PC DirSync: Directory Synchronization (Dir-Sync)
	
	2. Review the transactions from the FFAPI postoffice. The FFAPI postoffice users
	  will have CSI: in front of their 10/10/10 address.
	
	In addition to the custom recipient's having a CSI type address, the alias of
	this custom recipient will have an invalid value. For example, on the General
	tab, the Alias field (upper right corner of the window) will show CSINET/PO/USER
	instead of a 10-character value. This value will be propagated to the e-mail
	proxies associated with this user. On the user properties, open the E-mail
	Addresses tab and review the MS, SMTP, and X400 addresses. They will have
	invalid entries:
	
	  MSffapinet/ffapipo/CSIFFAPINE
	  SMTP   CSIFFAPINET/FFAPIPO/ ALIAS @site.org.com
	  X400     c=us;p=org;o=site;S= CSI:FFAPINET/FFAPIPO/ALIAS;
	
	Because of this, mail sent from Microsoft Exchange Server to the FFAPI users'
	custom recipients that were created after the first cycle of dir- sync are not
	routed to the Microsoft Mail environment. Also, any routing from the IMC or an
	X.400 connector will not be resolved correctly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.5
	
	=============================================================================
	
