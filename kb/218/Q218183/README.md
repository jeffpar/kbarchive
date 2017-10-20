---
layout: page
title: "Q218183: ServletExec Shuts Down the W3SVC Service"
permalink: /kb/218/Q218183/
---

## Q218183: ServletExec Shuts Down the W3SVC Service

{% raw %}

	Article: Q218183
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ServletExec 2.0 is a Java-based Web application server. Implementation of this
	application may cause the W3SVC service to shut down if no user is logged on to
	the server.
	
	CAUSE
	=====
	
	New Atlanta, the company that released this application, has not provided a
	reason for this behavior.
	
	RESOLUTION
	==========
	
	If you implement ServletExec 2.0 on a computer running Microsoft Internet
	Information Server (IIS), do not log off of the server. If security is a
	concern, lock the server with an administrator account.
	
	STATUS
	======
	
	This problem has been confirmed with IIS 4.0; however, ServletExec 2.0 is
	supported on all versions of IIS. This same behavior may occur with all versions
	of IIS.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	Information on ServletExec 3.0E is available at:
	
	  http://www.newatlanta.com/downloads/index.jsp
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
