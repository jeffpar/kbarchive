---
layout: page
title: "Q74887: How to Start a Windows-Based App Directly from MS-DOS"
permalink: kb/074/Q74887/
---

## Q74887: How to Start a Windows-Based App Directly from MS-DOS

	Article: Q74887
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
	
	It is possible to create a Windows-based application that can be started
	directly from the MS-DOS prompt. For example, the KILLERAP application may be
	written so that when "KILLERAP" (without the quotation marks) is typed at the
	MS-DOS prompt, Windows is loaded and KILLERAP run.
	
	However, some specific programming is required to perform this task. Otherwise,
	enhanced mode Windows will produce a "Memory Segmented" error message. This
	article discusses the techniques required.
	
	MORE INFORMATION
	================
	
	The "Memory Segmented" error message is caused by the fact that the application
	that spawns Windows remains in memory when Windows loads.
	
	There is a straightforward way to work around this complication. Replace the
	standard WINSTUB.EXE program, provided with the Windows Software Development
	Kit, with a custom program tailored to the application.
	
	The following sample WINSTUB program loads the string "win notepad" into the
	keyboard key buffer. Then the program terminates and is removed from memory. The
	keystrokes in the key buffer are played back by the hardware to MS-DOS. This
	starts Windows and runs the program.
	
	This sample code requires Microsoft C version 6.0 or later to compile because it
	uses inline assembly code. A similar program may be written with the Microsoft
	Macro Assembler (MASM) version 5.1 or later.
	
	Sample Code
	-----------
	
	  void main(void)
	  {
	    char szExecLine[] = "win notepad\r";
	    int  iIndex;
	    char cChar;
	
	    for (iIndex = 0; iIndex < sizeof(szExecLine); iIndex++)
	      {
	      cChar = szExecLine[iIndex];
	      _asm
	         {
	         mov        ah, 05h
	         mov        ch, 0
	         mov        cl, cChar
	         int        16h
	         }
	      }
	  }
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
