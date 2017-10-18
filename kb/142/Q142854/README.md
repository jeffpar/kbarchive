---
layout: page
title: "Q142854: Err Msg: &quot;HTTP/1.0 501 Not Supported&quot; on ODBC Query"
permalink: kb/142/Q142854/
---

## Q142854: Err Msg: &quot;HTTP/1.0 501 Not Supported&quot; on ODBC Query

	Article: Q142854
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you execute a script, the World Wide Web (WWW) client receives the error:
	
	  HTTP/1.0 501 Not Supported or HTTP/1.0 403 Access Forbidden
	
	When attached to the same WWW server locally with a WWW client, the error does
	not occur.
	
	CAUSE
	=====
	
	Read and execute access is not set for the directory containing the script or
	IDC file that is being requested by the Web page. Executing the script from the
	WWW server itself may not cause the error to appear since the user account used
	to log on to the server may have administrator rights.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Open the Internet Server Manager, and bring up the properties of your WWW
	  service.
	
	2. Choose the Directories tab, then double-click your scripts directory.
	
	3. Under the access section make sure Read and Execute are selected.
	
	4. Check the security permissions on the directory in File Manager to verify
	  that at least read and execute permissions are set on the files and the
	  directory.
	
	Additional query words: prodiis1 http iis
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	
