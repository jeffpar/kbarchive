---
layout: page
title: "Q283634: Proxy 2.Server Has Two Different Files for the IP Filter Driver"
permalink: /kb/283/Q283634/
---

## Q283634: Proxy 2.Server Has Two Different Files for the IP Filter Driver

{% raw %}

	Article: Q283634
	Product(s): Microsoft Windows NT
	Version(s): 2.0,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbDriver
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Proxy Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add or remove a processor from Microsoft Proxy Server version 2.0, you
	may receive the following error message:
	
	  Error: C:\Winnt\System32\Drivers\Ipfltdrv.sys
	  Device Driver could not be loaded. 0xC000024.
	
	The preceding message occurred when a processor had been added to the computer.
	
	CAUSE
	=====
	
	This behavior can occur when a processor is added or removed from an existing
	Proxy Server 2.0, and then you start up the system. The location in the system's
	memory that records where an access violation occurs, varies depending on
	whether a processor has been installed or has been removed.
	
	RESOLUTION
	==========
	
	To resolve this behavior, you must validate the size of the Ipfltdrv.sys file
	(the IP filter driver).
	
	To Add a Processor:
	-------------------
	
	When you add a processor to a computer, replace the file with the multi-processor
	version of the file. Then shut down your computer, add the hardware, and then
	restart your computer.
	
	To Remove a Processor:
	----------------------
	
	When you remove a processor from a computer, replace the file with the applicable
	(a single-processor or a multi-processor) version of the file. Then shut down
	your computer, remove the hardware, and restart your computer.
	
	MORE INFORMATION
	================
	
	Proxy Server has two different files named Ipfltdrv.sys. The following version
	number is the same for both files: 4.4.372.12. The only method you have to
	identify the difference in the files is to examine the size of the file.
	
	The i386 single-processor version is 36 KB in size and is located on the Proxy
	Server 2.0 CD-ROM in the Msproxy\I386\Routing\Up folder.
	Size: 35.2 KB (36,048 bytes)
	
	The i386 multiple-processor version is 34 KB in size and is located on the Proxy
	Server 2.0 CD-ROM in the Msproxy\I386\Routing folder.
	Size: 33.6 KB (34,416 bytes)
	
	The Alpha single-processor version is 36 KB in size and is located on the Proxy
	Server 2.0 CD-ROM in the Msproxy\I386\Routing\Up folder.
	Size: 52.1 (53,424 bytes)
	
	The Alpha multiple-processor version is 34 KB in size and is located on the Proxy
	Server 2.0 CD-ROM in the Msproxy\I386\Routing folder.
	Size: 52.1 KB (53,360 bytes)
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool kbDriver 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbProxyServSearch kbProxyServ200
	Version           : :2.0,4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
