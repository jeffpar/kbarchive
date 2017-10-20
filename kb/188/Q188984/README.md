---
layout: page
title: "Q188984: Office 97/2000 Is Not Supported in a Clustered Environment"
permalink: /kb/188/Q188984/
---

## Q188984: Office 97/2000 Is Not Supported in a Clustered Environment

{% raw %}

	Article: Q188984
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2000,4.0,97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 4.0 
	- Microsoft Cluster Server 
	- Microsoft Office 97 Professional Edition for Windows 
	- Microsoft Office for Windows 95 Professional edition 
	- Microsoft Office for Windows 95, Standard edition 
	- Microsoft Office 97 Standard Edition for Windows 
	- Microsoft Office 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Cluster Server does not support the ability to fail over Microsoft
	Office products. These products are not cluster-aware, although it is possible
	to install Office into the shared small computer system interface (SCSI) drive
	they do not fail over correctly and are not supported as a failover application.
	
	MORE INFORMATION
	================
	
	The commercially reasonable effort to make this work in a limited fashion on a
	Windows 95 client is to disable Osa.exe and Findfast.exe from the Startup group
	on the client computer. This lets the client quit the application and restart
	the application if need be. On a computer running Windows NT Workstation or
	Windows NT Server, you can quit the process by going to the Processes tab in
	Task Manager, and then by clicking End Process on the Osa.exe application.
	
	
	Additional query words: reboot mscs w2000mscs osa exe
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbAudDeveloper kbClustServSearch kbOSWinSearch kbOSWinNT400 kbOffice2000Search kbOffice2000 kbOffice97Search kbOffice95Search kbOffice97 kbZNotKeyword3 kbOSWinNTSearch
	Version           : :2000,4.0,97
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
