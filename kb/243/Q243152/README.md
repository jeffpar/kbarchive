---
layout: page
title: "Q243152: XADM: Joining Exchange Server Site Does Not Work with c1030b37"
permalink: /kb/243/Q243152/
---

## Q243152: XADM: Joining Exchange Server Site Does Not Work with c1030b37

	Article: Q243152
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to join an Exchange Server site, you may be unable to, and the
	following error message may be displayed:
	
	  An error occurred while processing an (third party service) e-mail address.
	  To view details of the error, see the application event log in the Windows NT
	  Event Viewer on the Microsoft Exchange Server computer. Microsoft Exchange
	  Server Setup. ID no: c1030b37.
	
	CAUSE
	=====
	
	This problem can occur if the Exchange Server setup process encounters a
	third-party address type and is unable to create objects with this third-party
	address type.
	
	WORKAROUND
	==========
	
	To work around this problem, you must disable any third-party e-mail addressing
	before you join the existing site:
	
	1. Click Configuration, click Site Addressing, click the Site Addressing tab,
	  and then click to clear the check box for each third-party e-mail address
	  type to temporarily disable the generation of third-party e-mail addresses
	  for any new users who are added during this time.
	
	2. When the following dialog box is displayed
	
	  Do you want to automatically remove this Address Type from all existing
	  Recipients E-mail addresses?
	
	  click No.
	
	3. After the new server has joined the site, click Configuration, click Site
	  Addressing, click the Site Addressing tab, and then click to select the check
	  box for each third-party e-mail address type.
	
	Additional query words: RFAX RightFax Right Fax faxsys 3rd party
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
