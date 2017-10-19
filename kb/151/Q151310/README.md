---
layout: page
title: "Q151310: Mastering Visual C++: Testing CD-ROM Drive for File Access"
permalink: /kb/151/Q151310/
---

## Q151310: Mastering Visual C++: Testing CD-ROM Drive for File Access

	Article: Q151310
	Product(s): Microsoft Mastering Series
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kbmm kbsetup
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Mastering Microsoft Visual C++ ISBN 1-55615-914-5, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because of physical read limitations of some CD-ROM drives, your CD-ROM drive
	may deny access to some of the files and folders on the Microsoft Mastering
	Visual C++ compact disc. This article lists those files and supplies a method to
	test your CD-ROM drive.
	
	MORE INFORMATION
	================
	
	The CD-ROM drive may have difficulty reading the final folder, listed below,
	from the Mastering Visual C++ compact disc:
	
	  Folders                          Location On Disk
	  -------                          ----------------
	
	  msdev\redist                         634 MB
	
	To test for specific drive-capacity limitations, try to access the following
	files:
	
	  Files                            Location On Disk
	  -----                            ----------------
	
	  msdev\redist\setup.tdf               634 MB
	  system\msrd2x32.dll                  620 MB
	  media\library\a211_017.bmp           600 MB
	  media\L12\vdL12_03.avi               585 MB
	
	The Mastering Visual C++ disc contains 634 MB of data. The final file on the
	CD-ROM is msdev\redist\setup.tdf.
	
	Testing Your CD-ROM Drive
	-------------------------
	
	To ensure the integrity of files that you have copied from your compact disc to
	your hard drive, compare the files using the MS-DOS File Compare program
	(Fc.exe). This test can be used to determine if the CD-ROM subsystem is
	functioning properly at the device driver or hardware level(s).
	
	The Fc.exe utility is a useful method for testing problems related to general
	protection (GP) faults or other critical errors (such as read errors or out of
	memory messages) that may occur when you use CD-ROM drives with Windows
	programs.
	
	Attempt to copy the following files to the hard drive:
	
	  Files                          Location On Disk
	  -----                          ----------------
	
	  msdev\redist\setup.tdf               634 MB
	  system\msrd2x32.dll                  620 MB
	  media\library\a211_017.bmp           600 MB
	  media\L12\vdL12_03.avi               585 MB
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	If the following error message appears
	
	  CDR101: Not Ready
	
	the CD-ROM drive cannot read the disc at the specified location. If the file does
	copy, test the file's integrity by using Fc.exe with the /B (binary) switch. For
	example, to compare the Setup.tdf file on your CD-ROM to the version of
	Setup.tdf file you copied to your hard drive, type the following at the MS-DOS
	command prompt and press ENTER:
	
	  " fc /b d:\msdev\redist\setup.tdf c:\setup.tdf " (without the quotation
	  marks)
	
	where D is the letter of your CD-ROM drive, and C is the letter of your hard
	drive.
	
	If you receive errors, the CD-ROM drive is having problems reading the disc at
	that location.
	
	Additional query words: 1.00 multi media multimedia multi-media mmtitles CD C.D. ROM disc compact disk read only memory errors missing unavailable read-error win95
	
	======================================================================
	Keywords          : kbmm kbsetup 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :1.0,1.0a
	
	=============================================================================
	
