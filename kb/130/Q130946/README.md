---
layout: page
title: "Q130946: Troubleshooting Windows 95 Backup"
permalink: kb/130/Q130946/
---

## Q130946: Troubleshooting Windows 95 Backup

	Article: Q130946
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes troubleshooting tips that you can use for Microsoft
	Backup.
	
	MORE INFORMATION
	================
	
	Tape Drive Not Detected
	-----------------------
	
	Verify that the tape drive you are using is supported by Microsoft Backup. For
	information about supported tape drives in Backup, see the following article in
	the Microsoft Knowledge Base:
	
	  Q124730 Tape Backup Units Supported in Windows 95
	
	Problems Restoring Files
	------------------------
	
	If you experience a problem restoring files, follow these steps:
	
	1. Refer to your tape backup unit's documentation for the proper cleaning
	  instructions, then clean the tape drive.
	
	
	1. Set your computer to a slower speed (for example, turn off turbo mode).
	
	2. Try to restore the files in Safe mode. You can start Windows 95 in Safe mode
	  by pressing F5 at the "Starting Windows 95" message or by pressing F8 at the
	  "Starting Windows 95" message and then choosing Safe Mode from the Startup
	  menu.
	
	  NOTE: If the tape backup drive requires the existence of a protected- mode
	  driver, it will not work in Safe mode. For example, Colorado Trakker drives
	  do not work in Safe mode because VCOMM does not load.
	
	3. Try to restore the files on a different computer.
	
	4. Verify that there is enough swap file space. The size of the swap file grows
	  with the number of files involved in the backup, restore, or compare
	  operation.
	
	Problems Backing Up or Restoring Over the Network
	-------------------------------------------------
	
	If you cannot back up or restore files over a network, try a different network
	protocol, or try to copy a large file across the network with the XCOPY command.
	This problem is usually related to the network or network configuration and not
	Microsoft Backup.
	
	Tape Cannot Be Formatted
	------------------------
	
	If the tape cannot be formatted, try these steps:
	
	1. Verify that you are using a compatible tape format. For example, you cannot
	  format a 3010 tape in a QIC-80 drive and you cannot format a QIC-80 wide tape
	  in a QIC-80 drive.
	
	2. The tape may be bad or worn out. Try to format a different tape.
	
	  NOTE: While it may be possible to format the tape by degaussing (or
	  bulk-erasing) the tape, this will not correct or repair a damaged tape. There
	  are two reasons why you may be able to format a degaussed tape:
	
	   - The bad block count (which is stored in the header of the tape) is set to
	     zero.
	
	   - The bad blocks appear to be corrected, so that the tape works until the
	     bad blocks are detected again. If you use such a tape, you may encounter
	     errors again, or you may not be able to recover data after performing a
	     backup, since data may be stored in a bad block on the tape.
	
	
	1. Try to format the tape in Windows 95 Safe mode. You can start Windows 95 in
	  Safe mode by pressing F5 at the "Starting Windows" message or by pressing F8
	  at the "Starting Windows" message and choosing "Start Windows, bypassing
	  startup files" from the Windows 95 Startup menu.
	
	  NOTE: If the tape backup drive requires the existence of a protected- mode
	  driver, it will not work in Safe mode. For example, Trakker drives do not
	  work in Safe mode because VCOMM does not load.
	
	2. There may be a video DMA conflict. Start the format operation, then try the
	  following steps:
	
	  a. Minimize the progress indicator. If formatting still fails, try step B.
	
	  b. Change the video resolution to 640 x 480 x 16 colors. If formatting still
	     fails, try step C.
	
	  c. Try formatting the tape in a full-screen MS-DOS command prompt session. If
	     this works, use Device Manager to look for a DMA conflict between the
	     video card and the floppy drive controller.
	
	Tape Despools
	-------------
	
	If tapes you use in your tape drive frequently despool, the end-of-tape sensor in
	your tape drive may be dirty or damaged. The end-of-tape sensor detects the end
	of a tape by projecting light through a series of holes near the end of the
	tape. If the bulb used to project this light is dirty or is damaged, the light
	may not be strong enough to project through the holes. This prevents the drive
	from accurately determining when the end of the tape has been reached.
	
	Many drive manufacturers recommend cleaning the end-of-tape sensor after every
	eight hours of drive operation, when excessive dust or other debris accumulates
	on the sensor, or when a tape used in the drive becomes despooled. For
	information about cleaning the end-of-tape sensor in your tape drive, refer to
	the documentation that came with the drive, or contact the drive manufacturer.
	
	Tape Comparison Fails
	---------------------
	
	If the tape comparison fails, try the following steps:
	
	1. Bulk-erase the tape.
	
	2. Try a new tape.
	
	Cannot Access Tape Drive and Backup Stops Responding
	----------------------------------------------------
	
	If Backup is unable to access the tape drive and appears to stop responding
	(hang), there may be a resource conflict between IDE devices in your computer.
	For example, your Syquest removable drive may be configured to use the same
	resources as your tape drive.
	
	To resolve this behavior, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q133240 Troubleshooting Device Conflicts with Device Manager
	
	  Q153471 Problems with Removable IDE Drives in Windows 95
	
	Colorado Trakker Tape Backup Unit
	---------------------------------
	
	If you are experiencing random problems with a Trakker tape drive on a parallel
	port, make sure the parallel port is not configured in the computer's CMOS
	settings as an ECP or EPP port. If it is, use the computer's CMOS Setup utility
	to reconfigure the port to a standard parallel port. For more information about
	the computer's CMOS Setup utility, please consult your computer documentation or
	manufacturer.
	
	Iomega QIC-80 Tape Backup Drives
	--------------------------------
	
	Iomega Technical Support states that these drives require new drivers from
	Iomega. You may also need to verify that the following line exists in the
	Config.sys file:
	
	  Buffers=30
	
	For additional information, please contact Iomega Corporation.
	
	Additional Troubleshooting Steps
	--------------------------------
	
	If you continue to have problems with Backup, follow these steps:
	
	1. Refer to the tape backup unit's documentation for the proper cleaning
	  instructions, then clean the tape drive.
	
	
	1. Verify that all of the power connections are securely and properly attached.
	
	2. Verify that the jumpers are set in a compatible mode (please refer to the
	  tape backup unit's documentation for the proper settings).
	
	3. If you have an internal tape drive, position it as far as possible from the
	  hard disk. If you have an external tape drive, position it as far as possible
	  from the monitor.
	
	Additional query words: msbackup
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
