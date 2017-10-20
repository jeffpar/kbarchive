---
layout: page
title: "Q188424: Multilayered Display Driver Produces Black Line in Word"
permalink: /kb/188/Q188424/
---

## Q188424: Multilayered Display Driver Produces Black Line in Word

{% raw %}

	Article: Q188424
	Product(s): Word 97 for Windows
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbdta kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using Microsoft Word, if you draw a line that extends from inside a
	header/footer to the body of the document, you will see a solid black line
	located at approximately 4.17 inches from the right edge of the page when text
	is typed beside the line. This is more likely to occur when the zoom is greater
	than 100 percent.
	
	
	CAUSE
	=====
	
	This behavior is caused by a problem in the Windows NT multilayered driver
	interface. NetMeeting calls this interface with its MNMDD driver to share
	applications and collaborate.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	You can work around this problem by not using the multilayered driver interface.
	Perform the following steps to disable the NetMeeting application sharing and
	collaboration:
	
	1. In Control Panel, double-click Devices.
	
	2. Click MNMDD, click Startup, and then click Disabled.
	
	3. Click OK, click Yes, and then click Close.
	
	4. Shut down and restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4 and Windows NT Server 4.0, Terminal Server Edition Service
	Pack 4.
	
	Additional query words: IPX SPX NDIS Token Ring IBMTRP multi-layered video thick box dark heavy blackline stripe rectangle boxes rectangles
	
	======================================================================
	Keywords          : kbdta kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbOSWinSearch kbOSWinNT400 kbOSWinNTSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
