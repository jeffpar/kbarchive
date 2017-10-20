---
layout: page
title: "Q166127: INFO: Visual FoxPro/Mac and Mac ODBC Drivers from InterSolv"
permalink: /kb/166/Q166127/
---

## Q166127: INFO: Visual FoxPro/Mac and Mac ODBC Drivers from InterSolv

{% raw %}

	Article: Q166127
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Currently Visual FoxPro for the Macintosh does not work with the ODBC Oracle
	drivers from Intersolv.
	
	MORE INFORMATION
	================
	
	Intersolv's 68 K Oracle driver is Macintosh-based, while the Oracle client
	software is PowerPC-based. Because of the system software requirement
	differences, a Visual FoxPro for the Macintosh 68 K Runtime Application either
	does not make a connection or locks up the 68 K machine.
	
	Intersolv is working on an Oracle ODBC driver for the PowerPC. When the driver is
	released, it should work with the PowerPC Oracle client software, and a Visual
	FoxPro application compiled for the PowerPC will be able to access a Oracle
	server via the Remote Connection features. At this time, the PowerMac version of
	Visual FoxPro for the Macintosh does not see Intersolv 68 K drivers.
	
	Contact Intersolv in the following ways:
	
	  http://www.intersolv.com/
	
	  -or-
	
	  9420 Key West Avenue
	  Rockville, Maryland 20850
	  Phone: (301) 838-5000, (800) 547-4000
	
	Oracle can be reached at the following Web site:
	
	  http://www.oracle.com/
	
	Oracle and Intersolv are vendors independent of Microsoft; we make no warranty,
	implied or otherwise, regarding their products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
