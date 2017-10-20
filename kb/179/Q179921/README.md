---
layout: page
title: "Q179921: Error -204 When Using the STARSQL32 Driver"
permalink: /kb/179/Q179921/
---

## Q179921: Error -204 When Using the STARSQL32 Driver

{% raw %}

	Article: Q179921
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears when you try to access a table on the AS/400
	using the StarSQL ODBC driver that ships with SNA Server:
	
	  "[Starquest] [StarSQL ODBC Driver] [DB2/400] object QSYS2.SYSKEYS type *table
	  not found [#-204]"
	
	CAUSE
	=====
	
	To connect to an AS/400 V3R1 system using the STARSQL32 ODBC driver, a package
	called BASE SUPPORT must be loaded on the AS/400. BASE SUPPORT provides several
	tables in the QSYS2 collection, including SYSKEYS, SYSCOLUMNS, SYSINDEXES, and
	so on, which are required for use with the STARSQL32 ODBC driver.
	
	RESOLUTION
	==========
	
	To resolve the problem, do the following:
	
	1. To check for BASE SUPPORT on the AS/400, log on as QSECOFR.
	
	2. From a command line, type
	
	  GO LICPGM
	
	  Then press ENTER.
	
	3. Select option 10 to view license programs. Look for BASE SUPPORT.
	
	4. Load BASE SUPPORT on the AS/400 from the OS media. Adding BASE SUPPORT
	  requires an initial program load (IPL) of the AS/400.
	
	MORE INFORMATION
	================
	
	This problem can arise on older AS/400s when they are upgraded from previous
	releases of OS/400 to V3R1. When upgrading, only the components that were
	installed with the previous version will be upgraded to V3R1. BASE SUPPORT was
	not required on previous versions of OS/400 to work with the StarSQL ODBC
	driver.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: database
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
