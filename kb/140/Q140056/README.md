---
layout: page
title: "Q140056: SMS: Wrongly Allowed to Set Up Secondary Site On Primary Site"
permalink: kb/140/Q140056/
---

## Q140056: SMS: Wrongly Allowed to Set Up Secondary Site On Primary Site

	Article: Q140056
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you choose to setup a secondary site and put the machine name and domain name
	of the primary site server in the New Secondary Site properties box, Systems
	Management Server does not warn you or stop you from committing this action.
	
	CAUSE
	=====
	
	SMS does not check to see if the server that is specified in the New Secondary
	Site properties box is already a site server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms install
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
