---
layout: page
title: "Q140828: SNA Windows 3.x Trace Utility (WINTRACE)"
permalink: /kb/140/Q140828/
---

## Q140828: SNA Windows 3.x Trace Utility (WINTRACE)

{% raw %}

	Article: Q140828
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Previously, you had to manually edit the WIN.INI file to enable tracing on the
	SNA Server Windows 3.x client. The new utility, WINTRACE.EXE, allows you to
	select what type of tracing you want to enable thru a GUI interface without
	having to load the WIN.INI file into an editor such as Notepad. The Win3x client
	setup does not create an icon for this utility. The new WINTRACE utility can be
	found in the \<snaroot> subdirectory on the client.
	
	For more information on client side tracing see Chapter 13 of the SNA Server
	Administration Guide.
	
	STATUS
	======
	
	This problem was corrected in the latest U.S. Service Pack for SNA Server for
	Windows NT, version 2.11. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna 2.00 2.10 2.11 tracing win3x trace
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
