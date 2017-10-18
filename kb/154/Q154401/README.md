---
layout: page
title: "Q154401: Errors on NetWare File Server When Using NWSERVER"
permalink: kb/154/Q154401/
---

## Q154401: Errors on NetWare File Server When Using NWSERVER

	Article: Q154401
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet msnets win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up a computer to use the Microsoft File and Print Sharing for
	NetWare service, you may see the following notification message on your NetWare
	4.x server console:
	
	  Server workgroup address has changed from
	  000900000:0020af7438c4:5055 to
	  000900000:00608cbbb2b1:0555
	
	  Information came from router at 00608cbbb2b1
	
	NOTE: You may see different addresses from those listed above.
	
	CAUSE
	=====
	
	The File and Print Sharing for NetWare service broadcasts a SAP type of 0x67b or
	0x67c to allow clients to browse the server. To the NetWare server, this
	broadcast of the workgroup name appears as a server name.
	
	When a new browse master is elected, the NIC address in the SAP broadcast changes
	(reflecting the address of the NIC in the new browse master) and the NetWare
	server displays a notification that the address of that server has changed.
	
	RESOLUTION
	==========
	
	Browse masters can be Windows for Workgroups, Windows 95, or Windows NT
	computers. Use the appropriate resolution for the computers on your network.
	
	Windows 95 Computers Only
	-------------------------
	
	Set one of the Windows 95 computers to be a dedicated browse master.
	
	NOTE: If the computer that is acting as the browse master goes offline, your
	network will lose browsing capabilities.
	
	For computers using the File and Print Sharing for NetWare service, follow these
	steps to force a computer to act as the browse master:
	
	1. In Control Panel, double-click Network.
	
	2. Click the File and Print Sharing for NetWare service, and then click
	  Properties.
	
	3. Click Workgroup Advertising, and set the value to Enabled: Preferred Master.
	
	To prevent a computer from acting as the browse master:
	
	1. In Control Panel, double-click Network.
	
	2. Click the File and Print Sharing for NetWare service, and then click
	  Properties.
	
	3. Click Workgroup Advertising, and set the value to Enabled: Will Not Be
	  Master.
	
	For computers using the File and Print Sharing for Microsoft Networks service,
	follow these steps to force a computer to act as the browse master:
	
	1. In Control Panel, double-click Network.
	
	2. Click the File and Print Sharing for Microsoft Networks service, and then
	  click Properties.
	
	3. Click Browse Master, and set the value to Enabled.
	
	To prevent a computer from acting as the browse master:
	
	1. In Control Panel, double-click Network.
	
	2. Click the File and Print Sharing for Microsoft Networks service, and then
	  click Properties.
	
	3. Click Browse Master, and set the value to Disabled.
	
	Windows 95 and Windows for Workgroup Computers
	----------------------------------------------
	
	Set one of the Windows 95 computers as the browse master using the instructions
	above.
	
	To prevent a Windows for Workgroups computer from acting as the browse master,
	edit the System.ini file in the Windows folder and add the following line to the
	[Network] section of the file:
	
	  MaintainServerList=No
	
	Windows 95 and Windows NT Computers
	-----------------------------------
	
	Windows NT computers automatically become browse masters if they are involved in
	an election. For this configuration, you need to disable the browse master
	service on Windows 95 computers as described above.
	
	Windows 95, Windows NT, and Windows for Workgroup Computers
	-----------------------------------------------------------
	
	Windows NT computers automatically win the election for browse master, so you
	need to disable the browse master service on all other computers as described
	above.
	
	MORE INFORMATION
	================
	
	Microsoft suggests that computers using the File and Print Sharing for NetWare
	service be members of the same workgroup. This decreases the number of SAP
	broadcasts that are generated because only one SAP broadcast is generated for
	each workgroup.
	
	
	Additional query words: nwserver vserver
	
	======================================================================
	Keywords          : 3rdpartynet msnets win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
