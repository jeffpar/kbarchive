---
layout: page
title: "Q129986: Error Using Microsoft Network Client SOCKETS.EXE"
permalink: /kb/129/Q129986/
---

## Q129986: Error Using Microsoft Network Client SOCKETS.EXE

{% raw %}

	Article: Q129986
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	If the Microsoft Network Client is configured to use the TCP/IP protocol,
	and you try to start the SOCKETS.EXE program, the following error message
	may appear:
	
	  SOCKETS0101: The value for keyword HOSTNAME not found in TCPUTILS.INI file by
	  SOCKETS. (not loaded)
	
	This message appears because SOCKETS is looking for a host name in the
	TCPUTILS.INI file. To run SOCKETS, manually enter a host name.
	
	In the TCPUTILS.INI file, add the following line to the [tcpglobal]
	section:
	
	  " hostname=<hostname> " (without the quotation marks)
	
	where <hostname> is a valid host name (but any value will allow SOCKETS.EXE
	to start).
	
	Additional query words: workgroup
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
