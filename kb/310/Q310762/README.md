---
layout: page
title: "Q310762: ENC: Encarta Quits Unexpectedly During Setup"
permalink: kb/310/Q310762/
---

## Q310762: ENC: Encarta Quits Unexpectedly During Setup

	Article: Q310762
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 28-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia Standard 2003 
	- Microsoft Encarta Encyclopedia Deluxe 2003 
	- Microsoft Encarta Encyclopedia Deluxe 2002, version 1.0 
	- Microsoft Encarta Encyclopedia Standard 2002, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Microsoft Encarta, you receive an error message similar
	to the following:
	
	  Encarta has encountered a problem and needs to close. We are sorry for the
	  inconvenience.
	
	  AppName: enc200x.exe
	  AppVer: 11.0.1013.809
	  ModName: wmp.ocx
	  ModVer: 7.1.0.305
	  Offset: 0005e25
	
	NOTE: The error signature that is included in this error message is an example of
	the error signature that you may receive.
	
	CAUSE
	=====
	
	This issue can occur if one of the following conditions is true:
	
	- The installation of Encarta is corrupted. This can occur when other programs
	  run in the background during the installation process.
	
	  -OR-
	
	- A 0-bit file was copied into the Encarta program files folder during
	  installation.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps.
	
	Uninstall Norton AntiVirus, If Present
	--------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. In the list of installed programs, click Norton AntiVirus, and then click
	  Add/Remove (click Change/Remove on Microsoft Windows 2000-based computers).
	
	4. Follow the instructions to completely remove Norton AntiVirus from your
	  computer.
	
	Remove Encarta from Your Computer
	---------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. In the list of installed programs, click Encarta Encyclopedia, and then click
	  Add/Remove (click Change/Remove on Windows 2000-based computers). Follow the
	  instructions to completely remove Encarta from your computer.
	
	4. If you cannot find Encarta in the list of programs installed on your
	  computer, use Windows Explorer to manually delete the following folder, where
	  x indicates the version of Encarta that you are running (Encarta 2002 or
	  Encarta 2003):
	
	  C:\Program Files\Microsoft Encarta\Encarta Encyclopedia 200x
	
	Reinstall Encarta and Norton AntiVirus
	--------------------------------------
	
	1. Quit all programs that are running.
	
	2. Reinstall Microsoft Encarta.
	
	3. Reinstall Norton AntiVirus, if you removed it.
	
	MORE INFORMATION
	================
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbEncartaSearch kbMMSearch kbEncartaEncyc2002 kbEncartaEnCyc2002Del
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
