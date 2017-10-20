---
layout: page
title: "Q146106: Using IBMTOK.DOS on Fast Computers Results In Error 36"
permalink: /kb/146/Q146106/
---

## Q146106: Using IBMTOK.DOS on Fast Computers Results In Error 36

{% raw %}

	Article: Q146106
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you load a real-mode protocol, such as MS-DLC, TCP/IP or NetBEUI, on a LAN
	Manager 2.2c, a Network Client 3.0 for MS-DOS or a Windows for Workgroups 3.11
	computer using IBMTOK.DOS for a token ring adapter, the following error message
	appears:
	
	  Error 36: Unable to bind. Hardware failure.
	
	CAUSE
	=====
	
	This problem occurs on any computer running at a CPU speed greater than 60 Mhz.
	The IBMTOK.DOS driver does not work properly at CPU speeds greater than 60 Mhz.
	
	RESOLUTION
	==========
	
	To correct this problem, download IBMTOKR.EXE, a self-extracting file that
	includes the new IBMTOK.DOS driver (dated 10/18/94), from the following
	service:
	
	- Internet (anonymous FTP) ftp ftp.microsoft.com Change to the Softlib/Mslfiles
	  folder. Get IBMTOKR.EXE
	
	
	For additional information about , please see the following article(s) in the
	Microsoft Knowledge Base:
	
	  Q119591 How to Download Microsoft Support Files from Online Services
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbLanManSearch kbWFWSearch kbNetworkClientSearch kbWFW311 kbLanMan220c kbNetworkClient300DOS
	
	=============================================================================
	

{% endraw %}
