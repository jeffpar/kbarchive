---
layout: page
title: "Q97740: Applications That Don't Run on DoubleSpace-Compressed Drives"
permalink: /kb/097/Q97740/
---

## Q97740: Applications That Don't Run on DoubleSpace-Compressed Drives

	Article: Q97740
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	The following applications may not run correctly from a DoubleSpace- compressed
	drive:
	
	- Argus Financial Software
	
	- Complete PC software that uses voice files
	
	- Empire Deluxe
	
	- Epic Megagames' Zone66 and Ken's Labyrinth
	
	- Informix relational database
	
	- Links and Links 386 from Access Software
	
	- Lotus 1-2-3 version 2.01
	
	- Movie Master version 4.0
	
	- MultiMate versions 3.3 and 4.0
	
	- Quicken (MS-DOS-based version)
	
	- Tony LaRussa Baseball II
	
	- Zsoft PhotoFinish
	
	
	MORE INFORMATION
	================
	
	Argus Financial Software
	------------------------
	
	According to the Argus Technical Support, Argus Financial Software must be run
	from an uncompressed drive.
	
	If you install DoubleSpace when Argus Financial Software is installed, the copy
	protection "key" is left on the uncompressed host drive. To work around this
	problem, reinstall Argus Financial Software on the uncompressed host drive.
	Before you do this, you may need to reduce the size of your compressed drive.
	For more information, see "Using DoubleSpace to Manage Compressed Drives" in the
	"User's Guide."
	
	WARNING: Argus Financial Software must be reinstalled back to the original
	diskettes before it can be installed to the host drive. If the software is
	deleted from the hard drive, it is not recoverable.
	
	For more information, contact Argus Financial Software.
	
	Complete PC Software
	--------------------
	
	According to a Complete PC Technical Support, any Complete Communicator software
	that uses voice files may need to be stored on an uncompressed drive.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  complete and communicator and voice and doublespace
	
	Empire Deluxe
	-------------
	
	When you install Empire Deluxe, the installation program asks several questions
	and requests you to enter a password included in the manual. It then writes this
	information out to a configuration file. After the initial setup, you should
	never have to reenter any of this information, including the password.
	
	On a compressed drive however, the installation program is unable to correctly
	read this file and always asks for the password when you start the program.
	
	Epic Megagames' Zone66 and Ken's Labyrinth
	------------------------------------------
	
	Both games ship with a HELPME.DOC file that tells you the game should be
	installed on an uncompressed drive. Also, the system must be clean-booted to
	work with the games. (If you are using MS-DOS 6.0 or 6.2, you can use the F5
	key; use a boot disk with earlier versions of MS-DOS.) According to the
	HELPME.DOC file, these games are also sensitive to memory managers and
	terminate-and-stay-resident (TSR) programs.
	
	Informix
	--------
	
	Informix (a relational database package from Informix, Inc.) has problems when it
	resides on the compressed drive. The .EXE files are affected, but the data
	itself is unaffected. Error messages, such as "DOS unexpected interrupt," may
	also be displayed.
	
	Links and Links 386
	-------------------
	
	According to Access Software, the publisher of Links and Links 386, if you run
	either Links game on a drive compressed with DoubleSpace or any other disk
	compression utility, your system may stop (hang). This occurs because some of
	the files within the Links game are compressed and decompressed during game
	play.
	
	To work around this problem, you need to reinstall the Links program after you
	compress the drive.
	
	Lotus 1-2-3 Version 2.01
	------------------------
	
	The copy protection scheme used by Lotus 1-2-3 version 2.01 (called SuperLock) is
	incompatible with DoubleSpace. When you run Lotus 1-2-3 after installing
	DoubleSpace, you receive the following error message:
	
	  1-2-3 has been uninstalled
	
	You can work around this problem by obtaining the Lotus Value Pack, which allows
	you to use Lotus 1-2-3 without the copy protection. Lotus Value Pack contains a
	non-copy protected 123.EXE file to replace the existing 123.COM.
	
	Lotus Value Pack is available by calling Lotus Development Customer Service. You
	can also download Lotus Value Pack from the Lotus Development bulletin board
	service (BBS). When you log onto the BBS, choose the menu option "1-2-3 2.x
	Series" and download VALUE.PK1 and VALUE.PK2.
	
	
	Movie Master Version 4.0
	------------------------
	
	According to Comprehensive Video Technical Support, Movie Master version 4.0 is
	copy-protected and the authorization code must be executed from an uncompressed
	drive. To work around the problem move the entire program to the uncompressed
	host drive.
	
	For more information, contact Comprehensive Video Software.
	
	MultiMate Versions 3.3 and 4.0
	------------------------------
	
	According to Borland Technical Support, you may have problems running MultiMate
	versions 3.3 and 4.0 on compressed drives.
	
	This problem commonly appears as a "divide overflow" error.
	
	To work around this problem, move the software to the host drive or an
	uncompressed drive.
	
	Quicken (MS-DOS-Based Version)
	------------------------------
	
	Intuit Technical Support has confirmed that Quicken for MS-DOS may not work
	properly on a compressed drive. To work around this problem, move Quicken to an
	uncompressed drive or the DoubleSpace host drive.
	
	
	Tony LaRussa Baseball II
	------------------------
	
	Tony LaRussa Baseball II must be run from an uncompressed or host drive.
	
	Also, this game does not work if EMM386.EXE is loaded with the RAM or NOEMS
	parameter, but it does work if EMM386.EXE is loaded as an expanded memory
	services (EMS) provider only.
	
	
	Zsoft PhotoFinish
	-----------------
	
	You cannot run Zsoft PhotoFinish from a compressed drive when the PhotoFinish
	virtual memory option is enabled. For more information, see the PhotoFinish
	user's guide.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.00 incompatible programs double space dblspace third party third-party 3rdparty 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
