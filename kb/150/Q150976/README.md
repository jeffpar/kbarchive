---
layout: page
title: "Q150976: XFOR: How to Create a Resync.glb File From an Exchange DSS"
permalink: /kb/150/Q150976/
---

## Q150976: XFOR: How to Create a Resync.glb File From an Exchange DSS

	Article: Q150976
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbinterop kbusage
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	When a Microsoft Exchange Server is acting as a Microsoft Mail Directory
	Synchronization Server (DSS) it may be useful to generate a Resync.glb file to
	synchronize an MSMail requestor. This article explains how to generate the
	Resync.glb file from the DSS.
	
	MORE INFORMATION
	================
	
	The following procedure describes how to configure the Windows NT Server
	registry to generate the dirsync master list (Resync.glb) for export.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Regedt32.exe.
	
	2. Open the following registry keys:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeDX
	
	3. Open the Edit menu.
	
	4. Click Add Value.
	
	5. In the Value Name box, type "ResyncConnectionRDNs" (without the quotation
	  marks).
	
	6. In the Data type box, click REG_MULTI_SZ.
	
	7. Click OK.
	
	8. In the Data text box, type the Display Name from Exchange Administration or
	  System Manager, common name, or RDN, given to the Remote Dirsync Requestor
	  object for which you are to generate the master list. If there is more than
	  one postoffice, enter each postoffice name followed by pressing ENTER.
	
	9. Click OK.
	
	10. Stop and restart the Microsoft Exchange Directory Synchronization service.
	
	At this time, the Resync.glb file is created in the \Exchsrvr\Dxadata directory.
	In addition, the KEY that was added to the registry is removed.
	
	After the manual directory synchronization cycle has completed, you need to copy
	the Exchsrvr\Dxadata\Resync.glb file to an external storage device (for example,
	disk or tape device) for transport to the remote dirsync requestor. The file can
	also be copied to the requestor via the network.
	
	When the Resync.glb file is received at the remote dirsync requestor, it needs to
	be imported manually. The remote requestor administrator msut do the following:
	
	1. Copy the Resync.glb file to the remote requestor's GLB directory.
	
	2. To import the list immediately, run the Import utility with the -q
	  command-line option. For information on using the Import utility, see the
	  Microsoft Mail for PC Networks Administrator's Guide.
	
	
	Additional query words: synchronization
	
	======================================================================
	Keywords          : kbinterop kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :4.0,5.0,5.5
	
	=============================================================================
	
