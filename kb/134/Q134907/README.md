---
layout: page
title: "Q134907: AFTP Server May Stop Accepting New Conversations"
permalink: kb/134/Q134907/
---

## Q134907: AFTP Server May Stop Accepting New Conversations

	Article: Q134907
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
	
	If the SNA Server 2.11 AFTP Server service is configured to require conversation
	security, an AFTP client attempts to log on and provides an invalid password,
	and a new valid logon attempt immediately follows, the AFTP server fails to
	accept additional client login requests.
	
	CAUSE
	=====
	
	This failure occurs due to a timing problem within the SNA Server AFTP server
	service.
	
	RESOLUTION
	==========
	
	Microsoft has updated the files AFTPAPI.DLL, AFTP.EXE, and AFTPSERV.EXE to
	correct this problem.
	
	To work around this problem, stop and start the AFTPD service.
	
	To disable the use of conversation security with the AFTP server service to
	prevent the problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\AFTPD\Parameters:
	
	3. Set the following configuration parameter:
	
	  ConversationSecurity: REG_SZ: NO
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11 aftpd aftp aftpserv.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
