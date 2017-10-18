---
layout: page
title: "Q164695: XFOR: CCMC Stops Responding"
permalink: kb/164/Q164695/
---

## Q164695: XFOR: CCMC Stops Responding

	Article: Q164695
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore 
	it if a problem occurs. For information on how to do this, view the 
	"Restoring the Registry" online Help topic in Regedit.exe or the "Restoring 
	a Registry Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When Microsoft Exchange Server is installed to directory path that contains a
	space, the Connector for Lotus cc:Mail (CCMC) stops responding. For example, the
	following directory path causes this problem:
	
	  C:\Program Files\exchsrvr\ccmcdata
	
	When the CCMC store is installed in a directory path that causes the cc:Mail
	Import and Export programs to ignore the Import.ini and Export.ini settings and
	prompt for the path, Ntvdm.exe will be locked at 95 percent or more CPU
	utilization, or will stop responding with error 3 reported in Event ID 70.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Install Exchange Server to a directory path that does not contain a space.
	
	2. Update the registry to point to the MS-DOS 8.3 name for the directory. The
	  registry key is located at:
	
	     HKEY_LOCAL_Machine\System\CurrentControlSet\Services
	     \MSExchangeCCMC\Parameters\ 
	 
	
	  The registry entry that is updated is:
	
	     Connector Store Path
	 
	
	  You can find the MS-DOS file name for a directory by highlighting the
	  directory and selecting the properties. The MS-DOS Name is located in the
	  middle of the General tab of the property page.
	
	MORE INFORMATION
	================
	
	This behavior is by product design.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q166045 XFOR: ccMail Connectors Event ID 70
	
	Additional query words: hang
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	
	=============================================================================
	
