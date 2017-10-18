---
layout: page
title: "Q169895: Enabling 128-bit Encryption for Routing and Remote Access"
permalink: kb/169/Q169895/
---

## Q169895: Enabling 128-bit Encryption for Routing and Remote Access

	Article: Q169895
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP3
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you upgrade a Remote Access Service (RAS) server that uses 128-bit encryption
	to Routing and Remote Access Service, you will have only 40-bit demand-dial and
	RAS encryption. The following information explains how to restore 128-bit
	encryption with Routing and Remote Access Service.
	
	MORE INFORMATION
	================
	
	If you have the North American version of Windows NT Server version 4.0 Service
	Pack 3 it is possible to enable strong encryption (128-bit) for Routing and
	Remote Access Services.
	
	Use the following steps to determine which version of encryption that is actually
	installed:
	
	1. Start Windows NT Explorer and find the %Systemroot%\System32\Drivers
	  directory.
	
	2. Right-click on the file Ndiswan.sys, point to Properties, and then click.
	
	3. Click the Version tab from the Properties sheet and look at the Description
	  field.
	
	  The Description of the 40-bit version is:
	
	  MS WAN Wrapper Network Driver (Export Version)
	
	The Description of the 128-bit version is:
	
	  MS WAN Wrapper Network Driver (Domestic Use Only)
	
	To allow for the use of strong encryption in Routing and Remote Access:
	
	1. Apply the North American version of Service Pack 3.
	
	2. Install Routing and Remote Access Services.
	
	3. In the %SystemRoot%\System32\Drivers directory, rename the 40-bit Ndiswan.sys
	  file to Ndiswan.old.
	
	4. Copy the 128-bit Ndiswan.sys file from the North American Service Pack 3 to
	  the %SystemRoot%\System32\Drivers directory.
	
	5. Restart your computer.
	
	
	NOTE: If you install a network adapter or service after you have installed
	Routing and Remote Access Service, and if the adapter or service requires you to
	reinstall Service Pack 3, you must then update Routing and Remote Access
	Service. To update Routing and Remote Access, go to Control Panel, Network,
	Services, select Routing and Remote Access, and then click Update. Type the path
	to the Routing and Remote Access files. When you do this you will have to
	re-copy the 128-bit version of Ndiswan.sys from the service pack.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q174474 Installing RRAS Disables 128-bit RAS Encryption
	
	Additional query words: rras
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP3
	
	=============================================================================
	
