---
layout: page
title: "Q113426: BUG: DX1020 or Application Error from H2INC"
permalink: /kb/113/Q113426/
---

## Q113426: BUG: DX1020 or Application Error from H2INC

	Article: Q113426
	Product(s): Microsoft Macro Assembler
	Version(s): 6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The H2INC utility versions 1.11 and 1.12, as shipped with MASM 6.11, may give an
	error similar to the following when run on the MS-DOS operating system:
	
	  DOSXNT : fatal error DX1020: unhandled exception: Page fault;
	  contact Microsoft Support Services
	  ProcessId=1337 ThreadId=1338
	  User Registers:
	  EAX=00000000h EBX=00000001h ECX=00000000h EDX=00000000h
	  ESI=00079963h EDI=00186F00h EBP=00186F5Ch ErrorCode = 00000004h
	  DS=0017h ES=0017h FS=005Fh GS=0017h FLG=00013246h
	  CS:EIP=000Fh:00068473h SS:ESP=0017h:00186ED4h
	
	When run in a console session under Windows NT, the following error may occur (in
	a Windows message box):
	
	  H2INC.EXE - Application Error
	  The instruction at "0x00039473" referenced memory at "0x00000000".
	  The memory could not be "read".
	
	CAUSE
	=====
	
	This error occurs only if an MS-DOS INCLUDE variable is not set. The error does
	not occur in an MS-DOS virtual session under Windows 3.1.
	
	RESOLUTION
	==========
	
	To prevent this error, set an INCLUDE variable. The normal setting for MASM is:
	
	  SET INCLUDE=C:\MASM611\INCLUDE
	
	The drive and directory may be different depending on how MASM was installed. If
	other languages are being used, there may be other paths added to the INCLUDE
	variable. The file NEW-VARS.BAT installed by the MASM Setup program contains a
	correct setting for use with MASM.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in H2INC versions 1.11 and 1.12. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 6.11 buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM611
	Version           : :6.11
	
	=============================================================================
	
