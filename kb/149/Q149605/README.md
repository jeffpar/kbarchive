---
layout: page
title: "Q149605: How to Change the TCP Port for IIS Services"
permalink: /kb/149/Q149605/
---

## Q149605: How to Change the TCP Port for IIS Services

	Article: Q149605
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	It is possible to change the port that Internet Information Server (IIS)
	services will listen to. This can be useful when you try to run multiple web
	servers on the same computer.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Microsoft Internet Information Server Versions 1.0 to 2.0
	---------------------------------------------------------
	
	1. Start Regedt32.exe and locate the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ServiceProvider\ServiceType\W3SVC
	
	2. Find the TCP Port value and double-click it.
	
	3. The DWORD Editor dialog box should appear with the default value (0x50 Hex;
	  80 Decimal) listed. Change the decimal value to the number of the port that
	  you want the World Wide Web Publishing Service to listen to.
	
	  NOTE: You can also follow steps 2 and 3 to change the following services:
	
	   - MSFTPSVC: FTP Publishing Service
	
	   - GOPHERSVC: Gopher Publishing Service
	
	4. Exit Regedt32.exe.
	
	5. Stop and Restart the IIS Services by Using the Internet Service Manager.
	
	Microsoft Internet Information Server Versions 3.0
	--------------------------------------------------
	
	1. Open Internet Service Manager.
	
	2. Double-click on the computer corresponding to the WWW service.
	
	3. On the Service tab, change the TCP Port field to the desired port number.
	
	4. Click OK.
	
	5. Using the Internet Service Manager, stop and restart the IIS Services.
	
	Microsoft Internet Information Server Versions 4.0 to 5.0
	---------------------------------------------------------
	
	1. Open Internet Service Manager.
	
	2. Right-click the Web site that you want to change.
	
	3. Click Properties.
	
	4. Click the Web Site tab.
	
	5. Change the TCP Port Number in the TCP Port edit box (or click Advanced for
	  multiple Port settings).
	
	6. Click OK to save the changes.
	
	
	
	Additional query words: prodiis tcp www ports
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200 kbiis100
	Version           : :1.0,2.0,3.0,4.0,5.0
	
	=============================================================================
	
