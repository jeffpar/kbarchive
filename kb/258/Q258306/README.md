---
layout: page
title: "Q258306: Microsoft INTERIX Installation Program Stops Responding"
permalink: /kb/258/Q258306/
---

## Q258306: Microsoft INTERIX Installation Program Stops Responding

	Article: Q258306
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4,2.2.4.03,2.2.4.08,2.2.5
	Operating System(s): 
	Keyword(s): w2000sfu kbUNIXService
	Last Modified: 01-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4, 2.2.4.03, 2.2.4.08, 2.2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	INTERIX, Microsoft's Unix environment on Windows NT, may stop responding as it
	installs. Looking at the hard drive will not show any directory creation, no
	files will have been copied, but a look under
	HKEY_LOCAL_MACHINE\Software\Softway Systems will have been created. The
	installation simply begins clocking.
	
	CAUSE
	=====
	
	The installation routine is looking for an active POSIX subsystem. This would be
	one of three files located in Winnt\System32, Psxrun.exe, Posix.exe, and
	Psxdll.dll. These files are shipped with Microsoft Windows NT and Microsoft
	Windows 2000, and comprise the POSIX subsystem. They are frequently "adjusted"
	by different POSIX-dependent applications, such as the Windows NT 4.0 FTP
	server, and various POSIX-compliant applications from third parties.
	
	RESOLUTION
	==========
	
	To resolve this issue, you can use an environment variable from the command
	prompt.
	
	From an MS-DOS prompt (assuming the CD-ROM drive is drive D): C:\> set
	CHECKSS=NO C:\> d: D:\> D:\> cd X86 D:\X86> setup.exe
	
	This should allow the installation routine to progress normally. You may see a
	"path name not normalized" message; if you have taken all INTERIX defaults, this
	should not be an issue. If it is, see "Path Name Not Normalized" in the
	Knowledge Base.
	
	Additional query words:
	
	======================================================================
	Keywords          : w2000sfu kbUNIXService 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224 kbInterix22403 kbInterix22408 kbInterix225
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4,2.2.4.03,2.2.4.08,2.2.5
	Issue type        : kbprb
	
	=============================================================================
	
