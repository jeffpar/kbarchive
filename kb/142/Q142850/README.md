---
layout: page
title: "Q142850: Administering IIS over the Internet"
permalink: /kb/142/Q142850/
---

## Q142850: Administering IIS over the Internet

{% raw %}

	Article: Q142850
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet Information Servers can be administered over the Internet if you make a
	simple configuration change.
	
	MORE INFORMATION
	================
	
	To connect to a Windows NT server running Internet Information Server, NetBIOS
	name resolution is required. The easiest way to set up name resolution between
	two machines is to create an LMHOSTS file.
	
	The LMHOSTS file is a local text file mapping IP addresses to the NetBIOS names
	of the remote servers with which you want to communicate over TCP/IP. Windows NT
	recognizes names instead of IP addresses for network requests and a name
	discovery process is used to correctly route network requests with TCP/IP.
	
	Once an LMHOSTS file is created, Windows NT, Windows 95 and Windows for
	Workgroups machines using TCP/IP are able to NET USE or share files and printers
	across the Internet.
	
	The following instructions are for creating an LMHOSTS file for Windows NT.
	
	How to Create an LMHOSTS File
	-----------------------------
	
	By default, the LMHOSTS file is located in the directory
	%SYSTEMROOT%\SYSTEM32\DRIVERS\ETC. For example:
	
	  C:\WINNT\SYSTEM32\DRIVERS\ETC
	
	1. Edit the LMHOSTS file with NOTEPAD, for example, and add the IP address and
	  machine name of the server(s) you want to connect to as shown below. The #PRE
	  is used to pre-load the entry into the name cache when the machine starts.
	  Type, for example:
	
	     xxx.54.94.97   webserver    #PRE
	
	  where xxx is any valid number for IP addresses.
	
	2. If there are several machines that you want to connect to, add their IP
	  address and names here as well.
	
	3. Save the file with the name LMHOSTS (with no extension) in the above
	  directory.
	
	4. If you have several machines that will be connecting to each other over the
	  Internet, just copy the LMHOSTS file to the same directory on those machines.
	
	5. Configure the Windows NT servers to use LMHOSTS for name lookup by running
	  Control Panel and choosing Network.
	
	6. Select TCP/IP Protocol and choose Configure, then choose Advanced.
	
	7. Under Windows Networking Parameters, check the Enable LMHOSTS Lookup box.
	
	8. Restart the server, and connect to a remote server.
	
	  If the connection is not established, you can test the connectivity by opening
	  a command window and typing "NET USE \\WEBSERVER\IPC$". If the error "Network
	  path was not found" appears, then the IP address for the remote machine in
	  the LMHOSTS file is incorrect. If the message Access Denied appears, check
	  the permissions for your account on the server you are trying to connect to.
	
	9. If you have administrator rights on the Internet Information Server, you can
	  administer the Internet Information Server services and also use the standard
	  Windows NT utilities such as Performance Monitor, REGEDT32, and User Manager
	  and set their focus on the remote server.
	
	Other name resolution methods can be used to connect to networked machines across
	the Internet. For more information, query the Microsoft Knowledge Base on "name
	and resolution and wins" or "name and resolution and DNS".
	
	Additional query words: prodiis1 administration remote iis
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
