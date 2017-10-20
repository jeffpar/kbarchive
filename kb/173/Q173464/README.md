---
layout: page
title: "Q173464: Expedia Trip Planner 98: Testing CD-ROM Drive for File Access"
permalink: /kb/173/Q173464/
---

## Q173464: Expedia Trip Planner 98: Testing CD-ROM Drive for File Access

{% raw %}

	Article: Q173464
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Trip Planner 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because of physical read limitations of some CD-ROM drives, you may be denied
	access to some of the files and folders on the Microsoft Expedia Trip Planner 98
	compact disc. This article lists those files and supplies a method to test your
	CD-ROM drive.
	
	MORE INFORMATION
	================
	
	The CD-ROM drive may have difficulty reading the final folder, listed below,
	from the Expedia Trip Planner CD-ROM:
	
	  Folder                            Location On Disc
	  ------                            ----------------
	  Acmsetup\Enu\Msinfo                   566-567 MB
	
	To test for specific drive-capacity limitations, try to access the following
	files:
	
	  Files                             Location On Disc
	  -----                             ----------------
	  Acmsetup\Enu\Msinfo\Msinfo32.exe      566-567 MB
	  Acmsetup\Enu\Acmsetup.exe             558-559 MB
	  Data\Ussart.its                       381-553 MB
	
	The Expedia Trip Planner 98 compact disc contains 567 MB of data. The final file
	on the CD-ROM is Acmsetup\Enu\Msinfo\Msinfo32.hlp.
	
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
	  Acmsetup\Enu\Msinfo\Msinfo32.exe      566-567 MB
	  Acmsetup\Enu\Acmsetup.exe             558-559 MB
	  Data\Ussart.its                       381-553 MB
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	If the following error message appears
	
	  CDR101: Not Ready
	
	the CD-ROM drive cannot read the compact disc at the specified location. If the
	file does copy, test the file's integrity by using Fc.exe with the /B (binary)
	switch. For example, to compare the Msinfo32.exe file on your CD-ROM to the
	version of the Msinfo32.exe file you copied to your hard disk drive, type the
	following at the MS-DOS command prompt, and then press ENTER
	
	  "fc /b d:\Acmsetup\Enu\Msinfo\Msinfo32.exe c:\Msinfo32.exe" (without the
	  quotation marks)
	
	where D is the letter of your CD-ROM drive, and C is the letter of your hard disk
	drive.
	
	If you receive errors, the CD-ROM drive is having problems reading the compact
	disc at that location.
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm cd rom cd-rom compact disc read only missing unavailable read-error invalid win95 kbimu
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbExpediaSearch
	Version           : WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
