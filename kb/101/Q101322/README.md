---
layout: page
title: "Q101322: Peer Web Services 3.0 Inbound HTTP Connections Limit"
permalink: kb/101/Q101322/
---

## Q101322: Peer Web Services 3.0 Inbound HTTP Connections Limit

	Article: Q101322
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP2
	Operating System(s): 
	Keyword(s): kbenv kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To maintain consistency with the Windows NT Workstation licensing policy,
	Microsoft implemented a hard-coded inbound HTTP connection limit with the
	introduction of Peer Web Services (PWS) 3.0 for Windows NT Workstation.
	
	Windows NT Workstation 4.0 is designed, priced, supported, and licensed for
	access from up to 10 inbound computers. Therefore, the default limit to the
	number of inbound HTTP connections in PWS 3.0 is 10. When the eleventh
	connection to a Windows NT Workstation peer web service is attempted, the
	connection is refused.
	
	Some Web browsers, for example Internet Explorer 3.0, create as many as four HTTP
	connections when retrieving pages with multiple inline images. To accommodate
	these browsers and pages, it is possible to set the connection limit as high as
	40.
	
	The Windows NT Workstation 4.0 End User License Agreement (EULA) contains the
	following provision:
	
	  You may install the software product on a single computer for use as
	  interactive workstation software, but not as server software. However, you
	  may permit a maximum of ten (10) computers to connect to the Workstation
	  Computer to access and use services of the software product, such as file and
	  print and peer Web services.
	
	MORE INFORMATION
	================
	
	Questions and Answers
	---------------------
	
	Q. How does Microsoft implement this 10 connection limit?
	
	A. The limitation is in Peer Web Services (PWS) 3.0. It is not implemented in
	either the operating system or the TCP/IP protocol and does not affect other web
	servers running on Windows NT Workstation.
	
	Q. How did Microsoft choose the maximum value of 40 connections?
	
	A. Each browser typically uses four connections when accessing a web page. To
	accommodate up to 10 computers connecting to the Windows NT Workstation PWS,
	Microsoft multiplied the four connections by 10 computers, hence the maximum
	value of 40.
	
	Q. How can I increase the default limit from 10 to a number less than 40?
	
	A. You can use Internet Service Manager to change the value of connections. Go to
	the Properties of the Service and then change the Maximum Connections. You
	cannot set more than 40 connections as the maximum value.
	
	Q. How do I know if my machine goes above the 10-connection limit? What happens
	if I attempt to use more than 10 connections?
	
	A. The connection that exceeds the set limit receives the following message:
	
	  Too many users.
	  There are too many connected users. Please try again later.
	
	The best way to tell if a site is hitting the connection limit is to use
	Performance Monitor to monitor the number of connections to the HTTP service
	(object HTTP Service, counter Current Connections.)
	
	Q. Does this only apply to the WWW Service, or does it apply to FTP and Gopher
	services, too?
	
	A. The inbound limitation applies to all three services of PWS.
	
	Q. PWS 3.0 is included with Windows NT 4.0 Service Pack 2. If I install Service
	Pack 2 do I automatically upgrade PWS 2.0 (that ships with Windows NT 4.0) to
	PWS 3.0?
	
	A. Yes. The upgrade to Service Pack 2 includes PWS 3.0 and happens
	automatically.
	
	Q. Can I go back to PWS 2.0?
	
	A. To return to PWS 2.0, uninstall PWS 3.0 and then reinstall PWS 2.0 from your
	original Windows NT 4.0 CD-ROM.
	
	Additional query words: prodnt sp2
	
	======================================================================
	Keywords          : kbenv kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp2
	Version           : :4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
