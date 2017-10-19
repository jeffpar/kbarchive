---
layout: page
title: "Q63974: IOCtl Calls in Protected-Mode Microsoft Windows"
permalink: /kb/063/Q63974/
---

## Q63974: IOCtl Calls in Protected-Mode Microsoft Windows

	Article: Q63974
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Generally, Microsoft Windows translates standard MS-DOS IOCtl calls in the two
	protected modes (standard mode and enhanced mode). Therefore, in most cases an
	application can make IOCtl calls regardless of the mode in which Windows is
	running. However, if the buffer passed to the IOCtl call contains pointers to
	additional data, the calling application must translate those pointers and the
	data referenced by those pointers into a form that can be used in real mode,
	before making the IOCtl call.
	
	MS-DOS functions are executed only in real mode, and thus can only access data
	that is located in the first 1 MB of memory. To work within this limitation, the
	memory referenced by the pointers contained in the buffer must be allocated
	below 1 MB. In addition, the buffer must contain the segment address of the
	data, rather than the protected-mode selector.
	
	For example, consider IOCtl call Write Control Data to Character Device Driver,
	Interrupt 21h Function 44h Subfunction 03h. The parameters to this call are as
	follows:
	
	  AH = 44H
	  AL = 03H
	  BX = handle
	  CX = number of bytes to write
	  DS:DX = segment:offset address of data buffer
	
	Because this interface is known to protected-mode Windows, Windows is able to
	translate (map) the protected-mode address passed in DS:DX to a memory location
	that is accessible in real mode. Because of this translation, in most cases the
	application is not required to perform any additional work to make the call. The
	caller should set the DS:DX register pair to the selector:offset address of the
	data buffer.
	
	If an MS-DOS device driver defines a special interface that requires pointers to
	additional data be passed in the main data buffer, the caller must ensure the
	pointers passed in the data buffer can be used in real mode. The caller should
	allocate the memory referenced by these pointers using the GlobalDOSAlloc()
	function.
	
	GlobalDOSAlloc() returns a double-word. If the allocation is successful, the
	high-order word contains the segment:paragraph address of the allocated buffer,
	while the lower-order word contains the selector to the buffer. The selector is
	used to access the buffer in protected mode; the segment:paragraph address can
	be used in real mode. Use the GlobalDOSFree() function to free memory allocated
	by GlobalDOSAlloc().
	
	Additional query words: 3.00 3.10 DDKDPMI DDKTSR
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
