---
layout: page
title: "Q122990: AppStart Doesn't Change Cursor to Hourglass"
permalink: kb/122/Q122990/
---

## Q122990: AppStart Doesn't Change Cursor to Hourglass

	Article: Q122990
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start a Microsoft Systems Management Server shared application,
	AppStart does not change the cursor to the "waiting" hourglass cursor. This may
	cause the user to think the application wasn't launched.
	
	CAUSE
	=====
	
	AppStart isn't changing the cursor type when it is called. Because AppStart can
	take up to 15-20 seconds before the actual application loads and starts, the
	cursor will remain an arrow for this amount of time until the actual application
	takes over and changes the cursor type.
	
	This can result in the user thinking the application didn't launch and attempting
	to launch the same application again, resulting in multiple copies of the
	application being launched when AppStart finally catches up with the user's
	input.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
