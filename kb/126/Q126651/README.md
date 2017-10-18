---
layout: page
title: "Q126651: NetBIOS Data Codes (Windows NT and RAS)"
permalink: kb/126/Q126651/
---

## Q126651: NetBIOS Data Codes (Windows NT and RAS)

	Article: Q126651
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT uses the following standard NetBIOS error codes when communicating
	with down level networked clients (such as Microsoft Windows for Workgroups
	version 3.x, Microsoft Windows NT version 3.1, or Microsoft LAN Manager RAS
	version 1.x).
	
	  Error 640 - ERROR_NETBIOS_ERROR
	  Error 650 - ERROR_SERVER_NOT_RESPONDING
	  Error 715 - ERROR_TOO_MANY_LINE_ERRORS
	
	NOTE: The Windows NT Remote Access Service uses these codes with certain errors
	as well.
	
	MORE INFORMATION
	================
	
	The code returned by 639=ERROR_CANNOT_GET_LANA is a not a NetBIOS error code,
	but a RAS error that can be returned by the RAS Manager service RasAllocateRoute
	and RasActivateRoute API calls (made to enable network traffic for the AMB
	session on the link). This error is typically due to configuration problem,
	rather than a line problem.
	
	
	The following list summarizes all the Code=x extended error codes currently
	reported:
	
	     #define NRC_GOODRET     0x00     Good return - also returned when
	                                      ASYNCH request accepted
	     #define NRC_BUFLEN      0x01     Illegal buffer length
	     #define NRC_ILLCMD      0x03     Illegal command
	     #define NRC_CMDTMO      0x05     Command timed out
	     #define NRC_INCOMP      0x06     Message incomplete, issue another
	                                      command
	     #define NRC_BADDR       0x07     Illegal buffer address
	     #define NRC_SNUMOUT     0x08     Session number out of range
	     #define NRC_NORES       0x09     No resource available
	     #define NRC_SCLOSED     0x0a     Session closed
	     #define NRC_CMDCAN      0x0b     Command canceled
	     #define NRC_DUPNAME     0x0d     Duplicate name
	     #define NRC_NAMTFUL     0x0e     Name table full
	     #define NRC_ACTSES      0x0f     No deletions, name has active
	                                      sessions
	     #define NRC_LOCTFUL     0x11     Local session table full
	     #define NRC_REMTFUL     0x12     Remote session table full
	     #define NRC_ILLNN       0x13     Illegal name number
	     #define NRC_NOCALL      0x14     No callname
	     #define NRC_NOWILD      0x15     Cannot put * in NCB_NAME
	     #define NRC_INUSE       0x16     Name in use on remote adapter
	     #define NRC_NAMERR      0x17     Name deleted
	     #define NRC_SABORT      0x18     Session ended abnormally
	     #define NRC_NAMCONF     0x19     Name conflict detected
	     #define NRC_IFBUSY      0x21     Interface busy, IRET before retrying
	     #define NRC_TOOMANY     0x22     Too many commands outstanding, retry
	                                      later
	     #define NRC_BRIDGE      0x23     ncb_lana_num field invalid
	     #define NRC_CANOCCR     0x24     Command completed while cancel
	                                      occurring
	     #define NRC_CANCEL      0x26     Command not valid to cancel
	     #define NRC_DUPENV      0x30     Name defined by anther local process
	     #define NRC_ENVNOTDEF   0x34     Environment undefined. RESET required
	     #define NRC_OSRESNOTAV  0x35     Required OS resources exhausted
	     #define NRC_MAXAPPS     0x36     Max number of applications exceeded
	     #define NRC_NOSAPS      0x37     No saps available for NetBIOS
	     #define NRC_NORESOURCES 0x38     Requested resources are not available
	     #define NRC_INVADDRESS  0x39     Invalid NCB address or length >
	                                      segment
	     #define NRC_INVDDID     0x3B     Invalid NCB DDID
	     #define NRC_LOCKFAIL    0x3C     Lock of user area failed
	     #define NRC_OPENERR     0x3f     NetBIOS not loaded
	     #define NRC_SYSTEM      0x40     System error
	     #define NRC_PENDING     0xff     Asynchronous command is not yet
	                                      finished
	
	NOTE: With the down-level RAS protocol, authentication occurs over a NetBIOS
	session using our proprietary AMB authentication protocol.
	
	Additional query words: 3.10 3.11 prodnt wfw wfwg down level downlevel
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch
	Version           : WINDOWS:; winnt:3.5
	
	=============================================================================
	
