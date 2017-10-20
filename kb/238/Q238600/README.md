---
layout: page
title: "Q238600: Multiple Connection Requests Promote Denial of Service Attack"
permalink: /kb/238/Q238600/
---

## Q238600: Multiple Connection Requests Promote Denial of Service Attack

{% raw %}

	Article: Q238600
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a request to open a new terminal connection is received by a Terminal
	Server computer, the server undertakes a resource-intensive series of operations
	to prepare for the connection. The server performs these operations before
	authenticating the request, thereby allow an attacker to mount a denial of
	service attack by levying a large number of connection requests and consuming
	all memory on the Terminal server.
	
	This vulnerability could be exploited remotely if connection requests are not
	filtered. In extreme cases, the server could crash in the face of such an
	attack; in other cases, normal processing would return when the attack ceased.
	The patch works by causing the server to require authentication before
	processing the connection request.
	
	CAUSE
	=====
	
	This problem occurs because during the connection setup, there is no control
	over CPU resource usage. Simultaneous multiple connection requests can prevent
	the server from responding to other connection requests.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time     Size      File name     Platform
	  ----------------------------------------------------
	  07/22/99   03:53p   134,928   Termsrv.exe   x86
	  07/22/99   03:58p   242,448   Termsrv.exe   Alpha
	
	This hotfix has been posted to the following Internet location as Tsememfxi.exe
	(x86) and Tsememfxa.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40tse/hotfixes-postSP4/Flood-fix/
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, you can filter Transmission Control Protocol (TCP)
	packets. Terminal Server monitors connection requests on port 3389. If you
	create a filter that allows only specific TCP/IP addresses or networks to gain
	access to the Terminal server, it may be possible to prevent this condition from
	occurring.
	
	For additional information about TCP filters, click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q169548 Using Proxy Server with Routing and Remote Access
	
	  Q166371 NT 4.0 Does Not Filter Ports Destined for Remote Segments
	
	  Q187628 Using Telnet to Test Port 3389 Functionality
	
	  Q191146 How to Create a DMZ Network with Proxy Server 2.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition.
	
	MORE INFORMATION
	================
	
	For more information concerning Windows NT and security issues, please visit the
	following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
