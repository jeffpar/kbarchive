---
layout: page
title: "Q183578: SNA DDM Service Fails to Release Handles"
permalink: kb/183/Q183578/
---

## Q183578: SNA DDM Service Fails to Release Handles

	Article: Q183578
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
	
	DDMServ.exe, a service of the SNA DDM Service, fails to release one handle per
	connection. There is a minor memory leak of about 4 bytes per connection. This
	problem most likely appears during stress testing or other periods of very heavy
	usage.
	
	You can confirm this problem by using either Task Manager or Performance Monitor
	during periods of very heavy utilization, such as stress testing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft OLE DB Provider for
	AS/400 and VSAM version 1.0, included with Microsoft SNA Server version 4.0.
	
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
	
