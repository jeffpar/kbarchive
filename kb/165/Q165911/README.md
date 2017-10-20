---
layout: page
title: "Q165911: SNA Manager Support for &quot;Assigned To&quot; Column for 3270 LUs"
permalink: /kb/165/Q165911/
---

## Q165911: SNA Manager Support for &quot;Assigned To&quot; Column for 3270 LUs

{% raw %}

	Article: Q165911
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Using SNA Manager, it's not possible to determine which specific 3270 LUs have
	been assigned to users and which have not been assigned. This makes it difficult
	to avoid assignment of the same 3270 LU to multiple users.
	
	NOTE: This problem only applies to assignment of specific 3270 LUs to users. If a
	pooled 3270 LU is assigned to a user or group, the user automatically accesses
	the next available 3270 LU from the pool, so conflicts do not occur.
	
	CAUSE
	=====
	
	There is no mechanism in SNA Manager to identify 3270 LUs which have not been
	assigned to users.
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available to correct this problem. The update
	adds a new Assigned To column in SNA Server Manager for 3270 LUs. This option is
	selected by default, causing the Assigned To column to appear in any SNA Manager
	window where 3270 LUs are displayed.
	
	To customize which columns should be displayed by SNA Server Manager, focus on
	the connection status and click View/Columns.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
