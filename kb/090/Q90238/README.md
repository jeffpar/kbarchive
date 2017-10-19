---
layout: page
title: "Q90238: WFWG System Hangs After Running Central Point Backup"
permalink: /kb/090/Q90238/
---

## Q90238: WFWG System Hangs After Running Central Point Backup

	Article: Q90238
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your machine may stop responding (hang) after running Central Point version 7.1
	Backup.
	
	CAUSE
	=====
	
	The virtual direct memory addressing (DMA) driver may not be configured properly
	or you may be using the driver supplied with Microsoft Windows version 3.1. With
	Windows for Workgroups and Central Point Backup, the Windows 3.1 virtual DMA
	driver should not be used.
	
	WORKAROUND
	==========
	
	If you are using the Windows 3.1 driver, replace it with the one supplied with
	Windows for Workgroups version 3.1. Install the file VDMAD.386 in the SYSTEM.INI
	file in the [386Enh] section. It should look like this:
	
	     device=vdmad.386
	
	Another possible solution is to increase the DMABufferSize= line in the
	SYSTEM.INI file in the [386Enh] section to 17 or more. For example:
	
	     DMABufferSize=17
	
	MORE INFORMATION
	================
	
	When Central Point's PC Tools installs, it checks to see if the Windows 3.1 is
	installed. If it is, PC Tools does not install its version of the virtual DMA
	driver. If PC Tools detects another virtual DMA driver installed already
	(VDMAD.386), it replaces it with the default virtual DMA driver (*VDMAD). Since
	Windows for Workgroups replaces *VDMAD, PC Tools incorrectly returns the system
	to the old setting.
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
