---
layout: page
title: "Q309388: Single Sign-On Option Available with OLE DB Over TCP/IP"
permalink: kb/309/Q309388/
---

## Q309388: Single Sign-On Option Available with OLE DB Over TCP/IP

	Article: Q309388
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000 kbhis2000bug
	Last Modified: 19-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have an OLE DB Provider for DB2 Universal Data Link (UDL) configured to
	use a Transmission Control Protocol/Internet Protocol (TCP/IP) connection, this
	allows the Single Sign-On (SSO) option to be selected, even though this feature
	is not supported for use with the OLE DB Provider when using direct TCP/IP
	connections.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	MORE INFORMATION
	================
	
	When you initially configure when a new UDL to use a TCP/IP connection, SSO is
	disabled. When the UDL is subsequently opened to check or change its settings,
	SSO will be displayed as an available option.
	
	SSO requires that you configure UDL for an Advanced Program-to-Program
	Communications (APPC) connection in order to take advantage of SSO provided by
	the Host Security Integration components. This is included with Host Integration
	Server (HIS) 2000, as well as earlier versions of Microsoft SNA Server.
	
	For additional information about an overview of the host security integration
	features, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q175063 Host Security Integration Setup and Architectural Overview
	
	The ODBC Driver for DB2 that is included with HIS 2000 displays the following
	message when you select the "Use Single Sign-On" option while you are creating
	or modifying an ODBC Data Source Name (DSN):
	
	  Microsoft ODBC Driver for DB2 Configuration
	
	  Single Sign-On cannot be used with a TCP/IP connection. Please select an APPC
	  connection on the Connection tab or specify a username on the Security tab.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
