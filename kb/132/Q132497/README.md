---
layout: page
title: "Q132497: Dogs: Cannot View Images Outside of Dogs"
permalink: /kb/132/Q132497/
---

## Q132497: Dogs: Cannot View Images Outside of Dogs

{% raw %}

	Article: Q132497
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kbgraphic kbmm win31kbfaq
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dogs for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to view Microsoft Dogs images outside of the program.
	
	CAUSE
	=====
	
	Microsoft Dogs uses Device Independent Bitmap (.dib) files to provide articles
	and pictures. The Dogs CD-ROM contains these .dib files in a compressed format.
	
	RESOLUTION
	==========
	
	To view these files, use the Windows Expand.exe program to decompress the files.
	Then, use a graphics application such as Microsoft Windows PaintBrush or
	Microsoft Windows 95/98 Paint to open and view the file.
	
	For example, to expand ABCS00aa.DIB from the Dogs CD to the root directory on
	Drive C, do the following:
	
	1. Locate Expand.exe on your hard drive. If you cannot find it, copy Expand.exe
	  from the Windows Setup disk to the Windows subdirectory on your hard drive.
	  For more information about how to perform this task in Windows, see your
	  Windows printed documentation or online Help.
	
	  Location of Expand.exe on Windows Setup disks:
	
	  Operating System        1.44-MB 3.5-Inch Disk    1.2-MB 5.25-Inch Disk
	  ----------------        ---------------------    ---------------------
	
	  Windows 3.1                   Disk 3                      Disk 3
	  Windows 3.11                  Disk 4                      Disk 5
	  Windows for Workgroups 3.1    Disk 6                      Disk 8
	  Windows for Workgroups 3.11   Disk 6                      Disk 6
	
	2. At an MS-DOS command prompt, change to the Windows subdirectory on Drive C.
	  For more information about how to perform this task in Windows, see your
	  Windows printed documentation or online Help.
	
	3. With the Dogs CD-ROM in the CD-ROM drive, type the following at the MS-DOS
	  command prompt and press ENTER
	
	  "expand d:\data\art_atoa\abcs\abcs00aa.dib c:\ " (without the quotation
	  marks)
	
	  where D is the CD-ROM drive and C:\ is where you want to expand the file.
	
	The DIB file is decompressed and ready to open in a graphics program that
	supports the .dib format.
	
	Additional query words: multi media multimedia multi-media paint brush mmtitles kbmm
	
	======================================================================
	Keywords          : kbenv kbgraphic kbmm win31 kbfaq
	Technology        : kbHomeProdSearch kbDogs100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
