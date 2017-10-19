---
layout: page
title: "Q170033: XADM: Individual Public Folder Age Limits Overridden"
permalink: /kb/170/Q170033/
---

## Q170033: XADM: Individual Public Folder Age Limits Overridden

	Article: Q170033
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The age limit set for the "Age Limit for all folders on this Information Store"
	property will override the "All Replicas" property of a specific public folder.
	If there is an Age Limit for "This Replica," it works correctly and is not
	overridden by the IS PF Age Limit.
	
	MORE INFORMATION
	================
	
	This is by design. Age limits on public folders can be set in the following
	locations:
	
	- General Tab of the property page of the folder itself. The property is "Age
	  Limit for Replica(s).
	
	- The Age Limits property page of the Public Information Store object. The
	  property is "Age Limits for all folders on this Information Store."
	
	- The Age Limits property page, select the folder in the scroll window, then
	  select modify. This will expose a window with properties for This replica and
	  for All replicas. Note, by setting all replicas on this page is the same as
	  point number 1.
	
	The following is the order of priority:
	
	1. This Replica
	
	2. Age Limit for all folders on this Information Store
	
	3. All Replicas
	
	The reasoning behind this order of priority is that both "This Replica" and "Age
	limits for all folders on this Information Store" are controls that affect one
	particular server. Having "All Replicas" override "Age limit for all folders in
	this Information" impacts multiple servers and makes it more difficult for
	administrators of those other servers to control their servers.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
