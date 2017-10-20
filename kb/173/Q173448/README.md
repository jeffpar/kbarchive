---
layout: page
title: "Q173448: Expedia Streets 98: Testing CD-ROM Drive for File Access"
permalink: /kb/173/Q173448/
---

## Q173448: Expedia Streets 98: Testing CD-ROM Drive for File Access

{% raw %}

	Article: Q173448
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because of physical read limitations of some CD-ROM drives, you may be denied
	access to some of the files and folders on the Microsoft Expedia Streets 98
	compact disc. This article lists those files and supplies a method to test your
	CD-ROM drive.
	
	MORE INFORMATION
	================
	
	The CD-ROM drive may have difficulty reading the final folder, listed below,
	from the Expedia Streets 98 CD-ROM:
	
	  Folder                            Location On Disc
	  ------                            ----------------
	
	  Acmsetup\Enu\Msinfo                   602-603 MB
	
	To test for specific drive-capacity limitations, try to access the following
	files:
	
	  Files                             Location On Disc
	  -----                             ----------------
	
	  Acmsetup\Automap\System\Shrl11.dll    602-603 MB
	  Acmsetup\Enu\Acmsetup.exe             578-579 MB
	  Data\Ussart.its                       491-570 MB
	
	The Expedia Streets 98 compact disc contains 603 MB of data. The final file on
	the CD-ROM is Acmsetup\Enu\Msinfo\Msinfo32.hlp.
	
	Testing Your CD-ROM Drive
	-------------------------
	
	To test the integrity of files that you have copied from your CD-ROM drive to
	your hard disk drive, compare the files using the MS-DOS File Compare program
	(Fc.exe). You can use this to determine if the CD-ROM subsystem is functioning
	properly at the device driver or hardware level(s).
	
	The Fc.exe utility is a useful method for testing problems related to general
	protection (GP) faults or other critical errors (such as read errors or out of
	memory messages) that may occur when you use CD-ROM drives with Windows
	programs.
	
	Attempt to copy one of the following files to the hard disk drive:
	
	  Files                             Location On Disc
	  -----                             ----------------
	
	  Acmsetup\Automap\System\Shrl11.dll    602-603 MB
	  Acmsetup\Enu\Acmsetup.exe             578-579 MB
	  Data\Ussart.its                       491-570 MB
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	If the following error message appears
	
	  CDR101: Not Ready
	
	the CD-ROM player cannot read the disc at the specified location.
	
	If the file does copy, test the file's integrity by using Fc.exe with the /B
	(binary) switch. For example, to compare the Shrl11.dll file on the CD-ROM to
	the version of the Shrl11.dll file that you copied to your hard drive, type the
	following at the MS-DOS command prompt, and then press ENTER
	
	  " fc /b d:\Acmsetup\Automap\System\Shrl11.dll c:\Shrl11.dll " (without the
	  quotation marks)
	
	where D is the letter of your CD-ROM drive, and C is the letter of your hard disk
	drive.
	
	If you receive errors, the CD-ROM drive is having problems reading the compact
	disc at that location.
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm cd rom cd-rom compact disc read only missing unavailable read-error invalid win95
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbExpediaSearch
	Version           : WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
