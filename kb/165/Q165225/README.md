---
layout: page
title: "Q165225: AP_TP_Name_Not_Recognized with DBCS and Single Signon"
permalink: kb/165/Q165225/
---

## Q165225: AP_TP_Name_Not_Recognized with DBCS and Single Signon

	Article: Q165225
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When allocating a 5250 conversation using a double byte character set (DBCS)
	code page and the single signon feature, the following advanced
	program-to-program communications (APPC) return code may result:
	
	  Primary Return Code: 0003 AP_ALLOCATION_ERROR
	  Secondary Return Code: 10086021 AP_TP_NAME_NOT_RECOGNIZED.
	
	The partner LU does not recognize the TP name specified in the allocation
	request.
	
	The following trace excerpt shows the TP name being 0x066F646E:
	
	APPC   ---------------------------------------------- 17:43:27.20
	APPC   MC_ALLOCATE request
	APPC
	APPC   Type:Sync                                  VerbID:00001400
	APPC
	APPC   ---- Verb Parameter Block at address 0210FB54 ----
	APPC   01000100 00000000 00000000 00000000     <................>
	APPC   B86A1A00 08801B00 00000000 00000000     <.j..............>
	APPC   00000000 00000000 53313030 35444341     <........S1005DCA>
	APPC   D8D7C3E2 E4D7D740 066F646E 40404040     <QPCSUPP@.odn@@@@> <-.odn
	APPC   40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	APPC   40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	APPC   40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	APPC   40404040 40404040 02000000 00000000     <@@@@@@@@........>
	APPC   00000000 E2C8E4C9 C3C8C940 4040E2C8     <....SHUICHI@@@SH>
	APPC   E4C9C3C8 C9404040 00000000 00000000     <UICHI@@@........>
	APPC   00000000 00000000 00000000 00000000     <................>
	APPC   00000000 00000000 00000000              <............    >
	
	The following is the return from the remote system after the allocate was sent to
	the AS/400:
	
	APPC   ---------------------------------------------- 17:43:40.25
	APPC   MC_RECEIVE_AND_WAIT response, result = ALLOCATION_ERROR
	APPC
	APPC   Type:Sync                                  VerbID:00004400
	APPC
	APPC   ---- Verb Parameter Block at address 0210FBE0 ----
	APPC   0B000100 00030000 10086021 00000000     <..........`!....>
	APPC   00000000 28FC1002 00000000 00000000     <....(...........>
	
	CAUSE
	=====
	
	This problem occurs when you use WideCharToMultiByte() API on DBCS platforms.
	
	RESOLUTION
	==========
	
	A change was made to Sec400.dll so that the WideCharToMultiByte () API is not
	used to convert the EBCDIC TP name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
