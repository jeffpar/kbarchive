---
layout: page
title: "Q189843: XCLN: Err Msg: ActiveEx Unable to Register Itself In System Regi"
permalink: kb/189/Q189843/
---

## Q189843: XCLN: Err Msg: ActiveEx Unable to Register Itself In System Regi

	Article: Q189843
	Product(s): Microsoft Exchange
	Version(s): 8.03; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, version 8.03 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install an Outlook client, the following error may occur:
	
	  ActiveEx was not able to register itself in the system registry
	
	CAUSE
	=====
	
	This error occurs when the Outlook client is installed in a shared Windows 95
	environment. The installation will not proceed successfully if ActiveEx.dll file
	cannot be installed locally.
	
	WORKAROUND
	==========
	
	To work around this problem, either install the Outlook client locally, or
	during the installation process, uncheck the option that installs the Event
	Scripting Service. This will allow the ActiveEx.dll file to be installed
	locally.
	
	MORE INFORMATION
	================
	
	For more information on using shared installations of Windows 95 and Exchange or
	Outlook clients, see the following articles in the Microsoft Knowledge Base:
	
	  Q156806 XCLN: Err Msg: Your Administrator Must Install MAPI...
	
	  Q169356 XGEN: Exchange Client Roving User Support
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook803
	Version           : :8.03; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
