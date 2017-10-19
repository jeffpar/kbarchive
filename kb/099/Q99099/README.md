---
layout: page
title: "Q99099: Procedure for Upgrading LMSFM on a Headless 3Server"
permalink: /kb/099/Q99099/
---

## Q99099: Procedure for Upgrading LMSFM on a Headless 3Server

	Article: Q99099
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The upgrade instructions provided with LAN Manager Services for Macintosh 1.0a
	do not cover the procedures necessary for upgrading a headless 3Server. The
	upgrade can be accomplished by using REMSETUP and following the slightly altered
	upgrade procedure outlined below.
	
	MORE INFORMATION
	================
	
	To upgrade your 3Server from LMSFM 1.0 to LMSFM 1.0a you need:
	
	- The "LAN Manager Services for Macintosh Installation for 3Servers" disk that
	  came with your LAN Manager for 3Servers tape.
	
	- The "LAN Manager Services for Macintosh 1.0a Setup" disk.
	
	The modified procedure for 3Servers is:
	
	1. At the workstation that you use for remotely administering your 3Server, make
	  a remote drive connection to the ADMIN$ share on your 3Server. For example:
	
	  net use x: \\3server\admin$
	
	2. Copy the files LANMAN.INI and PROTOCOL.INI from drive X to a safe backup
	  location. For example:
	
	  copy x:\lanman.ini c:\temp\lanman.bak
	  copy x:\protocol.ini c:\temp\protocol.bak
	
	3. Make a command line Remote Administration connection to the 3Server. For
	  example:
	
	  net admin \\3server /c
	
	4. At the Remote Administration prompt, stop the MACFILE and MACPRINT services
	  on the 3Server. For example:
	
	  net stop macfile
	  net stop macprint
	
	5. Exit the Remote Administration prompt as follows:
	
	  exit
	
	6. Change to drive X and execute the REMSETUP program.
	
	  x:
	  "remsetup" (without the quotation marks)
	
	7. From the Connectivity menu, choose "Macintosh Services."
	
	8. When the Macintosh Services dialog is displayed, choose Remove. Choose Yes in
	  response to all the prompts, until removal is complete.
	
	9. When removal is complete, from the Connectivity menu, choose Install.
	
	10. Insert the "LAN Manager Services for Macintosh Installation for 3Servers"
	  disk in your workstation when prompted.
	
	11. When prompted for the Mac Setup disk, insert the LAN Manager 1.0a upgrade
	  disk into your workstation.
	
	12. Installation will run. When prompted, select and configure the appropriate
	  network cards to which LMSFM is to be bound.
	
	13. When installation is complete, from the LAN Manager menu, choose Exit Setup.
	
	14. Copy the backup versions of LANMAN.INI and PROTOCOL.INI that you created in
	  step 2 back to drive X. For example:
	
	  copy c:\temp\lanman.bak x:\lanman.ini
	  copy c:\temp\protocol.bak x:\protocol.ini
	
	15. Shutdown and reboot the 3Server.
	
	Additional query words: sfm 2.20 2.2 1.0 1.0a
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
