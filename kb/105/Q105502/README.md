---
layout: page
title: "Q105502: CAS Modem Fails to Receive Faxes with WFWG 3.11"
permalink: /kb/105/Q105502/
---

## Q105502: CAS Modem Fails to Receive Faxes with WFWG 3.11

	Article: Q105502
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are using Microsoft Windows for Workgroups version 3.11 with 32-bit file
	access enabled and you have an Intel CAS fax modem, your modem may fail to
	receive faxes.
	
	CAUSE
	=====
	
	Intel CAS fax modems require a driver called CASMGR.EXE, which can be run from
	the AUTOEXEC.BAT file or from the MS-DOS command prompt. This driver is
	responsible for communicating API calls from fax applications to the CAS modem
	and for sending information from the fax modem to the fax applications. When the
	CAS fax modem receives a fax, CASMGR.EXE spools this information to the hard
	disk drive. CASMGR.EXE opens the file in a virtual machine (VM) and obtains a
	handle. It then uses the handle to write to the file as data comes in from the
	fax board (often at interrupt time).
	
	The problem occurs if a second VM is active at the same time. The second VM is
	using a handle that is only valid for the first VM.
	
	NOTE: By default, Windows for Workgroups 3.11 starts a second VM to run the
	server; therefore, this problem is likely to occur.
	
	WORKAROUND
	==========
	
	To work around this problem, you can either:
	
	- Disable 32-bit file access in Windows for Workgroups.
	
	  -or-
	
	- Remove the CASMGR.EXE line from your AUTOEXEC.BAT file, and add it to your
	  WINSTART.BAT file. To create a WINSTART.BAT file, use a text editor, such as
	  Notepad, to create a file with that name; type the CASMGR.EXE line that you
	  cut from your AUTOEXEC.BAT file into the new WINSTART.BAT file; save the
	  WINSTART.BAT file in your Windows directory, and restart your system.
	  WINSTART.BAT loads the CASMGR.EXE file into the system VM only, and ensures
	  that all its file input/ output occurs from that VM.
	
	  NOTE: This workaround prevents any MS-DOS-based applications that require
	  CASMGR.EXE from accessing the fax modem.
	
	  WARNING: If you use a WINSTART.BAT file with Microsoft Windows version 3.1 in
	  386 enhanced mode, the system may stop responding (hang) when you exit
	  Windows. The only solution to this problem is to delete or rename
	  WINSTART.BAT and load the programs in WINSTART.BAT from the AUTOEXEC.BAT
	  file.
	
	
	MORE INFORMATION
	================
	
	For more information on WINSTART.BAT, refer to page 531 of the Microsoft Windows
	"User's Guide" for version 3.1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: wincomm 3.11 VFAT EFAX
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
