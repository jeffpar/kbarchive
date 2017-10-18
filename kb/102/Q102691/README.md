---
layout: page
title: "Q102691: PRB: LNK2133 Size Mismatch on Common Block During Link"
permalink: kb/102/Q102691/
---

## Q102691: PRB: LNK2133 Size Mismatch on Common Block During Link

	Article: Q102691
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link code that contains a COMMON block fails and the linker
	generates the following message:
	
	  error LNK2133: Size mismatch for symbol <_XXXX>
	
	where <_XXXX> is the name of the COMMON block.
	
	CAUSE
	=====
	
	The source code declares an initialized COMMON block with one size in one
	routine and an uninitialized COMMON block with the same name but with another
	size in another routine.
	
	RESOLUTION
	==========
	
	The best method to resolve this situation involves modifying the source code
	such that each declaration of the COMMON block has the same size. If this is not
	possible, modify the LINK command line to list the object module that contains
	the initialized COMMON block declaration before the other modules. In addition,
	the initialized COMMON block declaration must be as large or larger than any
	subsequent COMMON block declaration or memory corruption or other incorrect
	results may occur.
	
	STATUS
	======
	
	These problems do not occur with FORTRAN PowerStation 1.0a.
	
	MORE INFORMATION
	================
	
	The Common Object File Format (COFF) implements COMMON blocks using two record
	types: COMDAT and COMDEF. A COMDAT record contains initialized COMMON block data
	and a COMDEF record contains uninitialized COMMON block data. LINK32 resolves
	each reference to the COMMON block by associating each COMDEF record with the
	first COMDAT record it encounters, if any. The first COMDAT record determines
	the amount of space reserved for the COMMON data storage; if no COMDAT record
	exists, the largest COMDEF record determines the amount of space reserved. This
	behavior has the following implications:
	
	  If the data in a COMMON block is not initialized in any routine, COMMON block
	  declarations with different sizes should not cause any problems and you can
	  link the object files with the varying declarations in any order. Each
	  declaration must be in a separate source file or the FORTRAN compiler
	  generates an error.
	
	  The application should initialize the COMMON block in only one location.
	  LINK32 ignores subsequent COMDAT records and does not adjust the amount of
	  storage set aside for the COMMON block. If the first COMDAT record in the
	  file is smaller than subsequent COMDAT records, LINK32 does not generate an
	  error message. However, when you run the application it could corrupt memory.
	  Generating debugging information with the /4Yb compiler option switch does
	  not catch this condition because each array in a COMMON block is correctly
	  dimensioned in each object module.
	
	  If LINK32 encounters a COMDEF record before a COMDAT record, the size of the
	  COMDEF record must agree with the size of the COMDAT record. Otherwise,
	  LINK32 generates the LNK2133 error and the link fails.
	
	To demonstrate this error, perform the following four steps:
	
	1. Compile each of the code examples below.
	
	2. Link Sample 1 with Sample 2 or Sample 3. No error occurs at link time but a
	  DX1020 error occurs at run time.
	
	3. Link Sample 2 with Sample 1. The link fails and an LNK2133 error occurs.
	
	4. Link Sample 3 with Sample 1. No errors occur at link time or at run time.
	  LINK32 ignores the data statement in Sample 1.
	
	Sample Code 1
	-------------
	
	  C Compiler options needed: /c
	        program tester
	        integer arr
	        common /testblk/ arr(1)
	        data arr /11/ 
	        call sub1
	        print*, arr(1000000)
	        end
	
	Sample Code 2
	-------------
	
	  C Compiler options needed: /c
	        subroutine sub1
	        integer arr
	        common /testblk/ arr(1000000)
	        arr(1000000) = 99
	        end
	
	Sample Code 3
	-------------
	
	  C Compile options needed: /c
	        subroutine sub1
	        integer arr
	        common /testblk/ arr(1000000)
	        data arr /1000000*77/ 
	        arr(1000000) = 99
	        end
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	
	=============================================================================
	
