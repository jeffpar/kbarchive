---
layout: page
title: "Q99334: DOCERR: Metafile Terminator Record Not Documented"
permalink: /kb/099/Q99334/
---

## Q99334: DOCERR: Metafile Terminator Record Not Documented

{% raw %}

	Article: Q99334
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The metafile file format, which is described in the Windows Software Development
	Kit (SDK) version 3.1 "Programmer's Reference, Volume 4: Resources" manual, does
	not contain the entire metafile format; the definition of the metafile
	terminator record is missing.
	
	MORE INFORMATION
	================
	
	The metafile terminator record denotes the end of the disk-based metafile, and
	is the last record in the file. The function number for the terminator
	(rdFunction) is 0 (zero) and the size (rdSize) is 3 words.
	
	This information is needed for applications that manually read and write
	metafiles, bypassing the standard graphical device interface (GDI) functions. If
	an application manually creates a metafile, it must place the terminator record
	as the last record in the file. If an application is reading a metafile
	manually, it must terminate reading the records after seeing a terminator
	record.
	
	Additional query words: 3.10 docerr no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
