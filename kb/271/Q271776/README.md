---
layout: page
title: "Q271776: HOWTO: Create MSDN Library Shared Install Point on the Network"
permalink: kb/271/Q271776/
---

## Q271776: HOWTO: Create MSDN Library Shared Install Point on the Network

	Article: Q271776
	Product(s): Microsoft Developer Network
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbMSDN kbDSupport kbGrpDSTools
	Last Modified: 03-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a network share point for the installation
	of the Microsoft Developer Network (MSDN) Library.
	
	MORE INFORMATION
	================
	
	You can use the following steps to create an MSDN Library shared install point
	on the network.
	
	1. Create a folder on the network that will be available to the client
	  computers.
	
	2. Share the folder, and give read permissions to the client computers.
	
	3. Copy all of the files and folders from the MSDN Library Disc 1 to the shared
	  folder.
	
	4. Verify that the MSDN331.inf file is in the root of the shared folder.
	
	5. Copy the content of MSDN subfolder of Disc 2 to the MSDN subfolder in the
	  shared folder.
	
	6. Copy the MSDN332.inf file from Disc 2 to the root of the shared folder.
	
	7. If the MSDN installation set contains a third CD-ROM, copy the MSDN subfolder
	  of Disc 3 to the MSDN subfolder in the shared folder.
	
	8. If the MSDN installation set contains a third CD-ROM, copy the MSDN333.inf
	  file from Disc 3 to the root of the shared folder.
	
	9. From the client computer, map a network drive to the shared folder.
	
	10. From the client computer, launch Setup.exe from the root of the mapped
	  shared folder.
	
	11. Follow the Installation Wizard instructions. We recommend that you select
	  the Typical setup option if the shared folder is to remain available to the
	  clients. This setup requires the least amount of hard disk space from the
	  client computer. If you do not expect to retain the network installation
	  point, then we recommend a full installation because access to the files
	  would be lost.
	
	On the MSDN Library January 2000 edition or later, the NetCopy utility
	(NetCopy.exe) sets up a network install point. You can run NetCopy.exe from the
	MSDN Library Disc 1, and users can connect to the install point and run Setup.
	For more information, consult the Readmedn.htm file on the MSDN Library Disc 1.
	
	For additional information on how to remove a previously installed version of
	MSDN Library, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q240350 HOWTO: Manually Uninstall the MSDN Library
	
	REFERENCES
	==========
	
	For additional information on common installation problems, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q248449 PRB: MSDN Library NetCopy.exe Warns Network Share Is FAT
	
	  Q250334 PRB: MSDN Library Unable to Display Help from Within Visual Studio
	  Programs
	
	Additional query words: netsetup network install flatfiles vssetup msdnsetup
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbMSDN kbDSupport kbGrpDSTools 
	Technology        : kbMSDNSearch kbZNotKeyword2
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
