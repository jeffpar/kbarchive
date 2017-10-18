---
layout: page
title: "Q96739: Boot Drive Failure and Recovery with FTBOOT"
permalink: kb/096/Q96739/
---

## Q96739: Boot Drive Failure and Recovery with FTBOOT

	Article: Q96739
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	While there often is no explicit error message reporting catastrophic drive
	failures such as total loss of power or data connection, unusual symptoms in
	FTADMIN may be indicators. This article discusses some issues you should be
	aware of when using FTBOOT.
	
	Doing a NET LOGON command after a catastrophic failure may produce a message
	about a defective sector on drive C being replaced and recommending that you run
	CHKDSK /F, but the NET LOGON will continue.
	
	This is the message FTADMIN presents:
	
	  The disk information could not be loaded. SYS0015: The system cannot find the
	  drive specified.
	
	It does not show any disks.
	
	FTADMIN may also issue warnings about attempts to write to the drive followed by
	an "error" level message indicating that there was an excessive failure rate on
	the master partition and recommending corrective action.
	
	FTBOOT.EXE is not on the HPFS Recovery Disks of the Network Productivity Pack.
	Get the program from the HPFS Recovery Disks from LAN Manager 2.1. FTBOOT.EXE is
	on HPFS Recovery Disk 2 for LAN Manager 2.2.
	
	
	Some drives require CMOS changes, and if the CMOS setup has not been updated to
	reflect the current hardware condition of the machine at the point when you boot
	the server with the HPFS recovery disk, a trap error may result.
	
	MORE INFORMATION
	================
	
	While incorrect CMOS settings can cause the above problems, the sources of
	problems associated with catastrophic drive failure are unknown.
	
	When you boot with the HPFS Recovery Disk, a message reports that a virtual drive
	C has been created. Although this may seem to indicate a hardware problem
	because the boot process is not seeing the hard drive, FTBOOT will run
	successfully.
	
	If FTBOOT has a problem completing its work, this message is displayed:
	
	  The system is not correctly configured to recover the boot partition.
	
	FTBOOT success is indicated by the message:
	
	  Reboot required for changes to take effect.
	
	The FTBOOT program does not return to the command prompt but it has NOT hung; you
	simply have to remove the disk from the drive and reboot to complete the
	process.
	
	As the server is rebooting after FTBOOT, this message is displayed:
	
	  The WORKSTATION service has been started by another process.
	
	Then a message indicates that it was started successfully, at which point the
	server is again accessible from network stations unless it is a member or backup
	domain controller, in which case it may not be available for a few minutes while
	security synchronization takes place.
	
	If the former boot drive is going to be returned to service after a failure, you
	need to restore it to "raw" condition. Place it in another machine and remove
	the partition by booting with the HPFS Recovery Disk and running the FDISK /D
	command. If you place the drive back in the original system without first
	removing its partition, the fault tolerance system finds conflicting settings
	and there may be undesirable results. One such result is that critical errors on
	the boot drive will be reported and the suggested action will be to unmirror the
	drive, which you will have to do to resolve the side effect.
	
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
