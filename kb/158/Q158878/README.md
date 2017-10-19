---
layout: page
title: "Q158878: Msbatch.inf Parameters: Installing Network Monitor Agent"
permalink: /kb/158/Q158878/
---

## Q158878: Msbatch.inf Parameters: Installing Network Monitor Agent

	Article: Q158878
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install the Network Monitor agent using the
	Msbatch.inf file for batch installations of Windows 95.
	
	MORE INFORMATION
	================
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	Using the Infinst.exe tool from the Admin\Nettools\Netsetup folder on the Windows
	95 CD-ROM, point to the Admin\Nettools\Netmon folder. This incorporates all the
	settings and files into the network Setup.
	
	Once this process is complete, get the updated Nm95setp.dll file.
	
	In the Msbatch.inf file, modify the [Network] section to include the following
	line:
	
	  services=nmagent
	
	Notes
	-----
	
	- The INF Installation Tool for Windows 95 is included in the CD-ROM version of
	  Windows 95 and the Microsoft Windows 95 Resource Kit, but not in the floppy
	  disk version of Windows 95. To use the INF Installation Tool for Windows 95,
	  you must own the CD-ROM version of Windows 95 or the Microsoft Windows 95
	  Resource Kit.
	
	- Microsoft Network Monitor Agent is included in the CD-ROM version of Windows
	  95, but not in the floppy disk version. If you are using the floppy disk
	  version of Windows 95 and you want to use Microsoft Network Monitor Agent,
	  please see the following article in the Microsoft Knowledge Base for
	  information about the availability of Microsoft Network Monitor Agent:
	
	  Q135315 CD-ROM Extras for Microsoft Windows 95 Upgrade
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
