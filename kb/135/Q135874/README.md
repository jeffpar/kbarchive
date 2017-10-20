---
layout: page
title: "Q135874: PRB: Exception Error When Using ODBC to SQL Server via TCP/IP"
permalink: /kb/135/Q135874/
---

## Q135874: PRB: Exception Error When Using ODBC to SQL Server via TCP/IP

{% raw %}

	Article: Q135874
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:1.30,2.5,3.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp600 kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	- Microsoft Win32s version 1.30 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a remote view to a SQL server using TCP/IP sockets installed with
	the SQL Server Client Software version 4.21a, the following occurs:
	
	- A Win32s error is displayed.
	
	  -or-
	
	- The product shuts down without any error message.
	
	This occurs with TCP/IP sockets or IPX/SPX. It does not happen with named pipes.
	
	CAUSE
	=====
	
	When Visual FoxPro connects to a data source and sends data, it uses a 4K packet
	size by default. This default packet size causes errors when using TCP/IP with
	SQL Server and ODBC. The ODBC default is usually 512 bytes.
	
	RESOLUTION
	==========
	
	To work around this behavior, modify the default packet size that Visual FoxPro
	uses. You can achieve this by creating a connection, changing the PacketSize
	property of the connection, and creating the remote view against the
	connection.
	
	The following procedure explains how to get a connection and modify its
	attributes:
	
	1. Open a database. To create a connection, click New and then Connection on the
	  File menu. This opens the Connection Designer.
	
	2. Set the attributes for the connection, and save it as myconnection.
	
	3. In the Command window, type:
	
	  
	
	        =DBSETPROP('Myconnection','connection','PacketSize',512)
	
	  This saves the PacketSize property in the database. If you want to modify the
	  packet size for the current session only, use the SQLSETPROP() function as
	  follows:
	
	  
	
	        =SQLSETPROP(0,'PacketSize',512)
	
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install TCP/IP Protocol.
	
	2. Install the SQL Server 4.21a Client Software. (This is necessary in order to
	  get the required dll - Dbmssoc3.dll.) Switch the Protocol from named pipes to
	  TCP/IP.
	
	3. In the Autoexec.bat add C:\SQL and C:\SQL\BIN to the path. This step is
	  necessary for the ODBC driver manager to find Dbmssoc3.dll. Without this
	  added to the path, you will receive this error message:
	
	  Driver unable to load communication module. Driver has not been correctly
	  installed.
	
	4. Reboot.
	
	5. Start Windows and go into the ODBC Driver Manager. Configure the driver.
	
	
	1. Start Visual FoxPro, and create a database. In the database, create a Remote
	  View based off FoxHole_tcp.
	
	2. Log in.
	
	
	REFERENCES
	==========
	
	A TCP/IP socket is an addressable point that consists of an IP address and a TCP
	or UPD port number. It provides applications access to TCP/IP protocols.
	
	A Named pipe is a communication API that provides a software connection between a
	client and a server.
	
	For more information about using TCP/IP named piped versus sockets, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q128985 Comparing SNA Client TCP/IP Named Piped vs Sockets
	
	
	Additional query words: VFoxWin TCPIP
	
	======================================================================
	Keywords          : kbvfp300 kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbWin32sSearch kbMDAC250 kbVFP300 kbVFP600
	Version           : WINDOWS:1.30,2.5,3.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
