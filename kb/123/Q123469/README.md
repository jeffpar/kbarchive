---
layout: page
title: "Q123469: PRB: How to Handle the &quot;invalid serial number&quot; Error"
permalink: kb/123/Q123469/
---

## Q123469: PRB: How to Handle the &quot;invalid serial number&quot; Error

	Article: Q123469
	Product(s): Microsoft SourceSafe
	Version(s): 2.0x,3.01,3.02
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for MS-DOS, versions 2.0x, 3.01, 3.02 
	- Microsoft SourceSafe for Windows, versions 2.0x, 3.01, 3.02 
	- Microsoft SourceSafe for Macintosh, versions 2.0x, 3.01, 3.02 
	- Microsoft SourceSafe for Windows NT, versions 2.0x, 3.01, 3.02 
	- Microsoft SourceSafe for UNIX, versions 2.0x, 3.01, 3.02 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error "invalid serial number" occurs when a DEMO serial number has expired.
	
	RESOLUTION
	==========
	
	Issue a updated serial number by following these steps:
	
	1. Run SERIALIZ on the computer with outdated serial number. For example:
	
	  C:\SS\ADMIN\SERIALIZ <data directory>
	
	  This command gives a list of current serial numbers.
	
	
	2. Install a new serial number. For example:
	
	  C:\SS\ADMIN\SERIALIZ <data directory> -s<serial_num>
	
	You can also reinstall the demo diskette to restart the 30 day period.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe2xDOSSearch kbSSafe302 kbSSafe2xSearch kbSSafe301DOS kbSSafe302DOS kbSSafe301 kbSSafe20xMacSearch kbSSafe301Mac kbSSafe301UNIX kbSSafe302UNIX kbSSafe20xUNIXSearch kbSSafe302Mac kbSSafe20xNTSearch kbSSafe301NT kbSSafe302NT
	Version           : :2.0x,3.01,3.02
	Issue type        : kbprb
	
	=============================================================================
	
