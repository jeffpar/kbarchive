---
layout: page
title: "Q216371: XCLN: Attendees Don't Publish Correct Free/Busy Calendar Info"
permalink: /kb/216/Q216371/
---

## Q216371: XCLN: Attendees Don't Publish Correct Free/Busy Calendar Info

{% raw %}

	Article: Q216371
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,97,98
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
	
	When a user plans a meeting by using Microsoft Outlook, some attendees may not
	display the same amount of free/busy calendar information as their clients are
	configured to publish.
	
	CAUSE
	=====
	
	This may happen after a user makes a change to an account's calendar, and that
	user is set to publish a different number of months of free/busy information.
	The client publishes the same number of months of free/busy information as the
	client that makes the change is set for.
	
	WORKAROUND
	==========
	
	Use the "Steps to Reproduce the Problem" in the "More Information" section of
	this article to change User1 to publish 12 months (or match Resource1's setting)
	free/busy information, open Resource1's calendar, and manually make a change in
	an existing calendar item. Quit and log off Outlook. Resource1 publishes the
	amount of free/busy information as set by User1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. In Outlook 98, set the number of months of free/busy information to publish
	  in; on the Tools menu, click Options, click Calendar Options, and then click
	  Freebusy Options. Type the number of months in the Publish box.
	
	  - or -
	
	  In Outlook 97, set the number of months of free/busy information to publish;
	  on the Tools menu, click Options, and then click the Calendar tab. Click
	  Advanced Scheduling, and then, under "Settings for free/busy information", in
	  the Publish box, enter the number of months.
	
	2. Set up two accounts, Resource1 and User1. Set Resource1 to publish 12 months
	  of free/busy information, and set User1 to publish 2 months of free/busy
	  information. Grant User1 Editor permissions to the Resource1 calendar.
	
	3. Create an appointment in the Resource1 calendar that is set to recur for 52
	  weeks. Quit and log off the Resource1 mailbox.
	
	4. Log on as User1 and plan a meeting with Resource1. You see the recurring
	  appointment far out into the future.
	
	5. Now open the Resource1 calendar. On the File menu, click Open Other User's
	  Folder, and manually enter an appointment or meeting. Close the Resource1
	  calendar. Quit and log off User1 from Outlook.
	
	6. Log back on to Outlook as User1 and plan a meeting with Resource1.
	
	Expected results:
	
	You see free/busy information for Resource1 far out into the future, as in step
	3.
	
	Actual results:
	
	You only see free/busy information for Resource1 for two months (or whatever
	User1 is set to publish).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,97,98
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
