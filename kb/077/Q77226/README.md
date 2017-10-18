---
layout: page
title: "Q77226: Memory Access Methods for Protected Mode Applications"
permalink: kb/077/Q77226/
---

## Q77226: Memory Access Methods for Protected Mode Applications

	Article: Q77226
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Applications that will run solely in one of Windows protected modes (standard
	mode or enhanced mode) can take advantage of the attributes of protected mode to
	reduce the size and improve the speed of the application.
	
	These techniques do not apply to applications that can be run in Windows real
	mode.
	
	MORE INFORMATION
	================
	
	To assure compatibility with future versions of Windows, an application should
	not make any assumptions about the protection ring of memory selectors the
	system provides for memory allocations.
	
	Using global memory can be more straightforward when an application is developed
	for the protected-mode environment. The following four steps provide a procedure
	for using memory:
	
	1. Use the GlobalAlloc() function to allocate memory. Applications should ALWAYS
	  use the GMEM_MOVEABLE attribute, which signifies that the linear address of
	  the memory block can be changed by the system. The selector or handle to this
	  block will not change unless the application calls GlobalRealloc() to modify
	  the handle, and changes the number of 64K blocks required to satisfy the
	  request. For example, the selector can change if a 60K block is increased to
	  70K or if a 70K block is reduced to 60K.
	
	2. Use the GlobalLock() function to obtain the corresponding selector. In
	  protected mode, there is no need to bracket each use of an object with
	  GlobalLock/GlobalUnlock calls. These calls are required in real mode because
	  the Windows memory management algorithm cannot move locked objects in memory.
	  In protected mode, locked objects can be moved without changing the selector
	  value that is used to refer to the object.
	
	3. Use the selector and the range of offsets (from zero to the size of the
	  block) to access the memory.
	
	4. When the memory block is no longer required, unlock the memory block using
	  the GlobalUnlock() function, and free the selector using the GlobalFree()
	  function.
	
	Some applications introduce incompatibilities by implementing a private version
	of the GlobalLock() function to translate a handle to a selector. While a
	private function can be made to work for any one version of Windows, it is not
	guaranteed to work in future versions.
	
	The four steps above may be used for discardable memory. However, Windows cannot
	discard the memory while it is locked. Therefore, even in protected mode,
	applications that use discardable memory objects should unlock each object when
	it is not in use. This makes these memory blocks candidates for discarding
	should the system run out of memory.
	
	Selectors should not be shared between applications unless the rules outlined in
	the dynamic data exchange (DDE) specification are followed. In particular, the
	GMEM_DDESHARE or GMEM_SHARE flag must be specified in memory allocation
	requests. Future versions of Windows may implement separate address spaces; any
	applications that improperly share memory will not function properly in any such
	release.
	
	An application that uses any of these techniques should specify the Resource
	Compiler -T switch when resources are added to the application. This will
	prevent the application from running in real mode.
	
	Additional techniques to decrease the size and increase the speed of an
	application developed for protected mode can be found by searching on the words
	in this Knowledge Base:
	
	  streamlined
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
