---
layout: page
title: "Q96327: Disconnected Network Drive Becomes Floppy Disk Drive"
permalink: kb/096/Q96327/
---

## Q96327: Disconnected Network Drive Becomes Floppy Disk Drive

	Article: Q96327
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2; WINDOWS:3.1,3.11; :2.1,2.1a,2.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft LAN Manager, versions 2.1, 2.1a, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances when you are running MS-DOS DoubleSpace, Doublespace
	may not disconnect from a network drive correctly if the network drive letter is
	between the last physical drive letter and the host drive letter.
	
	After you attempt to disconnect either from File Manager or MS-DOS, the network
	drive changes to a floppy disk drive. If you choose the floppy disk drive icon
	in File Manager, a message is displayed stating that there is no floppy disk in
	the drive. If you choose the drive in MS-DOS, the following message is
	displayed:
	
	  Not Reading Drive <x>: Abort, Retry, Fail?
	
	where <x> is the drive letter of the disconnected network drive.
	
	File Manager and MS-DOS maintain this nonfunctioning disk drive until you reboot
	your computer.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Restart your computer.
	
	2. Change to your DoubleSpace host partition and use the ATTRIB command to
	  remove the hidden, system, and read-only attributes of the DBLSPACE.INI file
	  as follows:
	
	  attrib dblspace.ini -h -s -r
	
	3. Open DBLSPACE.INI in a text editor, such as MS-DOS Editor. You should see two
	  lines similar to the following (not necessarily in this order):
	
	  LastDrive=M
	  ActivateDrive=H,C0
	
	4. Change the ActivateDrive= statement's first parameter to the next drive
	  letter following your last physical drive letter. For example, if you have
	  two partitions (C and D) on one physical hard drive, set ActivateDrive= to
	  E.
	
	  WARNING: If you use the incorrect drive letters when you edit the
	  ActivateDrive= line in the DBLSPACE.INI file, the system may stop responding
	  (hang) when you restart it.
	
	5. Set LastDrive= to the same letter you used in step 4. As with the previous
	  example, if you have one physical drive and two partitions, C and D, your
	  DBLSPACE.INI file would include the following lines:
	
	  LastDrive=E
	  ActivateDrive=E,C0
	
	6. Save the changes you made to the DBLSPACE.INI file and use the ATTRIB command
	  to reset its attributes as follows:
	
	  attrib dblspace.ini +h +s +r
	
	7. Restart your computer.
	
	After you restart your computer, DoubleSpace uses the new drive letter as its
	host partition. This results in no available drive letters between your physical
	hard disk drive and the DoubleSpace host partition to use for network
	redirections. You are forced to use drive letters that follow the host partition
	drive letter; this prevents the floppy disk drive icon problem from occurring.
	
	NOTE: This procedure restricts the creation of additional DoubleSpace compressed
	drives. If you later decide to create additional compressed drives, you must
	change the LastDrive= statement in the DBLSPACE.INI file to a higher letter than
	the one specified in ActivateDrive=. For example, if your host drive is assigned
	to D, your DBLSPACE.INI file should include the following lines:
	
	  LastDrive=E
	  ActivateDrive=D,C0
	
	This gives DoubleSpace the necessary drive letter to use when it creates another
	DoubleSpace compressed drive.
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 6.0 and 6.2. We
	are researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 6.00 6.20 diskette errmsg error
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbLanManSearch kbZNotKeyword3 kbWin310 kbWin311 kbLanMan210 kbLanMan210a kbLanMan220 kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2; WINDOWS:3.1,3.11; :2.1,2.1a,2.2
	
	=============================================================================
	
