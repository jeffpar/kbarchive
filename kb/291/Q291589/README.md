---
layout: page
title: "Q291589: IIS 4: ErrMsg: &quot;Could Not Start Service. 0006 Handle Is Invalid&quot;"
permalink: /kb/291/Q291589/
---

## Q291589: IIS 4: ErrMsg: &quot;Could Not Start Service. 0006 Handle Is Invalid&quot;

{% raw %}

	Article: Q291589
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start any of the NT Option Pack services, such as WWW, File
	Transfer Protocol (FTP), Simple Mail Transfer Protocol (SMTP), or Network News
	Transport Protocol (NNTP), you may receive the following error message:
	
	  Could not start (Service Name: WWW, FTP, SMTP, or NNTP). 0006 Handle is
	  Invalid.
	
	A possibly related error may occur when you attempt to use the Internet Service
	Manager (ISM). The Microsoft Management Console (MMC) opens, but no IIS services
	appear in the display.
	
	If you create a new ISM snap-in and choose the IIS snap-in, you may receive the
	following error message:
	
	  The service configuration dll (w3pcfg.dll, wspcfg.dll, sockscfg.dll, etc.)
	  failed to load correctly. The specified module could not be found.
	
	CAUSE
	=====
	
	This error occurs when invalid data exists in the actual service dynamic-link
	library (.dll) files. For example, you may receive the error if a particular
	version of the W3svc.dll file is found on the system and all other pertinent
	.dll files are a different version level.
	
	This often occurs when services are added, but service packs are not reapplied.
	
	RESOLUTION
	==========
	
	In most cases, simply reapplying the latest NT service pack returns the system
	to all the same revision levels. However, note that if any hotfixes have been
	added to the system, they need to be reapplied after the service pack is
	applied.
	
	Additional query words: iis 4
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
