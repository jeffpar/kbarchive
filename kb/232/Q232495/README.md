---
layout: page
title: "Q232495: XFOR:Important Files When Relocating OV/VM Connector to another"
permalink: /kb/232/Q232495/
---

## Q232495: XFOR:Important Files When Relocating OV/VM Connector to another

{% raw %}

	Article: Q232495
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 05-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the important files that are needed when you move the
	OV/VM Connector to another Exchange Server computer.
	
	MORE INFORMATION
	================
	
	When you relocate the OV/VM Connector to another server, it is important to
	backup the following files. These files contain the message correlation tables
	and the SMTP-registration tables that allow host users to successfully reply to
	messages from external users.
	
	The Exchconn.ini file should be backed up, but cannot be copied to the new
	computer. This file will be used as a reference for basic configuration
	information on the new OV/VM Connector and is located in the
	Exchsrvr\Connect\Exchconn directory.
	
	The following files should be backed up, and copied to the new OV/VM Connector:
	
	  Exchsrvr\Connect\Exchconn\Tables\Ovdfile.dat
	  Exchsrvr\Connect\Exchconn\Tables\Route.tbl
	  Exchsrvr\Connect\Exchconn\Tables\PROFSreg.* (only in Exchange Server 5.5
	  Service Pack 2 or later)
	  Exchsrvr\Connect\Exchconn\Tables\Profs.pab
	  Exchsrvr\Connect\Exchconn\Tables\Ct*.*
	  Exchsrvr\Connect\Exchconn\Tables\Cmsxmap.tbl
	  Exchsrvr\Connect\Exchconn\Tables\Dosxmap.tbl
	  Exchsrvr\Connect\Exchconn\Tables\Lmetprox.seq
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
