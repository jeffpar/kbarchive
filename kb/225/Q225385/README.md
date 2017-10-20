---
layout: page
title: "Q225385: New Intranet Kit Calendar Events Not Displayed"
permalink: /kb/225/Q225385/
---

## Q225385: New Intranet Kit Calendar Events Not Displayed

{% raw %}

	Article: Q225385
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 31-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add an event to the Calendar component of the BackOffice 4.5 Intranet
	kit, the event is successfully entered and accepted, but may not be displayed in
	the View Events section of the Calendar page. This occurs whether you access the
	page locally or over the network.
	
	CAUSE
	=====
	
	Changing the time separator by using the Regional Settings tool in Control Panel
	can cause new events not to be added to the Itranet kit calendar. Localizations
	are not supported for this feature of the Intranet kit. To use the Events
	calendar in BackOffice 4.5, you must change the time separator to the standard
	colon separator (:).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Back Office Server 4.5.
	
	
	Additional query words: smallbiz bo4.5
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
