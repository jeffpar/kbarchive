---
layout: page
title: "Q181743: Error Message 426 Trying to Retrieve File from FTP Server"
permalink: /kb/181/Q181743/
---

## Q181743: Error Message 426 Trying to Retrieve File from FTP Server

{% raw %}

	Article: Q181743
	Product(s): Internet Information Server
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to retrieve a file from the File Transfer Protocol (FTP) server,
	you receive the following error message:
	
	  426 Connection closed; transfer aborted.
	
	You can still put files on the FTP server and list the contents of directories.
	Stopping and restarting the FTP Publishing Service does not correct the problem.
	
	CAUSE
	=====
	
	The Microsoft FTP server inadvertently tries to create a synchronous socket
	instead of an asynchronous socket. This causes connections to fail with the 426
	error.
	
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft and
	is included in Windows NT Service Pack 4.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time     Size    File Name    Platform
	  --------------------------------------------------
	  10/15/98  09:17p  330,976  Asp.dll      (x86)
	  10/15/98  09:17p   11,168  Ftpctrs2.dll
	  10/15/98  09:16p   81,376  Ftpsvc2.dll
	  10/15/98  09:15p   16,848  Infoadmn.dll
	  10/15/98  09:15p  184,192  Infocomm.dll
	  10/15/98  09:15p   47,936  Isatq.dll
	  10/15/98  09:16p   14,752  W3ctrs.dll
	  10/15/98  09:16p  226,864  W3svc.dll
	  10/15/98  09:16p   60,192  Wam.dll
	
	  10/15/98  09:37p  545,552  Asp.dll      (Alpha)
	  10/15/98  09:36p   17,168  Ftpctrs2.dll
	  10/15/98  09:36p  126,224  Ftpsvc2.dll
	  10/15/98  09:35p   25,872  Infoadmn.dll
	  10/15/98  09:35p  302,352  Infocomm.dll
	  10/15/98  09:34p   82,704  Isatq.dll
	  10/15/98  09:36p   21,264  W3ctrs.dll
	  10/15/98  09:36p   380,688 W3svc.dll
	  10/15/98  09:36p    98,576 Wam.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows Internet Information
	Server (IIS) version 4.0.
	
	MORE INFORMATION
	================
	
	Stopping and restarting IIS 4.0 will temporarily correct the problem. This will
	also stop the World Wide Web Publishing Service.
	
	Additional query words: 4.00
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
