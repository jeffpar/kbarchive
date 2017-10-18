---
layout: page
title: "Q73320: GW-BASIC/BASICA Keywords Not Supported in QBasic"
permalink: kb/073/Q73320/
---

## Q73320: GW-BASIC/BASICA Keywords Not Supported in QBasic

	Article: Q73320
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following GW-BASIC/BASICA keywords are not supported in QBasic:
	
	  AUTO        EDIT        MERGE         RENUM
	  CONT        LIST        MOTOR         SAVE
	  DEF USR     LLIST       NEW           USR
	  DELETE      LOAD
	
	The following keywords behave differently in QBasic than in BASICA:
	
	  BSAVE       BLOAD       CALL ABSOLUTE
	  CHAIN       COMMON      DECLARE
	  DEFtype     DIM         DRAW
	  EOF         FIELD       PLAY
	
	MORE INFORMATION
	================
	
	The different behavior of the keywords in QBasic is as follows:
	
	  Keyword           Description
	  -------           -----------
	
	  BSAVE, BLOAD      QBasic does not support the cassette device with
	                    BSAVE and BLOAD, and memory locations may be
	                    different.
	
	  CALL ABSOLUTE     Assembly language programs invoked from BASICA
	                    that have string arguments must be revised for
	                    QBasic because QBasic string descriptors are 4
	                    bytes long. The 4 bytes are the low byte and high
	                    byte of the string length followed by the low
	                    byte and high byte of the string address.
	
	  CHAIN             QBasic does not allow you to specify a line
	                    number with CHAIN and does not support the ALL,
	                    MERGE, or DELETE options in BASICA.
	
	  COMMON, DECLARE   QBasic does not allow executable statements to
	                    appear before COMMON and DECLARE statements.
	
	  DEFtype           If BASICA encounters a variable without an
	                    explicit type (indicated by !, #, &, $, or %), it
	                    uses the default type set by the most recent
	                    DEFtype statement. For example, the type of the
	                    variable IFLAG changes from integer to single
	                    precision in the following BASICA code fragment:
	
	                       10  DEFINT I
	                       20  PRINT IFLAG
	                       30  DEFSNG I
	                       40  GOTO 20
	
	                    In QBasic, a variable's type cannot be changed
	                    after it appears in a program.
	
	  DIM               All arrays in BASICA are dynamic because BASICA
	                    always allocates array storage while a program
	                    runs. In QBasic, DIM can declare either a static
	                    or dynamic array.
	
	  DRAW, PLAY        DRAW and PLAY statements in BASICA that use
	                    variables or other command strings within command
	                    strings must be modified for QBasic. Use the
	                    VARPTR$ function, which returns a string
	                    representation of the variable's address:
	
	                    BASICA Statement     QBasic Equivalent
	                    ----------------     -----------------
	                    DRAW "Xcmdstring$"   DRAW "X" + VARPTR$ (cmdstring$)
	                    DRAW "TA = angle"    DRAW "TA =" + VARPTR$(angle)
	
	  EOF               When you direct input from a file to a BASICA
	                    program, EOF(0) returns true at the end of the
	                    input file. In QBasic, EOF(0) returns true after
	                    the next record is read past the end of the input
	                    file. For example, the following program runs in
	                    BASICA, but generates an "Input past end of file"
	                    error message in QBasic:
	
	                        5  WHILE NOT EOF(0)
	                       10 LINE INPUT ; A$
	                       15 WEND
	
	  FIELD             When a random-access file is closed in BASICA
	                    with a CLOSE or RESET statement, field variables
	                    retain the last value assigned to them by a GET
	                    statement. In QBasic, all field variables are
	                    reset to null strings.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
