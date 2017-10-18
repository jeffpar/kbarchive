---
layout: page
title: "Q153740: Debugging WINS Server Service Event ID 4179"
permalink: kb/153/Q153740/
---

## Q153740: Debugging WINS Server Service Event ID 4179

	Article: Q153740
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The WINS Server Service fails to start and the following error message appears
	in the system event log:
	
	  Event ID 4179
	
	  WINS Could not create the notification socket. Make sure the TCP/IP driver is
	  installed and running properly.
	
	CAUSE
	=====
	
	During the WINS Server service initialization, the service checks for the port
	number that the Name service will bind to. The service does this by calling the
	GetServByName API. This API must locate the Services file under System32\Drivers
	directory. If the Services file is missing, the GetServByName API will fail. The
	result is that the WINS Service will raise an exception indicating that the
	service could not create the notification socket. This exception will be logged
	in the error log as Event ID 4179.
	
	RESOLUTION
	==========
	
	Make sure that the Services file is in the System32\Drivers directory. The
	Services file provides service-name-to-port-ID resolution for Windows Sockets
	applications.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
