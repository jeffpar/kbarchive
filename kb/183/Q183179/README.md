---
layout: page
title: "Q183179: Using PL/I Programs with COM Transaction Integrator"
permalink: kb/183/Q183179/
---

## Q183179: Using PL/I Programs with COM Transaction Integrator

	Article: Q183179
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PL/I is not supported by Component Builder. Nevertheless, you can use COM
	Transaction Integrator for CICS and IMS (COMTI) with PL/I programs operating in
	CICS or IMS. To do so, code the programs with data declarations that define
	memory the same way that the equivalent COBOL declarations do.
	
	For example, a CICS program can perform an EXEC CICS LINK to either a PL/I
	program or a COBOL program if the structure defining DFHCOMMAREA in the two
	programs is equivalent. Similarly, a COMTI component could be used equally well
	with either program using a CICS LINK Remote Environment (RE). The same
	mechanisms hold true by extrapolation for CICS and IMS REs.
	
	All you need to know is how to achieve the same memory mapping in PL/I and COBOL.
	This article presents data type comparisons for the two languages.
	
	MORE INFORMATION
	================
	
	Note that the developer who is responsible for creating components for PL/I
	transaction programs (TP) should be familiar with both languages.
	
	Data alignment is an important issue. PL/I structures are ALIGNED by default; for
	example, a fullword integer (4 bytes) within a structure is ALIGNED on a
	mainframe fullword boundary. This can cause a discrepancy with similar COBOL
	statements and the PL/I structure should probably be declared as UNALIGNED. This
	is particularly important for the DFHCOMMAREA declaration. This data structure
	must be unaligned. You must, therefore, specify the UNALIGNED keyword on the
	structure declaration.
	
	You should use care when dealing with the COBOL "OCCURS DEPENDING ON" clause. The
	following samples show a comparison of a COBOL construction with a similar PL/I
	construction.
	
	COBOL Sample
	------------
	
	     01   STRUCT1.
	     02   X   PIC S9(4) COMP.
	     02   Y OCCURS 1 TO 100 TIMES DEPENDING ON X PIC X(10).
	
	PL/I Sample
	-----------
	
	     DCL   1   STRUCT1,
	           2   X   FIXED BIN(15),
	           2   Y (1:100 REFER(X)) CHAR(10);
	
	COMTI Data Conversion Language Mapping Lists
	--------------------------------------------
	
	     VB type          COBOL type                      PL/I type
	     -------     --------------------              ---------------
	
	     Integer        PIC S9(n) COMP                   FIXED BIN(15)
	                    (n <= 4)
	                    (see NOTE)
	
	                    PIC S9(n) COMP-3                 FIXED DEC(n)
	                    (n <= 4)                         (n <= 4)
	
	                    PIC S9(n)                        PIC '9(n-1)T'
	                    (n <= 4)                         (n <= 4)
	
	                    PIC S9(n) LEADING                PIC 'T9(n-1)'
	                    (n <= 4)                         (n <= 4)
	
	                    PIC S9(n) SIGN SEPARATE           PIC '9(n)S'
	                    (n <= 4)                          (n <= 4)
	
	                    PIC S9(n)                         PIC 'S9(n)'
	                    SIGN SEPARATE LEADING             (n <= 4)
	
	                    (n <= 4)
	
	     Long           PIC S9(n) COMP (n <= 9)           FIXED BIN(31)
	
	                    PIC S9(n) COMP-3                  FIXED DEC(n)
	                    (n <= 9)                          (n <= 9)
	
	                    PIC S9(n)                         PIC '9(n-1)T'
	                    (n <= 9)                          (n <= 9)
	
	                    PIC S9(n) LEADING                 PIC 'T9(n-1)'
	                    (n <= 9)                          (n <= 9)
	
	                    PIC S9(n) SIGN SEPARATE           PIC '9(n)S'
	                    (n <= 9)                          (n <= 9)
	
	                    PIC S9(n)                         PIC 'S9(n)'
	                    SIGN SEPARATE LEADING             (n <= 9)
	                    (n <= 9)
	
	     Single         COMP-1                            FLOAT BIN(21)
	
	                    PIC S9(m)V9(n) COMP-3             FIXED DEC(m+n,n)
	
	                    PIC S9(m)V9(n) COMP               FIXED BIN(15,n)
	                    (m+n <= 4) (See NOTE)
	
	                    PIC S9(m)V9(n) COMP               FIXED BIN(31,n)
	                    (m+n <= 9)
	
	                    PIC S9(m)V9(n)                    PIC '9(m)V9(n-1)T'
	
	                    PIC S9(m)V9(n) LEADING            PIC 'T9(m-1)V9(n)'
	
	                    PIC S9(m)V9(n)                    PIC '9(m)V9(n)S'
	                    SIGN SEPARATE
	
	                    PIC S9(m)V9(n)                    PIC 'S9(m)V9(n)'
	                    SIGN SEPARATE LEADING
	
	     Double         COMP-2                            FLOAT BIN(53)
	
	                    PIC S9(m)V9(n) COMP-3             FIXED DEC(m+n,n)
	
	                    PIC S9(m)V9(n) COMP               FIXED BIN(15,n)
	                    (m+n <= 4) (Footnote.)
	
	                    PIC S9(m)V9(n) COMP               FIXED BIN(31,n)
	                    (m+n <= 9)
	
	                    PIC S9(m)V9(n)                    PIC '9(m)V9(n-1)T'
	
	                    PIC S9(m)V9(n) LEADING            PIC 'T9(m-1)V9(n)'
	
	                    PIC S9(m)V9(n)                    PIC '9(m)V9(n)S'
	                    SIGN SEPARATE
	
	                    PIC S9(m)V9(n)                    PIC 'S9(m)V9(n)'
	                    SIGN SEPARATE LEADING
	
	     Currency       PIC S9(13)V99 COMP-3              FIXED DEC(15,2)
	
	                    PIC S9(m)V9(n) COMP-3             FIXED DEC(m+n,n)
	                    (n <= 4)                          (m+n < 16)
	
	                    PIC S9(m)V9(n) COMP               FIXED BIN(15,n)
	                    (m+n <= 4 and n <= 4)
	                    (See NOTE)
	
	                    PIC S9(m)V9(n) COMP               FIXED BIN(31,n)
	                    (m+n <= 9, n <= 4)
	
	                    PIC S9(m)V9(n)                    PIC '9(m)V9(n-1)T'
	                    (n <= 4)
	
	                    PIC S9(m)V9(n) LEADING            PIC 'T9(m-1)V9(n)'
	                    (n <= 4)
	
	                    PIC S9(m)V9(n)                    PIC '9(m)V9(n)S'
	                    SIGN SEPARATE
	                    (n <= 4)
	
	                    PIC S9(m)V9(n)                    PIC 'S9(m)V9(n)'
	                    SIGN SEPARATE LEADING
	                    (n <= 4)
	
	     Decimal        PIC S9(m)V9(n) COMP-3             FIXED DEC(m+n,n)
	                                                      (m+n < 16)
	
	                    PIC S9(m)V9(n) COMP               FIXED BIN(15,n)
	                    (m+n <= 5)
	                    (See NOTE)
	
	                    PIC S9(m)V9(n) COMP               FIXED BIN(31,n)
	                    (m+n <= 9)
	
	                    PIC S9(m)V9(n) COMP               Not Supported
	                    (m+n <= 18)
	
	                    PIC S9(m)V9(n)                    PIC '9(m)V9(n-1)T'
	
	                    PIC S9(m)V9(n) LEADING            PIC 'T9(m-1)V9(n)'
	
	                    PIC S9(m)V9(n)                    PIC '9(m)V9(n)S'
	                    SIGN SEPARATE
	
	                    PIC S9(m)V9(n)                    PIC 'S9(m)V9(n)'
	                    SIGN SEPARATE LEADING
	
	     Date           PIC S9(7) COMP-3                  FIXED DEC(7)
	                    date in YYYYDDD format
	                    PIC S9(7) COMP-3                  FIXED DEC(7)
	                    time in HHMMSST format
	
	                    PIC S9(7) COMP-3                  FIXED DEC(7)
	                    date in YYYYDDD format
	                    PIC S9(7) COMP-3                  FIXED DEC(7)
	                    time in HHMMSST format
	
	     String         PIC X(n)                          CHAR(n)
	                    padded with spaces to n bytes
	
	                    PIC X(n)                          CHAR(n)
	                    padded with LOW-VALUE to n bytes
	
	     Boolean        PIC S9(4) COMP                    FIXED BIN(15)
	                    (1 = true, 0 = false)
	
	                    PIC S9(9) COMP                    FIXED BIN(31)
	                    (1 = true, 0 = false)
	
	                    PIC  S9(n) COMP-3                 FIXED DEC(n)
	                    (1 = true, 0 = false)
	
	     Byte           PIC X                             CHAR(1)
	                    (no translation performed)
	
	                    PIC 999 COMP                      FIXED BIN(15)
	                    (value between 0 and 255)
	
	                    PIC 999 COMP-3                    FIXED DEC(3)
	                    (value between 0 and 255)
	
	NOTE: An appropriate COBOL compiler option must be set to allow numbers between
	9,999 and 32,768 to fit in a PIC 9(4) COMP number.
	
	Additional query words: COBOL PL/1 PL/I PL1 PLI
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
