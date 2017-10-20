---
layout: page
title: "Q184616: Error 51201 Occurred. Error Message Not Found"
permalink: /kb/184/Q184616/
---

## Q184616: Error 51201 Occurred. Error Message Not Found

{% raw %}

	Article: Q184616
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Management Console displays the FTP site as stopped, and after you
	attempt to start the service, the following error message occurs:
	
	  Error 51201 occurred. Error message not found.
	
	Selecting the properties for the FTP service returns the following:
	
	  IIS Logging: Unable to read the current logging plugin value.
	
	CAUSE
	=====
	
	This error is known to occur after selecting an Upgrade Plus installation of the
	Windows NT Option Pack over a Windows NT Option Pack Beta 3 installation, which
	did not have an FTP service.
	
	WORKAROUND
	==========
	
	To work around this issue, follow these steps:
	
	1. Start the Windows NT Option Pack setup and remove the FTP service.
	
	2. Reboot the computer.
	
	3. Start the setup again, and add the FTP service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Internet Information Server
	version 4.0.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
