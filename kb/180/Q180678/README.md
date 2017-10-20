---
layout: page
title: "Q180678: Folder on FPNW Server Inaccessible to intraNetWare Client"
permalink: /kb/180/Q180678/
---

## Q180678: Folder on FPNW Server Inaccessible to intraNetWare Client

{% raw %}

	Article: Q180678
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft File and Print Services for NetWare version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create or rename folders on a computer running both Windows NT Server
	and Microsoft File and Printer Services for NetWare (FPNW), you may experience
	one or more of the following problems:
	
	- When you create a new folder within a volume on your FPNW server, the new
	  folder will not be viewable or accessible until you have refreshed your
	  desktop.
	
	  -or-
	
	- When you access a recently renamed folder, you may receive the following
	  error message:
	
	  The folder <\\path\foldername> does not exist.
	
	NOTE: This may happen when you are using a computer running both Windows NT and
	the Novell intraNetWare Client for Windows NT Version 4.10 (970214).
	
	
	RESOLUTION
	==========
	
	To workaround this issue, you must map a drive to your FPNW volume before
	attempting to create or rename folders.
	
	Novell intraNetWare Client for Windows NT Version 4.10 (970214) is manufactured
	by Novell Corporation, a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding this product's performance or reliability.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kberrmsg kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbServicesNetwareSearch kbFPNW400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
