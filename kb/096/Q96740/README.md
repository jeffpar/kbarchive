---
layout: page
title: "Q96740: LAN Manager 2.2 FTBOOT Trap Ds on Reboot"
permalink: kb/096/Q96740/
---

## Q96740: LAN Manager 2.2 FTBOOT Trap Ds on Reboot

	Article: Q96740
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	After removing a failed primary drive on a LAN Manager 2.2 server and running
	FTBOOT, the server gets a Trap D and Trap C just after the fault tolerance
	message on reboot. The procedure at the end of this article explains how to fix
	this problem and the confusion it causes in FTSETUP.
	
	CAUSE
	=====
	
	FTBOOT contained a problem that has since been fixed in CSD00.010 and in the
	latest US Service Pack for LAN Manager. The problem manifests itself when there
	is only one partition on the boot drive.
	
	RESOLUTION
	==========
	
	First of all, for SCSI drives, make sure the SCSI ID and termination are set
	correctly before reboot. Incorrect settings can produce Trap Ds that disappear
	when the situation is corrected.
	
	If that is not the problem, then do the following:
	
	1. Reboot with the HPFS Recovery Disk.
	
	2. Copy the CONFIG.SYS file off of the server onto a floppy disk.
	
	3. At another station, remove the two lines implementing fault tolerance. They
	  are:
	
	        device=c:\<lanman>\netprog\ftdisk.sys
	        run=c:\<lanman>\netprog\ftmonit.exe
	
	4. Place the modified CONFIG.SYS back on the server and reboot.
	
	Do not run FTSETUP. It cannot operate correctly and requests that you shut down
	all other screen groups and reboot the server. If you do this, the Trap D/C
	returns because you have added fault tolerance back to CONFIG.SYS. As a
	precaution, backup the server as soon as possible.
	
	In the OS/2 File Manager:
	
	1. Select <View> and then select <Include>.
	
	2. Under File Flags, set the Hidden attribute to Show.
	
	3. Click on Set View.
	
	4. Double-click on the "C:\" icon.
	
	5. Locate and delete the following files (if they exist):
	
	  FTCFG.DRV
	  FTCFG.SYS
	  FTPEND.SYS
	  FTPENDF.SYS
	  FTPENDCP.SYS
	
	6. Do an orderly shutdown of the system and reboot.
	
	FTSETUP should now work.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LAN Manager version 2.2. This
	problem was corrected in the latest US Service Pack for LAN Manager. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  L M P A T C H
	
	Additional query words: 2.20 2.2
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
