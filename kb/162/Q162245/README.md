---
layout: page
title: "Q162245: FP: IDC Queries Fail When Run From IIS 2.0, MSPWS 1.0 Servers"
permalink: /kb/162/Q162245/
---

## Q162245: FP: IDC Queries Fail When Run From IIS 2.0, MSPWS 1.0 Servers

	Article: Q162245
	Product(s): Word Front Page
	Version(s): ; WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): kbinterop kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194056.
	
	SYMPTOMS
	========
	
	When you issue a query from an Internet Information Server (IIS) version 2.0
	server using the Internet Database Connector (IDC) and an Access database using
	Open Database Connectivity (ODBC), the IIS or Microsoft Personal Web Server
	stops responding (hangs).
	
	On an IIS server, you may receive the following error message in the Dr. Watson
	log:
	
	  The server returned an invalid or unrecognized response.
	
	On the Microsoft Personal Web Server, you may receive an illegal operation and
	the program quits. If you click the Details button when you receive the illegal
	operation error, the following error appears:
	
	  INETSW95 caused an invalid page fault in module KERNEL32.DLL.
	
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade the Msjt3032.dll file to version 3.00.3213 or
	later.
	
	The following file is available for download from the Microsoft Download Center:
	
	  msjtwng.exe
	  (http://download.microsoft.com/download/access95/update/1/win98/EN-US/msjtwng.exe)
	
	The msjtwng.exe file contains the following files:
	
	      File         Version      Size     Date
	  ------------    ----------   ------    -------
	  Msjt3032.dll    3.000.5226   916 KB    4/26/99
	  Mstx3032.dll    3.000.4513   121 KB    9/13/98 
	  Mswng300.dll    3.00.4513    301 KB    2/11/99 
	  Msajetfs.dll    3.000.3011    32 KB    6/18/96    
	
	-and-
	
	  62317t.doc      License agreement for the above files
	  Readme.txt      Installation instructions for the update (This file)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	For additional information about this update, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q143163 ACC95: Problems Running Microsoft Jet 3.0 on Windows NT 4.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the Msjt3032.dll file that
	ships with Microsoft Jet version 3.0. This problem was corrected in version
	3.00.3213 of the Msjt3032.dll file.
	
	
	Additional query words: Msjtwng front page iis fpodbc
	
	======================================================================
	Keywords          : kbinterop kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : :; WINDOWS:1.0,1.1
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
