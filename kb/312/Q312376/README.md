---
layout: page
title: "Q312376: HOW TO:Configure URLScan to Allow Requests with a Null Extension"
permalink: /kb/312/Q312376/
---

## Q312376: HOW TO:Configure URLScan to Allow Requests with a Null Extension

{% raw %}

	Article: Q312376
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 09-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Introduction
	- Modify the Default URLScan Configuration File
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to configure URLScan to allow null
	extension requests with Internet Information Services (IIS).
	
	Introduction
	------------
	
	URLScan is an Internet Server Application Programming Interface (ISAPI) filter
	that screens and monitors HTTP requests for IIS. URLScan is used to reduce the
	exposure of IIS 4.0, IIS 5.0, and IIS 5.1 to potential Internet attacks.
	
	URLScan protects a Web server from attacks by filtering and rejecting HTTP
	requests for selected IIS service applications. The default Urlscan.ini file is
	configured to accept only static HTML files, including graphic files, and to
	reject the following types of requests:
	
	- Common Gateway Interface (CGI) .exe pages
	
	- World Wide Web Distributed Authoring and Versioning (WebDAV)
	
	- FrontPage Server Extensions
	
	- Index Server
	
	- Internet printing
	
	- Server-side includes
	
	If you have URLScan with version number 6.0.3574.0, you can configure URLScan to
	allow incoming URL requests with the null extension.
	
	Modify the Default URLScan Configuration File
	---------------------------------------------
	
	To configure URLScan when it is installed on the IIS Web server, follow these
	steps:
	
	1. Download the IIS Lockdown tool from the following Microsoft Web site and then
	  save it to a local directory:
	
	  http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33961
	
	2. Unzip the IISlock.exe file and then unzip the Urlscan.exe file. The Urlscan
	  folder is created.
	
	3. Paste the Urlscan folder in the %Windir%\System32\Inetsrv directory.
	  Double-click the Urlscan folder under Inetsrv, and then open Urlscan.ini in
	  Notepad.
	
	4. In the Urlscan.ini file, be sure to enable UseAllowExtensions, as follows:
	
	  [Option]
	  UseAllowExtensions=1; if 1, use [AllowExtensions] section, else
	
	5. Urlscan allows you to specify a null extension in the [AllowExtensions]
	  section. To do this, add a period (.) in the [AllowExtensions] section, as
	  follows:
	
	  [AllowExtensions]
	  .
	  ;
	  ; Extensions listed here are commonly used on a typical IIS server.
	  ;
	  ; Note that these entries are effective if "UseAllowExtensions=1"
	  ; is set in the [Option] section above.
	  ;
	  .asp
	  .htm
	  .html
	  .txt
	  .jpg
	  .jpeg
	  .gif
	
	6. On the Start menu, point to Programs, point to Administrative Tools, and then
	  click Internet Services Manager, or open the custom Microsoft Management
	  Console (MMC) that contains the IIS snap-in.
	
	7. In the IIS MMC, expand the server computer name. Right-click the computer
	  name and then click Properties. Click WWW Service and then click Edit.
	
	8. On the ISAPI filters tab, click Add. Type "urlscan" (without the quotation
	  marks) as the file name. In the Executable text box, click Browse, and then
	  select urlscan.dll from the %Windir%\System32\Inetsrv\Urlscan directory.
	
	9. At an MS-DOS command prompt, run "Net stop iisadmin" (without the quotation
	  marks), and then run "Net start W3SVC" (without the quotation marks) to
	  restart IIS Web services. Verify that Urlscan.dll is running without
	  problems, and then move the Urlscan.dll ISAPI filter to the top position in
	  the filter list.
	
	REFERENCES
	==========
	
	For additional information about how to install and configure the URLSCAN
	utility, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q307608 INFO: Availability of URLScan Security Tool
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
