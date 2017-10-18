---
layout: page
title: "Q200840: BUG: RasGetConnectStatus Does Not Report the Correct State"
permalink: kb/200/Q200840/
---

## Q200840: BUG: RasGetConnectStatus Does Not Report the Correct State

	Article: Q200840
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI _IK12469 kbSDKPlatform kbDSupport kbGrpDSNet
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The RasGetConnectStatus function does not return the correct connection status
	when you use it on the handle obtained through the RasEnumConnection application
	programming interface (API). The RasGetConnectStatus function reports state 8192
	(RASCS_Connected) from the beginning. All other connection states such as
	RASCS_PortOpened, RASCS_ConnectDevice are skipped.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in Windows NT
	version 4.0.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbnetwork kbAPI _IK12469 kbSDKPlatform kbDSupport kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	
	=============================================================================
	
