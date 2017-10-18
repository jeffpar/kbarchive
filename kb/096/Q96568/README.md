---
layout: page
title: "Q96568: Using SQL Server over Novell NetWare with WFWG"
permalink: kb/096/Q96568/
---

## Q96568: Using SQL Server over Novell NetWare with WFWG

	Article: Q96568
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbnetwork kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use Microsoft SQL Server on a Novell NetWare network with Microsoft Windows
	for Workgroups clients, SQL Server 4.2b is required. This product contains the
	Microsoft Network Integration Kit that allows SQL Server DB- Library clients
	(MS-DOS, OS/2, or Windows) and ODBC clients to connect to SQL Server using
	native SPX connections over NetWare, as opposed to using the Novell named-pipe
	implementation.
	
	
	The Novell OS/2 requester client software (DOSNP.EXE), a terminate-
	and-stay-resident (TSR) program that allows use of named pipes with IPX.COM, is
	no longer required to connect to SQL servers on Novell NetWare networks.
	
	MORE INFORMATION
	================
	
	For more information about the Microsoft Network Integration Kit for Novell,
	contact your local Microsoft-authorized reseller or call the Microsoft Sales
	Information Center (MSIC) at (800) 426-9400.
	
	Additional query words: 1.0 1.00 3.10 LAN Manager LANman sequel mspix.exe DOSnp novell 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
