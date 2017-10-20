---
layout: page
title: "Q112397: Windows NT Installation from MSDN CD-ROM"
permalink: /kb/112/Q112397/
---

## Q112397: Windows NT Installation from MSDN CD-ROM

{% raw %}

	Article: Q112397
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	- the operating system: Microsoft Windows NT 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows NT version 3.1 is supplied with the Microsoft Developer
	Network (MSDN) CD-ROM. It is located on the Systems CD-ROM disk number 2. Follow
	these steps to install Windows NT (U.S., Intel x86 version):
	
	1. Start your computer with MS-DOS.
	
	2. Change directory to <CD-ROM drive>:\winnt\usall\i386.
	
	3. Run WINNT.EXE.
	
	When you make changes to your configuration after initial installation (for
	example, adding printer drivers), you are prompted to insert disks into drive A.
	You can install files from the MSDN CD-ROM in several ways:
	
	- Copy the appropriate files for your product version to a temporary directory
	  on the hard disk and change the prompt from drive A to that directory.
	
	  -or-
	
	- Connect to a file server sharing a CD-ROM drive and change the prompt from
	  drive A to that directory.
	
	  -or-
	
	- If you are on a network and the CD-ROM drive is on your computer, from File
	  Manager, create a new share on the CD-ROM directory where the files reside,
	  and then connect to the share.
	
	MORE INFORMATION
	================
	
	Following is a listing of the Windows NT products available on the MSDN CD-ROM.
	This information is an excerpt from the README.TXT included in the MSDN CD-ROM:
	
	  To install the following products place operating system CD noted in the 'CD'
	  column in your CD-ROM drive. Change the current directory to the directory
	  indicated in the 'Directory' column below. Once in the directory, type the
	  name of the setup program in the 'Setup Program' column.
	
	  Product Name                     CD Directory           Setup Program
	  -----------------------------------------------------------------------
	  Windows NT ALPHA ( US )          2  WINNT\USALL\Alpha   setup.exe
	  Windows NT INTEL  ( US )         2  WINNT\USALL\i386    winnt.exe
	  Windows NT MIPS ( US )           2  WINNT\USALL\Mips    setup.exe
	  Windows NT French ( INTEL )      1  WINNT\X86\French    winnt.exe
	  Windows NT French ( MIPS )       1  WINNT\MIPS\French   winnt.exe
	  Windows NT German  ( MIPS )      1  WINNT\MIPS\German   winnt.exe
	  Windows NT German ( INTEL )      1  WINNT\X86\German    winnt.exe
	  Windows NT Japanese ( INTEL ) SDK1  I386                winnt.exe
	  Windows NT Spanish ( INTEL )     1  WINNT\X86\Spanish   winnt.exe
	  Windows NT Spanish ( MIPS )      1  WINNT\MIPS\Spanish  winnt.exe
	  U.S. Service Pack 1 for
	       Windows NT ( INTEL )        2  WINNT\CSD\i386      update.exe
	  U.S. Service Pack 1 for
	       Windows NT ( MIPS )         2  WINNT\CSD\MIPS      update.exe
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbOSWinSearch kbOSWinNT310 kbMSDNSearch kbZNotKeyword2 kbOSWinNTSearch
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
