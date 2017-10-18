---
layout: page
title: "Q221872: How to Use Metainfo.asp"
permalink: kb/221/Q221872/
---

## Q221872: How to Use Metainfo.asp

	Article: Q221872
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbiis400 kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Metainfo.asp is an ASP script that retrieves data from the metabase. This can be
	useful in troubleshooting server configuration issues. Note that Metainfo.asp
	only works on Microsoft Internet Information Server (IIS) versions 4.0 and
	later.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Download Metainfo.exe now
	  (http://download.microsoft.com/download/iis40/Utility/4.0/NT4/EN-US/Metainfo.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Note: This file must be processed by Asp.dll, so it must be browsed as you would
	any file in a Web site.
	
	Installing Metainfo.asp
	-----------------------
	
	1. Downloaded and run the following file:
	
	  Metainfo.exe
	  (http://support.microsoft.com/download/support/mslfiles/Metainfo.exe)
	
	2. When you are prompted for the location to place the extracted files, provide
	  a directory in your Web content area that is configured to allow ASP scripts
	  to run. Metainfo.asp will be saved here.
	
	3. After Metainfo.exe exits, in Windows NT Explorer, browse to the directory
	  where you saved Metainfo.asp, and open the properties for Metainfo.asp. On
	  the Security tab, click Permissions and grant yourself and the local
	  administrators group full control.
	
	Using Metainfo.asp
	------------------
	
	1. To use Metainfo.asp, you must have administrative access to the Web server.
	
	2. Open your Web browser, and browse to
	  http://<your_server_name>/<path>/Metainfo.asp. Trying to access
	  this file through Windows Explorer (for example, as
	  C:\inetpub\wwwroot\Metainfo.asp) will not work. It must be accessed through a
	  URL.
	
	3. After a few seconds, the server will return an HTML page that contains your
	  configuration information. You can save this page from your browser for
	  future reference.
	
	The techniques used by Metainfo.asp are documented in the IIS 4.0 online product
	documentation under Microsoft Internet Information Server/Programmers
	Reference/IIS administration.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q196074 How to Store the Authenticated User Name in a Session Variable
	
	  Q219271 How to Add the Immediate-If Function to an ASP Page
	
	Additional query words:
	
	======================================================================
	Keywords          : kbiis400 kbgraphxlinkcritical 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
