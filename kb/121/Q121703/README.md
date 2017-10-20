---
layout: page
title: "Q121703: Setup and Boot Hangs on HP NetServer Computer"
permalink: /kb/121/Q121703/
---

## Q121703: Setup and Boot Hangs on HP NetServer Computer

{% raw %}

	Article: Q121703
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Hewlett-Packard (HP) NetServer series computers with onboard Adaptec AIC7770
	SCSI controllers stop responding (hang) during SCSI detection in Windows NT
	Setup. Even if Setup completes successfully, Windows NT may hang during the boot
	process.
	
	CAUSE
	=====
	
	This problem is caused by several factors, such as outdated drivers, outdated
	firmware and computer configuration. Another contributor to the problem is a
	conflict with the data transfer rate of the onboard AIC7770 SCSI controller.
	
	RESOLUTION
	==========
	
	In order to correct this problem, the following procedures for Windows NT
	version 3.1 and Windows NT version 3.5 are recommended. If you experience
	additional problems, refer to your hardware documentation or contact HP
	Technical Support at (208) 323-2551.
	
	Windows NT 3.1
	--------------
	
	A fix is available on HP's BBS at (408) 344-1691. The file to download is
	LMLFB01D.EXE. This driver replaces ARROW.SYS (which becomes NTBOOTDD.SYS after
	installation.) After following the instructions of the README file, you may do
	the following to implement the fix:
	
	1. Make a copy of your master Windows NT Setup Disk for CD-ROM Installation disk
	  using the MS-DOS DISKCOPY command. Label the copy as the work disk.
	
	2. Delete the SCSI driver from the work disk. For example, if the work disk is
	  in the A drive, type the following command:
	
	  del a:\arrow.sys
	
	3. Start the installation of Windows NT as normal using the work disk in place
	  of the Windows NT Setup Disk for CD-ROM Installation disk.
	
	4. When prompted for the type of setup, choose custom setup.
	
	5. Press S to configure additional SCSI adapters after Setup scans your system
	  for SCSI host adapters and displays the list of recognized adapters.
	
	6. Select the Other (requires disk provided by a hardware manufacturer) option.
	  Setup will prompt you for the location of the disk. Specify the following
	  location:
	
	  a:\winnt
	
	7. Insert the HP NetServer LM/LF NetWare, OS/2, MS-DOS and Windows NT SCSI
	  Driver disk into drive A and press ENTER. A dialog box will appear that
	  displays:
	
	  Adaptec 2740/AIC 777x
	
	8. Press ENTER to select this driver and continue with the Windows NT
	  installation.
	
	Windows NT 3.5
	--------------
	
	1. Verify that the ARROW.SYS file in the %systemroot%\SYSTEM32\DRIVERS
	  subdirectory is the one shipped with Windows NT version 3.5. The file size of
	  ARROW.SYS is 38,224 bytes dated 9/4/94.
	
	2. Verify the version number of the Flash BIOS on each NetServer computer, which
	  are listed below:
	
	  Models      486-processor          Pentium-procoessor
	  -------------------------------------------------------
	  LM          1.00.19.AMO or later   1.00.19.AMO or later
	  LF and LC   4.02.23.PA or later    4.02.18.PB or later
	  LE          Z.04.01 or later       Z.04.01 or later
	
	3. If PCI slots on the NetServer machines are not used, disable them.
	
	4. Verify that the Secondary Cache Mode on the computer is set to Write-through.
	  The default is Write-back.
	
	NOTE: For steps 3 and 4 above, run the EISA Configuration utility shipped with
	the Hewlett-Packard NetServer series computers.
	
	The products included here are manufactured by Hewlett-Packard, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	

{% endraw %}
