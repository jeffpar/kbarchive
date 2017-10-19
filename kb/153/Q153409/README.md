---
layout: page
title: "Q153409: Single Quotation Mark in NetWare Domain Name Fails"
permalink: /kb/153/Q153409/
---

## Q153409: Single Quotation Mark in NetWare Domain Name Fails

	Article: Q153409
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbHMan smshiermankbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	A NetWare domain name that includes a single quotation mark (for example, "TEST'S
	NW DOM") is added as a domain but never shows up in the site's window. Computers
	in that domain are identified in a pop-up dialog as belonging to a domain that
	does not exist.
	
	CAUSE
	=====
	
	Hierarchy Manager fails to add a domain name if the domain name contains a
	single quotation mark. The Hman.log file shows multiple attempts to put the
	NetWare domain name "TEST'S NW DOM" into the database, but it fails with SQL
	errors that reference invalid SQL syntax.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbHMan smshierman kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Solution Type     : kbfix
	
	=============================================================================
	
