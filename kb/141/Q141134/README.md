---
layout: page
title: "Q141134: PC WRmt: ErrMsg: Connection End Disconnect After Win95 Upgrade"
permalink: kb/141/Q141134/
---

## Q141134: PC WRmt: ErrMsg: Connection End Disconnect After Win95 Upgrade

	Article: Q141134
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to the postoffice using Mail Remote for Windows and the
	USGNERIC script after you upgrade the workstation to Microsoft Windows 95, the
	following errors may appear in the SESSION.LOG on the Remote workstation:
	
	  Connection End
	
	  Disconnect
	
	CAUSE
	=====
	
	The USGNERIC script is not fully compatible with the modem.
	
	RESOLUTION
	==========
	
	Contact the modem vendor to obtain a script that is compatible with the modem,
	or use a modem that is on the supported list found in the README.TXT file on the
	disk labeled Supplementary Modem Scripts included with Mail for PC Networks or
	the README.TXT file installed with Mail Remote for Windows.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q134754 README.TXT: Mail 3.5 Supplementary Modem Scripts
	
	  Q99946 Available Modem Scripts
	
	Additional query words: 3.20 mdm dos
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
