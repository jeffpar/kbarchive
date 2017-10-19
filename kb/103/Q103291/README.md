---
layout: page
title: "Q103291: PC WRmt: Disk Space Calculations for Address Files"
permalink: /kb/103/Q103291/
---

## Q103291: PC WRmt: Disk Space Calculations for Address Files

	Article: Q103291
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Disk space consumption can be a significant concern for users of version 3.2 of
	Microsoft Mail Remote for Windows. Mail Remote is often used on a portable
	computer with relatively limited disk space.
	
	The Mail Remote for Windows Setup program requires your mail administrator to
	create a data disk for you to install this product. One of the files created for
	this data disk is RNETWORK.GLB, which contains the postoffice and user
	information.
	
	In large installations, this file may not fit on a single floppy disk (which is
	all you are prompted for). Also, you will need to have enough free disk space on
	your computer so that all the addresses can be expanded from your RNETWORK.GLB
	address file.
	
	If your data disk files will not fit on a single floppy disk, you can perform the
	following steps:
	
	1. Create a directory on your hard disk drive and use the MS-DOS SUBST command
	  to store the data files, such as:
	
	  c:
	  md\data
	  subst a: c:\data
	
	  NOTE: For more information on the SUBST command, please see your MS-DOS
	  documentation.
	
	2. When you use the Administrator program to create your data disks, select
	  drive A as the drive to store the files on. When you install Mail Remote for
	  Windows, type C:\DATA when you are asked where the data files are.
	
	You must create enough free space on your local hard drive for all the address
	books. You can either delete some other files, or build a Custom View that is
	small enough to fit on your computer's hard disk drive.
	
	MORE INFORMATION
	================
	
	You can predetermine the approximate size of RNETWORK.GLB before it is created
	by the Administrator program, and then estimate the amount of file space
	required for the address books created by Mail Remote for Windows as it expands
	the RNETWORK.GLB information.
	
	When Building RNETWORK.GLB
	--------------------------
	
	  Component                      Size
	  -------------------------------------------------------------------
	
	  Each network                   20 bytes
	  Each gateway                   20 bytes
	  Each postoffice                24 bytes
	  Each PROFS, SNADS, or OV node  24 bytes
	  Each user                      Max 10 bytes for e-mail name + max
	                                 30 bytes for friendly name
	  Each template                  11 bytes + .TPL file size
	
	When Expanding RNETWORK.GLB
	---------------------------
	
	  Component                      Size
	  -------------------------------------------------------------------
	
	  Each local user                1217 bytes
	  Each network                    122 bytes
	  Each gateway                    122 bytes
	  Each external postoffice        698 bytes
	  Each PROFS, SNADS or OV node    698 bytes
	  Each external user               53 bytes
	  Each template file             Size of .TPL file
	  Each person on the GAL         Minimum 90 bytes (because everyone
	                                 goes on the GAL, that is 90+ bytes
	                                 for every user)
	
	NOTE: The only gateway users you can add through RNETWORK.GLB are PROFS, SNADS,
	and OfficeVision. These users can be added by creating a Custom View. They
	require the same amount of space as mail users.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
