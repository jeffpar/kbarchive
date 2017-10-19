---
layout: page
title: "Q124071: Can't Boot from Sound Blaster SCSI II Controller"
permalink: /kb/124/Q124071/
---

## Q124071: Can't Boot from Sound Blaster SCSI II Controller

	Article: Q124071
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have the Creative Labs Sound Blaster 16 SCSI II controller and are
	booting from a SCSI hard disk drive connected to another SCSI controller (such
	as an Adaptec SCSI controller), you are not able to boot from a SCSI hard disk
	drive connected to either adapter under Windows NT 3.5 and still have Windows NT
	recognize the SCSI II port. Windows NT only recognizes the SCSI II port on the
	Sound Blaster adapter if the adapter is configured for interrupt 11, which
	forces it to set its SCSI II port to SCSI port zero. Because the Sound Blaster
	does not have a boot ROM BIOS, it cannot manage your boot hard disk drive.
	Further, since you cannot boot from the second SCSI port (SCSI port 1) on your
	other SCSI controller, you cannot boot hard disk drive from the there either.
	
	Creative Labs has confirmed this to be a problem in the Sound Blaster 16 driver
	for Windows NT version 3.5.
	
	NOTE: The driver limits SCSI II port recognition to interrupt 11. The adapter
	itself limits the SCSI ID to port 0 if the interrupt is set to 11. Adaptec is
	working on a resolution to both of these limitations.
	
	WORKAROUND
	==========
	
	Connect all your devices to the other SCSI controller and set it for interrupt
	11. You will not be able to see your SCSI II port on the Sound Blaster adapter
	under Windows NT, but you will be able to use your SCSI devices and boot from
	your SCSI hard disk drive.
	
	
	Additional query words: prodnt SCSI-2
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
