---
layout: page
title: "Q257398: SFU: Cannot Use ALT+CONTROL Keys from Within a Telnet Session"
permalink: /kb/257/Q257398/
---

## Q257398: SFU: Cannot Use ALT+CONTROL Keys from Within a Telnet Session

{% raw %}

	Article: Q257398
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Telnet clients may be unable to use ALT+CONTROL key combinations in advanced
	character-mode programs (such as Edit.com) from within a Telnet session to a
	Windows NT Services for UNIX-based Telnet server.
	
	CAUSE
	=====
	
	The Telnet client is not using VTNT emulation mode. VTNT emulation is the
	preferred emulation type for using the Windows NT command shell (Cmd.exe) from
	within a Telnet session. VTNT emulation is the only emulation type that provides
	the full functionality of advanced character-mode programs such as Edit.com.
	
	RESOLUTION
	==========
	
	Install the Telnet client that is included on the Microsoft Windows NT Services
	for UNIX CD-ROM on the client workstation. To set the terminal emulation type to
	VTNT, start a Telnet session and type "SET TERM VTNT" (without the quotation
	marks) at the Microsoft Telnet prompt. You can then open a connection to the
	Telnet server as usual.
	
	MORE INFORMATION
	================
	
	Presently, VTNT emulation is only available with the Telnet client and server
	components included on the Microsoft Windows NT Services for UNIX add-on pack.
	It is not included with the GUI-based Telnet client program that is included
	with Windows NT, Microsoft Windows 95, and Microsoft Windows 98.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
