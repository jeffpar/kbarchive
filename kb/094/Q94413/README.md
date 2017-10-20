---
layout: page
title: "Q94413: Setup Checks for 6 Free Entries in the Root Directory"
permalink: /kb/094/Q94413/
---

## Q94413: Setup Checks for 6 Free Entries in the Root Directory

{% raw %}

	Article: Q94413
	Product(s): Microsoft Disk Operating System
	Version(s): 2000,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft MS-DOS Upgrade installation program (SETUP.EXE) starts, but is
	unable to completely install the upgrade.
	
	CAUSE
	=====
	
	SETUP.EXE checks the root directory of your startup drive (usually C) to
	determine if there is enough room for MS-DOS files in the root directory. In
	some cases, Setup may incorrectly determine that enough room exists. Setup
	starts, but is unable to complete the installation.
	
	WORKAROUND
	==========
	
	To work around this problem, remove unnecessary files from the root directory
	and rerun Setup.
	
	MORE INFORMATION
	================
	
	You cannot have more than 512 entries (files or directories) in the root
	directory of an MS-DOS partition. Setup does not allow you to install MS-DOS
	Upgrade if you have 507 or more entries in the root directory (including hidden
	files). This ensures that MS-DOS Setup can create at least six entries.
	
	In some cases, six entries is not enough. When Setup runs out of entries, the
	installation cannot be successfully completed. For example, if you are using
	PC-DOS, you have 506 entries in the root directory, and you install MS-DOS 6.x
	Upgrade in a new directory, Setup cannot successfully install all the files.
	
	The information below lists all potential files and directories that may be
	placed in the root directory and under what conditions they are installed. Any
	combination of the factors listed below results in an incomplete installation.
	
	- WINA20.386 is copied to the root directory if your computer is capable of
	  running Microsoft Windows in 386 enhanced mode and you have Windows version
	  3.0 installed.
	
	- If you are using IBM PC-DOS, the files IBMBIO.COM and IBMDOS.COM are no
	  longer used but are not deleted. MSDOS.SYS AND IO.SYS are copied to the root
	  directory as two additional files.
	
	- If you choose a new directory when you install MS-DOS, an additional root
	  directory entry is used.
	
	- If AUTOEXEC.BAT and CONFIG.SYS are changed by Setup, the files AUTOEXEC.OLD
	  and CONFIG.OLD are created in the root directory.
	
	- Setup creates an OLD_DOS.1 directory.
	
	- If use the /E switch to install both the MS-DOS-based and the Windows-based
	  programs that ship with MS-DOS, Setup creates a WINDOWS directory. (This does
	  not apply to MS-DOS 5 Upgrade).
	
	Additional query words: 6.22 6.00 5.00 set up 6.20 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : :2000,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
