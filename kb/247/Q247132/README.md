---
layout: page
title: "Q247132: HOW TO: Perform a Server-to-Server FTP Transfer by Using IIS"
permalink: /kb/247/Q247132/
---

## Q247132: HOW TO: Perform a Server-to-Server FTP Transfer by Using IIS

{% raw %}

	Article: Q247132
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 24-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- Server Configuration
	- Example
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to configure a computer that is running
	Internet Information Services (IIS) to allow server-to-server FTP transfers by
	modifying values in the system registry.
	
	NOTE: By default, these values are disabled to prevent malicious attacks against
	the file transfer protocol (FTP) service. Although details for configuring
	server-to-server transfers are listed in this article, Microsoft does not
	recommend modifying these registry keys on IIS-based FTP servers that are
	connected to the Internet.
	
	Requirements
	------------
	
	The following list outlines the recommended hardware, software, network
	infrastructure, and service packs that are required:
	
	- Two computers that are running the IIS FTP Service, with the configured
	  changes that are described in the "Server Configuration" section.
	- A third computer with the command-line FTP that is included with Microsoft
	  Windows 95, Microsoft Windows 98, Microsoft Windows Millennium Edition (Me),
	  Microsoft Windows NT, and Microsoft Windows 2000, or another FTP client that
	  supports issuing literal FTP commands.
	
	Server Configuration
	--------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	IIS 5.0:
	
	1. Set the following value in the registry on both FTP servers to allow
	  server-to-server FTP transfers when you issue commands from a client that is
	  not located on either of the two FTP servers:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSFTPSVC\Parameters\EnablePortAttack
	  = 1
	
	2. Set the following value in the registry on the server that will issue the
	  literal port command (Client1 in the example):
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSFTPSVC\Parameters\EnablePASVTheft
	  = 1
	
	NOTE: By default, this value does not exist in the registry, and it requires
	Windows 2000 Service Pack 1 (SP1) or later to be recognized.
	
	IIS 4.0:
	
	1. Set the following value in the registry on the server that will issue the
	  literal port command (Client1 in the example) to allow server-to-server FTP
	  transfers when you issue commands from a client that is not located on either
	  of the two FTP servers:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSFTPSVC\Parameters\EnablePortAttack
	  = 1
	
	2. If you are using IIS 4.0 computers that are running Windows NT 4.0 Service
	  Pack 6a or earlier, install the fix that is described in the following
	  Microsoft Knowledge Base article to allow the EnablePortAttack registry key
	  to function properly:
	
	  Q246173 FTP Server Does Not Allow FTP Server-to-Server Connection
	
	Example
	-------
	
	In typical client/server FTP transfers, the user is only responsible for sending
	"friendly" commands to the server; the client responds automatically. When a
	server-to-server FTP transfer is performed, another server is the client.
	Therefore, the user is responsible for sending all FTP commands to both servers
	(in RFC959 format, these are preceded by the "literal" keyword).
	
	To transfer a binary file (named myFile.xls) from Server1 (IP address:
	192.168.0.10) to Server2 (IP address: 192.168.1.20) by using the command-line
	FTP client on Workstation1, follow these steps:
	
	NOTE: You must have Write permissions enabled on Server2 for this example to
	work.
	
	1. Connect to Server1 by using a command-line FTP client. (This connection will
	  be referred to as Client1).
	
	2. Connect to Server2 by using a command-line FTP client. (This connection will
	  be referred to as Client2).
	
	3. Issue the following command in Client2:
	
	  literal pasv
	
	  The response is as follows:
	
	  227 Entering Passive Mode (192,168,1,20,15,61)
	
	  Note that 15,61 represents the low and high order bytes of the port number
	  (port 3901 in this case), which is randomly assigned with each FTP
	  connection. As a result, the last two numbers of this string are different.
	
	4. Issue the following command in Client1:
	
	  literal port 192,168,1,20,15,61
	
	  The response is as follows:
	
	  200 Port Command Successful
	
	  Use the IP and port string that is returned in step 3.
	
	5. Issue the following command in both Client1 and Client2:
	
	  literal type i
	
	  The response is as follows:
	
	  200 Type set to I
	
	6. Issue the following command in Client1:
	
	  literal retr myFile.xls
	
	  The response is as follows:
	
	  125 Data Connection already open; Transfer Starting
	
	7. Issue the following command in Client2:
	
	  literal stor myFile.xls
	
	  The response is as follows:
	
	  Opening BINARY mode data connection for myFile.xls
	
	8. Continue to issue the following command on Client2 until you receive a 211
	  "No data connection" response message:
	
	  literal stat
	
	  This 211 response message is several lines long and indicates that the
	  transfer is no longer in progress.
	
	To transfer files from Server2 to Server1, issue the literal retr command from
	Client1 and the literal stor command from Client2.
	
	REFERENCES
	==========
	
	For additional information about the FTP Bounce attack, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q185378 IIS 4.0: FTP Bounce Attack and CERT Advisory CA-97.27
	
	For additional information about the registry keys that are listed in this
	article, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q260934 IIS Answers PASV Commands with Port Numbers in Sequential Order
	
	For additional information about how to keep IIS secure, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q282060 Resources for Securing Internet Information Services
	
	For additional information about the FTP service that is included with IIS, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q283679 Information About the IIS File Transmission Protocol (FTP) Service
	
	For more information about port, pasv, stor, retr, stat, and other literal FTP
	commands, visit the following World Wide Web Consortium (W3C) Web site:
	
	  RFC 959 - FILE TRANSFER PROTOCOL (FTP)
	  http://www.w3.org/Protocols/rfc959
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
