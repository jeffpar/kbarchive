---
layout: page
title: "Q69186: WINSTART.BAT Won't Load Microsoft LAN Manager Driver"
permalink: kb/069/Q69186/
---

## Q69186: WINSTART.BAT Won't Load Microsoft LAN Manager Driver

	Article: Q69186
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can create a batch file called WINSTART.BAT to load memory-resident
	utilities in Windows applications. This gives you more conventional memory to
	run DOS applications under Microsoft Windows version 3.00. Microsoft LAN Manager
	and some other network drivers will not load properly using WINSTART.BAT. If the
	network driver does load, an error message is displayed on exit because there is
	no way to unload the driver.
	
	MORE INFORMATION
	================
	
	If Microsoft LAN Manager is loaded with WINSTART.BAT, you will receive the
	following error message:
	
	  The Workstation has not been started
	  Error spawning C:\LANMAN.DOS\NETPROG\NETWKSTA.EXE
	
	When the logon command is completed, it will respond with the following error
	message:
	
	  The workstation has already been started
	
	Windows will then display a warning that full API support has not been loaded and
	the network will be unavailable. The only workaround is to load the network
	before running Windows.
	
	Microsoft is researching this problem and will post new information here as it
	becomes available.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide," version 3.00, page 519.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
