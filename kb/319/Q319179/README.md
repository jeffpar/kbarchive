---
layout: page
title: "Q319179: PRB: Starting IIS MMC to Retrieve Directory Properties Is Slow"
permalink: /kb/319/Q319179/
---

## Q319179: PRB: Starting IIS MMC to Retrieve Directory Properties Is Slow

{% raw %}

	Article: Q319179
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Internet Information Services (IIS) Microsoft Management
	Console (MMC) or attempt to use Explorer.exe to retrieve properties on any
	directory, this operation may be excessively slow.
	
	CAUSE
	=====
	
	This behavior can occur if the PHP hypertext preprocessor (Php4isapi.dll) is
	installed as an Internet Server Application Programming Interface (ISAPI) filter
	in IIS. PHP is loaded as an ISAPI filter in IIS. The version of PHP that
	exhibits this problem is 4.1.0. Php4isapi.dll does not contain file version
	information. The following is the internal time stamp of the version of
	Php4isapi.dll that exhibits this behavior:
	
	  Tue Dec 11 15:24:42 2001
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the ISAPI filter (Php4isapi.dll).
	
	For information about how to use the PHP executable program instead, browse to
	the following Web site:
	
	  http://www.php.net
	
	MORE INFORMATION
	================
	
	The IIS MMC and Explorer.exe have threads waiting on the inetinfo process.
	Inetinfo attempts to close a metabase handle, but one of its threads stops
	responding (hangs) when it attempts to notify all of the sinks registered for
	metabase close notifications.
	
	Explorer.exe is affected because it attempts to load W3ext.dll, the IIS shell
	extension.
	
	
	REFERENCES
	==========
	
	inetmgr hang
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
