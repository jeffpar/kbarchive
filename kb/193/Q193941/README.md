---
layout: page
title: "Q193941: INFO: Location of Oracle's Public FTP Site"
permalink: /kb/193/Q193941/
---

## Q193941: INFO: Location of Oracle's Public FTP Site

{% raw %}

	Article: Q193941
	Product(s): Open Database Connectivity (ODBC)
	Version(s): Build 2.573.2927
	Operating System(s): 
	Keyword(s): kbOracle kbDSupport
	Last Modified: 12-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5 Build 2.573.2927 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Oracle maintains a public FTP site where it posts, among other things, patches
	to the Oracle server products and the client component that ships with the
	server products. These patches are required for the proper functioning of
	several Microsoft products and technologies. For example, the Microsoft Oracle
	ODBC Driver, the Microsoft Oracle OLE DB Provider, Internet Information Server
	(IIS), Microsoft Transaction Server (MTS) and so forth.
	
	MORE INFORMATION
	================
	
	The public FTP site is located at the following address:
	
	  oracle-ftp.oracle.com
	
	The User ID and Password for this site follows:
	
	  User ID:     anonymous
	  Password:    <your e-mail address>
	
	The patches most relevant to users of Windows 95, Windows 98 and Windows NT are
	located in the following directory:
	
	  /server/wgt_tech/server/windowsNT
	
	Once in this directory, you can navigate to the appropriate sub-directory
	depending on what version of Oracle you are using, 7.3 or 8.0. The two sub-
	directories are:
	
	  /73patchsets
	  /80patchsets
	
	The third sub-directory is for patches to Oracle's network technology, either
	SQL*Net or Net8. These patches are in the following directory:
	
	  /network
	
	Accessing this FTP site from your Web browser may not work. If you experience
	problems you should try using a "traditional" FTP client or use the DOS Command
	prompt. Two Windows 95, Windows 98 and Windows NT clients that work well
	follow:
	
	- WS_FTP from Ipswitch, Inc located at http://www.ipswitch.com -and-
	
	- CuteFTP from GlobalSCAPE, Inc located at http://www.cuteftp.com
	
	Since Oracle rolls all bug fixes forward and they back-port bug fixes from one
	version (Oracle 8) to another (say Oracle 7.3), it is recommended that you use
	the latest patch available. This is especially true for the Oracle Server Client
	components. If you have any questions about installing these patches check with
	Oracle Support before you install them.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q191168 INFO: Failed to Enlist on Calling Object's Transaction
	
	  Q193893 INFO: Using Oracle with Microsoft Transaction Server and COM+
	
	Additional query words: oracle patches
	
	======================================================================
	Keywords          : kbOracle kbDSupport 
	Technology        : kbAudDeveloper kbODBCSearch kbODBCOracle25732927 kbODBCOracle250Search
	Version           : :Build 2.573.2927
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
