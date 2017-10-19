---
layout: page
title: "Q90374: DBWIN Won't Work with Text on First Line of Mono Display"
permalink: /kb/090/Q90374/
---

## Q90374: DBWIN Won't Work with Text on First Line of Mono Display

	Article: Q90374
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DBWIN sample shipped with the Microsoft Windows Software Development Kit
	version 3.1 allows your system to redirect its debugging output to a variety of
	locations, including a secondary monochrome monitor.
	
	Due to the design of DBWIN, if the monochrome monitor contains any text on the
	first line of its display when DBWIN attempts to write to it, DBWIN will not
	output any text.
	
	MORE INFORMATION
	================
	
	Because Windows does not control access to the secondary monochrome monitor, it
	is possible for more than one application to write to the monitor at the same
	time, producing garbled results.
	
	To reduce the possibility of this occurring, DBWIN attempts to detect when
	another application is using the monochrome display, and will stop output if
	this is detected.
	
	The method DBWIN uses to detect whether another application is using the
	monochrome monitor is to check for output on the first line of the monitor. If
	there is any text on this line, DBWIN assumes that another application is using
	the monitor and discontinues output to the monitor.
	
	All output that DBWIN sends to the monochrome monitor begins on the second line
	of the monitor, so it will never write on the first line. Each time a request is
	made to output to the monochrome monitor [either through an OutputDebugString()
	call or through a debugging message from Windows], a check for any text on the
	first line is made. If any text exists on the first line, DBWIN will not attempt
	to write to the monitor because a second application might be using it.
	
	Note that this method of checking for monochrome monitor usage is not foolproof
	and may not work in all cases. In certain situations, it may be necessary to
	clear the monitor manually to allow DBWIN to send text to the monochrome monitor
	again. The following batch file clears the monochrome monitor and allow DBWIN to
	work again:
	
	  @echo off
	  mode mono
	  cls
	  mode co80
	
	In addition, the following C function clears the monochrome monitor:
	
	  extern   WORD _B000h; // Selector exported by KERNEL
	
	  void ClearMono(void) {
	    _asm{
	      push di               // DI is not saved automatically
	      mov ax, OFFSET _B000h // Get selector to mono video memory
	      mov es,ax             // Move into ES
	      xor di,di             // ES:DI points to mono video memory
	      mov ax, 0720h         // 0x07 = attributes, 0x20 = space character
	      mov cx, 80*25         // Repeat for 80 columns by 25 rows
	      rep stosw             // Store AX into (ES:DI)++, CX times
	      pop di
	      }
	  }
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
