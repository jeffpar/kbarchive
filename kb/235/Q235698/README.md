---
layout: page
title: "Q235698: IISSYNC Deletes the IIS In-Process Package on the Target Server"
permalink: /kb/235/Q235698/
---

## Q235698: IISSYNC Deletes the IIS In-Process Package on the Target Server

	Article: Q235698
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Internet Information Server (IIS) 4.0 on a computer running
	Microsoft Cluster Server, if you run the Iissync utility from the source server
	to the target server, only the IIS utilities, the utilities, and the System
	Packages are left; all other packages are deleted. At this point, the only way
	to recover the system is to completely uninstall IIS 4.0 on both servers in the
	cluster, and then reinstall IIS 4.0 on both servers. The status returned by the
	IISSYNC utility is :2147500037.
	
	WORKAROUND
	==========
	
	To work around this problem, configure the Microsoft Transaction Server
	Replication information.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Internet Information Services version
	5.0 for Window 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
