---
layout: page
title: "Q43648: Returning Control to CodeView"
permalink: kb/043/Q43648/
---

## Q43648: Returning Control to CodeView

	Article: Q43648
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kbCodeView kbDebug kbVC
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are two software methods of returning control to CodeView during
	program execution:
	
	1. Use the debug interrupt, Interrupt 3, in your code. Interrupt 3 is called a
	  microprocessor (or logical) interrupt. It is the interrupt that CodeView uses
	  to make breakpoints. Place an Interrupt 3 into your code in selected places
	  where you want to return control to CodeView.
	
	  In a program designed for the Microsoft Windows operating system, use the
	  DebugBreak() function to insert an Interrupt 3 in the code. Using
	  DebugBreak() instead of calling Interrupt 3 directly through assembly code is
	  especially important in applications designed for Win32s.
	
	  The following sample program demonstrates the technique. Note that you could
	  easily construct a macro to insert breakpoints where desired, and you could
	  use inline assembly instead of the int86() function:
	
	        #include <dos.h>
	        #include <stdio.h>
	
	        void main()
	        {
	           union REGS  inregs;
	           int         i = 1;
	
	           for ( ; ; )
	              {
	               printf("Loop iteration: %d\n", i++);
	               int86(0x03, &inregs, &inregs);
	              }
	        }
	
	2. When CodeView runs in MS-DOS, you can use the CTRL+C and CTRL+BREAK key
	  combinations to return control to CodeView. This method can be useful to
	  break out of a program that is running or that has locked up. When CodeView
	  regains control, the displayed debugging information depends on when you type
	  the key combination and what caused the problem with the application (for
	  example, an infinite loop, a bad pointer, and so on). If desired, continue
	  execution in the normal manner (press F5, F8, or F10, and so on).
	
	  MS-DOS checks for the CTRL+C key combination during most I/O operations. If
	  the system break flag is on (the AUTOEXEC.BAT file includes the command BREAK
	  ON), MS-DOS checks for CTRL+C in other operations as well. If you press
	  CTRL+C when an application is executing in an infinite loop and MS-DOS
	  interrupts are disabled, CodeView may not obtain control.
	
	  In OS/2, CTRL+BREAK does not return control to CodeView. You can use CTRL+C to
	  terminate an application, but you cannot continue debugging after CTRL+C as
	  you can in MS-DOS.
	
	  When you debug an application in 16-bit Windows, CTRL+ALT+SYSRQ returns
	  control to the debugger. When you debug a Win32s program, CTRL+ALT+F11
	  returns control to the debugger.
	
	  No hardware interrupt returns control to CodeView.
	
	Additional query words: kbinf 3.00 3.50 4.00 4.10 CONTROL-C CONTROL+C CONTROL+BREAK INT3
	
	======================================================================
	Keywords          : kbCodeView kbDebug kbVC 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	
	=============================================================================
	
