---
layout: page
title: "Q197722: XCLN: Outlook Additional Appointments Icon Doesn't Work"
permalink: /kb/197/Q197722/
---

## Q197722: XCLN: Outlook Additional Appointments Icon Doesn't Work

	Article: Q197722
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you view your Calendar in the 7-day or 31-day view, and you click on the
	icon to display additional appointments, you may notice that the Additional
	Appointment icon doesn't do anything.
	
	CAUSE
	=====
	
	The Additional Appointments icon doesn't work if it is displayed on the day that
	appears in the first block--the top block in the 7-day view or the upper
	left-most block in the 31-day view.
	
	WORKAROUND
	==========
	
	To work around this problem, click on the scroll bar to move the day to a
	different position.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions of Outlook listed
	above.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Switch to the 31-day view.
	
	2. In the day that is in the upper left-most block, create enough appointments
	  to get the Additional Appointments icon in the lower right corner of the
	  block.
	
	3. Try to click on the icon for additional appointments. Nothing happens.
	
	4. If you click on the scroll bar, so the day you are working with is no longer
	  in the upper left-most block position, you can now click on the Additional
	  Appointments icon, and it will take you to that day (1 day view).
	
	NOTE: If you are using the 7-day view, this will happen if the day you are
	working with is the first day (top block).
	
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : :8.0,8.01,8.02,8.03; WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
