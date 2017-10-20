---
layout: page
title: "Q311903: Cannot Release Transport After You Send Async and Sync Notes"
permalink: /kb/311/Q311903/
---

## Q311903: Cannot Release Transport After You Send Async and Sync Notes

{% raw %}

	Article: Q311903
	Product(s): Microsoft Developer Network
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft.NET Alerts 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you send both the ASYNC and the SYNC notifications with the same object,
	the Transport object is not released. HTTP_Terminate is not called when
	releasing the Transport object and the connection point.
	
	RESOLUTION
	==========
	
	Make sure that you release Transport object and the connection point before you
	send the ASYNC and SYNC notifications.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbNETAlerts
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
