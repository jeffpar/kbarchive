---
layout: page
title: "Q195805: XWEB: 24-Hour Clock does not Convert 2359 Hours Correctly in OWA"
permalink: kb/195/Q195805/
---

## Q195805: XWEB: 24-Hour Clock does not Convert 2359 Hours Correctly in OWA

	Article: Q195805
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When using the Outlook Web Access client, you may choose to display time in a
	24-hour format. This can be accomplished by selecting the Options icon from the
	Outlook bar, and selecting "Display 24-hour clock" check box.
	
	However, if you select 12 midnight (2359 hours) as your day end time, the time is
	incorrectly converted. If you clear the "Display 24-hour clock" check box after
	entering 2359 as your day end time, the time is converted to 12:00 PM rather
	than displaying 12:00 AM. If you recheck this option, the time is displayed as
	12:00. If after entering the day end time as 2359 you select OK, reopening the
	Options icon displays the day end time as 0:00.
	
	WORKAROUND
	==========
	
	Do not set the clock in OWA to use the 24-hour format if the day end time will
	be midnight. Use standard time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: 2400
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550 kbOWA550SP1
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
