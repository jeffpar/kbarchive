---
layout: page
title: "Q77473: Rules for Using Far Pointers to Memory Objects"
permalink: /kb/077/Q77473/
---

## Q77473: Rules for Using Far Pointers to Memory Objects

{% raw %}

	Article: Q77473
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
	
	In Windows version 3.0 standard and enhanced modes, rules for using far pointers
	have been relaxed substantially. This is due to the use of the protected mode of
	the 80286, 80386, and 80486 processors. In this mode, far pointers are no longer
	a segment:offset value. Protected mode far pointers are made up of a
	selector:offset value. The selector is an index into a descriptor table. Each
	descriptor contains information about a block of memory, such as size, location
	in memory (linear memory if in enhanced mode, physical memory if in standard
	mode), and access rights. For more information on the descriptor table, refer to
	Chapter 3 of "The 80386/80486 Programming Guide" by Ross P. Nelson (Microsoft
	Press).
	
	The protected mode of the 80286, 80386, and 80486 processors allows memory blocks
	to be moved in memory without invalidating their selector:offset value. This is
	accomplished by changing the reference to the location in memory in the
	descriptor rather than changing the actual selector value.
	
	Because of this functionality, using far pointers in standard and enhanced modes
	is much easier. In the following four circumstances, far pointers to data can be
	assumed to be valid:
	
	1. Global memory that is allocated with GlobalAlloc() as movable and
	  nondiscardable
	
	  The far pointer returned from GlobalLock() can be assumed to be valid as long
	  as the GlobalUnlock() function has not been called. Once GlobalUnlock() has
	  been called, the far pointer can no longer be assumed to be valid because the
	  memory may be discarded. However, the far pointer will remain valid in the
	  case of memory that is nondiscardable and is not an automatic data segment.
	  Because of the selector technology discussed above, movable memory can move
	  without invalidating the far pointer.
	
	  NOTE: If a block is reallocated using GlobalReAlloc() and the new size
	  requires a different number of selectors (for example 50K reallocated to 110K
	  or 65K reallocated to 63K), the base selector value may be changed. Each
	  selector can refer to a maximum of 64K of memory.
	
	2. Far pointers to static or global data within an application
	
	  Static and global data within an application is stored in the static data area
	  of the application's DGROUP. Because the whole DGROUP segment is moved, the
	  far pointer will still be valid after a move in protected mode.
	
	3. Automatic data within a function as long as that function has not been
	  exited
	
	  Far pointers to automatic data will be valid as long as no return has been
	  executed from the function that allocated the data. Automatic data is stored
	  on the stack. When an application returns from a function, the memory
	  allocated by that function is no longer allocated and cannot be assumed to be
	  valid. This then makes memory that a far pointer references subject to
	  corruption.
	
	4. Local memory that has been locked with LocalLock()
	
	  Memory allocated with LocalAlloc() comes from the local heap. Memory on the
	  local heap can be moved around within the DGROUP segment, which will cause
	  the offset value of its location to change. This will invalidate any far
	  pointers to the memory. The LocalLock() function fixes the memory within the
	  local heap.
	
	For compatibility with future versions of Windows, far pointers to data within an
	application should NEVER be passed to other applications. The current version of
	Windows uses one LDT (local descriptor table) for all descriptors associated
	with data. In the future, one LDT may be used for each application's data, while
	a GDT (global descriptor table) may be used for shared data. If a
	selector:offset combination from one application is used in another application
	in such an environment, the selector will be used to reference a descriptor in
	the called application's LDT. The descriptor in the called application's LDT
	will most likely not contain the correct reference for the memory block. The
	only supported way to share data between applications is global memory allocated
	with the GMEM_SHARE (also known as the GMEM_DDESHARE) flag.
	
	Selectors that are aliased, using AllocDStoCSAlias() or AllocSelector(), will not
	be updated when the memory is moved. For this reason, far pointers that include
	aliased selectors cannot be assumed to be valid unless the memory has been fixed
	into place with GlobalFix().
	
	For a more detailed description of memory management under protected mode and
	Windows 3.0, see Chapters 17 and 18 of "Peter Norton's Windows 3.0 Power
	Programming Techniques." This book is available from Bantam Computer Books and
	is coauthored by Paul Yao.
	
	Additional query words: no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
