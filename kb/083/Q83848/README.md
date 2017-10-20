---
layout: page
title: "Q83848: Error Upgrading Full Windows 3.0 with Setup /N"
permalink: /kb/083/Q83848/
---

## Q83848: Error Upgrading Full Windows 3.0 with Setup /N

{% raw %}

	Article: Q83848
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information applies to upgrading a network installation of
	Microsoft Windows 3.0 to Windows version 3.1 or Windows for Workgroups (WFWG)
	version 3.1 or 3.11.
	
	MORE INFORMATION
	================
	
	When you use the SETUP /N command to upgrade a Windows 3.0 installation to a
	shared network installation of Windows 3.1 or WFWG, the original installation of
	Windows 3.0 must be a shared copy of Windows (that is, the earlier SETUP command
	was executed with the /N switch).
	
	If you use SETUP /N to upgrade a Full (local, or not shared) installation of
	Windows to a Network Shared installation, the following errors occur when
	Windows is started in 386 enhanced mode: :
	
	  Cannot find a device file that may be needed to run Windows in 386 enhanced
	  mode; run Setup again. INT13
	
	-or-
	
	  Cannot find a device file that may be needed to run Windows in 386 enhanced
	  mode; run Setup again. WDCTRL
	
	-or-
	
	  Cannot find a device file that may be needed to run Windows in 386 enhanced
	  mode; run setup again. VTDAPI.386
	
	Windows displays these error messages because the SYSTEM.INI file has been
	updated and is expecting to find an updated WIN386.EXE file in the
	Windows\SYSTEM subdirectory. Because SETUP /N does not create a Windows\SYSTEM
	subdirectory, Windows cannot find these files.
	
	If Windows is started in standard mode, Windows displays the following error
	message and return to the MS-DOS command prompt:
	
	  Executable Not Found
	
	For complete instructions on upgrading a Windows shared network installation,
	query on the following:
	
	  Upgrading Shared Windows Network Installation
	
	For additional information on setting up Windows on a network, see the
	following:
	
	- "Microsoft Windows Getting Started" guide, version 3.1, pages 6-9
	
	- "Microsoft Windows Resource Kit" guide, version 3.1, pages 71-74
	
	- NETWORKS.WRI file in the Windows 3.1 directory.
	
	Additional query words: 3.10 setup 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
