---
layout: page
title: "Q130540: System Management Server Setup Limits Path of Devices"
permalink: /kb/130/Q130540/
---

## Q130540: System Management Server Setup Limits Path of Devices

	Article: Q130540
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install a primary site, Systems Management Server Setup limits the
	length of the path for the location of the database and log devices. The text
	field for the path does not scroll and the computer beeps when the limit is
	reached. The total number of characters allowed for the path depends on the
	width of the character used (and may be fewer than 40 characters).
	
	WORKAROUND
	==========
	
	To work around this problem, create the database and log devices using the
	Microsoft SQL Administrator utility. This method requires the user specifies
	only the database device name and the log device name, rather than the full path
	of the database and log devices.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in System Management Server version
	1.0. This problem was corrected in Systems Management Server version 1.1.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
