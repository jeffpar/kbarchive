---
layout: page
title: "Q93230: Windows APPC for 16 and 32-Bit Windows"
permalink: /kb/093/Q93230/
---

## Q93230: Windows APPC for 16 and 32-Bit Windows

	Article: Q93230
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbnetwork kbsample kbAPI kbSDKPlatform kbOSWin310 kbGrpDSNet
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows APPC defines a standard and consistent API for the 16 and 32-bit
	versions of the Microsoft Windows graphical environment. It encompasses a set of
	Windows-specific extensions designed to allow the programmer to take advantage
	of the message-driven nature of the Windows graphical environment.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  WinAPPC.exe
	  (http://support.microsoft.com/download/support/mslfiles/WinAPPC.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	This API has been designed and specified to provide a standard to which
	application developers can program and network software vendors can conform.
	These API details constitute documentation for application software developers
	and a specification for network software vendors.
	
	Network software that conforms to this Windows APPC specification will be
	considered "Windows APPC compliant." To be Windows APPC compliant, a vendor must
	implement 100 percent of this Windows APPC specification. Suppliers of such
	interfaces shall be referred to as "Windows APPC suppliers."
	
	Applications that are capable of exploiting any Windows APPC implementation will
	be considered as having a "Windows APPC interface" and will be referred to as
	"Windows APPC applications."
	
	The purpose of this document is to specify the Windows APPC interface. It is
	assumed that the reader has a basic understanding APPC concepts.
	
	While this is one of the WinSNA APIs to be standardized for the Windows
	environment, it is beyond the scope of this document to deal with other SNA
	(Systems Network Architecture) APIs.
	
	Microsoft Windows Graphical Environment and Windows-Specific
	Extensions
	-----------------------------------------------------------------------
	
	This API has been designed for ALL implementations and versions of the Windows
	environment from and including version 3.0. It thus provides for Windows APPC
	implementations and Windows APPC applications in both 16- and 32-bit operating
	environments.
	
	Windows APPC makes provisions for multithreaded Windows-based processes. A
	process contains one or more threads of execution. In the Win16 non-
	multithreaded world, a task corresponds to a process with a single thread. All
	references to threads in this document refer to actual "threads" in
	multithreaded Windows environments. In non-multithreaded environments (such as
	version 3.0), use of the term thread refers to a Windows process.
	
	The extensions to the Windows environment included in Windows APPC are provided
	for maximum programming compatibility between Windows 3.x and Windows NT and
	optimum application performance in both environments.
	
	Additional query words: SNASpec
	
	======================================================================
	Keywords          : kbfile kbnetwork kbsample kbAPI kbSDKPlatform kbOSWin310 kbGrpDSNet 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
