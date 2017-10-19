---
layout: page
title: "Q192672: SMS: Network Monitor: &quot;Bad Month Format&quot;"
permalink: /kb/192/Q192672/
---

## Q192672: SMS: Network Monitor: &quot;Bad Month Format&quot;

	Article: Q192672
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): smsnetmon
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Network Monitor Agent to do a remote capture, viewing the captured
	frame properties reveals the following:
	
	  FRAME: Time of capture = Bad Month Format 0, 0 0:0:0.13
	
	CAUSE
	=====
	
	This problem occurs only when you are using Network Monitor Agent to capture
	from a remote computer, not when capturing locally from the computer that
	Network Monitor is installed on.
	
	When captured locally, the frame properties should read correctly:
	
	  FRAME: Time of capture = Jul 20, 1998 11:45:36.880
	
	WORKAROUND
	==========
	
	To work around this problem, use Network Monitor Agent on the local computer
	rather than attempting to perform a remote capture.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	Additional query words: netmon prodsms machine bloodhound sniff sniffer trace
	
	======================================================================
	Keywords          : smsnetmon 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
