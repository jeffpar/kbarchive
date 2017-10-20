---
layout: page
title: "Q235777: SMS: SMSAPM32 Perform Slow Link Detect All Mandatory Assignment"
permalink: /kb/235/Q235777/
---

## Q235777: SMS: SMSAPM32 Perform Slow Link Detect All Mandatory Assignment

{% raw %}

	Article: Q235777
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clients over a slow link may not execute an advertisement even if the
	Advertisement is mandatory and the "Assignments are not mandatory over slow
	links" is not selected.
	
	The SMSAPM32.log will show the following lines.
	
	     SCHEDULER   : Remote Name is \\FSNSMS01\CAP_FLN~  $$<APM><Thu Apr 22       09:36:15.685 1999><thread=561 (0x231)>
	     SCHEDULER   : Calculated Speed = 7400 bps~  $$<APM ><Thu Apr 22          09:36:15.685 1999><thread=561 (0x231)>
	     SCHEDULER   : Slow link detected~  $$<APM><Thu Apr 22 09:36:15.685         1999><thread=561 (0x231)>
	     SCHEDULER   : Not scheduling job because it's not mandatory over a slow    link~  $$<APM><Thu Apr 22 09:36:15.716 1999>>thread=561 (0x231)>
	
	If the Advertisement is scheduled to run at a certain time the client executes
	the program over a slow link. Only when the advertisement is created to run
	after a certain event, for example "As soon as possible" or "Log on or Log off",
	does this problem occur.
	
	CAUSE
	=====
	
	This is caused by the Offer Data Provider on the client dropping the flag for
	"mandatory over slow net" when passing this offer to the Advertised Programs
	Manager.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
