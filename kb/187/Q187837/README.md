---
layout: page
title: "Q187837: XWEB: Appointments Display As Busy or Tentative Only"
permalink: /kb/187/Q187837/
---

## Q187837: XWEB: Appointments Display As Busy or Tentative Only

	Article: Q187837
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access Service Pack 1 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you use Outlook Web Access with the "Use Schedule+ as my primary calendar"
	option, an appointment is created with "show time as Out of Office" or "Free."
	When you view the appointment details from Outlook Web Access, the appointment
	is displayed as Busy or Tentative regardless of the setting you chose.
	
	CAUSE
	=====
	
	When you use the Outlook Web Access client with the "Use Schedule+ as my primary
	calendar" option, the Outlook Web Access client is only capable of displaying
	times as Busy or Tentative. When Outlook Web Access is used in this mode, only
	the options that are supported by the Schedule+ client are available. The Free
	and Out of Office settings are allowed when the "Use Schedule+ as my primary
	calendar" option is not being used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In Outlook Web Access, the choices for an appointment's "show time as" are Free,
	Tentative, Busy, and Out of Office. In Schedule+ the choices for an appointment
	are Private, Tentative, and Busy.
	
	Creating an appointment using the Schedule+ client and a setting of Private will
	always be displayed as Busy in Outlook Web Access client. Creating an
	appointment in Outlook Web Access with a setting of Free or Tentative will
	display as Tentative, and a setting of Busy or Out of Office will display as
	Tentative.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
