---
layout: page
title: "Q150047: NetWare Drives Inaccessible to CIM and MMTA"
permalink: kb/150/Q150047/
---

## Q150047: NetWare Drives Inaccessible to CIM and MMTA

	Article: Q150047
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When multiple processes contend for a drive resource through the Novell NetWare
	redirector (NWRDR), applications may intermittently fail to access the drive
	resource.
	
	For example, when you use the Windows NT Multitasking MTA (message transfer
	agent) (MMTA) configured with Compaq Insight Manager, the MMTA may fail when it
	attempts to connect to Microsoft Mail postoffices installed on a NetWare server.
	If this happens, the drive resource cannot be accessed until Client Services for
	NetWare is restarted or the system rebooted. Failure may also occur if, while
	the MMTA is accessing dynamic drives for data, you select a drive in File
	Manager or perform various file I/O using another process.
	
	When the MMTA tries to use an inaccessible drive for connecting to the
	postoffices on NetWare servers, the following error message may be displayed
	continuously:
	
	  NT MMTA:
	
	  Drive is used, local, or greater than last drive
	
	When you try to connect to a NetWare server from the command prompt or batch
	file, the following error may be displayed:
	
	  C:\users\default>net use X: \\NetwareServer\share
	
	  System error 85 has occurred. The local device name is already in use.
	
	The MMTA service operates successfully as long as another process does not create
	a drive-access conflict. Also, the problem does not occur when you connect to
	Microsoft Mail postoffices located on Microsoft Windows NT servers accessed
	through the Server Message Block (SMB) redirector.
	
	NOTE: Although this example discusses File Manager, Compaq Insight Manager, and
	MMTA for Windows NT, the problem can occur with other applications operating on
	Windows NT using Client Services for NetWare and NWRDR.
	
	CAUSE
	=====
	
	During drive connection and disconnection I/O, the Windows NT CSRSS drive table
	entry representing the NetWare drive connection becomes corrupted. A NetWare
	client connection established under one process, such as the MMTA, cannot be
	accessed by another process, such as through File Manager; if access is
	attempted, an Access Denied message will be returned. The NWRDR on Client
	Services for NetWare assigns a separate user context for each process. This is
	not true for the SMB redirector, RDR (redirector). When multiple processes begin
	to contend for a drive, the drive table entry can become corrupted. Contention
	can occur for a number of reasons. The Windows NT MMTA connects and disconnects
	dynamic drive resources. CIM periodically accesses drive resources to obtain
	information. Also, File Manager can be used to access drive resources.
	
	Any of these operations accessing a common drive resource simultaneously can
	result in drive resource contention. If a failure occurs, Client Services for
	NetWare must be restarted to access the orphaned drive letter. The drive
	resource can no longer be accessed even though the drive appears to be
	available.
	
	RESOLUTION
	==========
	
	Basesrv.dll has been corrected to prevent NetWare drive resources from becoming
	orphaned or corrupted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	Q148348PC NTMMTA MMTA: Fails with Compaq Insight Manager
	
	
	Q146122PC NTMMTA: Error 2140 When You Try to Start Instance
	
	Additional query words: 3.51 prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
