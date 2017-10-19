---
layout: page
title: "Q96947: How To: Using a NetWare Drive Without a Login Script in WFWG"
permalink: /kb/096/Q96947/
---

## Q96947: How To: Using a NetWare Drive Without a Login Script in WFWG

	Article: Q96947
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you troubleshoot a problem involving Novell NetWare, you may need to load
	Windows for Workgroups without the Novell User or System login scripts and yet
	still have access to a NetWare network drive(s).
	
	It is possible to have access to the Novell network resources by using the Attach
	option in File Manager. This may help you troubleshoot problems caused by
	incorrect or outdated drivers located in mapped or search directories. The
	advantage of this procedure is that you can exit to an MS-DOS command prompt and
	type "set" (without the quotation marks) to display environment variables
	without changing the path. (Some Novell login scripts may significantly alter
	the path.)
	
	MORE INFORMATION
	================
	
	To use a NetWare network drive without running a login script, use the following
	procedure:
	
	NOTE: This is NOT an automatic login procedure. In fact, it bypasses the Novell
	login procedure entirely.
	
	1. With MSIPX.COM and NETX.COM loaded normally, start Windows for Workgroups
	  without going to the NetWare login drive (Q) and logging on.
	
	2. Start File Manager. (The NetWare login drive is the only available NetWare
	  network drive.)
	
	3. From the File menu, choose Disk, choose the Connect Network Drive button.
	
	4. In the Connect Network Drive dialog box, select the NetWare button.
	
	5. In the Network Drive Connections dialog box, the default NetWare drives are
	  displayed. The only NetWare network drive available should be Q (depending on
	  the LASTDRIVE= statement in your CONFIG.SYS file). Choose the Browse button.
	
	6. In the Browse Connections dialog box, choose the Attach button.
	
	7. In the Attach File Server dialog box, select a server and then enter your
	  User Name and Password (if required). Choose the OK button.
	
	8. The OK button is unavailable when you return to the Browse Connections dialog
	  box. This is normal behavior; choose the Cancel button, then choose the
	  Browse button again.
	
	
	9. In the Browse Connections dialog box, select the server in the
	  Servers/Volumes box. The available directories are then displayed in the
	  Directories box. Select a directory and then choose the OK button or press
	  ENTER.
	
	10. In the Network Connections dialog box, select an available drive letter,
	  choose the Map button, then choose the Close button.
	
	11. When you return to File Manager, the new mapped drive is displayed as a
	  network drive icon.
	
	Additional query words: 3.1 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
