---
layout: page
title: "Q242060: Stop 0x0000000A Error in Tcpip.sys Caused by Ipr_Buffer Size"
permalink: /kb/242/Q242060/
---

## Q242060: Stop 0x0000000A Error in Tcpip.sys Caused by Ipr_Buffer Size

{% raw %}

	Article: Q242060
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork kbWinNT400PreSP7Fixkbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Transport Control Protocol/Internet Protocol (TCP/IP) stack calls the
	CopyRcvToBuffer() function upon receiving a packet, you may receive a Stop
	0x0000000A error message in the Tcpip.sys file on a blue screen.
	
	CAUSE
	=====
	
	This problem can occur on a Multiprocessor File Transfer Protocol (FTP) server
	because of an error adjusting the size of the Ipr_Buffer chain.
	
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
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  09/20/99  3:26pm               150,864 Tcpip.sys     i386
	
	  09/20/99  3:25pm               274,128 Tcpip.sys     Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words: crash dump hang 0xA multi processor mp
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork kbWinNT400PreSP7Fix kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
