---
layout: page
title: "Q118620: PC Ext: Support of EXTERNAL.EXE Under Windows NT"
permalink: /kb/118/Q118620/
---

## Q118620: PC Ext: Support of EXTERNAL.EXE Under Windows NT

{% raw %}

	Article: Q118620
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5; :3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	- Microsoft Mail Multitasking MTA, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the support of both the Microsoft Mail Message Transfer
	Agent (MTA) and the Microsoft Mail Multitasking MTA (MMTA) version 3.2 running
	under Microsoft Windows NT versions 3.1 and 3.5. The program name for both the
	MTA and the MMTA executables is EXTERNAL.EXE.
	
	NOTE: This article does not apply to version 3.5 of Microsoft Mail Multitasking
	MTA for Windows NT.
	
	MORE INFORMATION
	================
	
	The following is a summary of the support of the MTA and the MMTA under Windows
	NT 3.1 and 3.5:
	
	The Multitasking MTA for Windows NT Server (NT MMTA) was created to replace
	running the OS/2 Multitasking MTA on Windows NT. It is strongly recommended in
	this configuration to upgrade to the NT MMTA. Advantages gained by upgrading to
	the NT MMTA include:
	
	- Running External as a Windows NT service.
	
	- Asynchronous message transfer up to 28800 baud with supported modems.
	
	The NT MMTA requires that you are running Windows NT Server version 3.51, and is
	not supported on Windows NT Workstation.
	
	Supported Under Windows NT
	--------------------------
	
	The MMTA doing LAN-based transfers only under Windows NT operating system.
	
	Not Supported Under Windows NT
	------------------------------
	
	The MTA is not supported under any circumstances under Windows NT.
	
	The MMTA is not supported doing asynchronous transfers because the MMTA must
	access hardware directly, and this is not possible under Windows NT.
	Transferring via X.25 is not supported either for the MMTA on Windows NT, as
	there was not an X.25 driver for Windows NT.
	
	For systems connecting to Novell NetWare versions 3.x and 4.x using Microsoft
	Client Service for NetWare, dynamic drive connections are not supported. This is
	because the MMTA using dynamic drive connections uses the OS/2 NetWare APIs,
	which are not supported under Microsoft Client Service for NetWare under Windows
	NT.
	
	Additional query words: 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350 kbMailMMTA320
	Version           : WINDOWS:3.2,3.2a,3.5; :3.2
	
	=============================================================================
	

{% endraw %}
