---
layout: page
title: "Q248033: Typical Causes and Resolution of the &quot;HTTP 404 - File Not Found&quot;"
permalink: /kb/248/Q248033/
---

## Q248033: Typical Causes and Resolution of the &quot;HTTP 404 - File Not Found&quot;

	Article: Q248033
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp404 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	NOTE: This article is written for Internet Information Services (IIS) administrators. If you are not an IIS administrator, but you want to understand what this error message means when you see it in your Web browser, please see the following Knowledge Base article instead: 
	
	  Q264284 What to Do When You Receive 'The Page Cannot be Found' Error Message
	  in Your Browser
	
	SYMPTOMS
	========
	
	When a Web page is requested, the following error message is displayed at the
	top of the Web browser:
	
	  The page cannot be found
	  The page you are looking for might have been removed, had its name changed, or
	  is temporarily unavailable.
	
	The following error message is also displayed further down on the Web page:
	
	  HTTP 404 - File not found
	  Internet Information Services
	
	CAUSE
	=====
	
	The Web server returns the "HTTP 404 - File not found" error message when it
	cannot retrieve the page that was requested.
	
	The following are some common causes of this error message:
	
	- The requested file has been renamed.
	- The requested file has been moved to another location and/or deleted.
	- The requested file is temporarily unavailable due to maintenance, upgrades,
	  or other unknown causes.
	- The requested file does not exist.
	
	RESOLUTION
	==========
	
	To resolve this problem, verify that the file requested in the browser's URL
	exists on the IIS computer and that it is in the correct location.
	
	Use the IIS Microsoft Management Console (MMC) snap-in to determine where the
	file requested should exist in the IIS computer's file system.
	
	This is particularly important if the Web site uses a virtual directory (VDIR),
	which is a directory that is not contained in the home directory of the Web
	site, but appears to client browser as though it does.
	
	For example, assume that the URL that caused the 404 error is
	http://Microsoft.Com/Test/File1.htm, and the IIS snap-in shows that for
	Microsoft.Com Web site, the /Test/ directory is actually a virtual directory
	that maps to the location of c:\Information on the IIS computer. This means that
	you need to verify that the File1.htm file is located in the c:\Information
	directory (and that the file name is spelled correctly).
	For additional information about other, less common causes of this error message,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q247714 Using PUT Command for a Long File Name Causes 'HTTP 404 - File Not
	  Found' Error
	
	  Q221553 Setting File Attributes on Web Content Causes 404 - File Not Found
	  Error
	
	  Q216803 IIS Hidden Static Files Return HTTP 404 or Access Denied Errors
	
	MORE INFORMATION
	================
	
	For more information about VDIRs, see the "About Web Site Management" topic in
	the IIS 5.0 documentation at the following location:
	
	  Administration\Web Site Management\About Web Site Management
	
	NOTE: If you have the IIS 5.0 documentation installed on your local computer, you
	can use the following URL to locate this topic:
	
	  http://localhost/iishelp/iis/htm/core/iihtmat.htm#virtualdirectories
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: IIS 5 broken link ie Internet Explorer Netscape Navigator Opera Mosaic page not found wkz
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp404 kbProd2Web 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200 kbiis100
	Version           : winnt:1.0,2.0,3.0,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
