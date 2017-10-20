---
layout: page
title: "Q136794: Computer Hangs After Changing to Novell NetWare Client"
permalink: /kb/136/Q136794/
---

## Q136794: Computer Hangs After Changing to Novell NetWare Client

{% raw %}

	Article: Q136794
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade to Windows 95 on a computer that is running the Novell NetWare
	VLM client, Setup automatically replaces the Novell NetWare client with the
	Microsoft Client for NetWare Networks if you choose to perform a Typical Setup.
	If you then replace the Microsoft Client for NetWare Networks with the Novell
	NetWare client, your computer may stop responding (hang) when you restart the
	computer.
	
	CAUSE
	=====
	
	The line that loads Smcpwr.com has not been removed from the Startnet.bat file.
	This line is not removed when you install the Microsoft Client for NetWare
	Networks during Setup, and then later install the Novell NetWare client. If you
	choose to perform a Custom Setup and indicate that you want to use the Novell
	NetWare client instead of the Microsoft Client for NetWare Networks, the line is
	removed and this problem does not occur.
	
	RESOLUTION
	==========
	
	Remove the line that loads Smcpwr.com from the Startnet.bat file.
	
	MORE INFORMATION
	================
	
	When you perform a Custom Setup and choose the Novell NetWare client, the line
	that loads Smcpwr.com remains in the Startnet.bat file until Windows 95 starts
	for the first time. At that time, the line that loads Smcpwr.com is removed from
	the Startnet.bat file, and a line loading Dc21x4.com is added.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
