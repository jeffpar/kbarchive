---
layout: page
title: "Q244668: XCLN: Outlook 2000 Upgrade Error Message: Unable to Switch to..."
permalink: /kb/244/Q244668/
---

## Q244668: XCLN: Outlook 2000 Upgrade Error Message: Unable to Switch to...

{% raw %}

	Article: Q244668
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Outlook 2000 on a computer that does not have Microsoft
	Schedule+ already installed on it, you may receive the following error message:
	
	  Unable to Switch to Microsoft Schedule+ as your primary calendar.
	
	CAUSE
	=====
	
	When you install Outlook 2000 with the Terminal Server transform file (MST), all
	of the files necessary to use Schedule+ are not installed. The installation
	expects that Schedule+ should already be installed.
	
	RESOLUTION
	==========
	
	To resolve this problem, use either of the following methods:
	
	Method A
	--------
	
	Install the following files into the Program Files\Microsoft Office\Office\1033
	folder:
	
	  Can32.cfg
	  Req32.cfg
	  Rpn32.cfg
	  Rpp32.cfg
	  Rpt32.cfg
	  Mcs.ico
	  Mc.ico
	  Mrs.ico
	  Mr.ico
	  Mrns.ico
	  Mrn.ico
	  Mrps.ico
	  Mrp.ico
	  Mrts.ico
	  Mrt.ico
	
	You can get these files from another computer that is running Schedule+ 7.5 on
	the same operating system, or from the distribution CD for Microsoft Exchange
	Client 5.0 Service Pack 2.
	
	Method B
	--------
	
	Install Schedule+ and Exchange Client 5.0 before you install Outlook 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbZNotKeyword3
	Version           : WINDOWS:2000
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
