---
layout: page
title: "Q170854: FTP Login Fails with Err. Msg: Home Directory Inaccessible"
permalink: kb/170/Q170854/
---

## Q170854: FTP Login Fails with Err. Msg: Home Directory Inaccessible

	Article: Q170854
	Product(s): Internet Information Server
	Version(s): WinNT:3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to login to the FTP service, you may get the following error
	message when you type in your password:
	
	  530 User cannot log in, home directory inaccessible.
	
	CAUSE
	=====
	
	No home directory is defined in the Directory Properties for the FTP service.
	
	WORKAROUND
	==========
	
	1. In Internet Service Manager, open the FTP Service Properties.
	
	2. Select Directories.
	
	3. Select the directory that will be the home directory for the FTP service.
	
	4. Click Edit Properties.
	
	5. Enable the Home Directory button, then click OK. Click Apply, then click OK.
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300
	Version           : WinNT:3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
