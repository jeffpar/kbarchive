---
layout: page
title: "Q250560: Terminal Server Hangs While Closing Down a Session"
permalink: /kb/250/Q250560/
---

## Q250560: Terminal Server Hangs While Closing Down a Session

	Article: Q250560
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Terminal Server randomly stops responding (hang) and you receive the
	following error message on a blue screen:
	
	  Stop 0x1Ee
	
	CAUSE
	=====
	
	The error actually occurs when a Terminal Server client is logging off a
	session. Terminal Server is trying to access the client's System Tray window
	despite the fact that it has already been closed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	version 4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	This problem was first corrected in Windows NT Server version 4.0, Terminal
	Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	The stack trace from this hang looks something like this:
	
	bd1d3d78 a304f6b0 a414cb88 0000019a a5081338 win32k!IsTrayWindow+0x40
	bd1d3dbc a30292e7 a414cb88 e2893b68 a3054573 win32k!xxxDestroyWindow+0x233
	bd1d3dc8 a3054573 a5081338 e2893c08 e2893b68 win32k!HMDestroyUnlockedObject+0x6f
	bd1d3ddc a3054961 bd1d3e08 807b1184 00000000 win32k!DestroyThreadsObjects+0xa2
	bd1d3df4 a3053865 807b1184 00000001 a305374a win32k!xxxDestroyThreadInfo+0x141
	bd1d3e08 a30537b3 e2893b68 00000001 e2893b68 win32k!UserThreadCallout+0xad
	bd1d3e1c 801a38cd e2893b68 00000001 807b1184 win32k!W32pThreadCallout+0x29
	bd1d3ea4 801a35f8 00000000 82c7d608 8011c38d ntkrnlmp!PspExitThread+0x253
	bd1d3eb0 8011c38d 82c7d608 bd1d3ee8 bd1d3ee4 ntkrnlmp!PsExitSpecialApc+0x1a
	bd1d3eec 801475a4 00000001 00000000 bd1d3f04 ntkrnlmp!KiDeliverApc+0x181
	bd1d3eec 77ee199f 00000001 00000000 bd1d3f04 ntkrnlmp!KiServiceExit+0x59
	bd1d3d78 a304f6b0 a414cb88 0000019a a5081338 +0x77ee199f
	
	The bottom of the stack may be different, but the problem always occurs in
	win32k!IsTrayWindow.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
