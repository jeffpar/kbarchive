---
layout: page
title: "Q127070: Unable to Play Composer Titles on Pioneer Multi-Disk CD"
permalink: /kb/127/Q127070/
---

## Q127070: Unable to Play Composer Titles on Pioneer Multi-Disk CD

{% raw %}

	Article: Q127070
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Beethoven for Windows, versions 1.0, 1.1 
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Pioneer Corporation Multi-Disk CD-ROM drive model numbers
	DRM-6OO, DRM-600A, DRM-602x, and DRM-604x with more than one of the composer CDs
	inserted in the device, the system will not be able to find the CDs, except the
	number 5 CD, and you may receive the error message:
	
	  Please place the correct disk in the drive.
	
	RESOLUTION
	==========
	
	To correct the problem, verify the following lines are present in the specified
	.INI files.
	
	NOTE: Updates can be made by opening the files in a text editor such as Notepad.
	
	SYSTEM.INI
	----------
	
	  [MCI]
	  CDAudio0=mcicda.drv 0
	  CDAudio1=mcicda.drv 1
	  CDAudio2=mcicda.drv 2
	  CDAudio3=mcicda.drv 3
	  CDAudio4=mcicda.drv 4
	  CDAudio5=mcicda.drv 5
	
	CONTROL.INI
	-----------
	
	  [Userinstallable.drivers]
	  CDAudio0=mcicda.drv 0
	  CDAudio1=mcicda.drv 1
	  CDAudio2=mcicda.drv 2
	  CDAudio3=mcicda.drv 3
	  CDAudio4=mcicda.drv 4
	  CDAudio5=mcicda.drv 5
	
	MPLAYER.INI
	-----------
	
	  [Devices]
	  CDAudio0=17, Disk 1
	  CDAudio1=17, Disk 2
	  CDAudio2=17, Disk 3
	  CDAudio3=17, Disk 4
	  CDAudio4=17, Disk 5
	  CDAudio5=17, Disk 6
	
	In addition, remove the following lines from the specified .INI files.
	
	NOTE: Updates can be made by opening the files in a text editor such as Notepad.
	
	SYSTEM.INI
	----------
	
	  [MCI]
	  CDAudio=mcicda.drv
	
	CONTROL.INI
	-----------
	
	  [Userinstallable.drivers]
	  CDAudio=mcicda.drv
	
	MPLAYER.INI
	-----------
	
	  [Devices]
	  CDAudio=17, CD Audio
	
	IMPORTANT: There are two versions of MPLAYER.EXE, and the newer version modifies
	MPLAYER.INI and removes any of the new CD Audio information. As a result, you
	must use the older version of MPLAYER.EXE with the Pioneer Multi-Disk CD-ROM
	drives listed at the top of this article.
	
	To determine which version of MPLAYER.EXE you have, compare the file size:
	
	- OLD MPLAYER.EXE size is 33,312
	
	- NEW MPLAYER.EXE size is 117,536
	
	Video for Windows, version 1.1e includes the NEWER version of MPLAYER.EXE.
	
	MORE INFORMATION
	================
	
	The error is caused by the default settings established by the Pioneer
	installation software.
	
	Do not use Control Panel to reconfigure the [MCI]CD Audio section. Control Panel
	will undo all of the above changes.
	
	For more information about the Pioneer CD-ROM drives, contact Pioneer technical
	support at (800) 872-4159.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm changer drm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100 kbMMBeethoven100 kbMMBeethoven110
	Version           : WINDOWS:1.0,1.1
	
	=============================================================================
	

{% endraw %}
