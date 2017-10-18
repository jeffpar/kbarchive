---
layout: page
title: "Q112620: Incorrect Network Card Detected During Setup with Novell ODI"
permalink: kb/112/Q112620/
---

## Q112620: Incorrect Network Card Detected During Setup with Novell ODI

	Article: Q112620
	Product(s): Microsoft Access Distribution Kit
	Version(s): MS-DOS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During setup of Workgroup Add-On for MS-DOS version 3.11, network card detection
	may select the incorrect adapter if Novell ODI drivers are installed. In this
	situation, the card is detected as an IPX/SPX support driver instead of the
	correct driver (the ODI/NDIS support driver). If the driver is not changed to
	the ODI/NDIS support driver, no validation occurs on the domain and no access to
	the network through Workgroup Add-On for MS-DOS is available.
	
	RESOLUTION
	==========
	
	You can correct this problem by running the maintenance mode of Setup for
	Workgroup Add-On for MS-DOS.
	
	1. Change to the Workgroup Add-On for MS-DOS directory and type "setup" (without
	  the quotation marks).
	
	2. Use the arrow keys to select Change Network Configuration and press ENTER.
	
	3. Use the arrow keys to select Remove and press ENTER. This removes the
	  incorrect network card driver.
	
	4. Select "Add driver for Network adapter" and press ENTER. This displays a list
	  of available drivers.
	
	5. Select ODI/NDIS Support Driver and press ENTER.
	
	6. Make certain that Network Configuration Correct and "ODI/NDIS Support Driver
	  will be installed" are selected and press ENTER to accept the configuration.
	
	7. Select "The listed options are correct" option and press ENTER.
	
	8. Setup now prompts you for the Novell ODINSUP.COM file. This file must be
	  obtained from Novell or a Novell vendor.
	
	9. Restart your computer.
	
	Additional query words: wgao wfw wfwg add on 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311DOS
	Version           : MS-DOS:3.11
	
	=============================================================================
	
