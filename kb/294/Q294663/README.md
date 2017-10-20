---
layout: page
title: "Q294663: Error Message: MSN Failed to Load Folcom.dll"
permalink: /kb/294/Q294663/
---

## Q294663: Error Message: MSN Failed to Load Folcom.dll

{% raw %}

	Article: Q294663
	Product(s): The Microsoft Network
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to MSN, you may receive the following error message:
	
	  MSN failed to load Folcom.dll.
	
	If you click Setup or Help, you may receive the following error message:
	
	  Msn.ini file badly formed. Please contact Product Support.
	
	CAUSE
	=====
	
	This issue can occur if you are using a newer version of MSN with the MSN
	Version 2.5 still installed. This issue can also occur if the Wsock32.dll file
	is damaged or missing.
	
	RESOLUTION
	==========
	
	To resolve the "MSN Failed to Load Folcom.dll" issue
	
	1. In the Control Panel, click Add/Remove Programs.
	
	2. Select any MSN versions that appear, and then click the Change/Remove button.
	
	3. Re-install the latest version of MSN.
	
	You may also resolve this issue by replacing the Wsock32.dll file.
	
	To replace the Wsock32.dll file
	
	1. Click Start, click Shut Down, select Restart or Restart the computer in
	  MS-DOS mode, and then click OK.
	
	2. At the MS-DOS prompt, type the letter of the drive on which Windows is
	  installed, and then press ENTER.
	  For example, if Windows is installed on drive C, type c:.
	
	3. Type the following commands, pressing ENTER after each command:
	
	  cd\windows\system
	
	  ren wsock32.dll
	
	  wsock32.oldexit
	
	4. Extract a new copy of the Wsock32.dll file to the Windows\System folder.
	  You can extract the Wsock32.dll file from the following locations:
	
	  The Win95_11.cab cabinet file on the Windows 95 CD-ROM.
	
	  The Win95_12.cab cabinet file on the original Windows 95 DMF disks.
	
	  The Win95_19.cab cabinet file on the original Windows 95 non-DMF disks.
	
	  The Win95_18.cab cabinet file on the Windows 95 OEM Service Release 2
	  CD-ROM.
	
	  If you are using Microsoft Windows 98, you can extract the Wsock32.dll file
	  from the following location:
	
	  The Precopy1.cab cabinet file on the Windows 98 CD-ROM.
	
	  For information about how to use the Extract tool, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	5. Restart your computer.
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
