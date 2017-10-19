---
layout: page
title: "Q130771: Cannot Use RAS or AWFAX with Hayes Accelerator Card Drivers"
permalink: /kb/130/Q130771/
---

## Q130771: Cannot Use RAS or AWFAX with Hayes Accelerator Card Drivers

	Article: Q130771
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Setup program for the Hayes ESP communications accelerator card causes
	Windows for Workgroups Remote Access Service (RAS) and At Work Fax to not
	install or work correctly.
	
	CAUSE
	=====
	
	The Hayes Setup program replaces the default Windows communications driver
	(COMM.DRV) with its own driver (ESP2_W31.DRV). In Windows 3.0, the Hayes driver
	is ESP2_W30.DRV.
	
	RESOLUTION
	==========
	
	You must disable the accelerator card to use RAS and At Work Fax. To do so,
	change the COMM.DRV= line in the [boot] section of the SYSTEM.INI file to:
	
	     COMM.DRV=COMM.DRV
	
	After you make this change, quit and then restart Windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
