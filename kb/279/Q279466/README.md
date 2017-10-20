---
layout: page
title: "Q279466: HOW TO: Request a Web Page Through a Telnet Client"
permalink: /kb/279/Q279466/
---

## Q279466: HOW TO: Request a Web Page Through a Telnet Client

{% raw %}

	Article: Q279466
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 08-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Request a Web Page Through a Telnet Client
	   - Enable Local Echo
	
	- REFERENCES
	
	SUMMARY
	=======
	
	Occasionally, a Web browser is not available to test connectivity to a Web
	server. This step-by-step article describes a process that you can use to
	connect to a Web server and display the HTML contents of Web page by using a
	console or command-line based telnet application.
	
	Request a Web Page Through a Telnet Client
	------------------------------------------
	
	According to RFC 2616, the specification for the HTTP protocol, a properly
	formatted GET request from an HTTP client begins with the GET verb (note that
	the verb uses all capital letters) and ends with the ASCII characters carriage
	return (CR) followed by line feed (LF). This appears as the hexadecimal
	characters OD OA in the last two bytes of the GET request in a Network Monitor
	trace.
	
	For more information, visit the following RFC Web site:
	
	  RFC 2616
	  http://www.w3.org/Protocols/rfc2616/rfc2616.html
	
	To request the document that is located at
	http://ServerName/VirtualDirectory/WebPage.asp from a telnet client, type the
	following commands at the console or command prompt (press ENTER or RETURN after
	each line):
	
	  telnet ServerName 80
	  GET /VirtualDirectory/WebPage.asp
	
	After you type the second command, the HTML data in WebPage.asp is returned to
	the telnet client from the Web server.
	
	NOTE: This example assumes that the Web server is configured to use the default
	HTTP port (TCP 80). If the Web server is listening on a different port,
	substitute that port number in the first line of the example. Also, this example
	does not work properly over an HTTPS/SSL connection (TCP 443, by default),
	because the telnet client cannot negotiate the necessary encryption commands to
	establish the SSL session. Although an initial connection is possible over the
	HTTPS/SSL port, no data is returned when you issue a GET request.
	
	Enable Local Echo
	-----------------
	
	By default, the telnet client that is included with Microsoft Windows does not
	have the Local Echo option enabled, so the second command does not appear to be
	received by the server, although it is. To enable Local Echo, use one of the
	following methods after the first command:
	
	Microsoft Windows 95, Microsoft Windows 98, Microsoft Windows Millennium Edition (Me), or Microsoft Windows NT 4.0:
	
	1. On the Terminal menu, click Preferences.
	
	2. Click to select the Local Echo check box.
	
	Microsoft Windows 2000 and Microsoft Windows XP:
	
	1. Click Start, click Run, and then type "telnet.exe" (without the quotation
	  marks) to start the telnet program.
	
	2. Type the following command:
	
	For Windows 2000:
	
	  set local_echo
	
	For Windows XP:
	
	  set localecho
	
	3. Press the ENTER key one time on a blank line to quit the configuration and
	  return to the telnet session.
	
	Some telnet clients send only the carriage return (CR) character when you press
	ENTER or RETURN. If you are trying to connect from one of these clients, you
	must use a control-key combination to send the CRLF characters. In the Windows
	environment, hold down the ALT key, and then type the key sequence that
	corresponds to the appropriate character on the numeric keypad. To view the
	characters and corresponding numbers, see the following Microsoft Developer
	Network (MSDN) Web sites:
	
	  
	
	
	  Character Set 0-127
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/script56/html/vsmscANSITable.asp
	
	  Character Set 128-255
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/script56/html/vsmscANSITable2.asp
	
	After you type the last number, release the ALT key. In the case of the GET
	request that this article uses as an example, type the following command (note
	that the numbers are typed on the keypad):
	
	  GET /VirtualDirectory/WebPage.asp <ALT-key>0013<ALT-key>0010
	
	If you are using a telnet client that does not send CRLF when you press ENTER or
	RETURN, see the documentation for that computer system for information about how
	to send extended characters.
	
	REFERENCES
	==========
	
	For additional information about how to view network packets, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q148942 How to Capture Network Traffic with Network Monitor
	
	  Q294818 Frequently Asked Questions About Network Monitor
	
	For additional information about the TELNET protocol, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q231866 The TELNET Protocol
	
	  Q253918 Description of the Telnet Client in Windows 2000
	
	  Q323356 HOW TO: Turn On Telnet Server in the Windows .NET Server Family
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200 kbiis100 kbiis510
	Version           : :1.0,2.0,3.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
