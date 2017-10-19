---
layout: page
title: "Q57561: Mac DOS: Support for Hercules InColor Graphics Cards"
permalink: /kb/057/Q57561/
---

## Q57561: Mac DOS: Support for Hercules InColor Graphics Cards

	Article: Q57561
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.37,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 1.37, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail (PC Client) supports the Hercules InColor graphics card through
	the use of a special video driver called HERCCLR.VID, which is provided on the
	original Mail disks. The size of the HERCCLR.VID file is dependent upon the
	version of the Mail PC Client you are using, as shown below:
	
	  Version     Size of HERCCLR.VID
	  -------     -------------------
	
	  1.37        13712 bytes
	  2.00        14131 bytes
	  3.00        14131 bytes
	
	When you run the Mail Setup program, it will perform tests against your graphics
	card. If it detects a Hercules InColor card, it will copy the video driver
	HERCCLR.VID to the Mail program directory and rename it SCREEN.VID.
	
	If there is a SCREEN.VID file in the Mail program directory, the information in
	the SCREEN.VID file will be used to properly draw the screen while your mailbox
	is open.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN137DOS kbMailATN200DOS kbMailATN300DOS
	Version           : :1.37,2.0,3.0
	
	=============================================================================
	
