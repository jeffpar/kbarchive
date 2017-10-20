---
layout: page
title: "Q276591: Error Message: Stop 0x0000001E in Win32k.sys"
permalink: /kb/276/Q276591/
---

## Q276591: Error Message: Stop 0x0000001E in Win32k.sys

{% raw %}

	Article: Q276591
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a computer that is running Windows NT 4.0, the computer may stop
	responding (hang) and you may receive the following error message on a blue
	screen:
	
	  STOP 0x0000001E (0xc0000005, 0xa0072307, 0x00000000, 0x00000018)
	  KMODE_EXCEPTION_NOT_HANDLED
	
	CAUSE
	=====
	
	This problem occurs because the desktop window has only one child and under
	specific circumstances, the win32k!xxxMinMaximize function has a null pointer.
	For example, this problem can occur when you make a connection by using a remote
	control software while no other user is logged on to the computer, or when all
	of the desktop's child windows are top windows.
	
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
	
	The English-language, Intel version of this fix should have the following file
	attributes or later:
	
	  
	
	  Date      Time     Version        Size       File name  
	  -------------------------------------------------------
	  10/11/00  01:55pm  4.0.1381.298     166,160  Gdi32.dll
	  10/11/00  01:55pm  4.0.1381.7086    326,416  User32.dll
	  10/23/00  06:01pm  4.0.1381.7086  1,254,512  Win32k.sys
	  10/11/00  01:55pm  4.0.1381.7017    175,376  Winsrv.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	A desktop is a secure object that is in a window station. A desktop has a
	logical display surface and contains windows, menus, and hooks. A window station
	can have multiple desktops. Only the desktops of the interactive window station
	can be visible and receive user input.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
