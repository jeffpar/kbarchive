---
layout: page
title: "Q96283: Guidelines for Running FoxBASE+/Mac on a Network"
permalink: kb/096/Q96283/
---

## Q96283: Guidelines for Running FoxBASE+/Mac on a Network

	Article: Q96283
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To run FoxBASE+/Mac on a network, the following guidelines should be followed:
	
	- Make sure the FoxUSER file is in the System Folder on each node and not on
	  the server. If the nodes do not have hard disks, the FoxUSER file can be
	  located on the server if the command SET RESOURCE TO FoxUSER NOMODIFY is
	  used.
	
	- Make sure EXCLUSIVE is set OFF. This can be done in the CONFIG.FX file
	  (EXCLUSIVE=OFF), by typing "SET EXCLUSIVE OFF" (without the quotation marks)
	  in the Command window or in a .PRG file, or by using the On/Off Switch in the
	  View window.
	
	- Make sure the shared bit for any sharable files is checked with ResEdit (this
	  is the default).
	
	- Because FoxBASE+/Mac is incompatible with older versions of TOPS, use TOPS
	  3.0 and FoxBASE+/Mac revision 2.01 with a compiled date no earlier than
	  September 6, 1990.
	
	MORE INFORMATION
	================
	
	The multiuser version of FoxBASE+/Mac is not limited in regard to how many
	people can run it from the server. This number depends upon the server and
	network software.
	
	NOTE: AppleShare version 2.01 will not allow more than three users to launch
	FoxBASE+/Mac. This has been corrected in later versions of AppleShare.
	
	Additional query words: 2.01
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
