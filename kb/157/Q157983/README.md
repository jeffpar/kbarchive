---
layout: page
title: "Q157983: INFO: Platform Considerations with OLE Automation"
permalink: /kb/157/Q157983/
---

## Q157983: INFO: Platform Considerations with OLE Automation

{% raw %}

	Article: Q157983
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When creating add-ins for Visual SourceSafe, several platform considerations
	must be made when planning the design and functionality of the add-in OLE
	server.
	
	MORE INFORMATION
	================
	
	The Visual SourceSafe add-in model only supports the 32-bit Intel client. This
	must be taken into consideration because add-ins that rely on receiving
	SourceSafe events may not function properly when users operate from different
	clients.
	
	Unlike SQL Server or Exchange Server, SourceSafe OLE Automation does not process
	on the server side. All of the processing is completed on the client machine. If
	an add-in for SourceSafe is used, each client must have the add-in installed and
	configured on a local machine.
	
	There are several instances when the add-in will not receive SourceSafe events
	and will not be able to process information:
	
	- If older versions of SourceSafe are used.
	
	- If the Command line is used, no events will be sent.
	
	- If the 16-bit client is used, no events will be sent.
	
	- If an operating system that does not support OLE is used, no events will be
	  sent.
	
	If event-critical add-ins are created (e-mail notification or local data
	processing), some event data will be lost if SourceSafe is used in a mixed-
	client environment. This should be taken into consideration during the
	development and deployment stages of the add-in application.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
