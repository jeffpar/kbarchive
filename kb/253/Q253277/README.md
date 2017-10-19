---
layout: page
title: "Q253277: XCLN: How to Delete Messages That Have a Blank Subject Line"
permalink: /kb/253/Q253277/
---

## Q253277: XCLN: How to Delete Messages That Have a Blank Subject Line

	Article: Q253277
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot create an Outlook rule to process incoming e-mail messages that have
	a blank Subject line.
	
	CAUSE
	=====
	
	This problem occurs because in Outlook, rules cannot process an e-mail message
	if the Subject line is blank. Rules can only process an e-mail message if the
	Subject line contains some content.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. In your Inbox, on the View menu, click Current View, and then click Customize
	  Current View.
	
	2. Click Group By, and then under "Group items by", click Subject to group
	  e-mail messages according to subject.
	
	  In this view, e-mail messages that contain a blank Subject line are included
	  in a group that is displayed similar to the following:
	
	  Subject: (none)(x items, y unread)
	
	  Where x is the total number of e-mail messages in the group, and y is the
	  number of e-mail messages in the group that have not been read.
	
	3. Process that grouped set of e-mail messages as necessary. For example, delete
	  the grouped set of e-mail messages.
	
	MORE INFORMATION
	================
	
	In Outlook you can create rules that process incoming e-mail messages based on a
	variety of criteria. One type of rule moves, deletes, or processes in some way
	incoming e-mail messages, based on the contents of the Subject line. For
	example, if you regularly receive e-mail messages that have a Subject line that
	contains JOKE, you can create a rule that deletes all incoming e-mail messages
	that contain JOKE in the Subject line. To create this type of rule, however, you
	must specify some text for the rule to look for in the Subject line of incoming
	e-mail messages. Therefore, you cannot create a rule to process an incoming
	e-mail message that has a blank Subject line.
	
	Additional query words: empty
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
