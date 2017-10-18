---
layout: page
title: "Q66147: Error Copying Files with Windows Entertainment Pack"
permalink: kb/066/Q66147/
---

## Q66147: Error Copying Files with Windows Entertainment Pack

	Article: Q66147
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The following information only applies to Windows Entertainment Pack 1.
	
	You need at least 70K available on the drive on which Windows is located to start
	the Microsoft Windows Entertainment Pack Setup program.
	
	If 70K is not available, the initial "Loading Setup..." screen will not appear;
	instead the following error message occurs:
	
	  There was an error copying files to your <WINDOWS DIR> subdirectory.
	  Please correct the problem and run Setup again.
	
	This error occurs because the Windows Entertainment Pack Setup program could not
	copy the WINBINXZ.EXE and WEPSETUP.INF files to the drive that contains Windows
	(these are needed for Setup, but are deleted after Setup is completed).
	
	To solve the problem, delete unnecessary files on the drive that contains Windows
	to free space, or manually install the Windows Entertainment Pack.
	
	MORE INFORMATION
	================
	
	None of the files on the Windows Entertainment Pack disks are compressed. All of
	the files can be manually copied through DOS or the Windows File Manager. If
	Setup is done manually, icons will need to be made for each of the Windows games
	(refer to Pages 88-93 of the "Microsoft Windows User's Guide" for more
	information on adding program items to groups).
	
	In addition to the 70K required to run the the Windows entertainment Pack setup,
	you need at least 700K free disk space for all the files.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
