---
layout: page
title: "Q263102: XCLN: Password Dialog Box for Domain Credentials Hangs"
permalink: /kb/263/Q263102/
---

## Q263102: XCLN: Password Dialog Box for Domain Credentials Hangs

{% raw %}

	Article: Q263102
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): kbOffice2000sp2fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you initiate a remote mail connection in Outlook 2000 by using the Remote
	Mail feature, the dialog box for logon information (domain credentials) may stop
	responding (or "hang") until you start another program.
	
	CAUSE
	=====
	
	This problem can occur if the password dialog thread runs within the main
	spooler thread, which does not allow the password dialog thread to be the item
	that is in focus. When the password dialog thread is moved to a background
	thread, it allows the focus to shift to the new item in focus without
	interfering with the main Outlook process.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Microsoft Office
	2000. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q276367 OFF2000: How to Obtain the Latest Office 2000 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook 2000. This
	problem was first corrected in Microsoft Office 2000 Service Pack 2.
	
	
	Additional query words: OL2000
	
	======================================================================
	Keywords          : kbOffice2000sp2fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
