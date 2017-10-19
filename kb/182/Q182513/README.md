---
layout: page
title: "Q182513: XADM: Exchange Server Setup Stops With 0xc002041d"
permalink: /kb/182/Q182513/
---

## Q182513: XADM: Exchange Server Setup Stops With 0xc002041d

	Article: Q182513
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 13-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start services, the Microsoft Exchange Server Setup program
	stops responding and the following error message is displayed:
	
	  The service did not respond to the start or control request in a timely
	  fashion 0xc002041d.
	
	The following error message is logged in the Windows NT Event Viewer application
	event log:
	
	  Event ID: 1166
	  Source: MSExchangeDS
	  Type: Information
	  Category: Internal Processing
	  Error 1 has occurred (Internal ID 30D0168). Contact Microsoft Technical
	  Support for assistance.
	
	CAUSE
	=====
	
	There may be multiple causes for this error.
	
	- The system date is incorrect and set to a year beyond 2038.
	
	- Anti-virus software was installed before the Exchange Server installation.
	
	- A later version of Web browser than the version that ships with Windows NT
	  4.0 is not installed.
	
	- You are not logged in using the Exchange Server service account.
	
	
	WORKAROUND
	==========
	
	To work around the problem:
	
	- Change the system date to the correct date and time, and re-run Setup.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q154595 XADM: Directory Won't Start if System Date Later Than 2038
	
	- For many of these cases, disabling the anti-virus services is not sufficient.
	  In those instances, an unistall of the anti-virus software is necessary.
	  Perform the upgrade or installation. Reinstall the anti-virus software after
	  installation.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
