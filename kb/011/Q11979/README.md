---
layout: page
title: "Q11979: How Windows Resolves Far Calls When Movable Flag Is Used"
permalink: /kb/011/Q11979/
---

## Q11979: How Windows Resolves Far Calls When Movable Flag Is Used

	Article: Q11979
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
	
	The information listed below addresses the following topics relating to using
	the middle model of compilation (-AM) when a module's code segment has been
	renamed using the -NT switch, and the segment is declared movable in the module
	definition (.DEF) file:
	
	1. Locking of the code segment by Windows
	
	2. The handling of FAR calls
	
	MORE INFORMATION
	================
	
	Windows does not necessarily keep the code segment locked. The Microsoft C
	Compiler uses the BP register as a "frame pointer". Local variables and
	parameters are always accessed using offsets from the BP register. The BP
	register is initially even, and the Windows stack is word aligned. When a FAR
	call is made, BP is increased by one. If the code segment is discarded, the
	stack is walked and patched. By determining if BP is odd or even, Windows can
	tell whether the call is FAR or NEAR.
	
	When a long return address is on the stack, it has a pushed DS and BP, and
	because the BP register is increased by one for FAR frames, FAR frames may be
	detected by walking the task chain and BP stack-frame chains.
	
	When the Windows prolog is set up, it does the following:
	
	     extern far pascal funcname();
	
	     cProc funcname,<FAR,PASCAL>
	     "cBegin"
	     Prolog: push ds ; Fixed/Moveable Multiple Data Segment Support
	     pop ax
	     nop
	     inc bp ; Far Frame Marker/Moveable Code Support
	     push bp
	     mov bp,sp
	     push ds ; Data Context Switch Code
	     mov ds,ax ; "
	
	     ...
	
	     "cEnd"
	     Epilog: sub bp,2
	     mov sp,bp
	     pop ds ; Data Context Switch Code
	     pop bp
	     dec bp ; Far Frame Cleanup
	
	     ret
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
