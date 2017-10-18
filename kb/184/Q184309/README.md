---
layout: page
title: "Q184309: How to Install IIS Without Rerunning Windows NT Setup"
permalink: kb/184/Q184309/
---

## Q184309: How to Install IIS Without Rerunning Windows NT Setup

	Article: Q184309
	Product(s): Internet Information Server
	Version(s): WINNT:2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some situations, you may need to install Microsoft Internet Information
	Server without running or rerunning the Microsoft Windows NT Server Setup
	program.
	
	MORE INFORMATION
	================
	
	To install Microsoft Internet Information Server 2.0 onto an Windows NT Server
	4.0 computer without rerunning the Windows NT Setup program, use one of the
	following two methods:
	
	Add the Internet Information Service
	------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. Click Add from the Services tab, select Microsoft Internet Information Server
	  and then click OK.
	
	4. Provide the path to the installation files in the Install Path box.
	
	5. Follow the Installation Wizard and select your install preferences.
	
	6. After the installation is complete, reinstall any applicable service packs
	  and hot fixes.
	
	Start the Internet Information Server setup directly
	----------------------------------------------------
	
	1. Explorer the Windows NT 4.0 Server compact disc, and double-click the
	  Inetstp.exe from the Alpha\Inetsrv or I386\Inetsrv folders.
	
	2. Follow the Installation Wizard and select your install preferences.
	
	3. After the installation is complete, reinstall any applicable service packs
	  and hot fixes.
	
	  NOTE: To upgrade IIS version 2.0 to IIS version 3.0, you must reapply Windows
	  NT 4.0 Service Pack 3.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : WINNT:2.0,3.0
	Issue type        : kbhowto
	
	=============================================================================
	
