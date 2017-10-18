---
layout: page
title: "Q89274: Running IBM PC LAN with Windows 3.0 and 3.1"
permalink: kb/089/Q89274/
---

## Q89274: Running IBM PC LAN with Windows 3.0 and 3.1

	Article: Q89274
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses using the IBM PC LAN network with Windows. The following
	topics are included:
	
	- Version required for Windows 3.0
	
	- No File Manager connections in Windows 3.0
	
	- Requires InDOSPolling=True
	
	- Broadcast message may hang workstation
	
	- Controlling multiple sessions
	
	MORE INFORMATION
	================
	
	Version Required for Windows 3.0
	--------------------------------
	
	Windows 3.0 requires a PC LAN network version 1.32 or later.
	
	No File Manager Connections in Windows 3.0
	------------------------------------------
	
	In Windows 3.0, all network connections should be made before starting Windows.
	File Manager cannot connect to PC LAN network shares.
	
	Requires InDOSPolling=True
	--------------------------
	
	When running PC LAN with Windows 3.0 and 3.1, you must add the following line to
	the SYSTEM.INI file's [386enh] section:
	
	  InDOSPolling=True
	
	Broadcast Message May Hang Workstation
	--------------------------------------
	
	On some versions of PC LAN, network broadcast messages may hang the workstation
	receiving them. If this is the case, then either disable broadcast messages or
	contact your vendor for an updated version.
	
	For more information on this topic, please refer to the NETWORKS.WRI file that
	comes with Windows 3.1.
	
	Controlling Multiple Sessions
	-----------------------------
	
	You can have up to 255 files open on a PC LAN server. To successfully open this
	many files, files=255 must be set in the CONFIG.SYS file of the server. Because
	Windows keeps 14 files open on the server, the maximum number of Windows
	sessions that can be run from the PC LAN server is around 18, provided no other
	files are open on the server:
	
	  sessions = 255/14 = 18
	
	The 255-file limitation is a limitation of MS-DOS. Servers that run on different
	operating systems such as OS/2 do not experience this same limitation.
	
	The IBM PC LAN product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.00a 3.00 3.11 3rdparty pclan pc-lan
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
