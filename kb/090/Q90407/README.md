---
layout: page
title: "Q90407: WFWG Err Msg: EMM Exception Error #6... Old VNETBIOS.386"
permalink: /kb/090/Q90407/
---

## Q90407: WFWG Err Msg: EMM Exception Error #6... Old VNETBIOS.386

{% raw %}

	Article: Q90407
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have Microsoft Windows installed on your system and you then upgrade to
	Microsoft Windows for Workgroups, you receive the following error message:
	
	  EMM Exception Error #6
	
	CAUSE
	=====
	
	Windows for Workgroups provides an updated version of VNETBIOS.386, the virtual
	NetBIOS device driver (VxD). This file is normally placed in the Windows SYSTEM
	subdirectory. Earlier versions of this file, placed in the Windows directory may
	cause this error message.
	
	NOTE: This error can also be caused by conflicts in the upper memory area.
	
	WORKAROUND
	==========
	
	To resolve the error, rename or delete the VNETBIOS.386 file in the Windows
	directory, and ensure that the proper file exists in Windows SYSTEM
	subdirectory.
	
	The VNETBIOS.386 file that ships with Windows for Workgroups has the following
	file details:
	
	  VNETBIOS.386         37320   10-01-92   3:11a
	
	Additional query words: 3.10 vnetbios old previous
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
