---
layout: page
title: "Q262317: SMS: WMI 1.5 Support in SMS 2.0 SP2"
permalink: kb/262/Q262317/
---

## Q262317: SMS: WMI 1.5 Support in SMS 2.0 SP2

	Article: Q262317
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200
	Last Modified: 09-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows Management Instrumentation (WMI) version 1.5 is included with Microsoft
	Windows 2000 and is installed on Windows 2000-based computers. When you apply
	Systems Management Server (SMS) version 2.0 Service Pack 2 (SP2), it does not
	update the version of WMI. However, SMS 2.0 SP2 supports WMI 1.5 installed on
	Windows 2000, Microsoft Windows NT 4.0, and Microsoft Windows 98/95 platforms,
	either before or after you apply SMS 2.0 SP2.
	
	NOTE: Modification of the SMS 2.0 SP2 installation source to add WMI 1.5 is not
	supported.
	
	MORE INFORMATION
	================
	
	WMI 1.5 for Windows NT 4.0, and Windows 98/95 clients is available for download
	from the following Microsoft Web site:
	
	  http://msdn.microsoft.com/downloads/default.asp?url=/downloads/sample.asp?url=/MSDN-FILES/027/001/576/msdncompositedoc.xml
	
	NOTE: Windows 95-based clients must already have installed DCOM before you can
	install WMI 1.5. You can obtain the latest version of DCOM from the following
	Microsoft Web site:
	
	  http://www.microsoft.com/com/dcom/dcom95/download.asp
	
	WMI 1.5 also adds support for SMBios version 2.1. If the system hardware also
	supports SMBios 2.1, SMS hardware inventory returns Serial Number and
	Manufacturer information from the Basic Input/Output System (BIOS).
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
