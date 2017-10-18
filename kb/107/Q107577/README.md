---
layout: page
title: "Q107577: Using Novell NetWare's RPRINTER with WFWG 3.11"
permalink: kb/107/Q107577/
---

## Q107577: Using Novell NetWare's RPRINTER with WFWG 3.11

	Article: Q107577
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.11
	
	WINDOWS
	
	kbprint kbdisplay kb3rdparty kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	This article contains information about the use of Windows for Workgroups
	with third-party products or configurations that have not been tested and
	are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SUMMARY
	=======
	
	With Windows for Workgroups 3.11, RPRINTER (or NPRINTER in Novell NetWare 4.01)
	can be used successfully under certain conditions. If you run the RPRINTER
	utility without print sharing, RPRINTER, Windows for Workgroups 3.11, and
	NetWare 3.x or 4.x can coexist with minimal difficulty, as long as you do not
	send simultaneous print jobs. Problems may occur if multiple print jobs are sent
	from different workstations and you are sharing printers. On larger networks,
	this is not realistic. The only workaround is to use Windows for Workgroups
	print- sharing capabilities without RPRINTER or vice versa.
	
	  NOTE: With Windows for Workgroups 3.1, RPRINTER could not be used
	  successfully. According to Novell's Tech Bulletin TB.P.303, titled "Microsoft
	  Windows for Workgroups and Novell NetWare," using RPRINTER with Windows for
	  Workgroups 3.1 would cause the machine to stop responding (hang). Novell has
	  no solution or workaround at this time.
	
	MORE INFORMATION
	================
	
	Although you can use RPRINTER with Windows for Workgroups 3.11, you may
	encounter problems. For example, if you share a local printer that is being
	serviced by RPRINTER and several Windows for Workgroups workstations send
	multiple print jobs simultaneously to this shared printer, the following error
	message may appear:
	
	  <Windows File Server> is attempting to use the LPTx device which
	  Windows is currently using. Do you want 'Windows File Server' to take control
	  of the device?
	
	  YES or NO?
	
	If you respond YES, the jobs queued in Print Manager should continue printing,
	followed by those in the NetWare queue; however, choosing YES causes the screen
	to turn black (and remain so after the print jobs have been completed). Pressing
	CTRL+ALT+DEL and then ESC may restore the video display.
	
	Even if you don't receive this error message, print jobs may be mixed together
	and/or have garbled output from the two separate print queues.
	
	NOTE: This error message may also appear if you are you use the NPRINTER file in
	Novell version 4.01.
	
	REFERENCES
	==========
	
	Novell's Tech Bulletin TB.P.303
	
	Additional query words: 3.11 incompatible compatible LPT1 LPT2 LPT3 not supported blue screen 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
