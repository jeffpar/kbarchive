---
layout: page
title: "Q236359: Denial of Service Attack Using Unprotected IOCTL Function Call"
permalink: /kb/236/Q236359/
---

## Q236359: Denial of Service Attack Using Unprotected IOCTL Function Call

{% raw %}

	Article: Q236359
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfile kbinterop kbProgramming kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a program on a computer running Windows NT that contains an Input
	Output Control (IOCTL) function call for the mouse or keyboard, the program may
	prevent those input devices from responding to the operating system. A program
	that improperly uses an Windows NT IOCTL function call may be employed to create
	a denial of service attack on the computer by disabling the mouse and keyboard.
	
	CAUSE
	=====
	
	This problem occurs because the IOCTLs for the mouse and keyboard are
	unprotected and are available for use by all users, regardless of their security
	privileges. Restarting the computer can correct the situation, but does not
	prevent the program from being run again.
	
	NOTE: This vulnerability does not allow any data to be compromised, nor does it
	provide a way to bypass security and allow a user to elevate their security
	privileges.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this problem, follow normal recommended security practices to
	prevent kiosk-type workstations from running unapproved programs. Servers should
	generally allow only administrators to log on interactively and run programs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6. This
	problem was first corrected in Windows NT Server 4.0, Terminal Server Edition,
	Service Pack 5.
	
	MORE INFORMATION
	================
	
	Windows NT provides the ability for programs to directly request services of
	device drivers. The interface through which this is done is called an Input
	Output Control (IOCTL). Like all operating system services, some IOCTLs are
	appropriate for normal users to use and others are reserved for privileged
	users.
	
	For computers running Windows NT Workstation or Windows NT Server, this attack
	prevents the mouse and keyboard from returning to service when a user logs off.
	For example, if a kiosk workstation allows users to run a program arbitrarily,
	or if a server allowed normal users to log on interactively and run a program
	arbitrarily, a malicious user could disable the computer's keyboard and mouse
	and prevent use of the computers until it had been restarted. For Windows NT
	Server 4.0, Terminal Server Edition, this exploit disables not only the keyboard
	and mouse on the local computer, but also those on the console. This would not
	interfere with any of the ongoing terminal server sessions, but would still
	require the computer to be restarted to gain control of the console.
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	Additional query words: MS99-024
	
	======================================================================
	Keywords          : kbfile kbinterop kbProgramming kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
