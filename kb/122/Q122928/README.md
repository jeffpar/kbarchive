---
layout: page
title: "Q122928: Description of the WINSOCK.DLL File"
permalink: /kb/122/Q122928/
---

## Q122928: Description of the WINSOCK.DLL File

{% raw %}

	Article: Q122928
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbnetwork kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the purpose of the WINSOCK.DLL file and how to obtain it.
	
	MORE INFORMATION
	================
	
	What Is WINSOCK.DLL?
	--------------------
	
	WINSOCK.DLL is a dynamic-link library that provides a common application
	programming interface (API) for developers of network applications that use the
	Transmission Control Protocol/Internet Protocol (TCP/IP) stack.
	
	This means that a programmer who develops a Windows-based TCP/IP application,
	such as an FTP or Telenet client, can write one program that works with any
	TCP/IP protocol stack that provides Windows Socket Services (WINSOCK.DLL).
	
	Other applications that depend on a Windows Socket provider include Eudora (a
	mail package) and Mosaic (a browser for the Internet World Wide Web).
	
	Where Can I Get WINSOCK.DLL?
	----------------------------
	
	WINSOCK.DLL is shipped with TCP/IP network protocol stacks that are Windows
	Socket compliant. A WINSOCK.DLL file developed for one implementation of TCP/IP
	may not necessarily work with another TCP/IP stack.
	
	Microsoft includes a WINSOCK.DLL file with its TCP/IP stacks for Windows for
	Workgroups and Windows NT Workstation and Server.
	
	Where Can I Get More Information about WINSOCK.DLL?
	---------------------------------------------------
	
	Specifications for the Microsoft implementation of the Winsock standard are
	available on Microsoft's Internet server (ftp:\\microsoft.com).
	
	
	Additional query words: 3rdparty 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:
	
	=============================================================================
	

{% endraw %}
