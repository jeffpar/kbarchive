---
layout: page
title: "Q93356: Setup Questions &amp; Answers for Windows 3.1"
permalink: /kb/093/Q93356/
---

## Q93356: Setup Questions &amp; Answers for Windows 3.1

{% raw %}

	Article: Q93356
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbsetup win31
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	
	1. Q. What is the most common reason for unsuccessful installation of Microsoft
	  Windows?
	
	  A. Terminate-and-stay-resident (TSR) programs loaded from the CONFIG.SYS and
	  AUTOEXEC.BAT files are the most common cause of unsuccessful Windows
	  installations. If you are having difficulty with Windows Setup, insert a
	  system disk in your floppy disk drive and restart your computer. The system
	  disk should contain CONFIG.SYS and AUTOEXEC.BAT files without any device
	  drivers or TSR programs loaded, unless such items are needed to access the
	  hard disk drive. If you use any special drivers for your hard disk drive,
	  such as Disk Manager or Stacker(TM), make sure the drivers are in your new
	  CONFIG.SYS and AUTOEXEC.BAT files and also on the system disk.
	
	2. Q. When Windows Setup attempts to switch from the MS-DOS-based portion of
	  Setup to the Windows-based portion of the installation, the hourglass
	  disappears and Setup hangs, or Windows exits to MS-DOS. Why is this
	  happening?
	
	  A. Setup may stop responding if a corrupted SETUP.INF or SETUP.EXE file or an
	  outdated version of one of these files is located in the WINDOWS or
	  WINDOWS\SYSTEM directory. Search for SETUP.INF and SETUP.EXE in these
	  directories and rename these files if you find them. (For example, rename
	  SETUP.INF to SETUP.OLD.) After you rename the file or files, run the Windows
	  Setup program again from the Windows disks.
	
	3. Q. Setup correctly identifies that I have a Video Seven(TM) video card;
	  however, when I switch from the MS-DOS-based portion of Setup to the
	  Windows-based portion of Setup, my computer hangs. How can I correct this
	  problem?
	
	  A. The video drivers that ship with Windows 3.1 support most Video Seven video
	  cards, but not those using the Headland Technology Video Seven HT-216 or
	  HT-217 chip sets. If your card uses one of these chip sets, select standard
	  VGA, rather than Video Seven, during Setup. If you need the additional
	  resolution or color drivers for the card, contact Video Seven technical
	  support.
	
	Additional query words: 3.10 ivrfax AWW31
	
	======================================================================
	Keywords          : kbsetup win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
