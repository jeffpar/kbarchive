---
layout: page
title: "Q95087: WFWG Err Msg: Windows 3.x Could Not Be Located..."
permalink: /kb/095/Q95087/
---

## Q95087: WFWG Err Msg: Windows 3.x Could Not Be Located...

{% raw %}

	Article: Q95087
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft Windows 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you upgrade from Microsoft Windows version 3.0 or 3.1 to Windows for
	Workgroups or Windows version 3.11, you may receive one of the following error
	messages:
	
	  Windows 3.x could not be located on your computer. This version of Windows
	  for Workgroups requires that Windows 3.x already be installed. You must
	  either install Windows 3.x onto your computer, or purchase the complete
	  version of Windows for Workgroups.
	
	-or-
	
	  Windows 3.1 or Windows for Workgroups 3.1 could not be found on your system.
	
	CAUSE
	=====
	
	This problem can occur if:
	
	- You do not have the appropriate version of Windows 3.0 or 3.1 installed on
	  the computer for Windows or Windows for Workgroups to install properly.
	
	  -or-
	
	- You are using an original equipment manufacturer (OEM) version of Windows 3.1
	  that was preinstalled and has the WIN.COM file renamed. For example, this
	  problem occurs on some Toshiba laptops (because WIN.COM is renamed as
	  WIN_.COM). This problem also occurs on some Acer Power 500 computers (because
	  WIN.COM is renamed as WINDOWS.COM).
	
	  -or-
	
	
	- The [boot.description] section of the SYSTEM.INI file contains the line:
	
	        SETUPSTATE=1
	
	  -or-
	
	- The SHELL= entry in the [boot] section of the SYSTEM.INI file refers to
	  WINSETUP.EXE.
	
	
	WORKAROUND
	==========
	
	1. Install the appropriate version of Windows on your computer.
	
	2. Use any text editor (such as Notepad) to edit the SYSTEM.INI file and delete
	  the "SETUPSTATE=" line from the [boot.description] section of the file (if it
	  is present).
	
	3. Change the "SHELL=" line in the [boot] section of the SYSTEM.INI file from
	
	  shell=winsetup.exe
	
	  to:
	
	  shell=progman.exe
	
	4. Save and then close the file.
	
	5. Install the upgrade or add-on again.
	
	If you have an OEM version of Windows, you may need to use the following steps:
	
	1. Rename WIN_.COM or WINDOWS.COM (in the Windows directory) to WIN.COM.
	
	2. Run Setup.
	
	3. Rename WIN.COM back to WIN_.COM or WINDOWS.COM.
	
	MORE INFORMATION
	================
	
	The upgrade for Microsoft Windows version 3.0 and the add-on for Microsoft
	Windows version 3.1 require that the appropriate version of Windows 3.0 or 3.1
	be installed on the computer for Windows for Workgroups to install properly. The
	upgrade and add-on Setup programs allow the Windows for Workgroups files to be
	placed in the existing Windows directory or in a new directory.
	
	The upgrade for Microsoft Windows version 3.0 users installs a full version of
	Windows for Workgroups on computers running Windows 3.0. The add-on for
	Microsoft Windows version 3.1 installs a full version of Windows for Workgroups
	on computers running Windows 3.1.
	
	
	Additional query words: 3.10 3.11 peer quick short partial win30 addon five-user edition 5 1 one-user path 3rdparty
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
