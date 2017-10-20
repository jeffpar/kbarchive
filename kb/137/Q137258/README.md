---
layout: page
title: "Q137258: Writer/Artist: How to Install to Run from a Network File Server"
permalink: /kb/137/Q137258/
---

## Q137258: Writer/Artist: How to Install to Run from a Network File Server

{% raw %}

	Article: Q137258
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbimu
	Last Modified: 21-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a 
	- Microsoft Fine Artist for Windows, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines the steps required to set up Creative Writer or Fine
	Artist to run from a network file server. The benefit of this type of setup is
	that multiple users can save their documents to the server. In addition,
	multiple users can gain access to the CD-ROM version of the product at the same
	time. (Note that only versions 1.1 and 1.1a are provided on CD-ROM).
	
	MORE INFORMATION
	================
	
	To Install Creative Writer and Fine Artist on the Server
	--------------------------------------------------------
	
	1. From any computer on the network, connect to the folder on the file server
	  where you want to install Creative Writer or Fine Artist. Make sure it has a
	  drive letter assigned to it. This folder is the default location for storing
	  documents created in Creative Writer and Fine Artist.
	
	2. If you are installing version 1.1 or 1.1a, make sure that the CD-ROM drive is
	  shared on the network and that it is also accessible from the individual
	  workstations.
	
	3. Connect to the shared CD-ROM drive and make sure it has a drive letter
	  assigned to it.
	
	4. Run Creative Writer or Fine Artist Setup. In the first screen in the Setup
	  program, click Next. In the second screen, click Network or File Server.
	
	5. In the list of drives, select the appropriate drive for the file server.
	
	6. Click Next and wait for the puzzle to complete. Then, click either Done or
	  Quit.
	
	To Install Creative Writer or Fine Artist on Each Individual Workstation
	------------------------------------------------------------------------
	
	1. From the workstation, connect to the shared MSKids folder (and shared CD-ROM
	  drive if you are using version 1.1 or 1.1a) on the file server and assign a
	  drive letter to each shared resource.
	
	2. Run Netsetup.exe, Maxsetup.exe, or Magsetup.exe, depending upon which product
	  you are installing from the MSKids folder.
	
	3. Click Next. Wait for the puzzle to complete, and then click Done.
	
	4. Whenever you want to run the program, make sure the drive letters and
	  connections are the same as when you first ran Setup.
	
	  NOTE: If your network connections change, repeat steps 1-3.
	
	5. Repeat steps 1-4 on each of the workstations from which you want to run the
	  program.
	
	NOTE: In Microsoft Windows 95/98, you may not need to assign the network drives a
	letter. However, if you have problems after you attempt to start one of the
	programs, you may try assigning a letter to the drives and following the
	previous steps again.
	
	Additional query words: cw fa maggie max novell sharing host administrator
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbimu 
	Technology        : kbHomeProdSearch kbZNotKeyword2 kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a kbFineArtist100 kbFineArtist110 kbFineArtist110a
	Version           : WINDOWS:1.0,1.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
