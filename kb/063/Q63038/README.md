---
layout: page
title: "Q63038: DEC's PCSA Disk Server and Windows 3.0"
permalink: /kb/063/Q63038/
---

## Q63038: DEC's PCSA Disk Server and Windows 3.0

{% raw %}

	Article: Q63038
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Testing by Digital Equipment Corporation (DEC) has shown Pathworks version 4.0
	and Microsoft Windows 3.0 (and Windows-based applications) to be compatible.
	
	NOTE: This information is not valid for later versions of Microsoft Windows.
	Later versions of Windows ship with drivers for the Pathworks network (version
	4.0 and 4.1) provided by DEC.
	
	
	MORE INFORMATION
	================
	
	DEC produces a mainframe communication package called PCSA that allows PCs to
	access mainframes. The PCSA network is composed of two different servers, a disk
	server and a file server. This network is not a supported network and Microsoft
	does not make any claims as to its compatibility.
	
	Windows cannot be installed on the PCSA Disk Server because Windows must be able
	to create, read, and write to temporary files to swap its applications. Because
	DEC's PCSA Disk Server is a removable media device, Windows cannot install.
	
	Supported networks include the following:
	
	- Microsoft Networks (or 100-percent compatible)
	
	- Microsoft LAN Manager 1.00
	
	- Microsoft LAN Manager 2.00
	
	- 3Com 3+Share
	
	- 3Com 3+Open LAN Manager
	
	- Banyan Vines 4.0
	
	- Novell NetWare 2.1 or later
	
	- Novell NetWare 386
	
	Users of DEC PCSA versions earlier than 4.0 should consider investigating the
	upgrade to the later version because this later version is more compatible with
	Windows 3.0.
	
	PCSA (now called Pathworks) is DEC's client software loosely based on the LAN
	Manager redirector that allows DOS and OS/2 machines to access DECnet. DECnet is
	DEC's enterprise network that includes SNA connectivity and integration of
	Macintosh machines (also a Pathworks product; although no Microsoft software is
	involved.)
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.00a 3.0 3.0a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
