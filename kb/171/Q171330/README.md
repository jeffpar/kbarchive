---
layout: page
title: "Q171330: Explanation of Rtripinf.bat and Ipxinf.bat"
permalink: /kb/171/Q171330/
---

## Q171330: Explanation of Rtripinf.bat and Ipxinf.bat

	Article: Q171330
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses two batch files that are included in Microsoft Routing
	and Remote Access Service (RRAS) Update for Microsoft Windows NT 4.0. They are
	Rtripinf.bat and Ipxinf.bat and they are used to gather information for
	troubleshooting configuration problems with an RRAS router.
	
	MORE INFORMATION
	================
	
	Installing Routing and Remote Access Service Update for Microsoft Windows NT 4.0
	is a two-step process. Initially, you are prompted for a location of where to
	expand the installation files. The default location for these files is Program
	Files\Routing. In the Routing folder, there are two folders: Doc and Support.
	The Doc folder contains a .doc version of the Administrators Guide, as well as
	several SNMP MIB files. The Support folder contains three files and the Debug
	folder structure where you will find the debug symbols for Routing and Remote
	Access Service.
	
	For additional information on installing debug symbols, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q138258 Windows NT Debug Symbol Setup Information
	
	The three files in the Support folder are Ipxfix.txt, Rtripinf.bat, and
	Ipxinf.bat. Ipxfix.txt is the text of the following Knowledge Base article:
	
	  Q168578 Autostatic Route Updates Fail Over IPX
	
	Rtripinf.bat and Ipxinf.bat are batch files that generate detailed reports
	concerning the configuration of the system. To use them, simply run the batch
	files from a command prompt. The reports can be helpful when diagnosing problems
	on the router.
	
	Rtripinf.bat
	------------
	
	Rtripinf.bat generates a text file, Rtripinf.txt, with output from the following
	commands:
	
	  ipconfig /all
	  route print
	  routemon ip show interface
	  routemon ip show protocol
	  routemon ip show filter
	  routemon ip show route
	  routemon ip mib show ipforward
	
	Ipxinf.bat
	----------
	
	Ipxinf.bat generates a text file, Ipxinf.txt, with output from the following
	commands:
	
	  routemon ipx show interface
	  routemon ipx show nbinterface
	  routemon ipx show ripinterface
	  routemon ipx show sapinterface
	  routemon ipx show route
	  routemon ipx show service
	
	For information on the Routemon.exe command line options, refer to Appendix B of
	the Routing and Remote Access Administrators Guide.
	
	Additional query words: prodnt ntrouter
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : 4.0
	
	=============================================================================
	
