---
layout: page
title: "Q300049: Passport User Ticket Data is Never Refreshed"
permalink: kb/300/Q300049/
---

## Q300049: Passport User Ticket Data is Never Refreshed

	Article: Q300049
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Passport user ticket data is never refreshed.
	
	CAUSE
	=====
	
	If the code on your Passport pages passes 0 (zero) as a TimeWindow parameter and
	False for the ForceLogin parameter, the IsAuthenticated method behaves the same
	as the HasTicket property. The IsAuthenticated method of the Passport Manager
	object always returns True regardless of Ticket age as long as valid Ticket data
	of any age exists in the calling domain. This is especially likely to happen
	while your site is still in test mode, because cookies that are set into your
	domain in test mode are not deleted by the normal sign-out process until you get
	a valid Site ID.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbprb
	
	=============================================================================
	
