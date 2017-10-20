---
layout: page
title: "Q139595: DDM x'2124' Error When Selecting ODBC Data Source"
permalink: /kb/139/Q139595/
---

## Q139595: DDM x'2124' Error When Selecting ODBC Data Source

{% raw %}

	Article: Q139595
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbnetwork kbsetup
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following error message appears when you select a data source with
	Starware's StarSQL ODBC/DRDA driver that ships with SNA Server versions 2.11 and
	3.0:
	
	  Distributed Data Management (DDM) parameter value X'2124' not supported.
	
	MORE INFORMATION
	================
	
	DDM error '2124' is a result of an incompatibility between Visual C++ and DB2 on
	the Mainframe. StarSQL is programmed using Visual C++ causing the problem above.
	The problem occurs only when using Windows NT 3.5 and later, and accessing
	tables on a mainframe (DB2/MVS).
	
	To mask this error message, go to the data source in question from the registry
	and add the line IsolationLevel=2:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_CURRENT_USER subtree, go to the following key:
	
	  \Software\ODBC\ODBC.INI
	
	3. Select the data source in question.
	
	4. On the Edit menu click Add Value.
	
	5. Add the following:
	
	  Value: IsolationLevel
	  Data Type: REG_SZ
	  String: 2
	
	6. Click OK.
	
	Try your connection again. It should not result in the DDM x '2124' message.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbnetwork kbsetup 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,3.0
	
	=============================================================================
	

{% endraw %}
