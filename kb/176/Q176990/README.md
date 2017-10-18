---
layout: page
title: "Q176990: SMSINST: Installer Does Not Install Printers"
permalink: kb/176/Q176990/
---

## Q176990: SMSINST: Installer Does Not Install Printers

	Article: Q176990
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 03-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Systems Management Server Installer version 1.0 does not currently
	have functionality allowing it to add printers to Windows NT and Windows 95
	systems. Using the repackage feature is not sufficient. Microsoft Technical
	Support does not support using the Systems Management Server Installer version
	1.0 for adding printers. The purpose of this article is to present other options
	for adding printers to client systems.
	
	MORE INFORMATION
	================
	
	There are other options for automatically adding a printer to a system,
	including, but not limited to, the AddPrinter function and the Con2prt utility.
	
	AddPrinter Function
	-------------------
	
	This is the programmatic method for adding a printer, appropriate for use with
	Windows NT and Windows 95. Using this method, you can write a custom application
	to add printers automatically. See the Microsoft Platform SDK for more
	information on implementing this function.
	
	Con2prt.exe
	-----------
	
	This is a command line utility from the Microsoft Windows Zero Administration Kit
	(ZAK) for Windows NT Workstation. This utility allows a network printer
	connection to be added at a command line on a computer running Windows NT
	Workstation. It requires no user interaction and can be delivered through normal
	Systems Management Server software distribution as a batch file or within a
	Systems Management Server Installer script (by using the Execute Program script
	item). Please note that this utility works for Windows NT only. There is no
	equivalent executable program currently available for Windows 95. For more
	information on this utility, see the Zero Administration Kit Version 1.0,
	"Administrator's Guide," Appendix B, Utilities and Commands.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
