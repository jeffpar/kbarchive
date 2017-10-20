---
layout: page
title: "Q165841: Support for More than 158 Characters Per Line"
permalink: /kb/165/Q165841/
---

## Q165841: Support for More than 158 Characters Per Line

{% raw %}

	Article: Q165841
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Print Service session property page for 3270 LUs in SNA Manager only
	allowed a maximum page width of 158 characters.
	
	CAUSE
	=====
	
	The SNA Server 3.0 Print Service was originally designed to allow a 3270 print
	session to have a maximum page width of 158 characters.
	
	RESOLUTION
	==========
	
	The Print Service session property page for 3270 LUs now accepts any value from
	40 to 255, by means of an edit box.
	
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
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
