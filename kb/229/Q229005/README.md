---
layout: page
title: "Q229005: How to Connect to a Web or FTP Site Using Non-Default Port"
permalink: /kb/229/Q229005/
---

## Q229005: How to Connect to a Web or FTP Site Using Non-Default Port

	Article: Q229005
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, Web sites use TCP port 80, and FTP sites use port 21. However, other
	ports may be assigned to a Web or FTP site.
	
	To specify a non-default TCP port when connecting through a Web browser, add a
	colon ( : ) and then the port number (for example
	"http://<ComputerName>:<PortNumber>" (without the quotation marks))
	to the end of the URL.
	
	To specify the TCP using the Windows NT FTP command line utility, type "ftp"
	(without the quotation marks) to start the FTP utility, and then use the "open"
	command, followed by a space, and then the port number (for example "open
	<ComputerName> <PortNumber>" (without the quotation marks)).
	
	MORE INFORMATION
	================
	
	Specifying a Port When Using a Browser
	--------------------------------------
	
	If a Web site on the local computer is using the non-default port of 81, type the
	following in the Address text box to open it in a browser such as Internet
	Explorer:
	
	  http://localhost:81/
	
	Similarly, to open an FTP site that uses the non-default port of 22 from the
	browser, perform the following session at a command prompt:
	
	  ftp://localhost:22/
	
	Specifying a Port When Using the FTP Utility
	--------------------------------------------
	
	To open an FTP site that uses the non-default port 22, using the FTP utility,
	type the following at a command prompt:
	
	  C:\>ftp
	  ftp> open localhost 22
	
	Errors Caused by Attempting to Connect with the Wrong Port Number
	-----------------------------------------------------------------
	
	Below are the error messages displayed when you attempting to connect to a Web or
	FTP site using the incorrect port number.
	
	HTTP Using Internet Explorer 4.0 and 5.0:
	
	  Internet Explorer cannot open the Internet site http://<ComputerName>.
	  A connection with the server could not be established.
	
	FTP Using Internet Explorer 4.0 and 5.0:
	
	  Internet Explorer cannot open the Internet site ftp://<ComputerName>. A
	  connection with the server could not be established.
	
	FTP Command Line Utility:
	
	  ftp: connect:Connection refused
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: www howto kbhowto ie akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
