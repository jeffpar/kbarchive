---
layout: page
title: "Q240805: Err Msg: The Dependency Service Does Not Exist or Is Marked..."
permalink: /kb/240/Q240805/
---

## Q240805: Err Msg: The Dependency Service Does Not Exist or Is Marked...

{% raw %}

	Article: Q240805
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Internet Information Server (IIS) 4.0 and the Windows NT Option
	Pack (NTOP), the following error message may occur:
	
	  The dependency service does not exist or is marked for deletion
	
	This error message persists when you try to manually start the services, or after
	you remove and reinstall of the NTOP.
	
	CAUSE
	=====
	
	This error message is related to missing services. For a list of the necessary
	Windows NT services required for IIS, please click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q164885 Default Services Required for Internet Information Server Services
	
	In particular, the error message is related to the following two services (as
	listed in the Control Panel Services application):
	
	   - NT LM Security Support Provider
	
	- Remote Procedure Call (RPC) Service
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall the RPC Configuration Service from Network
	Properties. To do this, perform the following steps:
	
	1. In Control Panel, double-click the Network icon, and select the Services tab.
	
	2. If the RPC Configuration Service is listed, click to highlight it, choose
	  Remove, restart the computer and proceed to step 3. If the service is missing
	  from Network Properties, proceed to step 3
	
	3. Choose Add and select the RPC Configuration Service. This requires your
	  original Windows NT installation media and restarting your computer.
	
	4. After you add the service and restart your computer, re-apply the appropriate
	  Windows NT Service Pack.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
