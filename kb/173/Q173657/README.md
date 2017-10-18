---
layout: page
title: "Q173657: XCLN: Outlook Auto Upgrade Fails to Start"
permalink: kb/173/Q173657/
---

## Q173657: XCLN: Outlook Auto Upgrade Fails to Start

	Article: Q173657
	Product(s): Microsoft Exchange
	Version(s): 8.02
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 24-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, version 8.02, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, make sure you understand how to restore it if a problem
	occurs. For information about how to do this, view the "Restoring the Registry"
	Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in
	Regedt32.exe.
	
	After you modify an Outlook 8.01 administrative installation point to provide
	auto upgrade functionality and you upgrade the administrative installation point
	to the next version of Outlook with Adminupd.exe, Outlook users are not prompted
	for auto upgrade when they start the program.
	
	CAUSE
	=====
	
	The Adminupd.exe program that upgrades an existing Outlook administrative
	installation point does not increment the Application Version entry of the
	Outlook.stf file in the administrative installation point. The client software
	will not prompt for auto upgrade if the version of the client is the same or
	earlier than the version number reflected in the Application Version entry in
	the Outlook.stf file of the Outlook administrative installation point.
	
	WORKAROUND
	==========
	
	After you upgrade the Outlook administrative installation point with
	Adminupd.exe, you must manually update the Application Version entry in the
	Outlook.stf file in the Outlook administrative installation point to a number
	higher than it was originally (for example, 97.00.00.0221 to 97.00.00.0222).
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	The README.WRI: Microsoft Exchange 5.0 Client Release Notes state that it is
	possible to implement automatic upgrade functionality for Outlook clients by
	modifying the Outlook.srg file in the Outlook administrative installation
	point.
	
	Clients installed from an Outlook administrative installation point with this
	modified Outlook.srg file will have an added registry entry that causes the
	client to check for updated versions of the Outlook client every time the
	Outlook client is started. The text from README.WRI: Microsoft Exchange 5.0
	Client Release Notes that describes this functionality is as follows:
	
	1.1.14 Enabling Microsoft Outlook 97 Version 8.01 Automatic Upgrade
	If you use a shared installation point for Microsoft Outlook 97 version
	8.01 clients, you can enable the automatic upgrade feature by adding
	the following line to the end of the Outlook.srg file in the
	\Program files\Microsoft Office\Office directory:
	
	[HKEY_LOCAL_MACHINE\software\microsoft\office\8.0\outlook\upgradepath]
	"serverpath" = "<\\\\server\\share\\subdir>"
	
	Note: Do not add a trailing backslash. All backslashes must be doubled.
	
	An Outlook 8.01 administrative installation point can be updated as follows
	(from ftp://ftp.microsoft.com/bussys/exchange/exchange-
	public/fixes/Eng/Exchg5.0/Sp1/README.txt):
	
	2.3.1 Administrator Installation Instructions for Outlook Client
	Installation Point
	To install Service Pack 1 on an existing Outlook Administrator installation
	point from a compressed file:
	1. Create an Outlook directory.
	2. Change to the Outlook directory and create an Admin directory.
	3. Download the compressed Outlook Admin file appropriate for your hardware
	platform into the Admin directory.
	Select the appropriate file as indicated in the following list:
	
	  Windows 95 Outlook Administrator SP1_50A9.EXE
	  Windows NT 3.51 Outlook Administrator SP1_50A3.EXE
	  Windows NT 4.0 Outlook Administrator SP1_50A4.EXE
	
	4. At the Windows NT command prompt, switch to the Admin directory and type
	the file name. (Example: SP1_50A4)
	5. Double-click AdminUpd.exe, and then follow the instructions displayed on
	the screen.
	Note: This Service Pack will not update an Outlook version 8.0
	installation.
	
	Additional query words: upgrade
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbOutlook97Search kbZNotKeyword3
	Version           : :8.02
	Solution Type     : kbpending
	
	=============================================================================
	
