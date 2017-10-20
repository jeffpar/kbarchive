---
layout: page
title: "Q290507: Error Message: Unable to Logon to the Network"
permalink: /kb/290/Q290507/
---

## Q290507: Error Message: Unable to Logon to the Network

{% raw %}

	Article: Q290507
	Product(s): The Microsoft Network
	Version(s): 5.1,5.2,5.3,6.0,6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 5.1, 5.2, 5.3, 6.0, 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use MSN Explorer on a Compaq 5000-7000 series computer with a Micro
	Modem, you may receive the following message when you attempt to connect to MSN,
	The Microsoft Network:
	
	- Connection failed, unable to logon to the Network.
	
	CAUSE
	=====
	
	A program called PCTVOICE causes this issue.
	
	RESOLUTION
	==========
	
	To resolve this issue
	
	1. Press CTRL+ALT+DELETE.
	  The Windows Task Manager List lists all programs currently running.
	  Note: If you are using Windows 2000, click the Task Manager button to view the
	  Windows Task Manager list.
	
	2. Scroll through the list and find a program called PCTVOICE.
	
	3. Select PCTVOICE, and then click the End Task button.
	  The Windows Task Manager list closes and PCTVOICE is now no longer running.
	  You may have to repeat the above steps to be certain that PCTVOICE is no
	  longer in the Task List.
	  Note: This is a temporary fix. Each time you restart your computer, you must
	  repeat the steps above to disable PCTVOICE. To permanently correct this
	  problem, please contact the manufacturer of your computer. See your owner's
	  manual for phone numbers.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN600 kbMSN610 kbMSN520 kbMSN530 kbMSN510
	Version           : :5.1,5.2,5.3,6.0,6.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
