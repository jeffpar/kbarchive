---
layout: page
title: "Q247725: SP3 Required During Installation of Windows NT 4.0 Enterprise Ed"
permalink: /kb/247/Q247725/
---

## Q247725: SP3 Required During Installation of Windows NT 4.0 Enterprise Ed

	Article: Q247725
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to install the Windows NT Option Pack (NTOP) on a computer
	running Windows NT Server 4.0 Enterprise Edition, the NTOP installation may fail
	with a Dr. Watson error for Inetinfo.dbg at approximately 90 percent complete.
	The error typically occurs during the portion of the installation when you
	configure the default FTP site. The installation may complete. However, when you
	restart the computer, which is a required step when installing the NTOP, the
	Inetinfo.exe process causes an Access Violation error.
	
	MORE INFORMATION
	================
	
	The Windows NT 4.0 Enterprise Edition configuration is accomplished without
	installing SP3. The system is configured by directly installing SP5 after
	completing the CD installation procedure. Per the following information in the
	Windows NT 4.0 Enterprise Edition Readme file, Service Pack 3 is required prior
	to installing the NTOP:
	
	  New Windows NT Server/E Installations
	
	  Installing a new copy of Windows NT Server/E is a two step process:
	
	<B7>  First, install Windows NT Server/E in the same way that you install Windows NT Server.
	
	<B7>  After you install Windows NT Server/E, install Service Pack 3. (A prompt reminds you to do this each time you log in, until you have done so.)
	
	  Both steps are required to have a functioning Windows NT Server, Enterprise Edition system.
	
	After you install the NTOP, then SP5 or later can be installed.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	Solution Type     : kbnofix
	
	=============================================================================
	
