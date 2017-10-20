---
layout: page
title: "Q116250: Windows 95 Err Msg: Registry File Was Not Found"
permalink: /kb/116/Q116250/
---

## Q116250: Windows 95 Err Msg: Registry File Was Not Found

{% raw %}

	Article: Q116250
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg win95
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to load Windows 95, you may receive the following error message:
	
	  Registry File was not found. Registry services may be inoperative for this
	  session.
	
	After the error message appears, you may be returned to an MS-DOS command prompt.
	
	CAUSE
	=====
	
	This behavior can occur if the registry file (SYSTEM.DAT) is missing from the
	Windows 95 directory or if it is corrupted. The error can also occur if the
	[Paths] section is missing from the MSDOS.SYS file.
	
	RESOLUTION
	==========
	
	- Add the [Paths] section to the MSDOS.SYS file. For additional information,
	  please see the following article in the Microsoft Knowledge Base:
	
	  Q118579 Contents of the Msdos.sys File
	
	  -or-
	
	- Check your system for an existing SYSTEM.DAT file using the following steps:
	
	  1. In the Windows 95 directory, type the following command to see if
	     SYSTEM.DAT is present:
	
	  " attrib system.dat " (without the quotation marks)
	
	  2. If the SYSTEM.DAT file exists, proceed with steps 3 and 4; otherwise, skip
	     to step 5.
	
	  3. Use the MS-DOS ATTRIB command to remove the Read-Only, System, and Hidden
	     attributes of the SYSTEM.DAT file:
	
	  " attrib system.dat -r -s -h " (without the quotation marks)
	
	  4. Rename the SYSTEM.DAT file to SYSTEM.BAD with the following command:
	
	  " rename system.dat system.bad " (without the quotation marks)
	
	  5. Reboot your computer. During the boot process, if Windows 95 cannot find
	     the Registry file, it uses SYSTEM.DA0. If this file works well, it is
	     renamed to SYSTEM.DAT.
	
	  -or-
	
	- If the above steps fail, rerun Windows 95 Setup to recreate the SYSTEM.DAT
	  file from the original disks.
	
	Additional query words: err msg register
	
	======================================================================
	Keywords          : kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
