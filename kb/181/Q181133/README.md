---
layout: page
title: "Q181133: Win95 Host Account Manager on WinNT Fails to Copy UDSUPPNT.DLL"
permalink: kb/181/Q181133/
---

## Q181133: Win95 Host Account Manager on WinNT Fails to Copy UDSUPPNT.DLL

	Article: Q181133
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When installed on Windows NT, the Windows 95 Host Account Manager fails to copy
	Udsuppnt.dll. This results in the following error message when the Host Account
	Manager is executed:
	
	  Unable to load udsuppnt.dll.
	
	CAUSE
	=====
	
	The Windows 95 SNA Client setup does not copy Udsuppnt.dll to the
	\\<snaroot>\system directory when the Windows 95 client is installed on
	Windows NT. Host Account Manager (udconfig.exe) tries to load Udsuppnt.dll only
	if it is running on Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1 (SP1), 3.0 SP2 and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
