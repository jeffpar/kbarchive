---
layout: page
title: "Q137436: Error Installing Attachmate Extra! After SNA Server Client"
permalink: /kb/137/Q137436/
---

## Q137436: Error Installing Attachmate Extra! After SNA Server Client

{% raw %}

	Article: Q137436
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Installing Attachmate Extra! for Windows Versions 4.1 through 5.0 after
	installing the SNA Server 2.11 or > Win3x client cause the following error to
	appear:
	
	  SNA Server Error: 598
	  No LAN userid found - perform NET LOGON
	
	
	The error occurs during Attachmate's installation routine when it attempts to
	open a Sponsor connection to the SNA Server.
	
	CAUSE
	=====
	
	Attachmate Extra! for Windows Versions 4.1 through 5.0 include the SNA Server
	2.10 Win3x client binaries to provide the SNA Server Client-Server interface.
	Therefore, installing Extra! for Windows after the SNA Server 2.11 Win3x client
	causes a conflict between the binaries for the two versions of the SNA Server
	Win3x client.
	
	The SNA Server Win3x Client binaries are listed below:
	
	  WNAP.EXE
	  WDMOD.DLL
	  BVCLI.DLL
	  IPCLI.DLL
	  LMCLI.DLL
	  NWCLI.DLL
	  WINTRC.DLL
	  WLOGTR.DLL
	  YMGR.DLL
	
	NOTE: The SNA Server Win3x Setup Program copies the above .DLL files to the
	%winroot%\system directory and WNAP.EXE to the %snaroot% directory.
	
	RESOLUTION
	==========
	
	To use the SNA Server 2.11 or > Win3x client with Attachmate Extra! for
	Windows:
	
	1. Remove the SNA Server 2.11 or > Win3x client if it is still installed by
	  running the SNA Client Setup program and selecting Remove the SNA Client.
	
	2. Install Attachmate Extra! for Windows.
	
	3. Run the SNA Server 2.11 or > Win3x client setup program, from the
	  \CLIENTS\WIN3X directory on the SNA Server 2.11 CD.
	
	4. Select the option to remove the SNA Server client that is already installed.
	  The setup program detects the presence of the SNA Server 2.10 Win3x client in
	  the Extra! for Windows directory and gives you an option to Setup or Remove
	  the currently installed client software.
	
	5. After the previous version of the SNA Server Win3x client is removed, re-run
	  the SNA Server 2.11 or > Win3x client setup program to install the new
	  version of the client software.
	
	Additional query words: prodsna 3270 WNAP third-party
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
