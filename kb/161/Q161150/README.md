---
layout: page
title: "Q161150: FP97: Microsoft Personal Web Server vs. FP Personal Web Server"
permalink: /kb/161/Q161150/
---

## Q161150: FP97: Microsoft Personal Web Server vs. FP Personal Web Server

{% raw %}

	Article: Q161150
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft  version of this article, see Q194355.
	
	SUMMARY
	=======
	
	This article describes the differences between the FrontPage Personal Web Server
	and the Microsoft Personal Web Server.
	
	NOTE: Both Web servers are designed for low volume personal or intranet use.
	Neither is recommended as a commercial or corporate Web server. The Microsoft
	Personal Web Server offers features that programmers need to use in order to
	create Internet Server Application Programming Interface (ISAPI) programs or to
	access databases using Internet Database Connector (IDC) technology.
	
	MORE INFORMATION
	================
	
	FrontPage Personal Web Server
	-----------------------------
	
	
	The FrontPage Personal Web Server is the personal Web server that ships with
	FrontPage 1.0 and FrontPage 1.1. It is a direct descendant of NCSA 1.3, ported
	from UNIX to Microsoft Windows. It supports only standard input/output Common
	Gateway Interface (CGI) and the FrontPage Server Extensions. It is a Hypertext
	Transport Protocol (HTTP) server only. It is configurable through the
	manipulation of text files in the "conf" subdirectory of the server installation
	directory.
	
	Microsoft Personal Web Server
	-----------------------------
	
	The Microsoft Personal Web Server includes a Hypertext Transport Protocol (HTTP)
	and a File Transfer Protocol (FTP) server. The Microsoft Personal Web Server is
	fully integrated into the Windows 95 taskbar and Control Panel, which allows you
	to start and stop HTTP and FTP services, to administer the server, or to change
	general options.
	
	The Microsoft Personal Web Server includes an HTML-based administration utility
	that also supports full remote administration from a Web browser. It supports
	both user-level and local security. Users can set up the Microsoft Personal Web
	Server to support Windows NT Challenge/Response (NTLM) encrypted-password
	transmission. The Microsoft Personal Web Server's support for NTLM allows remote
	FrontPage authors and administrators to be validated by their network logon
	username and password within the context of a Windows NT network, bypassing the
	need to re-enter this information when authoring. The Microsoft Personal Web
	Server disables security when authoring locally so you will not be prompted for
	your name and password as long as you are running FrontPage from the same
	computer where the Microsoft Personal Web Server is installed.
	
	Microsoft Personal Web Server fully supports existing standards such as CGI and
	includes the open Internet Server API (ISAPI) extension to the Win32 API which
	is up to five times faster than CGI-based applications. Microsoft Personal Web
	Server also supports simple database access through the Internet Database
	Connector (IDC).
	
	Additional query words: 97 fppws mspws FrontPage Personal Web Server
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
