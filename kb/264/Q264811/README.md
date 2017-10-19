---
layout: page
title: "Q264811: SMS: Timestamps Reset When Printing Big Network Monitor Capture"
permalink: /kb/264/Q264811/
---

## Q264811: SMS: Timestamps Reset When Printing Big Network Monitor Capture

	Article: Q264811
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbsms200 kbsms200bug kbNetMon kbNetTrace kbsmsUtil
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Systems Management Server (SMS) 2.0, when you print a large Network
	Monitor capture to a file that contains more than 5,400 frames, the timestamps
	associated with each frame are reset to 0 (zero) seconds after the fifty-four
	hundredth frame is spooled to the target print file. The timestamp continues
	forward from 0 after being reset. The original capture retains the correct
	frame-to-timestamp association.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: netmon prodsms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbsms200 kbsms200bug kbNetMon kbNetTrace kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
