---
layout: page
title: "Q254948: MapPoint 2001: How to Install and Run Over a Network"
permalink: /kb/254/Q254948/
---

## Q254948: MapPoint 2001: How to Install and Run Over a Network

{% raw %}

	Article: Q254948
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2001 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install and run Microsoft MapPoint 2001 over a
	network.
	
	MORE INFORMATION
	================
	
	To install and run MapPoint 2001 over a network:
	
	1. Create an installation folder on the network server. The folder name must not
	  include any spaces.
	
	  For example, you could name the folder "MPInstall".
	
	2. Insert the MapPoint 2001 Run CD-ROM into the CD-ROM drive.
	
	3. Copy the contents of the MapPoint 2001 Run CD-ROM to the folder that you
	  created in step 1.
	
	4. Insert the MapPoint 2001 Setup CD-ROM into the CD-ROM drive. Press and hold
	  down the SHIFT key as you insert the CD-ROM to prevent Setup from starting
	  automatically.
	
	5. Copy the contents of the MapPoint 2001 Setup CD-ROM to the folder that you
	  created in step 1.
	
	6. In the Confirm Folder Replace dialog box, click "Yes to All".
	
	  NOTE: You cannot copy the contents of the MapPoint 2001 CD-ROM set to file
	  servers that do not support long file names.
	
	7. On the client computer, map a network drive to the folder on the server in
	  which the MapPoint 2001 files are located.
	
	  NOTE: MapPoint 2001 may not run correctly over some networks unless the folder
	  from which MapPoint 2001 is to be run is mapped using a drive letter (as
	  opposed to mapping the folder using a Universal Naming Convention (UNC) path,
	  such as "\\servername\foldername").
	
	8. From the client computer, double-click the installation folder on the server.
	
	9. Double-click Setup.exe.
	
	10. Follow the instructions on the screen to install MapPoint 2001 on the client
	  computer.
	
	11. In the Microsoft MapPoint folder on the client computer, double-click
	  Mappoint.exe.
	
	Additional query words: mp2001 map point shared setup
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2001
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
