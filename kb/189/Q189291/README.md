---
layout: page
title: "Q189291: Hang in Winlogon on Workstation Locked Dialog Box"
permalink: kb/189/Q189291/
---

## Q189291: Hang in Winlogon on Workstation Locked Dialog Box

	Article: Q189291
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Win32 Software Development Kit (SDK) 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT computer may appear to stop responding (hang) in the Workstation
	Locked dialog box, but you will still be able to move the mouse and access the
	computer from the network.
	
	CAUSE
	=====
	
	This problem can occur when running a filter Gina.dll. This problem is caused by
	a race condition in Winlogon wherein Secure Attention Sequence (SAS) messages
	are disabled and not reenabled.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	A race condition resulting in a computer that quits responding exists in
	Winlogon if a custom Gina.dll's WlxLoggedOnSas function immediately returns with
	WLX_SAS_ACTION_LOCK_WKSTA.
	
	Additional query words: SDK
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbWin32SDKSearch kbAudDeveloper kbSDKSearch kbWin32sSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
