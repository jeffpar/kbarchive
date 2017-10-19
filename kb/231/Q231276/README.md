---
layout: page
title: "Q231276: Missing IIS 4.0 Software Development Kit (SDK) Files"
permalink: /kb/231/Q231276/
---

## Q231276: Missing IIS 4.0 Software Development Kit (SDK) Files

	Article: Q231276
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following two files are not included in the Microsoft Windows NT 4.0 Option
	Pack. If you install the Internet Information Server (IIS) 4.0 Software
	Development Kit (SDK), you should copy the following files to the
	InetPub\Iissamples\Sdk\Include directory:
	
	- Iwamreg.h: This header file is used in C/C++ applications that use the
	  Windows Application Manager (WAM).
	
	- Iadmext.h: This header file is used in C/C++ applications that export IIS
	  Admin Base Object Extension functions (IISABO).
	
	You can obtain these files from the following Microsoft Web site:
	
	  ftp://ftp.microsoft.com/bussys/IIS/iis-public/iis40/SDK/
	
	MORE INFORMATION
	================
	
	For more information on WAM or IISABO Extensions, please see the Microsoft
	Windows NT 4.0 Option Pack documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
