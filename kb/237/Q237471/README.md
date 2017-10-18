---
layout: page
title: "Q237471: ISAPI Filters Marked as Unknown Called before Priority Filters"
permalink: kb/237/Q237471/
---

## Q237471: ISAPI Filters Marked as Unknown Called before Priority Filters

	Article: Q237471
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ISAPI Filters that do not register with either High, Medium, or Low priority are
	marked as Unknown in the Microsoft Management Console (MMC). Filters marked as
	Unknown are called before all filters with any of the three priorities that have
	registered for the same notification.
	
	MORE INFORMATION
	================
	
	The priority of the installed filters is a read-only metabase property. To find
	the priority of the installed filters, you can either use the MMC or one of the
	available metabase utilities. The three metabase priority properties are
	NotifyOrderLow, NotifyOrderMedium and NotifyOrderHigh, and are available in the
	following locations:
	
	  /LM/W3SVC/Filters/Filter
	  /LM/W3SVC/n/Filters/Filter
	
	Where Filter is the name of the installed filter and n is the Web Server
	instance.
	
	If two or more filters have the same priority and have registered for the same
	notification, the FilterLoadOrder determines which is called first. Note that
	Global Filters installed under the Master WWW Properties are called before a
	filter with the same priority installed under one of the Web Server instances.
	
	Additional query words: mmc
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
