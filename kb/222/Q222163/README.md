---
layout: page
title: "Q222163: XCLN: DR: &quot;Your message was deleted without being read&quot;"
permalink: /kb/222/Q222163/
---

## Q222163: XCLN: DR: &quot;Your message was deleted without being read&quot;

{% raw %}

	Article: Q222163
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:95,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Outlook 98, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Outlook 2000, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the following conditions exist, you may receive a message stating that your
	message was deleted without being read.
	
	Conditions
	----------
	
	- User A has a delegate, User D.
	
	- User A has set up the delegate to receive meeting requests and User A does
	  not receive the requests.
	
	- User B sends a meeting request to User A and later receives a Delivery
	  Receipt stating "Your message was deleted without being read."
	
	Scenario
	--------
	
	1. User B enables the "Tell me when all messages have been read" tracking option
	  in Outlook. This option notifies the message sender that the message has been
	  opened by the recipient, including date and time.
	
	  (To do this, on the Tools menu, click Options, click E-Mail Options, click
	  Tracking Options, and click to select the "Tell me when all messages have
	  been read" check box.)
	
	2. User B sends a message to User A.
	
	3. User A doesn't read the message (the delegate, User D, does), hence the
	  following message tracking notification to User B:
	
	-----Original Message-----
	From:	User A 
	Sent:	Friday, March 12, 1999 12:18 PM
	To:	User B
	Subject:	Meeting
	
	Your message
	     To:	User A
	     Subject:	Meeting
	     Sent:	3/12/99 12:18 PM
	
	was deleted without being read on 3/12/99 12:18 PM.
	
	4. The delegate, User D, selects the option to delete meeting requests after
	  they've been accepted, or simply deletes the request after it is processed.
	
	  (To do this, on the Tools menu, click Options, click E-Mail Options, click
	  Advanced E-Mail Options, and click to select the Delete meeting request from
	  inbox when responding check box.)
	
	  Enabling this setting removes a meeting request from the Inbox when User D
	  responds. If User D accepts the meeting request, the meeting is entered in
	  the Calendar.
	
	MORE INFORMATION
	================
	
	There is no way to prevent this behavior unless you clear the "Tell me when
	messages have been read" check box, which is not selected by default.
	
	Additional query words: 8.0 8.01 8.02 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbZNotKeyword3
	Version           : :; WINDOWS:95,98
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
