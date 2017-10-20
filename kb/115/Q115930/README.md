---
layout: page
title: "Q115930: TBMI2.COM May Be Required on Alpha and MIPS Computers"
permalink: /kb/115/Q115930/
---

## Q115930: TBMI2.COM May Be Required on Alpha and MIPS Computers

{% raw %}

	Article: Q115930
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may need to install TBMI2.COM if the following statements are true:
	
	- You are using an Alpha-based or MIPS-based computer.
	
	  -and-
	
	- You are using the 16-bit Windows client software for SQL Server for Windows
	  NT.
	
	  -and-
	
	- You are using IPX/SPX as the network protocol.
	
	MORE INFORMATION
	================
	
	TBMI2.COM was developed by Novell to allow IPX/SPX protocol applications to task
	switch in standard mode Windows. If you are using the 16-bit Windows client
	software for SQL Server for Windows NT and are using IPX/SPX as the network
	protocol, the TBMI2.COM must be loaded from the AUTOEXEC.NT file. This is
	because Windows NT on Alpha-based and MIPS-based computers emulates standard
	mode Windows.
	
	After you install the program in the AUTOEXEC.NT file, restart the computer to
	update the Win16 on Win32 (WOW) subsystem.
	
	TBMI2.COM is manufactured by the Novell Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
