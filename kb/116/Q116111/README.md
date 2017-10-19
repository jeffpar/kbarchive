---
layout: page
title: "Q116111: Parallel and Printing Problems After Upgrading to WFWG 3.11"
permalink: /kb/116/Q116111/
---

## Q116111: Parallel and Printing Problems After Upgrading to WFWG 3.11

	Article: Q116111
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some hardware may have problems with the Virtual Parallel Device (VPD) used by
	Windows for Workgroups 3.11. Symptoms include garbled printing, hanging print
	queues, and the inability to use fax drivers or parallel sound devices.
	
	Microsoft has received reports of printing problems on Gateway 2000 computers and
	reports of problems on parallel devices with software that requires direct
	access to the parallel ports, such as Logitech Soundman and Hewlett-Packard (HP)
	LaserJet Fax.
	
	WORKAROUND
	==========
	
	Method 1:
	
	If you do not use your LPT: port for local printing, you can disable
	device-contention checking by removing the following line from your Windows
	SYSTEM.INI file:
	
	       DEVICE=*VPD
	
	Disabling VPD does not affect the ability of Windows for Workgroups to print over
	the network. However, if you are printing locally from an MS-DOS-based
	application at the same time as Windows is trying to access the parallel port,
	no warning appears and printouts may have garbled characters, or you may
	experience network communication problems.
	
	Method 2:
	
	In Control Panel, choose the 386 Enhanced Mode icon. To turn off VPD trapping for
	that port, choose the Never Warn option for the port in question.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
