---
layout: page
title: "Q126705: Cannot Do WFWG SETUP /N Over Previous Full Windows Install"
permalink: /kb/126/Q126705/
---

## Q126705: Cannot Do WFWG SETUP /N Over Previous Full Windows Install

{% raw %}

	Article: Q126705
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start Microsoft Windows version 3.1 or 3.11 or Microsoft Windows
	for Workgroups version 3.11, you receive one or more of the following error
	messages:
	
	  Cannot find a device file that may be needed to run Windows in 386 enhanced
	  mode.
	
	  You may need to run the Setup Program again. <device>
	  Press any key to continue.
	
	<device> is any of the following:
	
	- VPD
	
	- VSHARE.386
	
	- IFSMGR.386
	
	- VWC
	
	- VNETSUP.386
	
	- VREDIR.386
	
	- NWLINK.386
	
	- NWNBLINK.386
	
	- NETBEUI.386
	
	If you are trying to start Windows version 3.1 or 3.11, you then receive the
	following error message:
	
	  Invalid VxD dynamic link call to device number 0480, service 003
	  Your Windows configuration is invalid.
	  Run the Windows Setup program again to correct this problem
	
	CAUSE
	=====
	
	These error messages can occur for either of the following reasons:
	
	- You set up Windows for Workgroups over an existing full installation of
	  Windows 3.1 or 3.11 with a SETUP /N command. When you start Windows for
	  Workgroups, WIN.COM looks for a Windows\SYSTEM sub- directory. Because there
	  is a Windows\SYSTEM subdirectory left over from the full Windows 3.1 or 3.11
	  installation, WIN.COM loads the core files from the Windows 3.1 or 3.11
	  Windows\SYSTEM subdirectory instead of from the network share. When the
	  SYSTEM.INI file is processed, the device drivers specified in the SYSTEM.INI
	  file cannot be located in the Windows\SYSTEM subdirectory, causing the error
	  messages to be generated.
	
	- You installed Windows 3.1 or 3.11 over an existing installation of Windows
	  for Workgroups. When you install Windows 3.1 or 3.11 over Windows for
	  Workgroups, references to Windows for Workgroups device drivers are left in
	  the SYSTEM.INI file. These device drivers are not compatible with Windows 3.1
	  or 3.11.
	
	RESOLUTION
	==========
	
	- If you installed Windows for Workgroups with a SETUP /N command over a full
	  existing installation of Windows 3.1 or 3.11, install a complete copy of
	  Windows for Workgroups to a local directory.
	
	
	- If you set up Windows 3.1 or 3.11 over Windows for Workgroups, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q95743 Recovering Windows 3.1 After Installing WFWG
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW311
	Version           : :3.1,3.11
	
	=============================================================================
	

{% endraw %}
