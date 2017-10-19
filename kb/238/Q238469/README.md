---
layout: page
title: "Q238469: Incorrect Server Name in the MMC after a Name Change"
permalink: /kb/238/Q238469/
---

## Q238469: Incorrect Server Name in the MMC after a Name Change

	Article: Q238469
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the name of a Web Server running Internet Information Server
	(IIS) 4.0, the old server name appears in the Microsoft Management Console
	(MMC); however, all settings appear to be correct, and the server is functional.
	
	CAUSE
	=====
	
	WINS is still resolving the old name to the current IP address. WINS will
	continue to resolve the old name for six days (by default).
	
	RESOLUTION
	==========
	
	To force the MMC to show the new name, do the following:
	
	1. Click Start and point to Programs.
	
	2. Point to Windows NT 4.0 Option Pack.
	
	3. Point to Microsoft Internet Information Server.
	
	4. Click Internet Service Manager.
	
	5. Right-click Internet Information Server and click Connect.
	
	6. Type in the new name of the server.
	
	7. The MMC will connect to the server again and will show both the old name and
	  the new name.
	
	8. Right-click the old name and click Disconnect.
	
	9. Close the MMC and save your changes.
	
	MORE INFORMATION
	================
	
	The MMC saves its configuration in files with the .msc extension. These files
	contain the settings for the MMC (snap-ins installed). When you change the MMC,
	you can close the MMC and save changes (as detailed above). This forces the
	change in the MMC the next time it is opened.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
