---
layout: page
title: "Q307976: FP: Error When Using FrontPage with URLScan"
permalink: kb/307/Q307976/
---

## Q307976: FP: Error When Using FrontPage with URLScan

	Article: Q307976
	Product(s): Word Front Page
	Version(s): 1.0,6.0
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- FrontPage 2002 Server Extensions from Microsoft 
	- Microsoft FrontPage 2000 
	- FrontPage 2000 Server Extensions from Microsoft 
	- Microsoft Visual InterDev, versions 1.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the FrontPage client to connect to a Web site or to publish
	a Web site, you receive the following error message, and the Web site is not
	opened:
	
	  The Web server at <http://address> does not appear to have the
	  FrontPage server extensions installed.
	
	where <http://address> is a server having the following configuration:
	
	- The server is running Microsoft Internet Information Services (IIS).
	- The FrontPage Server Extensions are installed on the server.
	- The URLScan utility is installed.
	
	CAUSE
	=====
	
	When you install the URLScan utility, the Urlscan.ini file that lists default
	settings is installed. The default settings deny requests from FrontPage to
	access the server.
	
	RESOLUTION
	==========
	
	You can use the FrontPage Server Extensions if you edit the settings in the
	Urlscan.ini file. To do this, follow these steps:
	
	1. Locate the Urlscan.ini file in Windows Explorer. By default, this file is
	  created in the following folder:
	
	  <Drive>:\WINNT\System32\Inetsrv\urlscan
	
	  where <Drive> represents the drive letter of your hard disk.
	
	2. Create a copy of the file and name it Urlscan.old.
	
	3. In Notepad, open the original copy of the Urlscan.ini file.
	
	
	4. Locate the [Options] section. Change the AllowDotInPath=0 setting to
	  AllowDotInPath=1.
	
	5. Locate the [AllowVerbs] section. Change the ;OPTIONS verb to OPTIONS.
	  (Removing the semicolon uncomments the line.)
	
	  NOTE: If URLScan 2.1 is installed, you do not need to make this change. This
	  was corrected in URLScan 2.1. URLScan 2.1 is available at the following
	  Microsoft web site:
	
	  http://www.microsoft.com/security
	
	  If you have URLScan 2.0, you need to make this change. Version 2.0 is included
	  on the compact disc.
	
	6. Save the file to replace the original.
	
	7. Stop and restart IIS services.
	
	For additional information about how to restart IIS services, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q185382 How to Manually Stop or Start the Inetinfo Process
	
	  Q236166 Using NET STOP and NET START Commands to Force IIS Services to
	  Re-Read the Registry
	
	  Q202013 Internet Information Services 5.0 Command-Line Syntax for
	  Iisreset.exe
	
	8. Test the ability to connect with FrontPage.
	
	If you encounter further difficulties with other IIS functionality while URLScan
	is running, set EnableLogging=1 in the [Options] section of Urlscan.ini and then
	restart IIS. If any errors occur, check the last entries in the Urlscan.log file
	for information about what requests are being rejected.
	
	MORE INFORMATION
	================
	
	URLScan protects your server from attacks by turning off functionality that is
	not being used by the server. The default settings in the Urlscan.ini file,
	included in the downloadable file, assume that the server is serving only Active
	Server Pages (ASP) and static content, such as Hypertext Markup Language (HTML)
	pages and images. It also assumes that you are not using the following
	technologies:
	
	- CGI (.exe) executables
	- WebDAV
	- Index Server
	- Internet or HTTP-based printing
	- Server Side Includes (SSI)
	
	If you need to use any of these technologies, you will need to change the
	Urlscan.ini file accordingly.
	
	For additional information about installing and configuring URLScan, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q307608 INFO: Availability of URLScan Version 2.5 Security Tool
	
	  Q309394 HOW TO: Use URLScan with FrontPage 2000
	
	Other Settings That May Affect FrontPage:
	
	
	- Specifying an AlternateServerName prevents FrontPage from connecting or
	  publishing, even if it is configured to return the actual Web server name.
	
	- Setting RemoveServerHeader=1 also prevents FrontPage from connecting or
	  publishing.
	
	- For the CGI-based FrontPage Hit Counter Web component to function, you need
	  to enable the use of files with the .exe extension in the Urlscan.ini file.
	  Because this allows other CGI applications to execute as well, the
	  administrator should consider using an ISAPI or ASP-based hit counter. For
	  additional information about using an ASP-based hit counter with FrontPage,
	  click the article number below to view the article in the Microsoft Knowledge
	  Base:
	
	  Q309008 HOW TO: Use the ASP PageCounter Component in FrontPage 2000
	
	  To allow requests for files with the .exe extension, set one of the following
	  configurations:
	
	   - If you set UseAllowExtensions=0, then comment out or remove .exe from the
	     [DenyExtensions] section of the Urlscan.ini file.
	
	     -or-
	
	   - If you set UseAllowExtensions=1, then add .exe to the [AllowExtensions]
	     section of the Urlscan.ini file.
	
	- Setting AllowLateScanning=1 loads URLScan as a low priority filter. This
	  allows URLScan to be loaded below the FrontPage down-level compatability
	  filter, Fpexedll.dll.
	
	For additional information about the Fpexedll.dll filter and URLScan, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q189799 FP: Frequently Asked Questions About the Fpexedll.dll File
	
	  Q309394 HOW TO: Use URLScan with FrontPage 2000
	
	Additional query words: inf FPSE prb front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbVisIDsearch kbFrontPageSearch kbAudDeveloper kbFrontPage2002 kbFrontPageServXSearch kbZNotKeyword2 kbFrontPage2000Search kbFrontPage2002Search kbFrontPage2000ServX kbFrontPage2002ServX kbZNotKeyword5 kbVisID100 kbVisID600
	Version           : :1.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
