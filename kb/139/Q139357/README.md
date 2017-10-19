---
layout: page
title: "Q139357: Some SCSI Disk Drives Generate Unneeded Error Messages"
permalink: /kb/139/Q139357/
---

## Q139357: Some SCSI Disk Drives Generate Unneeded Error Messages

	Article: Q139357
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer running Windows NT and using a SCSI hard disk, an
	error message similar to the following appears in your system log (as seen with
	Event Viewer):
	
	  
	
	  Date: 11/2/95                    Event ID: 9
	  Time: 10:02:04 AM                Source: aic78xx
	  User: N/A                        Type: Error
	  Computer: Machine1               Category: None
	
	  Description:
	  The device, \Device\ScsiPort0, did not respond within the timeout
	  period
	
	These error messages often occur at boot time. You can identify when the error
	message is issued by comparing the SCSI timeout event to when your computer was
	restarted. Usually, one of the first few messages in the system log is a message
	similar to the following:
	
	  The Event log service was started.
	
	If the SCSI timeout message occurred at boot time, the date and time of the log
	service starting should be very close to the timeout message (within seconds).
	
	CAUSE
	=====
	
	The problem is that the SCSI disk class driver (SCSIDISK.SYS) is looking for
	SCSI drives that need special handling. SCSIDISK.SYS issues a SCSI Mode Sense
	command. The timeout value on the I/O is set to zero, which means that there is
	a chance the I/O may time out before the drive can complete the operation. If
	the timeout occurs, an error message is logged.
	
	Disk drives that are known to cause timeout messages include, but are not limited
	to, the following:
	
	  TOSHIBA  MK538FB
	  CONNER   CP3500
	  OLIVETTI CP3500
	  SyQuest  SQ5110
	  SEAGATE  ST41601N
	  SEAGATE  ST3655N
	  SEAGATE  ST3390N
	  SEAGATE  ST12550N
	  FUJITSU  M2652S-512
	  MAXTOR   MXT-540SL
	
	RESOLUTION
	==========
	
	For the drives in question, these timeout message are not serious if they occur
	at system boot. However, if several of these messages appear in the system log
	during normal system operation, they should be investigated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5.
	
	MORE INFORMATION
	================
	
	When examining the error message in the Event Log, the last four ULONG values in
	the Data section represent the SCSI PathId, SCSI TargetId, SCSI Lun, and a
	SCSIPORT ErrorCode. Normally, the PathId, TargetId, and Lun would help identify
	a particular SCSI device. However, in this situation, PathId, TargetId, and Lun
	are always zero, and the ErrorCode is always 00000007.
	
	The Data at offset 0x28 would look similar to this:
	
	  0028: 00 00 00 00 00 00 00 00
	  0030: 00 00 00 00 07 00 00 00
	
	So if a system has a drive mentioned previously and the system logs an error
	message, the error message will always indicate PathId, TargetId, and Lun zero,
	regardless of the true settings of the SCSI device.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : WinNT:3.5
	
	=============================================================================
	
