---
layout: page
title: "Q236127: Event ID 3: IISLOG Unable to Create File"
permalink: kb/236/Q236127/
---

## Q236127: Event ID 3: IISLOG Unable to Create File

	Article: Q236127
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Information Server (IIS) generates the following event log message
	intermittently in Event Viewer:
	
	  Event ID: 3 Source : IISLOG Description: IIS Logging was unable to create the
	  file C:\WINNT\System32\LogFiles\W3SVC1\ex990628.log. The data is the error.
	
	NOTE: The data in the event message is 5, Access Denied. The file noted in the
	event message is being created and the log entries are written.
	
	CAUSE
	=====
	
	IIS attempted to flush its log cache using the credentials of a user who does
	not have write access to the log file location.
	
	RESOLUTION
	==========
	
	To resolve this problem, see the following Knowledge Base article for hotfix
	information:
	
	  Q275032 IISLog Event Can't Create Directory Occurs at Startup
	
	WORKAROUND
	==========
	
	In order to avoid receiving the errors in the event log, you must give the
	special group Everyone either Change or Full Control permissions to the log file
	folder.
	
	MORE INFORMATION
	================
	
	IIS flushes its log cache periodically and when it does, it uses the security
	context of the currently running thread. If that fails, IIS will generate the
	event log shown above, and then attempt to write the log using the System
	account.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
