---
layout: page
title: "Q153254: Win16 RUI_BID Traps on Windows NT Win32 Thunking DLL"
permalink: /kb/153/Q153254/
---

## Q153254: Win16 RUI_BID Traps on Windows NT Win32 Thunking DLL

	Article: Q153254
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The WinRUI 16-bit thunking DLL provided with Service Pack 1 changes the
	lua_verb_length in an application-provided LUA RUI_BID verb to an incorrect
	value. As a result, the verb fails with primary return code = PARAMETER_CHECK,
	secondary = VERB_LENGTH_INVALID.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 2.0, 2.1,
	2.11, and 2.11.sp1. This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
