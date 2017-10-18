---
layout: page
title: "Q199296: XCLN: Outlook 97 Error: &quot;Failed to Perform Client Side Action&quot;"
permalink: kb/199/Q199296/
---

## Q199296: XCLN: Outlook 97 Error: &quot;Failed to Perform Client Side Action&quot;

	Article: Q199296
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Outlook 97, you may receive an error similar to the following after
	you receive a new message that an Inbox Assistant rule attempts to process to a
	public folder.
	
	  Title : Rules in Error
	  Rule
	  Subject:xxxCOPY or MOVE TO:<unavailable>
	  Error:
	  Failed to perform client side action
	
	CAUSE
	=====
	
	This error may be generated if a rule has been set up to move or copy messages
	to a public folder in which you do not have proper permissions.
	
	RESOLUTION
	==========
	
	To resolve this problem, verify that you have the correct permissions on the
	public folder your rule is trying to copy or move messages to.
	
	MORE INFORMATION
	================
	
	Outlook 98 does not allow you to set up a rule on a public folder for which you
	do not have proper permissions.
	
	
	Additional query words: 8.0 8.01 8.02 8.03
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	
