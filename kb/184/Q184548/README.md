---
layout: page
title: "Q184548: SNA 3.0 SP3 Update Incorrectly Detects Previous Service Pack"
permalink: /kb/184/Q184548/
---

## Q184548: SNA 3.0 SP3 Update Incorrectly Detects Previous Service Pack

	Article: Q184548
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the SNA Server 3.0 Service Pack 3 (SP3) update program to apply the
	service pack, the update program may display the following warning:
	
	  Previous Service Pack Installed
	
	  There is a previous SNA Server service pack already installed on
	  your system. Update will not continue unless the backup can be
	  removed. Do you want the backup removed from your system now?
	
	  Click on YES to remove the backup copy.
	
	  Click on NO to exit the Update program.
	
	This may occur even though no previous service pack exists on the system. This
	problem may occur when you apply the SNA 3.0 SP3 update to SNA Server, the SNA
	client (including Windows NT or Windows 95), or Host Security.
	
	CAUSE
	=====
	
	The update program is improperly checking for the presence of a backup directory
	(used by the update to uninstall the service pack).
	
	RESOLUTION
	==========
	
	If this warning occurs, choose YES to continue, even though there is no previous
	backup.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP3
	Version           : WINDOWS:3.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
