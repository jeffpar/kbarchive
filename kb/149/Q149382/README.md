---
layout: page
title: "Q149382: INFO: Setting Options You Can Modify in the Srcsafe.ini File"
permalink: kb/149/Q149382/
---

## Q149382: INFO: Setting Options You Can Modify in the Srcsafe.ini File

	Article: Q149382
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can modify the Srcsafe.ini file by selecting controls in the Options dialog
	of SSADMIN. This article lists the settings that the Options dialog modifies.
	
	MORE INFORMATION
	================
	
	Control in the Options Dialog     Tab                 SRCSAFE.INI Setting
	-------------------------------------------------------------------------
	
	Allow multiple checkouts          General              Multiple_Checkout
	
	Use network name for automatic
	user log in                       General              Use_Network_Name
	
	Database name                     General              Database_Name
	
	Expand Keywords in                General              Keyword_Masks
	
	Log all changes in                General              Journal file
	
	Enable project security           Project Security     *Change to database
	                                                       not INI file
	
	Set shadow directory for project  Shadow Directories   *Sets project
	                                                       modifications will
	                                                       affect
	
	Shadow Directory                  Shadow Directories   Shadow
	
	Set read-only flag for all files  Shadow Directories   Shadow_ReadOnly
	
	End-of-line character for file    Shadow Directories   Shadow_EOL
	
	File date/time                    Shadow Directories   Shadow_SetTime
	
	NOTE: The above information applies to Visual SourceSafe versions 4.x and 5.0.
	Also note that in Visual SourceSafe version 5.0, Directories are referred to as
	Folders.
	
	Below are settings that are new to Visual SourceSafe version 5.0:
	
	Control in the Options Dialog     Tab                 SRCSAFE.INI Setting
	-------------------------------------------------------------------------
	
	URL                               Web Projects        URL
	
	Virtual Root                      Web Projects        Virtual_Root
	
	Site map filename                 Web Projects        SiteMap
	
	Deployment path                   Web Projects        Deploy_Path
	
	Proxy for deploying over ftp      Web                 Deploy_Proxy
	
	Do not use the proxy for?
	these local servers               Web                 Deploy_Host_Local
	
	Default filename for Web Pages    Web                 Web_Default_Filename
	
	Additional query words: 5.00 4.00 vss admin web
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
