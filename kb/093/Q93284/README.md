---
layout: page
title: "Q93284: WFWG Err Msg: Error 12: The Access Code Is Invalid"
permalink: /kb/093/Q93284/
---

## Q93284: WFWG Err Msg: Error 12: The Access Code Is Invalid

{% raw %}

	Article: Q93284
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you type "NET VIEW" (without the quotation marks) before the workstation
	services have been started, the redirector is started, the user is logged on,
	and then the following error message is displayed:
	
	  Error 12: The Access code is invalid.
	
	  The NET VIEW command is not carried out.
	
	STATUS
	======
	
	This problem does not occur in later version of Windows for Workgroups.
	
	MORE INFORMATION
	================
	
	Windows for Workgroups starts the default redirector at MS-DOS if any NET.EXE
	command is entered (with the exceptions of NET STOP and NET LOGOFF). Windows for
	Workgroups prompts the user for a logon name and password and then performs the
	requested function. For example, typing "NET USE x: \\SERVER\SHARE" (without the
	quotation marks) starts the workstation services, performs a logon for the user,
	and makes the requested connection.
	
	
	Additional query words: 3.10 redir service
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
