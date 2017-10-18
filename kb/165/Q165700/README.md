---
layout: page
title: "Q165700: SNA 3.0 Win 3.x Client Fails to Initialize Due to Security.dll"
permalink: kb/165/Q165700/
---

## Q165700: SNA 3.0 Win 3.x Client Fails to Initialize Due to Security.dll

	Article: Q165700
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When starting an SNA application on the SNA Server 3.0 Windows 3.x client, the
	computer may stop responding (hang) or an access violation may occur.
	
	CAUSE
	=====
	
	When the SNA Server Windows 3.x client application (or Wnap.exe) starts, the SNA
	client attempts to initialize the Windows NT security support provider interface
	that is contained in Security.dll. If the client computer has a different
	Security.dll somewhere else in the path, the wrong Security.dll will cause the
	SNA client to fail to initialize.
	
	RESOLUTION
	==========
	
	An update to the SNA Windows 3.x client is available to correct this problem.
	With the update applied, the SNA client loads the Security.dll located in the
	WbinPath setting that is in the [WNAP] section of the Win.ini file, instead of
	any Security.dll that is located in the path.
	
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
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
