---
layout: page
title: "Q85006: The Purpose of TBMI2.COM File"
permalink: /kb/085/Q85006/
---

## Q85006: The Purpose of TBMI2.COM File

{% raw %}

	Article: Q85006
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	TBMI2.COM is a memory resident utility provided by Novell for distribution on
	the Microsoft Windows operating system version 3.1 distribution disks. The Task
	Buffer Management Interface (TBMI) is a file meant to be used in standard mode
	Windows when the NetWare IPX and SPX functions are loaded. The purpose of the
	file is to prevent a task switch in Windows from breaking the communication
	between IPX and the various software processes associated with a particular
	application.
	
	In more technical terms, TBMI2.COM acts as a buffer and manager between the IPX
	and a calling process. If an application process calls IPX and then the task
	switcher is invoked, then IPX could send its response to the wrong process.
	TBMI2.COM prevents this from happening.
	
	MORE INFORMATION
	================
	
	The NETWORKS.WRI file states the following:
	
	  TBMI2 enables you to safely run applications that use IPX and SPX functions
	  in standard mode Windows or the MS-DOS 5.0 task switcher.
	
	NETWORKS.WRI also explains that Novell suggests loading the file at bootup time
	with a batch file. NETWORK.WRI offers no further clarification of the
	functionality of TBMI2.COM.
	
	REFERENCES
	==========
	
	NETWORKS.WRI, Microsoft Windows, version 3.1, disk #3
	
	Additional query words: task-switcher 3rdparty Netware patch task swap 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
