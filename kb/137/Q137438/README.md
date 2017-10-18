---
layout: page
title: "Q137438: SNA Server CPIC cmscsp Call Rejects Zero Length Password"
permalink: kb/137/Q137438/
---

## Q137438: SNA Server CPIC cmscsp Call Rejects Zero Length Password

	Article: Q137438
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a CPIC application calls Set_Conversation_Security_Password (cmscsp) and
	specifies a password of zero length, the call will return with error:
	
	  CM_PROGRAM_PARAMETER_CHECK.
	
	CAUSE
	=====
	
	The SNA Server CPIC interface on Windows NT, Windows 3.x and OS/2 incorrectly
	rejects a zero-length password.
	
	RESOLUTION
	==========
	
	Microsoft has modified the following files to correct this problem:
	
	  WCPIC32.DLL - Win32 client CPIC interface
	  WINCPIC.DLL - Windows 3.x client CPIC interface
	  CPIC.DLL - OS/2 client CPIC interface
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11 CPIC cmscsp 0-length password
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
