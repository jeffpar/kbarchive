---
layout: page
title: "Q162972: Troubleshooting Tape Backup Issues in Windows NT"
permalink: kb/162/Q162972/
---

## Q162972: Troubleshooting Tape Backup Issues in Windows NT

	Article: Q162972
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbtool kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Backup program included with Windows NT (Ntbackup.exe) is a basic tape
	backup program. It can back up mapped network drives, local drives, and the
	registry. Backups can span multiple tapes. Backup does not support backing up to
	removable media other than tape.
	
	This article describes how to troubleshoot problems with Backup.
	
	MORE INFORMATION
	================
	
	Tape Drive Is Not Recognized
	----------------------------
	
	The most common reason for this is a problem with the SCSI bus. Verify that the
	cables are properly attached to the tape drive and that the SCSI bus is
	correctly terminated.
	
	Error Writing to Tape
	---------------------
	
	This may be due to a problem with the SCSI bus or a bad tape. When you reuse
	tapes, be sure to erase them first. Format and retension the tape before reuse
	if you can.
	
	Invalid Media
	-------------
	
	Check to be certain you have inserted the correct type of tape for your tape
	device. This may also be an indication that the tape is bad and needs to be
	replaced.
	
	Skipped Files
	-------------
	
	Backup cannot back up files that are locked open by another process. If the file
	does not become available in 30 seconds, the file is skipped.
	
	Close as many running programs as you can before you perform a backup. There are
	some third-party backup programs that allow you to back up open files.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q104169
	  TITLE : Files Skipped with Windows NT Backup
	
	Fatal Error on Drive 1
	----------------------
	
	This is usually caused by either incompatible hardware or out-of-date firmware on
	the tape device or controller. Consult the Hardware Compatibility List to make
	sure your hardware is supported, then check with the manufacturer to see if
	there is a firmware update available.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q102822
	  TITLE : "Fatal Error on Drive 1" Using Exabyte 4200 with IBM
	
	  ARTICLE-ID: Q108412
	  TITLE : Exabyte 8200-EXB Streamer Time-Outs During Backup
	
	  ARTICLE-ID: Q118772
	  TITLE : Err Msg During Backup: Fatal Error on Drive 1
	
	  ARTICLE-ID: Q119863
	  TITLE : Fatal Error on Drive 1 with Quantum ProDrive 1080s
	
	  ARTICLE-ID: Q121520
	  TITLE : Fatal Error on Drive 1 with Adaptec 1540CF SCSI Controller
	
	Fatal Translation Error on Tape in Drive 1
	------------------------------------------
	
	This error can be caused by firmware or incorrect SCSI termination. Verify that
	the SCSI bus is correctly terminated. Contact the manufacturer of your tape
	device for an updated firmware revision.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q104594
	  TITLE : Tandberg Firmware Versions Required for Windows NT
	
	  ARTICLE-ID: Q109692
	  TITLE : Adaptec 2742 and HP Jetstor 2000 Require Special Terminator
	
	  ARTICLE-ID: Q122132
	  TITLE : Err Msg: Fatal Translation Error on Tape with WangDat 3200
	
	Poll Driver Failed: Severe Error Shutting Off Poll Drive
	--------------------------------------------------------
	
	This is a SCSI bus issue resulting from improperly set SCSI ID numbers, faulty
	termination, or cable issues. Consult the SCSI Troubleshooter for help
	diagnosing problems with the SCSI bus.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q114804
	  TITLE : Error Running NTBACKUP on NCR System 3000 Model 3410
	
	Cannot Load Catalog from Tape
	-----------------------------
	
	There may be a problem with the SCSI controller driver. You may need to replace
	the controller with a supported model, or update the driver.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q122440
	  TITLE : Err Msg: Cannot Load Catalog from Tape
	
	Unknown Firmware Error
	----------------------
	
	Your tape device has incompatible firmware. Contact the manufacturer to obtain
	the latest firmware for your tape device.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q123110
	  TITLE : Err Msg: Unknown Firmware Error with Archive 5580 Tape Drive
	
	Tape Drive Has Been Detected But the Driver Has Failed to Load or Is Not
	Started -or- Error 0020: Could Not Find Device Specified
	---------------------------------------------------------------------------------------------------------------------------------
	
	The tape device is not configured correctly for use with Windows NT Backup.
	Consult the tape device manual or contact the manufacturer for correct
	settings.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q124379
	  TITLE : Err Msg: Tape Drive Has Been Detected But Driver Has Failed
	
	Tape Drive Error Detected: A Tape Device Has Been Detected, and the Tape Driver
	Started. However, the Tape Device Is Not Responding. Check That
	
	Tape Device Power Is On and Cables Are Properly Connected.
	----------------------------------------------------------
	
	This may be caused by incorrect firmware versions, or by incorrect SCSI BIOS
	settings. Check your computer's SCSI BIOS settings to verify that SCSI
	Disconnect is enabled. Contact the manufacturer for an updated firmware
	revision, if necessary.
	
	Tape Device Reports an Error on a Request to Change Physical Block Size.
	The Tape Device Reported an Error on a Request to Read the Tape. Hardware
	Failure.
	-----------------------------------------------------------------------------------------------------------------------------------------------------------
	
	The SCSI controller does not properly support the tape device. There may be a
	software configuration solution, or you may need to contact the manufacturer for
	an updated firmware revision.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q131618
	  TITLE : Tape Drive Error Detected with Qlogic Fast SCSI IQ PCI Adapter
	
	STOP: 0x0000000A IRQL_NOT_LESS_OR_EQUAL
	---------------------------------------
	
	This can occur on a multiple-processor computer using fault-tolerant NTFS drives.
	There is a fix for this issue included in Service Pack 2 for Windows NT version
	3.51.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q137002
	  TITLE : STOP 0x0000000A May Occur on Multi-processor Computers
	
	This Set Is Compressed and Cannot Be Viewed or Restored
	-------------------------------------------------------
	
	The backup set was created in a backup program that supports compression. Windows
	NT Backup does not support software compression for backup sets.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q138116
	  TITLE : NTBACKUP Cannot Catalog and Restore Compressed Data from Tape
	
	The Backup Set Is Not Completely Cataloged
	------------------------------------------
	
	This occurs when the catalog file on the hard disk contains incomplete
	information. Quitting and restarting Backup may resolve the issue. If not,
	locate the catalog file on the hard disk and either rename it or delete it, and
	then re-catalog the tape.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q138117
	  TITLE : Err Msg: The Backup Set is Not Completely Cataloged
	
	You Do Not Have Permission to Access Portions of Data. Please See the
	Owner or Administrator to Get Permission.
	---------------------------------------------------------------------------------------------------------------
	
	This indicates that you do not have appropriate permissions for the folder you
	are attempting to back up or to which you are restoring files.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q110481
	  TITLE : Backup Doesn't Back Up Entire Hard Disk or Create Log File
	
	  ARTICLE-ID: Q142671
	  TITLE : Backup Fails on Certain Directories Due to Lack of Permissions
	
	  ARTICLE-ID: Q157979
	  TITLE : NT/RDR: "Access Denied" with Windows NT 4.0 Ntbackup
	
	Catalog Information: Unable to Load Catalog Data from Tape -or- Catalog
	Error: Error Writing a Catalog File, Check Available Space
	----------------------------------------------------------------------------------------------------------------------------------
	
	These error messages can be generated by trying to restore to a full hard disk.
	The catalog files are stored in a compressed format and need to be expanded on
	the hard disk at the beginning of the restore operation. You can resolve these
	errors by either freeing disk space on the target drive, or by replacing the
	hard disk with a larger drive.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q153839
	  TITLE : Tape Backup Restore Fails on Extremely Full Volumes
	
	Foreign Tape: The Tape In the Drive Must Be Erased Before It Can Be Used
	------------------------------------------------------------------------
	
	This occurs with a backup set from another backup program, or one that was
	created in Microsoft Windows 95.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q155979
	  TITLE : Windows NT Backup Does Not Recognize Windows 95 Backup Tapes
	
	Tape Drive Error Detected: A SCSI Tape Device Has Been Detected, But the
	Tape Driver Has Either Not Been Installed, or Failed to Start. Make Sure
	That the Appropriate Driver Has Been Installed Using the Tape Devices
	Option in Control Panel.
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	Windows NT cannot install tape device drivers during Setup. After Setup is
	finished, double-click Tape Devices in Control Panel. If your tape device is not
	listed, click Detect. Click OK when you are prompted to install the drivers for
	the tape device.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q159045
	  TITLE : Error Message: Tape Drive Error Detected
	
	
	======================================================================
	Keywords          : kbhw kbtool kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 4.0
	
	=============================================================================
	
