---
layout: page
title: "Q152730: XGEN: How to Make Disks From the Select CD"
permalink: /kb/152/Q152730/
---

## Q152730: XGEN: How to Make Disks From the Select CD

{% raw %}

	Article: Q152730
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Select CD includes a copy of Exchange Server Standard Edition.
	This article explains the procedure for creating the connector disks for the
	Standard Edition of Exchange from the Select CD.
	
	MORE INFORMATION
	================
	
	There are two ways to create disks from the Select CD.
	
	Using Cdselect.exe:
	
	The Select CD includes a program that gives the customer a graphical interface
	for creating disk images, Cdselect.exe. This program is located on the Server
	Pool PC Server 1 CD. Insert this CD and run Cdselect.exe. This program will run
	on Windows 3.x, Windows for Workgroups 3.x, Windows 95, and Windows NT.
	
	NOTE: When you insert this CD on Windows 95, Autorun, if enabled, will
	automatically start Cdselect.exe.
	
	When the program starts, choose the connector you want, click the Make Disk
	button and follow the prompts.
	
	Using the DOS utilities
	
	These utilities below can be found in the \Dostools directory on the Server Pool
	PC Server 1 CD. This is an excerpt from the Readme.txt file. The path to the
	.img or .dmf file can be found in the Select CD documentation.
	
	DSKIMAGE.EXE. Writes floppy diskettes from an *.IMG image file.
	
	Syntax:
	
	  dskimage img-file drive [/f]
	
	Parameters:
	
	img-file: The full pathname of the *.IMG disk image file. drive. Drive letter of
	the destination floppy disk drive.
	
	Switches:
	
	  /F Usually used when the floppy disk in the drive is unformatted. Using /f
	  causes the floppy disk in the target drive to be formatted before the disk is
	  written. If the disk is already formatted, /f will re-format the disk anyway.
	  If the /f switch is omitted and the disk in the drive is unformatted,
	  dskimage will fail.
	
	Example:
	
	  dskimage \us\word.win\disk1.img b: /f
	
	Limitations:
	
	- Will not work on *.DMF images.
	
	- Will not work on 360K image files while running under Windows 95. Under
	  Windows 95, use Icopy.exe, or start Cdselect.exe and choose Make Disk. Or run
	  under Windows 3.x or Window for Workgroups 3.x.
	
	Dmfwrite.exe. Writes Microsoft DMF (Distribution Media Format) floppy diskettes
	from a *.DMF image file.
	
	Syntax:
	
	  dmfwrite dmf-file drive [/u] [/w]
	
	Parameters:
	
	dmf-file: The full pathname of the *.DMF disk image file.
	drive: Drive letter of the destination floppy disk drive.
	
	Switches:
	
	  /U Don't prompt to insert diskette.
	  /W Prompt before exiting.
	
	Example:
	
	  dmfwrite \us\office.win\disk2.dmf a: /u
	
	Limitations:
	
	- Will not work on *.IMG image files
	
	ICOPY.EXE. Extracts all files out of an *.IMG image file and copies them to a
	floppy disk or hard disk. The subdirectory structure is maintained, as well as
	time and date stamps on files. Hidden and System files are copied as well.
	
	Syntax:
	
	  icopy img-file drive
	
	Parameters:
	
	img-file: The full pathname of the *.IMG disk image file.
	
	drive: Drive letter of the destination drive. The drive can be either a floppy
	disk drive, or a local or a networked hard disk.
	
	Example:
	
	  icopy \us\word.win\disk1.img d:\word
	
	To expand all image files into a single directory, use:
	
	  icopy \us\word.win\disk1.img x:\word
	  icopy \us\word.win\disk2.img x:\word
	
	To expand each image file into a subdirectory, use:
	
	  icopy \us\word.win\disk1.img x:\word\disk1
	  icopy \us\word.win\disk2.img x:\word\disk2
	
	Limitations:
	
	- Will not work on *.DMF image files
	
	MAKEDISK.BAT. Creates a floppy disk set from disk%.IMG or disk%.DMF files. Some
	products do not allow disk sets to be made, e.g. CD-ROM versions.
	
	Syntax:
	
	  makedisk source destination [start]
	
	Parameters:
	
	source: The full pathname of the directory containing the images to be copied.
	
	destination: Drive letter of the destination drive. Must be either floppy disk
	drive a: or b:.
	
	Switches
	
	start: The first disk you want to create. Default is 1.
	
	Example:
	
	  makedisk d:\us\word.win a:
	  makedisk d:\us\excel.win a: 2
	
	Limitations:
	
	- Will not work on a product that has no disk image (*.IMG or *.DMF) files
	  provided on the Select CD.
	
	- Will not work on 360K image files while running under Windows 95. Under
	  Windows 95, use Icopy.exe, or start Cdselect.exe and choose Make Disk. Or run
	  under Windows 3.x or Window for Workgroups 3.x.
	
	Additional query words: XGENeral imc x.400 x400
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
