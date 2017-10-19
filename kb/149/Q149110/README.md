---
layout: page
title: "Q149110: Cannot Start Windows 95 After Using the SYS Command"
permalink: /kb/149/Q149110/
---

## Q149110: Cannot Start Windows 95 After Using the SYS Command

	Article: Q149110
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SYS command to replace the Windows 95 system files on your hard
	disk, the Msdos.sys file may not be replaced, or may be replaced with an
	incomplete Msdos.sys file that contains only the text ";SYS."
	
	If the existing Msdos.sys file on your hard disk is damaged and is not replaced
	by the SYS command, or if the existing Msdos.sys file is replaced with an
	incomplete Msdos.sys file, Windows 95 may boot only to a command prompt the next
	time you start Windows 95. If the existing Msdos.sys file is not damaged and is
	not replaced by the SYS command, no problems occur.
	
	CAUSE
	=====
	
	If the SYS command (Sys.com) included with Windows 95 determines that the
	existing Msdos.sys file is from MS-DOS version 6.22 or earlier, it replaces the
	existing Msdos.sys file with an incomplete Msdos.sys file that contains only the
	text ";SYS." If the SYS command is unable to determine that the existing
	Msdos.sys file is from MS-DOS version 6.22 or earlier, it assumes that the file
	is a valid Windows 95 Msdos.sys file and does not replace it.
	
	RESOLUTION
	==========
	
	To work around this issue, manually rebuild the Msdos.sys file on your hard disk
	so that it includes the location of your Windows folder and the Windows 95
	system files. To do so, follow these steps:
	
	1. Remove the system, hidden, and read-only attributes from the Msdos.sys file
	  in the root folder of the boot drive. To do so, type the following command at
	  the command prompt
	
	  " attrib -s -h -r <drive>:\msdos.sys " (without the quotation marks)
	
	  where <drive> is the physical boot drive.
	
	  NOTE: If drive C is compressed and is currently mounted, the Msdos.sys file is
	  located on the host drive for drive C. If drive C is not compressed or is not
	  currently mounted, the Msdos.sys file is located on drive C.
	
	2. Rename the Msdos.sys file using the following command
	
	  " ren <drive>:\msdos.sys msdos.xxx " (without the quotation marks)
	
	  where <drive> is the physical boot drive.
	
	3. Use any editor (such as Edit.com) to create a new Msdos.sys file that
	  contains the following text
	
	  " [Paths]
	  WinDir=<drive>:\<windows>
	  WinBootDir=<drive>:\<windows>
	  HostWinBootDrv=<boot drive> " (without the quotation marks)
	
	  where <drive> is the drive containing the Windows folder,
	  <windows> is the Windows folder, and <boot drive> is the physical
	  boot drive. For example, if you installed Windows 95 on drive C in a folder
	  named Windows and drive C is not compressed, the Msdos.sys file should
	  contain the following lines:
	
	  " [Paths]
	  WinDir=C:\WINDOWS
	  WinBootDir=C:\WINDOWS
	  HostWinBootDrv=C " (without the quotation marks)
	
	  NOTE: You can also add an [Options] section to the Msdos.sys file with
	  additional settings to personalize the boot process. For information about
	  the [Options] section, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q118579 Contents of the Windows Msdos.sys File
	
	4. Save and then close the Msdos.sys file.
	
	5. Restart your computer.
	
	MORE INFORMATION
	================
	
	When you use the SYS command to replace the Windows 95 system files on your hard
	disk, the SYS command replaces the existing Msdos.sys file only if it determines
	that the file is from MS-DOS version 6.22 or earlier. To determine if the
	Msdos.sys file is from MS-DOS version 6.22 or earlier, the SYS command checks to
	see if the first byte in the file is 0x3Bh, 0xE9h, or 0xEBh. These hexadecimal
	values indicate that the file is a binary file and that it is likely a valid
	Msdos.sys file.
	
	This logic is intended to prevent the SYS command from replacing a valid Windows
	95 Msdos.sys file. However, when the SYS command replaces the existing Msdos.sys
	file, it replaces the file with an Msdos.sys file that contains only the text
	";SYS." Creating an Msdos.sys file without a [Paths] section is appropriate when
	you are replacing the Windows 95 system files on a floppy disk, because the
	location of the Windows folder may not be the same on the computer used to
	create the bootable floppy disk and the computer on which the floppy disk is
	used. Creating an Msdos.sys file without a [Paths] section is not appropriate
	when you are replacing the system files on a hard disk, but the SYS command
	cannot distinguish between a floppy disk and a hard disk.
	
	If the first byte in the existing Msdos.sys file is not one of the hexadecimal
	values listed above, the SYS command assumes that the file is a valid Windows 95
	Msdos.sys file and does not replace it. Therefore, if the existing Msdos.sys
	file is an ASCII text file, or if it is damaged (and the first character in the
	file does not happen to be one of the hexadecimal values listed above), the file
	is not replaced.
	
	Additional query words: corrupted
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
