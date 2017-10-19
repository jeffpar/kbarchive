---
layout: page
title: "Q182531: Problems with the Windows NT Client Configuration Tool"
permalink: /kb/182/Q182531/
---

## Q182531: Problems with the Windows NT Client Configuration Tool

	Article: Q182531
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following four problems occur with the Client Configuration tool in the SNA
	Server Windows NT client, version 4.0:
	
	- When you select IPX as the transport with the SNA Server Windows NT client,
	  the following choices are available on the Client Mode tab during the
	  client's initial installation:
	   - Client locates servers in an SNA Server subdomain
	
	   - Client locates servers by name
	
	  However, if you select IPX as the transport in the SNA Server Windows NT
	  Client Configuration tool (Ntconfig.exe) after installation, the only option
	  under Client Mode is:
	
	  Client locates servers in an SNA Server subdomain
	
	- When you click OK to exit the SNA Server Windows NT client Configuration tool
	  (Ntconfig.exe), Ntconfig.exe indicates that SNABASE needs to be restarted
	  even if no changes have been made to the configuration.
	
	- On the Client Mode tab in Ntconfig.exe, if you select "Client locates servers
	  in an SNA subdomain" and you do not enter a Subdomain name, the configuration
	  is changed to "Client locates server by name" with an empty Server(s) list.
	
	- If Snaver.exe is run against Ntconfig.exe, the SNA Server Version Info dialog
	  box displays the following:
	
	  NTCONFIG.EXE
	  Version 4.0.0.500
	  NTCONFIG Version 1.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
