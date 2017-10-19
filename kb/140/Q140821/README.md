---
layout: page
title: "Q140821: The CPIC Thunk DLL Does not Support XCECST()/CMECST() Calls"
permalink: /kb/140/Q140821/
---

## Q140821: The CPIC Thunk DLL Does not Support XCECST()/CMECST() Calls

	Article: Q140821
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
	
	The CPIC thunk dll does not support XCECST()/CMECST()
	(Extract_Conversation_Security_Type) calls.
	
	CAUSE
	=====
	
	The 16-bit CMSCST(), Set_Conversation_Security_Type is calling the 32-bit
	CMSCSP(), Set_Conversation_Security_Password.
	
	RESOLUTION
	==========
	
	Microsoft has updated the file WCPIC.DLL so that it now calls the appropriate
	16-bit function.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
