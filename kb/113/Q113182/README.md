---
layout: page
title: "Q113182: SMC 8000 Elite Series Network Adapters Need Driver Updates"
permalink: /kb/113/Q113182/
---

## Q113182: SMC 8000 Elite Series Network Adapters Need Driver Updates

	Article: Q113182
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use one of the following Standard Microsystems (SMC) Elite network
	adapters
	
	- 8416 SMC Ether Easy
	
	- 8216 SMC Elite Ultra
	
	- 8013 SMC Elite Plus
	
	- 8003 SMC EtherCard Plus
	
	with the drivers included with Windows for Workgroups or the drivers supplied by
	SMC, you may experience one of the following problems:
	
	- Sporadic lockups or other performance problems in Microsoft Windows for
	  Workgroups.
	
	- Error message "This device does not exist on the network."
	
	These problems occur most often with the SMC EtherCard Elite 16C Ultra network
	adapter when you are using either the Windows for Workgroups SMC EtherCard Plus
	Elite 16 Combo driver or the driver supplied by SMC.
	
	CAUSE
	=====
	
	According to Standard Microsystems, neither the SMC EtherCard Plus Elite 16
	Combo driver included with Windows for Workgroups 3.11 nor the drivers supplied
	by SMC with the SMC 8000 Series Elite network adapters are completely compatible
	with Windows for Workgroups.
	
	RESOLUTION
	==========
	
	To correct these problems, follow these steps:
	
	1. Obtain the latest driver update from the SMC BBS. The current update is:
	
	  Gsd210.exe
	
	2. After you download this file, expand it in an empty folder.
	
	3. Run the appropriate expanded file.
	
	If the problems persist after you install these drivers, make sure that the
	"EMM386" line in the Config.sys file uses the RAM parameter. The NOEMS parameter
	has been found to cause the SMC 8000 Ultra to not be recognized on Celebris
	FR-842AA computers running Windows for Workgroups.
	
	Additional query words: 3.11 3rdparty hang freeze
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
