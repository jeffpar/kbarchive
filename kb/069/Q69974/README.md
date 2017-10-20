---
layout: page
title: "Q69974: Information Regarding Buffered I/O and MSCDEX"
permalink: /kb/069/Q69974/
---

## Q69974: Information Regarding Buffered I/O and MSCDEX

{% raw %}

	Article: Q69974
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Multimedia Windows environment, the MSCDEX driver provides
	buffered input and output (I/O) from the CD-ROM device. The information below
	discusses using buffered I/O in an application.
	
	MORE INFORMATION
	================
	
	When 32K of data is read from the disk in response to a request from an
	application, 32K additional data is read from the disk into a buffer in
	anticipation of another sequential read request.
	
	Currently, all information read from the CD-ROM is in response to a synchronous
	MS-DOS file I/O request. This prevents an application from requesting that a
	particular portion of data be read from the disk while the application performs
	some other processing. Although an implementation of asynchronous I/O is being
	researched, it will not be implemented soon. It would be necessary to rewrite
	all CD-ROM drivers currently in use to implement asynchronous I/O.
	
	To fill the buffer with an arbitrary selection from the CD-ROM, an application
	can request one byte of data from the beginning of the selection to be read.
	After the CD-ROM seeks to the data and reads one byte, control is returned. The
	driver reads the remainder of the data into the buffer asynchronously.
	
	Additional query words: no32bit 3.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
