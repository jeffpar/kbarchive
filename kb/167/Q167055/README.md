---
layout: page
title: "Q167055: FTP Service Does Not Detect Port Change"
permalink: kb/167/Q167055/
---

## Q167055: FTP Service Does Not Detect Port Change

	Article: Q167055
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the port for the FTP server in the FTP properties of the
	Internet Service Manager, the clients still connect on the old port and cannot
	connect on the new port
	
	CAUSE
	=====
	
	The Services file, used by TCP to assign ports, is not properly updated to
	reflect the new port. This file is used to set both the server and client port
	settings, and it overrides settings in the registry pertaining to FTP ports.
	
	WORKAROUND
	==========
	
	To configure the FTP server for a different port, do the following:
	
	1. Using Internet Service Manager, set the FTP properties to the desired port.
	
	2. Apply the changes and stop the service.
	
	3. Open the Services file (located in the %winnt%\system32\ drivers\etc
	  directory.
	
	4. Find the following line and change it to reflect the new port number:
	
	  ftp 21/tcp
	
	5. Save the file, then run the Services.exe file located in the \system32
	  directory.
	
	6. Restart the FTP service in Internet Service Manager.
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbiisSearch kbiis200
	Version           : winnt:2.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
