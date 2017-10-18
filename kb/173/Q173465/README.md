---
layout: page
title: "Q173465: Encarta Virtual Globe, Trial Edition: Testing CD-ROM File Access"
permalink: kb/173/Q173465/
---

## Q173465: Encarta Virtual Globe, Trial Edition: Testing CD-ROM File Access

	Article: Q173465
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Virtual Globe, 1998 edition (trial version) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because of physical read limitations of some CD-ROM drives, you may be denied
	access to some of the files and folders on the Microsoft Encarta Virtual Globe,
	1998 Trial edition compact disc. This article lists those files and supplies a
	method to test your CD-ROM drive.
	
	MORE INFORMATION
	================
	
	The CD-ROM drive may have difficulty reading the final folder, listed below,
	from the Encarta Virtual Globe, Trial Edition CD-ROM:
	
	+--------------------------------------+
	| Folder            | Location On Disc | 
	+--------------------------------------+
	| System\Media\Home | 628-629 MB       | 
	+--------------------------------------+
	
	To test for specific drive-capacity limitations, try to access the following
	files:
	
	+--------------------------------------------------+
	| Files                         | Location On Disc | 
	+--------------------------------------------------+
	| System\Media\Home\Bottom.spl  | 628-629 MB       | 
	+--------------------------------------------------+
	| System\Media\Avi\T174228a.avi | 606-608 MB       | 
	+--------------------------------------------------+
	| System\Media\Avi\18352.avi    | 568-571 MB       | 
	+--------------------------------------------------+
	| System\Fly\Uswest.fly         | 543-547 MB       | 
	+--------------------------------------------------+
	
	The Encarta Virtual Globe, Trial Edition compact disc contains 629 MB of data.
	The final file on the CD-ROM is System\Media\Home\Topb.spl.
	
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
	
	+--------------------------------------------------+
	| Files                         | Location On Disc | 
	+--------------------------------------------------+
	| System\Media\Home\Bottom.spl  | 628-629 MB       | 
	+--------------------------------------------------+
	| System\Media\Avi\T174228a.avi | 606-608 MB       | 
	+--------------------------------------------------+
	| System\Media\Avi\18352.avi    | 568-571 MB       | 
	+--------------------------------------------------+
	| System\Fly\Uswest.fly         | 543-547 MB       | 
	+--------------------------------------------------+
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	If the following error message appears
	
	  CDR101: Not Ready
	
	the CD-ROM drive cannot read the compact disc at the specified location. If the
	file does copy, test the file's integrity by using Fc.exe with the /B (binary)
	switch. For example, to compare the Bottom.spl file on the CD-ROM to the version
	of the Bottom.spl file you copied to your hard disk drive, type the following at
	the MS-DOS command prompt and then press ENTER:
	
	  fc /b d:\System\Media\Home\Bottom.spl c:\Bottom.spl
	
	where D is the letter of your CD-ROM drive, and C is the letter of your hard disk
	drive.
	
	If you receive errors, the CD-ROM drive is having problems reading the compact
	disc at that location.
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm cd rom cd-rom compact disc kbimu mm
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaVirtGlobe98
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
