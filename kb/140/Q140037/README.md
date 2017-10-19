---
layout: page
title: "Q140037: CPI-C cmecsu() Call Always Returns pLengthUserID=1"
permalink: /kb/140/Q140037/
---

## Q140037: CPI-C cmecsu() Call Always Returns pLengthUserID=1

	Article: Q140037
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
	
	If a CPI-C application calls the following APIs:
	
	  cmscsu() Set_Conversation_Security_User_ID
	  cmecsu() Extract_Conversation_Security_User_ID
	
	the returned length on the extract call is always set to 1. It should return the
	value that was passed through:
	
	  cmscsu(pConversationID, pUserID, pLengthUserID)
	
	
	RESOLUTION
	==========
	
	Microsoft has updated the following files to correct this problem:
	
	  Client Platforms       Updated Files
	  -----------------------------------------------------------
	
	  Windows NT clients     <SNAroot>\system\WCPIC32.DLL
	  Windows 95 clients     <WIN95root>\system\WCPIC32.DLL
	  Windows 3.x clients    <WIN3Xroot>\system\WINCPIC.DLL
	  OS/2 clients           <SNAroot>\system\CPIC.DLL
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
