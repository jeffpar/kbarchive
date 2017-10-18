---
layout: page
title: "Q228509: XCLN: Meeting Item Cannot Be Opened on Outlook 8.04 Client"
permalink: kb/228/Q228509/
---

## Q228509: XCLN: Meeting Item Cannot Be Opened on Outlook 8.04 Client

	Article: Q228509
	Product(s): Microsoft Exchange
	Version(s): 8.04
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, version 8.04 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an Outlook user modifies an occurrence of a recurring meeting request by
	adding another attendee, the new attendee, if using Outlook 97 (8.04), cannot
	open the meeting request.
	
	When the new attendee attempts to open the update meeting request, the following
	message appears:
	
	  Microsoft Outlook
	  Unable to open meeting item "<subject of meeting request>".
	
	Expected Results:
	
	The Outlook 97 version 8.04 user expects the meeting to open and to be allowed to
	accept or reject it.
	
	Only newly-added attendees are unable to open the meeting update notification. If
	you use Outlook 97 version 8.03, you can open the updated meeting message.
	Newly-added attendees cannot open the updated meeting message if they are using
	either the Service Release 2 (SR2) update to Outlook 97 (or Office 97) or the
	Year 2000 update. Original attendees do not experience any problem with the
	meeting update, regardless of client version. The problem is in the creation of
	the recurring meeting in the Calendar.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Outlook 97 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Outllib
	
	+--------------------------+
	| File name | Version      | 
	+--------------------------+
	| Outllib   | 8.04.00.6324 | 
	+--------------------------+
	
	The fix is also available in the following languages:
	
	  French
	  German
	  Italian
	  Japanese
	
	
	
	STATUS
	======
	
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	If you use Outlook 97 version 8.03, you can open the updated meeting message.
	Newly-added attendees cannot open the updated meeting message if they are using
	either the Operating System Release 2 (OSR2) update to Outlook or the Year 2000
	update. Original attendees do not experience any problem with the meeting
	update, regardless of client version. The problem is in the creation of the
	recurring meeting in the Calendar.
	
	
	Additional query words: 8.04 OL97
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook804
	Version           : :8.04
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
