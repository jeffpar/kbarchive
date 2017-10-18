---
layout: page
title: "Q163285: FTP Service Does Not Pick Up Port Change"
permalink: kb/163/Q163285/
---

## Q163285: FTP Service Does Not Pick Up Port Change

	Article: Q163285
	Product(s): Internet Information Server
	Version(s): Winnt:1.0,2.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the port for the FTP server in the FTP properties of the
	Internet Service Manager, the clients still connect on the old port and cannot
	connect on the new port.
	
	CAUSE
	=====
	
	The Services file, used by TCP to assign ports, is not properly updated to show
	the new port. This file is used to set both the server and client port settings,
	and it overrides settings in the registry pertaining to IP ports.
	
	RESOLUTION
	==========
	
	To configure the FTP server for a different port, do the following:
	
	1. Using Internet Service Manager, set the FTP properties to the desired port.
	
	2. Apply the changes and stop the service.
	
	3. Open the file Services (located in the \System32\Drivers\Etc directory.
	
	4. Find the line ftp 21/tcp, and change it to reflect the new port.
	
	5. Save the file, then run the file Services.exe located in the \System32
	  directory.
	
	6. Restart the FTP service in Internet Service Manager.
	======================================================================
	Keywords          : kbother 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : Winnt:1.0,2.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
