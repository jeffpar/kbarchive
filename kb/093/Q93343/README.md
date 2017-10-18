---
layout: page
title: "Q93343: Calling Int86?, Intdos?, and DOS3Call() from Windows"
permalink: kb/093/Q93343/
---

## Q93343: Calling Int86?, Intdos?, and DOS3Call() from Windows

	Article: Q93343
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows versions 3.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Int86/Int86x and Intdos/Intdosx functions, which are part of the C Run-time
	library, can be used to execute a documented MS-DOS-based software interrupt.
	The Windows (application programming interface (API) DOS3Call() also allows a
	Windows-based application to call an MS-DOS Interrupt 21h (Int 21h) function.
	Under the Windows versions 3.x environment, it is acceptable to call any of
	these functions from within an application or a DLL (dynamic-link library). This
	article discusses certain issues involved with using these functions in
	Windows.
	
	NOTE: The Win32 "Programmer's Reference, Volume 1" manual states that DOS3Call()
	(or any 80x86 specific interrupt call) is NOT supported, and therefore an
	application that uses ANY of the above mentioned functions, by definition, will
	not run under Windows NT.
	
	MORE INFORMATION
	================
	
	There are certain issues that must be considered when calling any of the above
	mentioned functions from within a Windows-based application or a DLL. Some of
	these issues are listed below:
	
	- Both the Int86x and Intdosx functions copy the DS and ES register values from
	  the SREGS structure to the CPU registers before issuing the software
	  interrupt. It is important to initialize the DS and ES register values in the
	  SREGS structure BEFORE calling int86x() and intdosx(). Normally this is done
	  by calling the _segread() function or the _FP_SEG macro. Otherwise, a general
	  protection (GP) fault may occur as a result of attempting to load invalid
	  selector values into the DS and ES registers from uninitialized values in the
	  SREGS structure.
	
	- Another issue is related to memory models, DLLs, and passing correct
	  parameters to the int86/int86x and intdos/intdosx functions. These functions
	  take, as parameters, pointers to structures and unions. Therefore, while
	  using small or medium model, you must ensure that these objects are always in
	  the automatic data segment or the DGROUP. Thus, in a DLL, these objects
	  cannot be allocated from the stack, such as a local variable, because SS !=
	  DS in a DLL. In addition, in an application these objects cannot be allocated
	  from the global heap using the global memory APIs or be declared as being FAR
	  (which would put them in a different data segment than the DGROUP).
	
	- Executing the software interrupt, Interrupt 21h, directly from within Windows
	  is not significantly slower than calling DOS3Call(). Because this speed
	  factor depends on the type of the CPU being used, it should not be considered
	  a major factor in using either the DOS3Call() or Interrupt 21h call in
	  Windows. Also, the speed factor is only an implementation issue and not a
	  conceptual issue. For more information on issues related to compatibility,
	  portability, and so forth, please query on the following words in the
	  Microsoft Knowledge Base:
	
	  low-level and interrupts and portability
	
	
	- Both standard mode MS-DOS extender and Windows enhanced mode provide
	  translation services for most of the commonly used interrupts. However, when
	  an application needs to communicate with a network, a TSR
	  (terminate-and-stay-resident program), or any real mode software for which
	  Windows does not provide automatic translation, it must use MS-DOS Protected
	  Mode Interface (DPMI) services. For more information on the list of
	  interrupts that are supported/translated by protected mode Windows or on
	  DPMI, please query on the following words in the Microsoft Knowledge Base:
	
	  dpmi and INTEL and 31h
	
	  (NOTE: One of the articles incorrectly states that the Int 25h and Int 26h
	  interrupts are not translated by Windows.)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
