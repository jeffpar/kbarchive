---
layout: page
title: "Q139355: WINMGT.H Problems with Win32 Structure Packing"
permalink: /kb/139/Q139355/
---

## Q139355: WINMGT.H Problems with Win32 Structure Packing

{% raw %}

	Article: Q139355
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
	
	When building Win32 applications which use the SNA Server APPC Management Verb
	functions (DISPLAY and CNOS), the verb control block passed to the SNA Server
	interface does not have the correct non-packed structure.
	
	CAUSE
	=====
	
	The WINMGT.H file is missing the proper packing statements.
	
	RESOLUTION
	==========
	
	To resolve this problem, add these lines to the WINMGT.H include file.
	
	At the beginning of these header files, these statements should be added:
	
	     #ifdef WIN32
	
	     #pragma pack(4)
	
	     #endif
	
	At the end of these header files, these statements should be added:
	
	     #ifdef WIN32
	
	     #pragma pack()
	
	     #endif
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	KBCategory: kbnetwork kbprg kbbug2.00 kbbug2.10 kbbug2.11
	KBSubcategory: ntnetserv
	
	Additional query words: prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
