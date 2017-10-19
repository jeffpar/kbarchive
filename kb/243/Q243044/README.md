---
layout: page
title: "Q243044: MMC Does Not Display Virtual Directories"
permalink: /kb/243/Q243044/
---

## Q243044: MMC Does Not Display Virtual Directories

	Article: Q243044
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Management Console (MMC) to display a virtual
	directory in Internet Information Server (IIS), the MMC may show that the
	virtual directory is unavailable and not enumerate the directory contents as
	expected. This can happen when the virtual directory is designated as a
	Universal Naming Convention (UNC) connection to another computer. The connection
	may appear as though the computer is not available on the network.
	
	CAUSE
	=====
	
	When the actual UNC connection has not been previously established, the MMC
	attempts to connect using the logged-on user. If the logged-on user does not
	have the proper access to the share, then the MMC fails to enumerate the virtual
	directory correctly.
	
	This only occurs in the MMC, and not to the Web services. This does not affect
	the functionality of the Web services because IIS scans the metabase for the
	proper credentials to make the UNC connection. Therefore, the virtual directory
	is usable to the Web server.
	
	WORKAROUND
	==========
	
	To work around this problem, make a UNC connection to the system that the
	virtual directory is using, prior to starting the MMC.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
