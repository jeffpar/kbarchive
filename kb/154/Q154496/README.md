---
layout: page
title: "Q154496: ODBC Error After Multiple Connections and Disconnections"
permalink: /kb/154/Q154496/
---

## Q154496: ODBC Error After Multiple Connections and Disconnections

{% raw %}

	Article: Q154496
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbfile kbnetwork win95 kbgraphxlinkcriticalkbfixlist
	Last Modified: 15-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running ODBC applications using Microsoft ODBC drivers, you may
	receive the following error message:
	
	  General error
	  Failed to get the expression service
	
	CAUSE
	=====
	
	This error can occur if ODBC applications connect to and disconnect from the
	server repeatedly (over 50-60 times).
	
	An example of such an application may be an Internet Web server applica- tion
	that is publishing ODBC data. For each Web-page-based query, the Web server may
	be opening a connection to the ODBC data source, processing the query, and then
	disconnecting from the data source.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. An update
	to address this problem is now available, but is not fully regression tested and
	should be applied only to computers experiencing this specific problem. Unless
	you are severely impacted by this specific problem, Microsoft does not recommend
	implementing this update at this time.
	
	This issue is resolved by the following updated file for Windows 95:
	
	  Rpcrt4.dll version 4.00.953 (dated 7/23/96) and later
	
	To install this update, follow these steps:
	
	1. Download the Rpcrtupd.exe file from the Microsoft Download Center to an empty
	  folder.
	
	2. In My Computer or Windows Explorer, double-click the Rpcrtupd.exe file you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Rpcrtupd.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The following files are installed by Rpcrtupd.exe:
	
	  File name     Version    Date/Time        Size     Destination folder
	  ----------------------------------------------------------------------
	  Rpcrt4.dll    4.00.953   7/23/96 9:53a    202,752  Windows\System
	
	
	This issue is resolved in Microsoft Windows 98.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbfile kbnetwork win95 kbgraphxlinkcritical kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
