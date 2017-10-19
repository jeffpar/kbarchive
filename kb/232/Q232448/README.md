---
layout: page
title: "Q232448: XFOR: Netscape 4.x Cannot Delete Appointments in Calendar"
permalink: /kb/232/Q232448/
---

## Q232448: XFOR: Netscape 4.x Cannot Delete Appointments in Calendar

	Article: Q232448
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Users who use the Netscape Browser cannot delete more than one appointment for
	each Outlook Web Access (OWA) session. No error messages are returned, nor is
	any indication of a problem given. Yet, reloading the page reveals the deleted
	appointments still exist, and can still be opened and edited.
	
	CAUSE
	=====
	
	Active Server Page (.asp) files (which are responsible for OWA communication) in
	the Request and Response directory may be out of sync.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	WORKAROUND
	==========
	
	To delete the appointments, the user must exit the mailbox, quit the browser,
	log back on to the mailbox, and then delete the appointment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	This problem was first corrected in Exchange Server 5.5 Service Pack 3.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
