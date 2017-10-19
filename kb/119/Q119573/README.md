---
layout: page
title: "Q119573: Configuring Windows NT to Print to a Workgroup Add-On Machine"
permalink: /kb/119/Q119573/
---

## Q119573: Configuring Windows NT to Print to a Workgroup Add-On Machine

	Article: Q119573
	Product(s): Microsoft Access Distribution Kit
	Version(s): MS-DOS:3.11
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 27-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to connect to a shared printer on a Workgroup Add-On for MS-DOS
	machine from Windows NT, you receive the following error message:
	
	  Cannot connect to printer: Invalid printer name
	
	You can neither browse the shared resource nor type the full path to connect to
	it; however, you may be able to print to a shared network resource using the
	steps below.
	
	MORE INFORMATION
	================
	
	Printing to a Workgroup Add-On for MS-DOS Print Server from Windows NT
	----------------------------------------------------------------------
	
	1. From within Windows NT, open an MS-DOS session.
	
	2. Type the following command
	
	  " net use lpt<x> \\<servername>\<sharename> " (without the
	  quotation marks)
	
	  where <x> is the port you want to connect to. NOTE: The LPT<x>
	  port does not have to be physically present.
	
	3. From within Print Manager, choose Printer and then choose Create Printer.
	
	4. Install the driver for the printer, and select the same port chosen with the
	  NET USE command at the MS-DOS prompt.
	
	Even though the NET USE command is run within an MS-DOS virtual machine (VM), it
	becomes global to the entire system. Additionally, it is a persistent and
	ghosted connection--it is automatically restarted whenever the operating system
	is restarted. To disable this print functionality, you must open an MS-DOS
	session again and type the following command:
	
	  " net use lpt<x> /d" (without the quotation marks)
	
	This command deletes the persistent connection to the Workgroup Add-On for MS-DOS
	machine.
	
	
	Additional query words: wgao wfw wfwg err msg error message
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311DOS
	Version           : MS-DOS:3.11
	
	=============================================================================
	
