---
layout: page
title: "Q230594: XWEB: Errors Inserting Attachments Using Outlook Web Access"
permalink: /kb/230/Q230594/
---

## Q230594: XWEB: Errors Inserting Attachments Using Outlook Web Access

	Article: Q230594
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to insert an attachment in a message by using the Outlook Web
	Access client, you may receive one of the following error messages:
	
	  HTTP Error 405
	  Method Not Allowed
	
	  The method specified in the Request Line is not allowed for the resource
	  identified by the request. Please ensure that you have the proper MIME type
	  set up for the resource you are requesting.
	
	  Please contact the server's administrator if this problem persists.
	
	-or-
	
	  HTTP Error 403
	  403.1 Forbidden: Execute Access Forbidden
	  This error can be caused if you try to execute a CGI, ISAPI, or other
	  executable program from a directory that does not allow programs to be
	  executed.
	
	  Please contact the Web server's administrator if the problem persists.
	
	If the Exchange Server computer is running the RTM build or Service Pack 1, this
	error may not occur. The following error message may occur instead:
	
	  Error 'ASP 0115'
	  Unexpected error
	
	  /vroot/page
	
	  A trappable error occurred in an external object. The script cannot continue
	  running.
	
	CAUSE
	=====
	
	The permissions for the Exchange Server virtual directory in the Internet
	Service Manager have been changed to something other than Execute (including
	script).
	
	RESOLUTION
	==========
	
	To resolve these errors, change the permissions on the Exchange Server virtual
	directory back to Execute (including script) by performing the following steps:
	
	1. Open the Internet Service Manager.
	
	2. Open the tree for the Internet Information Server.
	
	3. Open the tree for the default Web site.
	
	4. Right-click the entry for Exchange, and click Properties from the shortcut
	  menu.
	
	5. On the Virtual Directory tab, change the permissions to Execute (including
	  script).
	
	MORE INFORMATION
	================
	
	The default permission for the Exchange Server Virtual Directory in the Internet
	Service Manager is Execute (including script).
	
	Additional query words: owa
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
