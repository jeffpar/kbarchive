---
layout: page
title: "Q148828: Err Msg: Dlchlp.exe Is Required to Support 16-Bit Applications"
permalink: /kb/148/Q148828/
---

## Q148828: Err Msg: Dlchlp.exe Is Required to Support 16-Bit Applications

{% raw %}

	Article: Q148828
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork msnets win95 kbAPI kbDLC kbSDKPlatform kbGrpDSNet
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a server-based Windows 95 installation using the Microsoft
	32-bit DLC protocol (MSDLC32), Dlc.vxd may report the following error message:
	
	  DLCHP.EXE is required to support 16-bit applications. It must be loaded from
	  Autoexec.bat.
	
	CAUSE
	=====
	
	This error can be caused by either of the following conditions:
	
	- Net.exe is not being loaded before Dlchlp.exe is being run in the
	  Autoexec.bat file.
	
	- The Autoexec.bat file does not contain the correct path to the Dlchlp.exe
	  file.
	
	RESOLUTION
	==========
	
	Modify the Autoexec.bat file. Make sure that Net.exe is loaded before
	Dlchlp.exe, and that the path for the Dlchlp.exe file is correct. The path for
	the Dlchlp.exe file should point to the shared folder on the network server from
	which you run Windows 95. For example, the Autoexec.bat file may contain
	
	  net.exe
	  <drive>:\netsetup\dlchlp.exe
	
	where <drive> is the network server from which you run Windows 95.
	
	MORE INFORMATION
	================
	
	The default installation of MSDLC32 supports 16-bit DLC programs that require
	Dlchlp.exe to be loaded in the Autoexec.bat file.
	
	In a server-based setup, the real-mode network components must be loaded and a
	drive mapped to the shared Windows 95 installation before Dlchlp.exe can be
	loaded.
	
	======================================================================
	Keywords          : kbnetwork msnets win95 kbAPI kbDLC kbSDKPlatform kbGrpDSNet 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
