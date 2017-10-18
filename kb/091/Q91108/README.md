---
layout: page
title: "Q91108: PROTOCOL.INI Backup Name Same as WFWG Directory Name"
permalink: kb/091/Q91108/
---

## Q91108: PROTOCOL.INI Backup Name Same as WFWG Directory Name

	Article: Q91108
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows for Workgroups Setup and Control Panel make backup copies of
	PROTOCOL.INI whenever changes are made. These backup files are named PROTOCOL,
	with incremental numeric file extensions that are added as each new backup is
	created. However, if the Windows for Workgroups directory name has a file
	extension, the PROTOCOL.INI backup file is named after the Windows directory and
	located one level higher in the directory structure. For example, if the Windows
	for Workgroups directory was named C:\WINDOWS.WFW, the PROTOCOL.INI backup would
	be named WINDOWS.000 and stored in the root of drive C.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1. This problem does not occur in later versions of the product.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
