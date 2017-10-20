---
layout: page
title: "Q154749: Get_LUA_Return_Code Not Defined in WINSLI32.DLL File"
permalink: /kb/154/Q154749/
---

## Q154749: Get_LUA_Return_Code Not Defined in WINSLI32.DLL File

{% raw %}

	Article: Q154749
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Get_LUA_Return_Code function is used to map an error return code to a more
	descriptive text string to display to the user. Because this function is not
	present in the WINSLI32.DLL file, you may wish to display the actual error code
	if an error occurs, or provide your own descriptive error messages.
	
	CAUSE
	=====
	
	The function Get_LUA_Return_Code was inadvertently omitted from the WINSLI32.DLL
	file. The function is included in the file: WINRUI32.DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.11 and 2.11.sp1. This problem was corrected in the latest Microsoft SNA Server
	2.11 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: sp1
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
