---
layout: page
title: "Q249713: Encarta 2000: How to Share Monthly Updates"
permalink: kb/249/Q249713/
---

## Q249713: Encarta 2000: How to Share Monthly Updates

	Article: Q249713
	Product(s): Microsoft Home Multimedia Titles
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kbimu
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 2000 
	- Microsoft Encarta Encyclopedia Deluxe 2001 for Windows 
	- Microsoft Encarta Reference Suite 2000 
	- Microsoft Encarta Reference Suite 2001 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run Microsoft Encarta Encyclopedia 2000 from a shared folder, CD-ROM
	drive, or DVD-ROM drive on a network, you need to copy the monthly updates files
	to the server?s hard disk to share the monthly updates over the network.
	
	MORE INFORMATION
	================
	
	To download the monthly updates for Encarta Encyclopedia 2000, visit the
	following Encarta Web site:
	
	  http://encarta.msn.com/downloads
	
	To prepare the server to share the Monthly Updates files:
	
	1. Create an Updates folder on the server.
	
	2. Share the Updates folder.
	
	3. On the network administrator's local computer, install Encarta Encyclopedia
	  2000.
	
	  NOTE: To install Encarta Encyclopedia on a Microsoft Windows NT 4.0
	  Server-based computer, you must log on to the computer as an Administrator.
	
	4. Copy both of the following folders from the network administrator's local
	  computer into the Updates folder that you created in step 1:
	
	  \YBBDAT
	
	  This folder contains the monthly updates information file, Ybbst00a.dat.
	
	  \Update 2000
	
	  This folder contains the Yearbook article updates (*.ybk) and new Web Link
	  (*.ewl) files.
	
	The Update 2000 folder should contain the following files:
	
	  Artlnk.ewl
	  Catlnk.ewl
	  Lnkoff.ewl
	  Master.ewl
	  Mvfilter.ewl
	  Newlnk00.ewl
	  Urldata.ewl
	  Yb699a.ybk
	
	NOTE: Each client that runs Encarta Encyclopedia 2000 must have Read permission
	for the Updates folder.
	
	Additional query words: multi multi-media media mm ee2k ers2k
	
	======================================================================
	Keywords          : kbenv kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc2000 kbEncartaReference2000 kbEncartaReference2001
	Version           : :; WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	
