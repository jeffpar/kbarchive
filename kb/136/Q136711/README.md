---
layout: page
title: "Q136711: Error 2140 When Starting Service With Parameters"
permalink: /kb/136/Q136711/
---

## Q136711: Error 2140 When Starting Service With Parameters

	Article: Q136711
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Resource Kit 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following message appears when you attempt to manually start a service from
	Control Panel Services by selecting the service and specifying values in the
	Startup Parameters field:
	
	  Could not start the <service_name> service on \\<server_name>.
	  Error 2140: An internal Windows NT error occurred.
	
	This error typically occurs in conjunction with SRVANY.EXE, included in the
	Windows NT 3.5 Resource Kit.
	
	CAUSE
	=====
	
	This error results from an attempt to start a service with incorrect Startup
	Parameters. Most default Windows NT services do not use the Startup Parameters
	field so this error is uncommon.
	
	RESOLUTION
	==========
	
	Verify that you are using the appropriate Startup Parameters for the service you
	are attempting to start. To pass startup parameters to a service, select the
	service, type the parameters in the Startup Parameters field, and then choose
	the Start button.
	
	SRVANY.EXE requires that you type in the full command-line, including the
	application name and parameters associated with your service. Fully- qualified
	path names should be used when specifying the application.
	
	NOTE: Backslashes are treated as an escape character. You must type two
	backslashes for each backslash in a parameter. For example:
	
	  D:\\BINP\\B.EXE C:\\TMP\\MYEXE
	
	For additional information on SRVANY.EXE read SRVANY.WRI included in the Windows
	NT 3.5 and 3.51 Resource Kits.
	
	For additional information to fully troubleshoot Srvany problems, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q152460 Troubleshooting SrvAny Using Cmd.exe
	
	Additional query words: prodnt 3.50 3.51 start-up automatic logon srvany
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbPTNotAssigned kbZNotKeyword2
	Version           : :
	
	=============================================================================
	
