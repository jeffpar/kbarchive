---
layout: page
title: "Q135313: Writer/Artist: Macintosh Network Server Installation"
permalink: kb/135/Q135313/
---

## Q135313: Writer/Artist: Macintosh Network Server Installation

	Article: Q135313
	Product(s): Microsoft Home Kids Products
	Version(s): MACINTOSH:1.1,1.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for the Macintosh, versions 1.1, 1.1a 
	- Microsoft Fine Artist for the Macintosh, versions 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up Creative Writer or Fine Artist on a
	network.
	
	MORE INFORMATION
	================
	
	Use the following steps to set up the Kids program on the network server, and
	then run the program on workstations from the server.
	
	Floppy Disk Installation
	------------------------
	
	1. On the network server, insert the installation disk in the drive.
	
	2. Run setup for the Kids programs you want to install.
	
	3. When Setup asks you where you want to install the program, click Network, and
	  then continue the installation.
	
	4. Lock the Kids program.
	
	5. Share the Mskids folder on the Server hard drive.
	
	6. On the workstation, connect to the Mskids folder on the server, and then run
	  Creative Writer or Fine Artist from there.
	
	Compact Disc Installation
	-------------------------
	
	1. On the network server computer, insert the compact disc for the Kids program
	  you want to install.
	
	2. Run Setup for the Kids program.
	
	3. When you are asked where you want to install the program, click File Server,
	  and then continue the installation.
	
	4. Share the CD-ROM and its contents. For more information about how to
	  accomplish this task, see your Macintosh documentation.
	
	5. Lock the Kids program.
	
	6. Share the Mskids folder on the server hard drive.
	
	7. On the workstation, connect to both the Mskids folder and the Kids program
	  compact disc.
	
	8. Run the Kids program from the shared MSKIDS folder.
	
	After following these steps, the program should run successfully on the
	workstations, and Spike should not prompt you to insert the a disk.
	
	Possible Error Messages
	-----------------------
	
	When you try to run Creative Writer or Fine Artist on a local workstation from a
	server, you may receive the following error message from Spike:
	
	  I can't find the Creative Writer CD. Put the CD into the CD-ROM drive so you
	  can use the pictures, sounds, and documents. Spike.
	
	-or-
	
	  I can't find the Fine Artist CD. Put the CD into the CD-ROM drive so you can
	  use the pictures, sounds, and documents. Spike.
	
	When Creative Writer or Fine Artist are installed onto a server to allow the
	program to be used by several users on the network, the Mskids folder and the
	CD-ROM drive must be shared.
	
	Each user on the individual workstations must make connections to both the Mskids
	folder and the CD-ROM drive.
	
	Additional query words: kbhowto mac 1.10 kids mskids artist maggie max writer errmsg won't read stickers sounds mona weasel horn CDROM CD file sharing setup kbusage network install installation configure configuration 1.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbPTProdChange kbCreativeWriter110Mac kbCreativeWriter110aMac kbFineArtist110Mac kbFineArtist110aMac
	Version           : MACINTOSH:1.1,1.1a
	
	=============================================================================
	
