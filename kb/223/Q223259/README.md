---
layout: page
title: "Q223259: How To Install FTP from NTOP on Microsoft Cluster Server 1.0"
permalink: /kb/223/Q223259/
---

## Q223259: How To Install FTP from NTOP on Microsoft Cluster Server 1.0

{% raw %}

	Article: Q223259
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install the File Transfer Protocol (FTP) Server from the Windows NT
	Option Pack (NTOP) in order to add fail-over enabled FTP Sites on a Microsoft
	Cluster Server Resource Group, you must also install the World Wide Web Server
	from the NTOP.
	
	MORE INFORMATION
	================
	
	The files used by the Microsoft Cluster Administrator tool to create IIS Server
	Instances are only installed during the World Wide Web Server installation piece
	of the NTOP. If you choose to only install the FTP Server on the Microsoft
	Cluster Server, then the IIS clustering files will not get installed on the
	Cluster Server.
	
	If you want to create IIS Server instances of the FTP Sites on the Microsoft
	Cluster Server, but you have only installed the FTP Server on the Microsoft
	Cluster Server, you can run the NTOP Setup again and choose Add/Remove programs.
	Choose to install the World Wide Web Server.
	
	For the proper installation instructions for NTOP on Microsoft Cluster Server
	1.0, see the following article in the Microsoft Knowledge Base:
	
	  Q191138 How to Install Windows NT Option Pack on Cluster Server
	
	After the World Wide Web Server is installed on the Cluster Server computer, you
	can create IIS Server instances for your FTP Sites.
	
	If you want to disable your World Wide Web Server, go to Control Panel Services
	and set the startup type of the World Wide Web Publishing Service to Disabled.
	
	For more information, please see the following white paper:
	
	  http://www.microsoft.com/ntserver/ntserverenterprise/deployment/planguide/ntoption.asp
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
