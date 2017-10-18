---
layout: page
title: "Q232985: Remotely Administering IIS 4.0 with MMC Returns Access Denied"
permalink: kb/232/Q232985/
---

## Q232985: Remotely Administering IIS 4.0 with MMC Returns Access Denied

	Article: Q232985
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect remotely to a computer running IIS 4.0 with the MMC,
	the following error message occurs:
	
	  Unable to administer the FTP service on computername because the following
	  error occurred:
	
	  Access is denied.
	
	When you click the OK button again, the same message appears and no connection is
	made.
	
	CAUSE
	=====
	
	Distributed COM has been disabled on the remote IIS computer.
	
	RESOLUTION
	==========
	
	On the remote IIS computer, click Start, click Run, type "dcomcnfg" (without the
	quotation marks), and then click OK. On the Default Properties tab, select
	Enable Distributed COM on this computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
