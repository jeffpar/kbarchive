---
layout: page
title: "Q115764: INFO: Windows for Workgroups SDK"
permalink: /kb/115/Q115764/
---

## Q115764: INFO: Windows for Workgroups SDK

{% raw %}

	Article: Q115764
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): kbnetwork kb16bitonly kbAPI kbIPC kbPipes kbSDKPlatform kbOSWin310 kbWNet kbMailslot kb
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows for Workgroups (WFW) SDK contains additional files that can be used
	with the Windows version 3.1 SDK for WFW development. The WFW SDK includes the
	following components:
	
	- WFW SDK API Help file
	
	- Header (.H) files
	
	- Library (.LIB) files
	
	- Sample code
	
	- WFW debug binaries
	
	- WFW WDEB386.EXE files (WFW kernel mode debugger)
	
	The WFW SDK is available on the Microsoft Developer's Network (MSDN) Level 2 CD
	set, beginning with the April 1994 edition.
	
	MORE INFORMATION
	================
	
	The WFW SDK provides headers, libraries, and help for APIs in the following
	areas (which are new with WFW):
	
	- Networking:
	
	   - WNet (connecting, browsing, sharing)
	
	   - MNet (multiple-network driver interface)
	
	   - Mailslots
	
	   - Named pipes (asynchronous reads and writes)
	
	- NetDDE (networked DDE)
	
	- File Manager extensions
	
	- Common controls
	
	The following are the WFW SDK samples and what they do:
	
	- MSLOT demonstrates the Mailslot APIs.
	
	- NPCLNT16 demonstrates the asynchronous named pipe APIs.
	
	- WFWAPI (in the NETAPI directory) demonstrates various WNet and MNet APIs.
	
	- DDESHARE (in the NETDDE directory) demonstrates the NDde APIs. This is the
	  source code to the DDESHARE utility included with the WFW Resource Kit.
	
	Additional query words: no32bit
	
	======================================================================
	Keywords          : kbnetwork kb16bitonly kbAPI kbIPC kbPipes kbSDKPlatform kbOSWin310 kbWNet kbMailslot kbOSWin311 kbGrpDSNet 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310 kbWinSDK311
	Version           : WINDOWS:3.1,3.11
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
