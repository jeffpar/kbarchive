---
layout: page
title: "Q89105: Novell Printing Configurations Supported by Windows"
permalink: kb/089/Q89105/
---

## Q89105: Novell Printing Configurations Supported by Windows

	Article: Q89105
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes the printing configurations that Microsoft Windows
	supports when you print on a Novell NetWare network.
	
	For testing purposes, Microsoft recommends that you use one of the supported
	configurations.
	
	MORE INFORMATION
	================
	
	Printing to a Printer Connected to Your Computer
	------------------------------------------------
	
	Printing to a printer connected by a standard LPT port to your local computer is
	a supported configuration
	
	NOTE: This does NOT mean that one workstation can print to a printer connected to
	another workstation; this configuration is not supported. To print from one
	workstation to another under NetWare a value-added-process (VAP) is needed, such
	as RPRINTER, LANSpool, PS-Print, Hot Print, and Network Assistant Plus. For
	support for using these products, contact the manufacturer.
	
	Printing to a Printer Connected to a Dedicated Server
	-----------------------------------------------------
	
	Printing to a printer connected to a dedicated server is a supported
	configuration.
	
	NOTE: This does NOT mean a server that is both a workstation and a server. If it
	is, then it is a non-dedicated server and the configuration is not supported.
	
	Printing to a Printer Connected to a Dedicated Print Server
	-----------------------------------------------------------
	
	Printing to a printer connected to a dedicated print server is also supported.
	
	If you are attempting to print in a different configuration, query on the
	following words in the Microsoft Knowledge Base:
	
	  "tshoot" (without the quotation marks) and "printsharing" (without the
	  quotation marks)
	
	
	Additional query words: 3.10 win31 3.0a 3.00a 3.0 3.00 peer-to-peer program brightworks novell 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
