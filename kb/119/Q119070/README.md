---
layout: page
title: "Q119070: Using More Than Three Printer Ports with Novell 4.x &amp; Windows"
permalink: kb/119/Q119070/
---

## Q119070: Using More Than Three Printer Ports with Novell 4.x &amp; Windows

	Article: Q119070
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are using Novell NetWare version 4.x and Windows, you can have more
	than three printer ports available through Novell.
	
	MORE INFORMATION
	================
	
	Novell Workstation Shell version 3.x (NETX) is limited to three Novell printer
	redirections. With Novell DOS Requester (VLM), you can have up to nine printer
	redirections. To achieve this:
	
	1. Edit the current NET.CFG file and add the following line in the NetWare DOS
	  Requester section
	
	  Network Printers =<x>
	
	  where x equals the number of redirections.
	
	2. Edit the WIN.INI file and add LPT<x>:= (where <x> represents the
	  port number) for each LPT port that you want to add. For example:
	
	        LPT4:=
	        LPT5:=
	        LPT6:=
	        LPT7:=
	        LPT8:=
	        LPT9:=
	
	Novell NetWare is manufactured by Novell, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	All questions about this procedure should be referred to Novell Technical
	Support.
	
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
