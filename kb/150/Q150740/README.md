---
layout: page
title: "Q150740: XCLN: DocErr: Client Floppy Install Instructions are Wrong"
permalink: kb/150/Q150740/
---

## Q150740: XCLN: DocErr: Client Floppy Install Instructions are Wrong

	Article: Q150740
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Readme.wri in the root directory of the Microsoft Exchange Client Software
	CD instructs users who want to set up the Microsoft Exchange client from floppy
	disks to copy each disk subdirectory from the floppy directory on the CD to a
	floppy diskette. This is incorrect. There is no floppy directory on the CD.
	
	MORE INFORMATION
	================
	
	The correct method for creating client installation disks is listed in the
	Installation Guide. Those steps are as follows:
	
	1. On the Microsoft Exchange Client Software CD, change to the directory for the
	  language and platform desired.
	
	2. Copy each file with a .CAB extension onto a separate floppy disk, numbering
	  the disks with the same number as the .CAB file.
	
	3. Copy the remaining files, except Template.prf, onto Disk 1 (containing
	  Exchng1.cab).
	
	4. Be sure to copy Default.prf to Disk 1 if it exists.
	
	Additional query words: install win16 winnt win95 setup create howto
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
