---
layout: page
title: "Q216650: SMS: Distributing Windows NT 4.0 Service Pack 4"
permalink: /kb/216/Q216650/
---

## Q216650: SMS: Distributing Windows NT 4.0 Service Pack 4

{% raw %}

	Article: Q216650
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbsms200 kbSoftwareDist
	Last Modified: 22-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows NT 4.0 Service Pack 4 package definition file (PDF)
	contains command lines that reference the files Sp4i836.exe and Sp4aplha.exe,
	which are not provided on the Systems Management Server 2.0 CD. To distribute
	Windows NT 4.0 Service Pack 4 with Systems Management Server 2.0, copy these two
	files from the Windows NT 4.0 Service Pack 4 CD to your package source
	directory, then follow the software distribution process as outlined in Chapter
	12 of the Systems Management Server Administrator's Guide.
	
	IMPORTANT: The Y2ksetup.exe method of setup for Windows NT 4.0 Service Pack 4 is
	not supported for use in the Systems Management Server 2.0 software
	distributions.
	
	
	MORE INFORMATION
	================
	
	Do not use the Nt4sp4.exe file that is included on the Systems Management Server
	2.0 CD to distribute Windows NT 4.0 Service Pack 4 to clients.
	
	REFERENCES
	==========
	
	For more information, see the Microsoft Systems Management Server
	Administrator's Guide, Chapter 12.
	
	Additional query words: prodsms NT4 SP4 Y2K
	
	======================================================================
	Keywords          : kbsetup kbsms200 kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
