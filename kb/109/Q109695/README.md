---
layout: page
title: "Q109695: Cannot Read Last Image from Photo-CD"
permalink: /kb/109/Q109695/
---

## Q109695: Cannot Read Last Image from Photo-CD

	Article: Q109695
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may be unable to read the last image from a Photo-CD under MS-DOS version
	6.2 and 6.21 using Kodak Access, Tempra Access, or other third- party Photo-CD
	software.
	
	CAUSE
	=====
	
	This problem occurs when you are using SMARTDrive version 5.0 (included with
	MS-DOS 6.2 and Windows for Workgroups 3.11) to cache the Photo-CD.
	
	WORKAROUND
	==========
	
	To work around this problem, either disable disk caching on the CD-ROM drive, or
	add the "/E:2048" (without the quotation marks) parameter to the SMARTDRV.EXE
	command (typically in the AUTOEXEC.BAT file). For example:
	
	  smartdrv /e:2048
	
	MORE INFORMATION
	================
	
	SMARTDrive attempts to read more data than is initially requested. This is
	called "read ahead" caching. When SMARTDrive reads past the end of a Photo- CD
	it fails to read the last photo. This problem occurs because a Photo-CD does not
	contain data after the last photo, even though the CD disk size indicates
	additional sectors exist.
	
	The /E parameter specifies in bytes the amount of the cache that SMARTDrive moves
	at a time. Reducing the element size to 2048 (from the default of 8192) prevents
	SMARTDrive from attempting to read past the end of the Photo- CD.
	
	For more information on configuring SMARTDrive, type "help smartdrv" (without the
	quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	MS-DOS version 6.22 ships with SMARTDrive version 5.01. SMARTDrive version 5.01
	fixes problems with Kodak Photo-CDs. For more information about SMARTDrive, see
	the following article in the Microsoft Knowledge Base:
	
	  Q127021 SMARTDrive Version History
	
	Additional query words: 3.11 6.20 6.21 picture compact disk photograph hang lock cdrom
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22; WINDOWS:3.11
	
	=============================================================================
	
