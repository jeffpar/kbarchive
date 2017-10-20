---
layout: page
title: "Q156331: Cannot Boot OEM Service Release 2 with Windows 95 System Files"
permalink: /kb/156/Q156331/
---

## Q156331: Cannot Boot OEM Service Release 2 with Windows 95 System Files

{% raw %}

	Article: Q156331
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95 OEM Service Release 2 (OSR2), you may receive one of
	the following error messages:
	
	  The compression driver cannot be set up correctly. Get a version from your
	  vendor that is compatible with this version of Windows. Press any key to
	  continue.
	
	  Insufficient memory to run Windows. Reconfigure your system to increase
	  available memory and try again. Windows has stopped. Press CTRL+ALT+DELETE to
	  restart your computer.
	
	CAUSE
	=====
	
	There are incorrect versions of the required boot files in the root folder of
	the boot drive. Windows 95 OSR2 is incompatible with the boot files from any
	earlier versions of Windows 95.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. Insert a Windows 95 OSR2 startup disk into drive A.
	
	2. Restart the computer.
	
	3. At the command prompt, type:
	
	  " sys c: " (without the quotation marks)
	
	4. Remove the startup disk from drive A and reboot the computer.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbOPKSearch kbWin95
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
