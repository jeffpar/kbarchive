---
layout: page
title: "Q101347: WFWG Err Msg: The Postoffice Is Already Being Managed By..."
permalink: /kb/101/Q101347/
---

## Q101347: WFWG Err Msg: The Postoffice Is Already Being Managed By...

{% raw %}

	Article: Q101347
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Workgroup Mail application included in Windows for Workgroups
	3.1 for the first time, you may receive the following message
	
	  The postoffice is already being managed by <XXX>. Try again later.
	
	where <XXX> is the name of the actual Workgroup Postoffice administrator.
	
	WORKAROUND
	==========
	
	Close the Postoffice Manager and then try again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Workgroup Mail application
	included with Windows for Workgroups version 3.1.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open the Postoffice Manager.
	
	2. Select a user and choose Details.
	
	3. Go to another machine that has not started Workgroup Mail and start it the
	  application.
	
	4. When asked whether to connect to an existing postoffice or to create a new
	  Workgroup Postoffice, choose to connect to an existing postoffice.
	
	5. Select the correct postoffice and choose OK.
	
	6. When asked if you have an account on the postoffice, choose No.
	
	7. Enter your account details and choose OK.
	
	Additional query words: 3.10 3.1 wgpo post office administrator
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
