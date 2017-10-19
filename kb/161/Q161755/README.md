---
layout: page
title: "Q161755: XCLN: Message Date Displays as 12/65202/96"
permalink: /kb/161/Q161755/
---

## Q161755: XCLN: Message Date Displays as 12/65202/96

	Article: Q161755
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A 16-bit Microsoft Exchange client displays an incorrect date for mail received
	on 12/31 during a leap year. For example, instead of displaying 12/31/96, the
	date in the inbox is displayed as 12/65202/96.
	
	Another symptom is that Schedule+ meeting requests for 12/31/96 display as
	12/1/97 within the meeting request message. Choosing to accept the meeting
	request results in no action at all. The meeting does not get booked, and no
	error is displayed.
	
	Yet another symptom may be that for messages sent on 12/31/96 with an attachment,
	the attachment (when saved to the hard disk) displays a file date of 13/18/d7 in
	File Manager and 13/18/99 at the MS-DOS prompt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
