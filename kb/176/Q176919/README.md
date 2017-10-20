---
layout: page
title: "Q176919: IIS Fails to Display Custom Error Messages for .asp Files"
permalink: /kb/176/Q176919/
---

## Q176919: IIS Fails to Display Custom Error Messages for .asp Files

{% raw %}

	Article: Q176919
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you retrieve a document with an extension that has a corresponding script
	map entry (for example, .asp, .stm, .idq ), the custom error messages configured
	to replace the default error messages are not used.
	
	RESOLUTION
	==========
	
	In cases where the default error messages are displayed instead of the
	configured custom error messages, the following workaround exists:
	
	1. From the Microsoft Management Console (MMC) IIS Snapin, right-click the Web
	  site and click Properties.
	
	2. On the Home Directory tab, click the "Configuration" button.
	
	3. Highlight the extension that fails to return the custom error message and
	  click Edit.
	
	4. Select the Check That File Exists option.
	
	5. Click OK, and then click Apply.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When a request is made to an IIS server for a registered file (such as an ASP
	page), IIS simply passes that request to the corresponding ISAPI extension. The
	ISAPI extension that is registered for that file type is responsible for the
	completion of the request, including the return of any errors to the user.
	
	This allows the ISAPI extensions to return error messages that may relate more
	information than a standard error. When the "Check that file exists" option is
	enabled in the Add/Edit Application Extension Mapping dialog, this forces IIS to
	check and verify that the file exists, and the user has appropriate permissions
	prior to passing the request to the ISAPI extension. When this option is enabled
	and the file is missing, or the authenticated user has inappropriate
	permissions, IIS will return the appropriate custom error message.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
