---
layout: page
title: "Q262898: Cannot Start MMS As Either a Service or a Console Application"
permalink: /kb/262/Q262898/
---

## Q262898: Cannot Start MMS As Either a Service or a Console Application

{% raw %}

	Article: Q262898
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Metadirectory Services (MMS) as a console
	application, the \zoomserv\bin\viaserver.initLog may display the following error
	message:
	
	  Module cHASHWILDDB's initialize function raised exception ACCESS_VIOLATION at
	  address 0x4533c0;
	  Call stack:
	  0x004533c0 - <unknown>
	  0x00000100 - <unknown>
	  0x004528e0 - <unknown>
	  0x00000018
	  Module cHASHWILDDB failed to initialize
	
	When you attempt to start MMS as a service, the following error message may be
	displayed on the console:
	
	  Could not start the ZOOMIT Server service on \\<mymachinename>
	  Error 2140: An internal Windows NT error occurred.
	
	CAUSE
	=====
	
	This behavior can be caused by a variety of issues. One confirmed cause of this
	behavior is the absence of one or more files (including the Hashcfg file) in the
	\zoomserv\data\config directory.
	
	RESOLUTION
	==========
	
	The Hashcfg file is a text file that defines some of the operating parameters of
	the hash and hashwild databases. It can be retrieved from any comparable
	installation of MMS 2.1 and edited to match the necessary configuration
	(regarding hash size, bucket size, hashwild features like ON or OFF, and so on).
	It is recommended, however, that the original be restored from the most recent
	backup.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
