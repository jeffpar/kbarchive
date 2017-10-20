---
layout: page
title: "Q197623: FP: How to Identify Your Web Server and IP Address"
permalink: /kb/197/Q197623/
---

## Q197623: FP: How to Identify Your Web Server and IP Address

{% raw %}

	Article: Q197623
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 25-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to identify the Internet Protocol (IP) address of
	your computer and the type of Web server that you are using to display your Web
	pages.
	
	MORE INFORMATION
	================
	
	Identify your IP Address
	------------------------
	
	To find out what your IP address is, use the method appropriate to your version
	of Windows.
	
	Microsoft Windows 95, Microsoft Windows 98, Microsoft Windows Millennium Edition (Me):
	
	1. Click Start and then click Run.
	
	2. In the Open box, type "Winipcfg.exe" (without the quotation marks) and then
	  click OK.
	
	Your IP address appears in the IP Address box.
	
	Microsoft Windows NT:
	
	1. Click Start, point to Programs, and then click Command Prompt.
	
	2. At the command prompt, type "ipconfig.exe" (without the quotation marks) and
	  then press ENTER.
	
	Your IP address appears.
	
	Microsoft Windows 2000:
	
	1. Click Start, point to Programs, point to Accessories, and then click Command
	  Prompt.
	
	2. At the command-prompt, type "ipconfig.exe" (without the quotation marks) and
	  then press ENTER.
	
	Your IP address appears.
	
	Microsoft Windows XP:
	
	1. Click Start, point to All Programs, point to Accessories, and then click
	  Command Prompt.
	
	2. At the command-prompt, type "ipconfig.exe" (without the quotation marks) and
	  then press ENTER.
	
	Your IP address appears.
	
	NOTE: Regardless of which operating system you are using, if you use dynamic IP
	addressing and you are not currently connected to either your network or the
	Internet, you may not see an address in the IP Address box, or it may be
	displayed as 0.0.0.0. In this case, you can still access the TCP/IP networking
	functionality by referring to the default local host by using either the Domain
	Name System (DNS) name of localhost or the default IP Address (127.0.0.1).
	
	Determine Your Web Server
	-------------------------
	
	To determine which Web server you are publishing your content on, follow these
	steps.
	
	NOTE: Before you follow this procedure, connect to the Internet and open your Web
	in FrontPage. You should have author permissions to the Web server.
	
	1. In FrontPage, click click Web Settings on the Tools menu.
	
	2. Click the General tab. The following information is listed:
	
	   - The IP Address or DNS name of the Web server.
	
	   - The version of the FrontPage Server Extensions.
	
	   - The type of Web server software running on the server.
	
	   - The IP Address of the computer running the FrontPage client software.
	
	   - The proxy server software (if any) being used to access the Internet.
	
	NOTE: If you do not have access to the Web server and you need to determine what
	type of Web server software is running on the server, you can probe the server
	with software from the following Netcraft site:
	
	  http://www.netcraft.com (http://www.netcraft.com)
	
	At this site, type the host name or IP address to find out what Web server is
	running at that site.
	
	Additional query words: 2000 2002 TCP/IP TCP IP ipconfig winipcfg address server TCPIP front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
