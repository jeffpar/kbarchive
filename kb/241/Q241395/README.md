---
layout: page
title: "Q241395: Client Configuration for SNA Server Client Does Not Save Changes"
permalink: kb/241/Q241395/
---

## Q241395: Client Configuration for SNA Server Client Does Not Save Changes

	Article: Q241395
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Client Configuration utility (Ntconfig.exe) on a computer
	running the SNA Server Client for Windows NT 4.0, and you attempt to make
	changes to the client's configuration, the changes are not saved and the
	following error message may occur:
	
	  SNABase must be restarted in order for the changes to take effect.
	
	Even after you stop and start the SNABase service, the previous settings are
	still in place. Also, no names are listed in Client locates servers in an SNA
	Server subdomain or Client locates servers by name on the Client Mode tab.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	The Client Configuration utility requires that the current user who is logged on
	has Administrator rights for the changes to be saved. Even though the subdomain
	or servers are not shown, the SNABase service contains the proper permissions to
	download this information.
	
	This is not true of the SNA Server Client for Windows 95.
	
	MORE INFORMATION
	================
	
	For additional information, please click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q193486 Differences Between Windows 95 and Windows NT SNA Clients
	
	Additional query words: Security
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	
