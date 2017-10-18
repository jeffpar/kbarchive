---
layout: page
title: "Q170522: Old Firmware on Tape Drives Can Cause Tape Device Errors"
permalink: kb/170/Q170522/
---

## Q170522: Old Firmware on Tape Drives Can Cause Tape Device Errors

	Article: Q170522
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup kbhowto
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry  Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	You may experience one of the following problems with a tape device attached to
	a Windows NT computer:
	
	- An internal SCSI tape device works properly for three days, and then the
	  following error message appears within the tape backup program:
	
	  The tape device has been detected and the tape driver started. However, the
	  tape device is not responding.
	
	  After you restart your computer, the tape device works for another three
	  days.
	
	  -or-
	
	- The tape device does not consistently eject the cartridge. Attempting to
	  eject the tape may cause the tape device to fail with the following error
	  message:
	
	  Tape device reported error on request to get device status. Error reported:
	  Hardware failure.
	
	CAUSE
	=====
	
	These problems may occur with tape devices that have outdated firmware.
	
	RESOLUTION
	==========
	
	Please contact the tape manufacturer for information on the availability of a
	firmware upgrade for your tape device. Perform one of the following procedures
	to view the version of your tape device's firmware:
	
	- SCSI device on Windows NT 4.0:
	
	  1. Click the Start button, point to Settings, click Control Panel, and click
	     SCSI Adapters.
	
	  2. Click the Devices tab, click the plus sign (+) next to the SCSI controller
	     that your tape device is connected to, click the device, and then click
	     Properties.
	
	  3. Click the Settings tab to view the Firmware Revision.
	
	- SCSI device on Windows NT 3.5x:
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  For information about how to edit the registry, view the "Changing Keys And
	  Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	  Information in the Registry" and "Edit Registry Data" Help topics in
	  Regedt32.exe. Note that you should back up the registry before you edit it.
	
	  1. Start Registry Editor (Regedt32.exe) and go to the following subkey:
	
	      HKEY_LOCAL_MACHINE\HARDWARE\DEVICEMAP\SCSI\ScsiPort#\ScsiBus#
	      \TargetID#\LogicalUnitId0\ 
	
	     where # is the Scsiport#, Bus#, and SCSI-ID# to which the tape device is
	     attached.
	
	  2. Note the Identifier:REG_SZ:Tape vendor Model# firmware version.
	
	- IDE device on Windows NT 3.5x or 4.0:
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  For information about how to edit the registry, view the "Changing Keys And
	  Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	  Information in the Registry" and "Edit Registry Data" Help topics in
	  Regedt32.exe. Note that you should back up the registry before you edit it.
	
	  1. Start Registry Editor (Regedt32.exe) and go to the following subkey:
	
	      HKEY_LOCAL_MACHINE\HARDWARE\DEVICEMAP\AtDisk\Controller#\Disk#
	
	     where # is the LUN of the IDE Controller and the LUN of the device.
	
	  2. Note the FirmwareRevision:REG_SZ:Revision number.
	
	For additional information, please see the following article or articles in the
	Microsoft Knowledge Base:
	
	
	  Q140379 MainStream Exabyte Tape Drives Need Firmware Upgrade
	
	Additional query words: backup
	======================================================================
	Keywords          : kb3rdparty kbsetup kbhowto 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	
