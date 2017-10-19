---
layout: page
title: "Q157915: SMS: Network Monitor Save As Only Saves One Frame"
permalink: /kb/157/Q157915/
---

## Q157915: SMS: Network Monitor Save As Only Saves One Frame

	Article: Q157915
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsAdmin smsadmin smsnetmon
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Network Monitor to perform a network sniff of a particular Systems
	Management Server (SMS) client and you click Save As on the File menu, the range
	offered is only from 1 to 1. Therefore, the resulting save will only include the
	first frame of the capture.
	
	If you try to increase the To range, a dialog box will appear with the following
	message:
	
	  The To field is not in the valid range.
	
	WORKAROUND
	==========
	
	This problem does not occur if Network Monitor was started directly from Program
	Manager or Explorer. It also does not occur if a second instance of Network
	Monitor was started directly from Program Manager or Explorer.
	
	1. From Program Manager or Explorer, start Network Monitor.
	
	2. Start the Systems Management Server Administrator.
	
	3. Go into a client's Personal Computer Properties.
	
	4. Select the Network Monitor icon.
	
	5. Click Start Network Monitor.
	
	6. When Network Monitor loads, click Start Capture Toolbar.
	
	7. Stop the capture.
	
	8. On the File menu, click Save As. The range will be displayed properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms NM Netmon
	
	======================================================================
	Keywords          : kbnetwork kbsmsAdmin smsadmin smsnetmon 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	
	=============================================================================
	
