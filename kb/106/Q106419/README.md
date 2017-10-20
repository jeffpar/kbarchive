---
layout: page
title: "Q106419: Removing Non-DOS Partitions with Debug"
permalink: /kb/106/Q106419/
---

## Q106419: Removing Non-DOS Partitions with Debug

{% raw %}

	Article: Q106419
	Product(s): Microsoft Disk Operating System
	Version(s): 6.0,6.2,6.21
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 20-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Introduction
	------------
	
	There are currently several different versions of MS-DOS in the personal-computer
	environment, both in the OEM-licensed versions and in the Microsoft
	packaged-product versions. The hard-disk-management capabilities of MS-DOS vary
	from one version to another. For example, MS-DOS versions 3.2 and 3.21 can
	address a single hard-disk partition of up to 32 megabytes (MB); MS-DOS version
	3.3 can address multiple hard-disk partitions, with a primary DOS partition of
	up to 32 MB and an extended DOS partition containing logical drives of up to 32
	MB each; and MS-DOS versions 4.0, 4.01, 5.0, 6.0, and 6.2 can address multiple
	hard-disk partitions with sizes up to 2 gigabytes (GB).
	
	For those using versions of MS-DOS that have lesser levels of hard- disk support,
	such as MS-DOS versions 3.2 and 3.21, there are a number of third-party
	hard-disk-management software packages that allow MS- DOS to access multiple
	partitions and/or partitions in excess of 32 MB. However, these third-party
	packages may use non-DOS constructs to assist in managing the hard disk,
	possibly including non-DOS partitions. These non-DOS constructs can cause
	problems when you upgrade to later versions of MS-DOS because versions of MS-DOS
	earlier than 5.0 assume that non-DOS constructs are owned by another operating
	system and, therefore, do not use, delete, or change non-DOS partitions or other
	non-DOS constructs in any way.
	
	  WARNING: Some computers require the use of third-party hard-disk-
	  partitioning software because the system ROM BIOS does not fully support the
	  drive parameters of the hard disk that is being used or because the hard disk
	  has more than 1024 data cylinders. If you are unsure if your system supports
	  your hard disk, consult your hardware manufacturer or the manufacturer of
	  your partitioning software before proceeding.
	
	To detect if your system makes use of Drive Overlay software, see the following
	article:
	
	  Q186057 How to Tell If Drive Overlay Program Is Installed in Windows
	
	Using Debug to Remove a Non-DOS Partition
	-----------------------------------------
	
	The Debug script on the following page, used with the MS-DOS Debug program,
	deletes non-DOS partitions when you upgrade to a new version of MS-DOS, enabling
	the entire hard disk to be used by MS-DOS. It does so, however, by clearing out
	the entire partition table on the hard disk, which results in the deletion of
	ALL partitions on the hard disk. You need to use this method if your current
	version of MS-DOS cannot delete non-DOS partitions.
	
	  WARNING: Because all data on your hard disk will be destroyed by this
	  procedure, you must back up your hard disk before using this Debug script.
	
	There are two ways to use the following Debug script:
	
	- Run Debug and type the Debug commands from the center column of Table 1 at
	  the corresponding Debug prompt. (The left column of the table shows the
	  prompts that are displayed by Debug. You do not need to type the comments in
	  the right column.)
	
	  -or-
	
	- Type the command in the center column of Table 1 into a file using a text
	  editor such as MS-DOS Editor and then use input redirection to feed the
	  resulting file into Debug. For example, if you typed the commands into a file
	  called HDPART.SCR, you would clear your partition table by typing the
	  following at the MS-DOS command prompt and then pressing ENTER:
	
	  "debug < hdpart.scr" (without the quotation marks)
	
	     Table 1:  Debug Script to Erase Hard-Disk Partition Table
	  ----------------------------------------------------------------
	     Debug        Enter Debug       Comments
	     Prompts      Commands
	  ----------------------------------------------------------------
	     -            A 100             Assemble from CS:0100.
	
	     nnnn:0100    INT 13            Call interrupt 13.
	
	     nnnn:0102    press the         (nnnn in the segment address).
	                  ENTER key
	
	     -            RAX               Replace AX register.
	
	     AX 0000
	
	     :            0301              Write on sector.
	
	     -            RBX               Replace BX register.
	
	     BX 0000
	
	     :            0200              Start from ES:200.
	
	     -            F 200 L 200 0     We want to write zeros.
	
	     -            RCX               Replace CX register.
	
	     CX 0000
	
	     :            0001              Cylinder, 0, sector 1.
	
	     -            RDX               Replace DX register.
	
	     DX 0000
	
	     :            0080              First physical hard disk, head
	                                    0. (Substitute 0081 for this
	                                    entry if you are clearing the
	                                    table on the second physical
	                                    hard disk, 0082 if you are
	                                    clearing the third physical
	                                    hard disk, and so forth).
	
	     -            P                 Proceed (Debug will display
	                                    several lines of information).
	
	     -            Q                 Quit Debug.
	  ----------------------------------------------------------------
	
	This script completely clears the partition table on your hard disk, preparing
	the hard disk for repartitioning using the MS-DOS Fdisk program. (When you run
	Fdisk for the first time after using this procedure and before reinstalling
	MS-DOS, the message "No partitions defined" should be displayed if the partition
	deletion procedure was successful.) For more information about using Fdisk, see
	the Microsoft MS-DOS" User's Guide and Reference" for version 3.2, 3.21, 3.3,
	4.0, 4.01, or 5.0, or the Microsoft MS-DOS" User's Guide" for version 6.0 or
	6.2.
	
	For additional information on how to recreate a partition using the Fdisk
	utility, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q255867 How to Use Fdisk and Format to Partition or Repartition a Hard Disk
	
	Non-DOS partitions on your hard disk are also erased if you perform a low-level
	format. Consult your hardware manufacturer for specific instructions on
	performing a low-level format on your hard disk.
	
	  WARNING: Performing a low-level format will completely erase all data on your
	  hard disk, including all defined partitions.
	
	Additional query words: 6.00 6.20 6.21
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600
	Version           : :6.0,6.2,6.21
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
