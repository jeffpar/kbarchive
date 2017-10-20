---
layout: page
title: "Q81669: Windows Err Msg: Corrupt Swap File Warning..."
permalink: /kb/081/Q81669/
---

## Q81669: Windows Err Msg: Corrupt Swap File Warning...

{% raw %}

	Article: Q81669
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following message may appear when you start Windows 3.0:
	
	  Corrupt Swap File Warning
	  Your swap file is corrupt; see chapter 13, "Optimizing Windows," in the
	  Microsoft Windows User's guide for instructions about re-creating the file.
	  Press any key to continue.
	
	This message can occur for various reasons. This article discusses two basic
	system configurations under which the message may be displayed.
	
	The first configuration considered is a non-network machine with a standalone
	installation of Windows on its own hard disk. The second system configuration
	presented here concerns one or more networked machines that are using a shared
	installation of Windows that is run from the network.
	
	NOTE: Following the discussion of the error message in these two situations, this
	article describes the creation and functionality of both the temporary and
	permanent swap files for Windows 3.0.
	
	MORE INFORMATION
	================
	
	Non-Network Installation of Windows
	-----------------------------------
	
	If a standalone installation of Windows exists on the hard disk of an individual
	machine or workstation, then the "Corrupt Swap File Warning" error message may
	appear for the following reasons:
	
	- The SPART.PAR or 386SPART.PAR file is corrupted on your hard disk. To correct
	  this problem, start Windows in real mode and create the swap file again.
	
	- You have deleted the 386SPART.PAR file from the hard disk. To correct this
	  problem, re-create the permanent swap file by running SWAPFILE.EXE from
	  Windows in real mode. If you WANT to delete the permanent swap file, run
	  SWAPFILE.EXE (in real mode Windows) and choose Delete Permanent Swap File, or
	  delete the file SPART.PAR from the Windows directory.
	
	- You have changed the attribute of the 386SPART.PAR file to read-only. To
	  correct this problem, use File Manager or the MS-DOS ATTRIB command to change
	  the attribute of the 386SPART.PAR file to read/write. You could also
	  re-create the permanent swap file by running SWAPFILE.EXE from Windows in
	  real mode.
	
	- You have renamed or moved the file(s). To correct this problem, rename or
	  move the file(s) back to its original location. You can also re-create the
	  permanent swap file by running SWAPFILE.EXE from Windows in real mode.
	
	Network Installation of Windows
	-------------------------------
	
	A machine that uses a shared copy of Windows installed on a server may, at the
	same time, have a local permanent swap file located on the workstation's own
	hard drive. The "Corrupt Swap File Warning" error message may appear in this
	system configuration under the following conditions:
	
	- You create a permanent swap file of a certain size on the local hard drive,
	  and Windows 3.0 is installed on a network drive.
	
	- You log onto the network from a second workstation that also has a permanent
	  swap file on its hard disk. The swap file is not the same size as the first
	  one, or the swap file does not have the exact same starting and ending
	  sectors as the one on the original workstation.
	
	- The second workstation does not have a hard disk.
	
	A permanent swap file should not be used with a network installation of Windows.
	Only the temporary swap file should be used. Windows 3.0 was not designed to be
	used over a network on multiple workstations with the permanent swap file. Even
	though it is not recommended to do so, Windows will start and operate correctly
	after the error message occurs. However, it may run slower until you are logged
	onto the network from the original workstation.
	
	Temporary Swap File
	-------------------
	
	When first installed, Windows defaults to a temporary swap file (WIN386.SWP) that
	will be created in the same directory as the SYSTEM.INI file.
	
	To have Windows create the temporary swap file on the local hard disk, use the
	"pagingdrive=" (without the quotation marks) statement in the SYSTEM.INI file
	after the [386enh] heading. The temporary swap file will be created in the root
	directory of this drive.
	
	If the "pagingdrive=" statement is set to a drive that does not exist, then
	Windows will default back to creating the temporary swap file in the same
	directory as the SYSTEM.INI file. In a network installation, where you log on
	from different workstations, this is the preferred method for handling the swap
	file.
	
	Please refer to the readme file SYSINI3.TXT for more information on
	"pagingdrive=". For more information on temporary swap files, please refer to
	pages 526 to 529 in the "Microsoft Windows User's Guide" for version 3.0.
	
	Permanent Swap File
	-------------------
	
	To further increase the performance of Windows, you can choose to create a
	permanent swap file. A permanent swap file gives the following advantages:
	
	- Permanent swap files use contiguous space on the hard disk and can be read
	  off the hard disk faster than files that are noncontiguous (such as temporary
	  swap files).
	
	- Windows can access the permanent swap file directly and bypass MS-DOS,
	  whereas Windows has to go through MS-DOS to use temporary swap files (which
	  is a slower method).
	
	There are two files involved in a permanent swap file: 386SPART.PAR and
	SPART.PAR. 386SPART.PAR is the swap file and will be located in the root
	directory of the drive. SPART.PAR is a "pointer" file that tells Windows on
	which drive the swap file is located. It also tells Windows on which sector the
	swap file begins and on which sector the swap file ends.
	
	NOTE: Because the permanent swap file 386SPART.PAR is always located in the root
	directory of the drive, it is recommended that a permanent swap file NEVER be
	created on a network drive. If two users create permanent swap files on the same
	drive, they end up trying to use the same swap file, corrupting each others
	installation.
	
	To confirm that Windows is using a permanent swap file, run Windows Setup from
	the Main group. If you are using a permanent swap file, Windows Setup will show
	the location and size of the file in the Network line. A screen from Windows
	Setup might appear as follows:
	
	  Display:      VGA
	  Keyboard:     Enhanced 101 or 102 key US and Non US
	  Mouse:        Microsoft, or IBM PS/2
	  Network:      Microsoft Network (or 100% compatible)
	  --------------------------------------------------------
	  Swap file:    Permanent (5184K bytes on Drive E:)
	
	Please refer to pages 520-526 of the "Microsoft Windows User's Guide" version 3.0
	for more information on permanent swap files.
	
	Please refer to pages 526-529 of the "Microsoft Windows User's Guide" version 3.0
	for more information on temporary swap files.
	
	Additional query words: 3.00 3.0 3.0a 3.00a swapfile swapping swap-file winmem
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
