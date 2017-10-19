---
layout: page
title: "Q133153: Microsoft Backup for Windows 95 Questions and Answers"
permalink: /kb/133/Q133153/
---

## Q133153: Microsoft Backup for Windows 95 Questions and Answers

	Article: Q133153
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains questions and answers about Microsoft Backup for Windows
	95.
	
	MORE INFORMATION
	================
	
	1. Q. What tape drive units are supported by Microsoft Backup?
	
	  A. Microsoft Backup supports tape drives that attach to the floppy disk drive
	  controller and that conform to the QIC-40, 80, or 3010 specification.
	  Microsoft Backup also supports Colorado Memory Systems parallel-port tape
	  drives. For additional information about supported tape drives, see the "Tape
	  drives that are compatible with Backup" topic in Microsoft Backup Help.
	
	  NOTE: QIC-WIDE tapes are not supported by Microsoft Backup. Microsoft Backup
	  cannot read from, write to, or format these tapes.
	
	2. Q. Microsoft Backup did not detect my SCSI tape backup drive. Can I configure
	  it to work with Microsoft Backup?
	
	  A. SCSI tape drives are not currently supported in Microsoft Backup. For
	  additional information about supported tape drives, see the "Tape drives that
	  are compatible with Backup" topic in Microsoft Backup Help.
	
	3. Q. Can I use the FC-20 tape controller that came with my tape drive with
	  Microsoft Backup?
	
	  A. Microsoft Backup does not support proprietary controller cards for tape
	  drives. Similar unsupported controllers include FC-10 and FC-15 controllers
	  and controllers from Iomega. For additional information about supported tape
	  drives, see the "Tape drives that are compatible with Backup" topic in
	  Microsoft Backup Help.
	
	4. Q. Does Microsoft Backup support the new 350 MB tapes?
	
	  A. Yes. Microsoft Backup supports extended-length tapes formatted to the
	  QIC-80 specification as long as the tape drive itself supports the tape.
	  Please consult your tape drive manufacturer to determine if the tape drive
	  supports extended-length tapes.
	
	5. Q. Can Microsoft Backup restore data from backup sets created by third-party
	  MS-DOS-based or Windows 3.1-based tape backup programs?
	
	  A. Yes, provided that the third-party tape backup program conforms to the QIC
	  standard for implementing compression. Please consult the third-party
	  software documentation or manufacturer for information about the
	  specification used.
	
	6. Q. Can Microsoft Backup restore data from backup sets created by earlier
	  versions of Microsoft Backup?
	
	  A. No. Microsoft Backup in Windows 95 does not support the format used in
	  earlier versions of Microsoft Backup.
	
	  For additional information, see the following article in the Microsoft
	  Knowledge Base:
	
	  Q138135 Restoring Backups Created with Earlier Versions of MS-DOS
	
	7. Q. Does Microsoft Backup include support for incremental backups?
	
	  A. Yes. Microsoft Backup supports creating full and incremental backup sets.
	  There is currently no differential backup support in Microsoft Backup.
	
	  To enable incremental backup, click Options on the Microsoft Backup Settings
	  menu, then click the Incremental option button on the Backup tab.
	
	8. Q. If I create a full backup set using Microsoft Backup and then remove
	  Windows 95, how do I use Microsoft Backup to restore my files?
	
	  A. Microsoft Backup requires Windows 95. You must install at least a minimal
	  configuration of Windows 95, including Microsoft Backup. You can then use
	  Microsoft Backup to restore all your files.
	
	9. Q. When I restore just one or two files from my backup set, I receive a
	  message stating "There may have been an error restoring the registry. Your
	  computer may not work properly." Why does this message appear when I have not
	  chosen to restore the registry?
	
	  A. This message appears when you restore files from the "Full System
	  Backup.set" backup set. This backup set is intended to be used only to
	  perform a full system backup or restore. The "Full System Backup.set" backup
	  set contains the files necessary to restore your Windows 95 configuration to
	  its original state. Keep this backup set in a safe place in case your hard
	  disk partition or the Windows folder is damaged. Create separate backup sets
	  for backing up other data.
	
	10. Q. How do I get Windows 95 to detect my tape drive? Device Manager does not
	  list my tape drive, but it is a supported unit.
	
	  A. Tape drive detection is performed by Microsoft Backup when it loads.
	  Microsoft Backup does not rely on the operating system for information about
	  tape drive units attached to the system. It is not necessary for your tape
	  drive to be listed in Device Manager.
	
	Additional query words: msbackup
	
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
