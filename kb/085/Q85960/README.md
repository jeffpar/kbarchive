---
layout: page
title: "Q85960: Group Icons Missing After Windows 3.1 Installation"
permalink: kb/085/Q85960/
---

## Q85960: Group Icons Missing After Windows 3.1 Installation

	Article: Q85960
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If group icons are missing when you start Microsoft Windows, you may have run
	the Windows 3.1 Setup program while virus-detection software was running in
	memory. Virus-detection software, such as Central Point Anti- Virus and Data
	Monitor (Datamon) from Symantec, may cause this problem.
	
	WORKAROUND
	==========
	
	There are several possible solutions to this problem:
	
	1. Attempt to rebuild the groups. From the File menu of Program Manager, choose
	  Run. Type the following in the command line dialog box:
	
	  setup /p
	
	2. Manually edit the PROGMAN.INI file and make sure the settings are correct for
	  your groups. Using the MS-DOS DIR command, get a listing of your group files,
	  for example:
	
	  dir c:\windows\*.grp
	
	  Edit the PROGMAN.INI file with a text editor such at EDIT from MS-DOS 5.0. The
	  file should look similar to the following example:
	
	        [Settings]
	        Window=28 30 626 373 1
	        SaveSettings=1
	        MinOnRun=0
	        AutoArrange=0
	        display.drv=VGA.DRV
	        Order= 3 8 2 10 7
	
	        [Groups]
	        Group1=C:\WINDOWS\MAIN.GRP
	        Order=2 3 1
	        Group2=C:\WIN31\ACCESSOR.GRP
	        Group3=C:\WIN31\GAMES.GRP
	
	  You can ignore the [Settings] section, but the [Groups] section should contain
	  references to the .GRP files you found in the WINDOWS directory when you did
	  a directory listing (DIR).
	
	3. If you installed Windows 3.1 into a new directory, you can restart the
	  computer without loading the virus detection software, remove the current
	  installation of Windows 3.1 from the hard drive, and run the Setup program
	  again.
	
	4. If you upgraded a Windows 3.0 installation to Windows 3.1, and the group
	  icons are missing, restart the computer without loading the virus detection
	  software, and run the Setup program again. If the problem persists, you may
	  need to remove the current installation of Windows and run the Setup program
	  again. This is the least favorable solution because some of your
	  Windows-based applications may need to be reinstalled to function correctly.
	
	Additional query words: 3.10 cpav tsr 3rdparty 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
