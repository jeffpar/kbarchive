---
layout: page
title: "Q251045: BUG:Memory in Shared Code Sections Not Shared Across TS Sessions"
permalink: kb/251/Q251045/
---

## Q251045: BUG:Memory in Shared Code Sections Not Shared Across TS Sessions

	Article: Q251045
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): kbKernBase kbOSWin2000 kbOSWin2000bug kbSDKPlatform kbDSupport kbGrpDSKernBase kbTermSe
	Last Modified: 23-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Microsoft Windows NT 4.0, Terminal Server Edition, memory in shared code
	sections of system global DLLs is shared across terminal server sessions.
	
	On Windows 2000, however, memory in shared code sections of system global DLLs
	cannot be shared across terminal server sessions. Instead, each session receives
	its own instance of the variables that are declared within a shared code
	section. That memory is shared among processes that are running within the same
	session, but is not accessible to processes in other sessions.
	
	CAUSE
	=====
	
	New architecture of Windows 2000 memory manager prevents shared code sections
	from being shared across terminal server sessions.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	
	
	WORKAROUND
	==========
	
	If an application needs to share memory across terminal server sessions on
	Windows 2000, it should do so through a global file mapping object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 1.
	
	MORE INFORMATION
	================
	
	On computers that are running terminal server, you can register a DLL as a
	system global resource. For additional information on how to perform this
	registration, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q186625 Terminal Server Commands: REGISTER
	
	Additional query words:
	
	======================================================================
	Keywords          : kbKernBase kbOSWin2000 kbOSWin2000bug kbSDKPlatform kbDSupport kbGrpDSKernBase kbTermServ kbWin2000PreSP1Fix kbWinNT400PreSP7Fix kbWin2000sp1Fix 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:2000
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
