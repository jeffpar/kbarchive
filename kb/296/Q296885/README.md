---
layout: page
title: "Q296885: Console Process May Hang During the Creation of a Child Console"
permalink: /kb/296/Q296885/
---

## Q296885: Console Process May Hang During the Creation of a Child Console

{% raw %}

	Article: Q296885
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtoolkbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a console program that immediately creates another console
	program, both programs may stop responding (hang).
	
	NOTE: Console programs run from the operating system's command line, in
	character-mode, not from a graphical user interface.
	
	CAUSE
	=====
	
	When the first console process is created, the Client Server Runtime System
	(CSRSS) creates a new thread for playing sound by using the Media Control
	Interface (MCI) API DLL (Winmm.dll). If another console process is created at
	this point, these two threads may deadlock each other.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version        Size       File name   Platform
	  ------------------------------------------------------------------
	  22-May-2001  17:05  4.0.1381.298     166,160  Gdi32.dll   Intel
	  22-May-2001  17:05  4.0.1381.7092    327,440  User32.dll  Intel
	  26-Mar-2001  18:41  4.0.1381.7095  1,254,512  Win32k.sys  Intel
	  24-May-2001  15:43  4.0.1381.7095    175,376  Winsrv.dll  Intel
	  22-May-2001  17:01  4.0.1381.7092    305,424  Gdi32.dll   Alpha
	  22-May-2001  17:01  4.0.1381.7092    575,760  User32.dll  Alpha
	  26-Mar-2001  18:37  4.0.1381.7095  2,053,552  Win32k.sys  Alpha
	  24-May-2001  15:39  4.0.1381.7095    313,616  Winsrv.dll  Alpha
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Csrss.exe is the user-mode portion of the Win32 subsystem, and Win32k.sys is the
	kernel-mode portion. CSRSS is an essential subsystem that must be running at all
	times. CSRSS is responsible for console windows, creating and/or deleting
	threads, and some parts of the 16-bit virtual MS-DOS environment.
	
	This would typically require the CREATE_NEW_CONSOLE flag to be set in the
	dwCreationFlags parameter that is sent to the CreateProcess,
	CreateProcessAsUser, or CreateProcessWithLogonW Platform SDK functions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
