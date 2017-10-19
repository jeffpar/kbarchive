---
layout: page
title: "Q171136: ODBC Error Accessing Certificate Server Admin Tools"
permalink: /kb/171/Q171136/
---

## Q171136: ODBC Error Accessing Certificate Server Admin Tools

	Article: Q171136
	Product(s): Internet Information Server
	Version(s): WinNT:1.0,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	- Microsoft Certificate Server version 1.0 
	-------------------------------------------------------------------------------
	
	The first time you connect to the Web-based Certificate Log Utility
	or the Certificate Queue Utility, you will get the following error
	message:
	
	  Microsoft OLE DB Provider for ODBC Drivers error '80004005'
	  [Microsoft][ODBC Driver Manager] Data source name not found
	  and no default driver specified.
	
	RESOLUTION
	==========
	
	Stop the Certificate Authority Service and then stop the WWW Service. Then
	restart the WWW Service followed by the Certificate Authority Service. The error
	should no longer appear.
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : WinNT:1.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
