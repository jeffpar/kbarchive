---
layout: page
title: "Q174962: Multimedia: Uninstaller Error"
permalink: /kb/174/Q174962/
---

## Q174962: Multimedia: Uninstaller Error

	Article: Q174962
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbmm kbsetup kbusagekbfaq
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania for Windows, 1992, 1993, 1994, 1995, 1996, 1997 editions 
	- Microsoft Music Central for Windows, 1996, 1997 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to remove the program listed at the top of this article using the
	Add/Remove Programs feature in the Windows Control Panel, you receive an error
	message similar to the following:
	
	  Uninstaller Error! An error occurred while trying to remove Microsoft Music
	  Central 96. Uninstallation has been canceled.
	
	CAUSE
	=====
	
	This occurs if:
	
	- The program compact disc is not in the drive. Insert the disc and try it
	  again.
	
	  -or-
	
	- The program is no longer installed correctly. In this case, manually
	  uninstall the program using the steps below.
	
	RESOLUTION
	==========
	
	To manually uninstall the program, follow these steps:
	
	1. Click Start, point to Programs, and click MS-DOS Prompt.
	
	2. With the program disc in the CD-ROM drive, change to the CD-ROM drive.
	
	  For example, enter the following:
	
	  D:
	
	3. Enter one of the following commands, depending on which program you are
	  removing:
	
	  CINMANIA /UNINSTALL
	
	  -or-
	
	  MUSCNTRL /UNINSTALL
	
	4. You should receive a message similar to the following:
	
	  Microsoft Cinemania 97 has been removed successfully.
	
	MORE INFORMATION
	================
	
	This can happen if the CD-ROM drive letter has changed since the original
	installation of the program. For example, this can happen after you install a
	second hard drive. This could cause your CD-ROM drive designation to change from
	drive D to drive E. If this happens, uninstall will fail.
	
	Additional query words: Encarta World Atlas kbimu multi multi-media media mm
	
	======================================================================
	Keywords          : kbmm kbsetup kbusage kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbMusicCentral kbMusicCentral1996 kbMusicCentral1997
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
