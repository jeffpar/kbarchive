---
layout: page
title: "Q153621: Cannot Set Default File Location to NetWare 4.1 Network Drive"
permalink: kb/153/Q153621/
---

## Q153621: Cannot Set Default File Location to NetWare 4.1 Network Drive

	Article: Q153621
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 7.0,7.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word for Windows 95, versions 7.0, 7.0a 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the default document location to a NetWare 4.1 server and you are
	using the Microsoft Service for NetWare Directory Services (MSNDS) client, you
	receive the following error message:
	
	  Directory Not Valid
	
	CAUSE
	=====
	
	This problem occurs when you attempt to specify a default document location that
	exists on a network drive mapped using the Microsoft Service for NetWare
	Directory Services (MSNDS).
	
	
	RESOLUTION
	==========
	
	This issue is resolved by the following updated file for Windows 95, as well as
	later versions of this file:
	
	  " NWNP32.DLL version 4.00.969 dated 12/20/95 10:09am 138,752 bytes " (without
	  the quotation marks)
	
	NOTE: This file is named NWNP32.NW4 before it is installed.
	
	This file is included in Windows 95 Service Pack 1. For more information on
	obtaining Windows 95 Service Pack 1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q142794 Availability of Microsoft Windows 95 Service Pack 1
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and OEM
	Service Release 2 (OSR2). An update to address this problem is now available,
	but is not fully regression tested and should be applied only to computers
	experiencing this specific problem. Unless you are severely impacted by this
	specific problem, Microsoft does not recommend implementing this update at this
	time. Contact Microsoft Technical Support for additional information about the
	availability of this update.
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	
	For additional information about issues resolved by updates to this component,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q145621 Banner Settings Not Saved for Captured NDS Printer with MSNDS
	
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	The products discussed here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 7.00 word7 word8 word97
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbWord95Search kbZNotKeyword2 kbWord95 kbWord95a
	Version           : :7.0,7.0a
	Issue type        : kbprb
	
	=============================================================================
	
