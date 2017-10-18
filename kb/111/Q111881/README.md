---
layout: page
title: "Q111881: RAS Err Msg: Error 642: One of Your NetBIOS Names Is..."
permalink: kb/111/Q111881/
---

## Q111881: RAS Err Msg: Error 642: One of Your NetBIOS Names Is...

	Article: Q111881
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Remote Access Services (RAS) client that ships with Microsoft
	Windows for Workgroups version 3.11, you may receive the following error message
	during RAS authentication
	
	  Error 642: One of your NetBIOS names is already registered on the remote
	  network. Name: <xxxxxx>
	
	where <xxxxxx> identifies the duplicate NetBIOS name.
	
	CAUSE
	=====
	
	The above error message may occur if:
	
	- MaintainServerList is set to "Yes" or "Auto" in the [Network] section of the
	  SYSTEM.INI file.
	
	  NOTE: The default for this setting is "Auto."
	
	  -or-
	
	- The workstation is connected to the network when you attempt to logon through
	  RAS.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	- Set the MaintainServerList value to "No" (without the quotation marks).
	
	  -or-
	
	- Disconnect the workstation from the network.
	
	Additional query words: 3.11 w_nt lanman ras error message login nt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
