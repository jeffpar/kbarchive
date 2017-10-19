---
layout: page
title: "Q94752: Problems Running Windows 3.1 and Novell NetWare Lite 1.1"
permalink: /kb/094/Q94752/
---

## Q94752: Problems Running Windows 3.1 and Novell NetWare Lite 1.1

	Article: Q94752
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may find one or more of the following problems if you run Microsoft Windows
	on a Novell NetWare Lite version 1.1 workstation:
	
	- Print jobs may not begin printing until you exit Windows.
	
	- Other workstations may appear to lock up until you exit Windows on the
	  workstation that is running Windows.
	
	CAUSE
	=====
	
	NetWare Lite is not a supported network for Microsoft Windows versions 3.0 and
	3.1. For further information on integrating Windows 3.1 and NetWare Lite,
	contact Novell.
	
	WORKAROUND
	==========
	
	Novell has suggested the following interim solutions for these problems:
	
	- Make sure that the Exclusive in Foreground setting is NOT selected in the 386
	  Enhanced section of the Control Panel.
	
	- Remove any references to programs in the LOAD or RUN settings of the WIN.INI
	  file.
	
	- Remove any programs that are in the Startup group in Program Manager.
	
	NOTE: The above information may or may not work in each specific case. Novell is
	aware of the problem and is currently working on this issue. The preceding
	information is to be regarded as a temporary workaround.
	
	The Novell NetWare Lite product included here is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	REFERENCES
	==========
	
	NetWare Lite Automated Fax System Document 204
	
	Additional query words: light 3.1 3.10 3rdparty win31 hangs locks freezes personal netware
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
