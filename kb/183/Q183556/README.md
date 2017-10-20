---
layout: page
title: "Q183556: SNADDM Service Fails If Install Directory Path Is Too Long"
permalink: /kb/183/Q183556/
---

## Q183556: SNADDM Service Fails If Install Directory Path Is Too Long

{% raw %}

	Article: Q183556
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for AS/400 and VSAM, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the path specified for the install directory for SNA Server 4.0 and OLE DB
	Provider for AS/400 and VSAM 1.0 is too long, the SNA DDM Service will not start
	properly. In one example, the path name specified during installation is 107
	bytes long. This is the longest allowed by the installation process. After
	rebooting the computer, the following message box appears:
	
	  Title: Service Control Manager
	  Text: At least one service or driver failed during system startup. Use
	  Event Viewer to examine the event log for details.
	
	The following entry was written to the System event log:
	
	  Event ID: 7022
	  Source: Service Control Manager
	  Type: Error
	  Category: None
	  Description: The SNA DDM Service hung on starting.
	
	The following entry was written to the Application event log:
	
	  Event ID: 0
	  Source: SNA DDM Service
	  Type: Error
	  Category: None
	  Description: The description for Event ID ( 0 ) in Source ( SNA DDM Service )
	  could not be found. It contains the following insertion string(s): DDM Agent
	  error: 126, Cannot initialize SNA DDM Service.
	
	When you view the status of the service by opening Control Panel and double-
	clicking the Services icon, the status shows that the SNA DDM Service is
	started.
	
	WORKAROUND
	==========
	
	Uninstall SNA Server 4.0, and then reinstall it with the OLE DB Provider for
	AS/400 and VSAM 1.0 using a short install path.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft OLE DB Provider for
	AS/400 and VSAM version 1.00 included with SNA Server version 4.0.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvSearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
