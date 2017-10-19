---
layout: page
title: "Q135316: Support for Sending User ID on Attach when AP_SAME Specified"
permalink: /kb/135/Q135316/
---

## Q135316: Support for Sending User ID on Attach when AP_SAME Specified

	Article: Q135316
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In response to customer requests, Microsoft created an update for SNA Server
	that allows APPC applications to automatically send the logged on user ID in the
	LU6.2 attach message, when setting the security parameter to AP_SAME. Prior to
	this enhancement to SNA Server, setting the AP_SAME option would only transmit
	the USER_ID field when the program had been previously invoked with conversation
	security by another APPC program.
	
	MORE INFORMATION
	================
	
	This enhancement to the APPC API allows an invoking transaction program to use
	the current logged-on Windows NT user ID as the user ID for APPC Conversation
	Level security. To enable this feature:
	
	1. The invoking TP must set the security parameter in the [MC_]ALLOCATE verb
	  control block to AP_SAME.
	
	2. The following registry setting, or WIN.INI [WNAP] setting for Windows 3.x
	  must be enabled: If SNA Server 2.11 SP2 or SNA Server 3.0 (any service pack)
	  is being used: Windows NT or Windows 95:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/SnaBase
	                     /Parameters/Client/ 
	
	         AP_SAMENosUser: REG_SZ: YES
	
	  Windows 3.x:
	
	  AP_SAMENosUser = YES
	
	  If SNA Server 2.11 SP1 is being used, the following registry key is used
	  instead (in the same registry key above):
	
	  UnverifiedAP_SAME: REG_DWORD: 0x1
	
	  or, for Windows 3.x,
	
	  UnverifiedAP_SAME = YES
	
	When this enhancement is used, the [MC_]Allocate causes an Attach request to be
	transmitted containing the logged-on user ID and the Already Verified indicator.
	No password is transmitted in this case. If the invoking transaction program was
	itself invoked with an APPC user ID, that user ID, not the Windows NT one, is
	used.
	
	NOTE: For a CPIC application to take advantage of this new feature, the
	"UnverifiedAP_SAME" setting in WIN.INI or Windows NT registry must be configured
	as documented above. The CPIC application must specify the CM_SECURITY_SAME
	option in the Set_Conversation_Security_Type (cmscst) call.
	
	RESOLUTION
	==========
	
	Microsoft has updated the Windows NT client file WAPPC32.DLL, and the Windows
	3.x client files, WINAPPC.DLL and WNAP.EXE, to correct this problem. Make sure
	that "UnverifiedAP_SAME" (or UnverifiedAP_SAME) is set as mentioned above.
	
	STATUS
	======
	
	This feature is included in the latest U.S. Service Pack for SNA Server for
	Windows NT, version 2.11. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q163015 Use of "Already Verified" APPC Security from Invoking TPs
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211
	Version           : WINDOWS:2.11,3.0
	
	=============================================================================
	
