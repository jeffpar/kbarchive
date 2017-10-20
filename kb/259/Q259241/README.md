---
layout: page
title: "Q259241: Nbtstat and Nbt Performance Counters May Not Work"
permalink: /kb/259/Q259241/
---

## Q259241: Nbtstat and Nbt Performance Counters May Not Work

{% raw %}

	Article: Q259241
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a large number of network interfaces, you may experience any
	of the following symptoms:
	
	- When you run Nbtstat.exe from a command prompt, nothing happens and the
	  command prompts returns.
	
	- When you are using Performance Monitor, the following error message is
	  generated frequently in the Application event log:
	
	  Event Type: Error
	  Event Source: perfctrs
	  Event Category: None
	  Event ID: 3101
	  Description: Unable to read IO control information from NBT device.
	
	CAUSE
	=====
	
	An internal buffer is used to read the NetBT bindings information from the
	registry. Problems can occur if the information in the registry exceeds the size
	of this buffer.
	
	This problem is likely to occur if there are more than 25 network interfaces
	bound to NetBT. For example, this problem might occur if you configure a Remote
	Access Service (RAS) server with 30 dial-out lines.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Windows NT 4.0 service pack that
	contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time     Size     File name     Platform
	  ---------------------------------------------------
	  5/24/2000  03:06am  19,728   Nbtstat.exe   Intel
	  5/24/2000  03:06am  44,304   Perfctrs.dll  Intel
	
	
	
	WORKAROUND
	==========
	
	Netbt.sys is a driver that is required for NetBIOS over TCP/IP connections. It
	is required for connections from and to the local computer only. Connections
	from other computers that pass though a local computer that is acting as a
	router work. Typically, this functionality is not required for all interfaces
	(for example, for connections from and to the Internet).
	
	To work around this problem, use any of the following methods:
	
	- Unbind Netbt from all interfaces that are not used for NetBIOS over TCP/IP
	  connections.
	
	- Reduce the number of interfaces until the problem does not occur.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
