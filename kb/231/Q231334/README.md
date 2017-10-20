---
layout: page
title: "Q231334: Err Msg: Unable to Connect to the Active Directory Service..."
permalink: /kb/231/Q231334/
---

## Q231334: Err Msg: Unable to Connect to the Active Directory Service...

{% raw %}

	Article: Q231334
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to use the IIS HTML Admin from http://localhost/iisadmin may result
	in the following error message:
	
	  Unable to connect to the Active Directory Service Object. Please contact your
	  system administrator.
	
	  Error: 70 Permission denied.
	
	CAUSE
	=====
	
	The Anonymous account has been enabled for the IISAdmin virtual directory.
	
	RESOLUTION
	==========
	
	Remove Anonymous permissions on the IISAdmin virtual directory using the
	Internet Service Manager.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
