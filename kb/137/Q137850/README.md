---
layout: page
title: "Q137850: Using IPX/SPX Support Driver with Microsoft Network Client 3.0"
permalink: /kb/137/Q137850/
---

## Q137850: Using IPX/SPX Support Driver with Microsoft Network Client 3.0

{% raw %}

	Article: Q137850
	Product(s): Microsoft Windows NT
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	Microsoft Network Client for MS-DOS allows you to use Novell's IPXODI-based
	IPX/SPX protocol and MLID to access Microsoft network resources.
	
	To access both Microsoft network resources and Novell servers from other MS-
	DOS-based clients, you must run multiple protocols and Novell's ODINSUP
	driver (which allows you to use the Novell MLID). This configuration uses
	more conventional memory than the MS-DOS Network Client 3.0 and the IPX/SPX
	Support Driver.
	
	To Configure Microsoft Network Client for MS-DOS to use the IPX/SPX Support
	Driver and Novell's MLID and IPX/SPX so it can communicate on a Microsoft
	NetBIOS based network:
	
	1. Install Novell's IPXODI networking support and verify it is functioning
	  properly.
	
	2. Run Setup from the Microsoft Network Client for MS-DOS 3.0 disks or from the
	  \CLIENTS\MSCLIENT\NETSETUP directory on the Windows NT Server CD-ROM disc.
	
	3. Setup will automatically select the IPX/SPX Support Driver as both the
	  Network Card driver and the default protocol. Accept the defaults.
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : 3.00
	
	=============================================================================
	

{% endraw %}
