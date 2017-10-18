---
layout: page
title: "Q224499: SBS Modem Unavailable if Clients Do Not Disconnect"
permalink: kb/224/Q224499/
---

## Q224499: SBS Modem Unavailable if Clients Do Not Disconnect

	Article: Q224499
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbui
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use a Small Business Server (SBS) modem by using Modem Sharing
	on your client computer, you may be unable to do so.
	
	CAUSE
	=====
	
	This issue can occur if another modem-sharing client computer is using the SBS
	modem. Client computers that dial out by using the SBS modem are permitted
	exclusive use of the modem, and this prevents other users from using the same
	modem. Note that this issue can occur if a user does not explicitly disconnect
	from the server or quit the communication-related program that uses the shared
	modem.
	
	RESOLUTION
	==========
	
	To resolve this issue, clients that use the SBS modem must disconnect from the
	SBS modem or communication-related program that uses the shared modem.
	
	Additional query words: smallbiz bos bof
	
	======================================================================
	Keywords          : kbnetwork kbtool kbui 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : winnt:4.0,4.0a,4.5
	Issue type        : kbprb
	
	=============================================================================
	
