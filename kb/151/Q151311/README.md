---
layout: page
title: "Q151311: Mastering VB: Testing CD-ROM Drive for File Access"
permalink: /kb/151/Q151311/
---

## Q151311: Mastering VB: Testing CD-ROM Drive for File Access

	Article: Q151311
	Product(s): Microsoft Mastering Series
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbmm kbsetup
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Mastering Microsoft Visual Basic 4.0 ISBN 1-55615-913-7, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because of physical read limitations of some CD-ROM drives, your CD-ROM drive
	may deny access to some of the files and folders on the Microsoft Mastering
	Visual Basic compact disc. This article lists some of those files and supplies a
	method to test your CD-ROM drive.
	
	MORE INFORMATION
	================
	
	The CD-ROM drive may have difficulty reading the final two folders, listed
	below, from the Mastering Visual Basic compact disc:
	
	  Folders                            Location On Disk
	  -------                            ----------------
	
	  Root directory                        447-447 MB
	  Master                                420-439 MB
	
	To test for specific drive-capacity limitations, try to access the following
	files:
	
	  Files                              Location On Disk
	  -----                              ----------------
	
	  Setup.lst                             447 MB
	  Master\Mvb.m14                        437 MB
	
	The Mastering Visual Basic compact disc contains 451 MB of data. The final file
	on the disc is Setup.lst.
	
	Testing Your CD-ROM Drive
	-------------------------
	
	To ensure the integrity of files that have been copied from your compact disc to
	your hard drive, compare the files using the MS-DOS File Compare program
	(Fc.exe). This test can be used to determine if the CD-ROM subsystem is
	functioning properly at the device driver or hardware level(s).
	
	The Fc.exe utility is a useful method for testing problems related to general
	protection (GP) faults or other critical errors (such as read errors or out of
	memory messages) that can occur with Windows CD-ROM applications.
	
	Attempt to copy the following files to the hard drive.
	
	  Files                              Location On Disk
	  -----                              ----------------
	
	  Setup.lst                             447 MB
	  Master\Mvb.m14                        437 MB
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	If the following error message appears:
	
	  CDR101: Not Ready
	
	the CD-ROM drive cannot read the disc at the specified location. If the file
	copies, test the file's integrity using Fc.exe with the /B (binary) switch. For
	example, to compare the setup.lst file on your CD-ROM with the setup.lst file on
	your hard disk drive, type the following at the MS-DOS command prompt and press
	ENTER:
	
	  " fc /b d:\setup.lst c:\setup.lst " (without the quotation marks)
	
	If you receive errors, the CD-ROM drive is having problems reading the disc at
	that location.
	
	Additional query words: 1.00 multi media multimedia multi-media mmtitles CD C.D. ROM disc compact disk read only memory errors missing unavailable read-error win95
	
	======================================================================
	Keywords          : kbmm kbsetup 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :1.0
	
	=============================================================================
	
