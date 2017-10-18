---
layout: page
title: "Q115238: HOWTO: Get and Set Diskette Media ID in VB for MS-DOS"
permalink: kb/115/Q115238/
---

## Q115238: HOWTO: Get and Set Diskette Media ID in VB for MS-DOS

	Article: Q115238
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic for MS-DOS 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to call interrupts to get and set the media ID
	for a diskette. The example also gets and sets the volume serial number and the
	volume label.
	
	WARNING: One or more of the following functions are discussed in this article;
	VarPtr, VarPtrArray, VarPtrStringArray, StrPtr, ObjPtr. These functions are not
	supported by Microsoft Technical Support. They are not documented in the Visual
	Basic documentation and are provided in this Knowledge Base article "as is."
	Microsoft does not guarantee that they will be available in future releases of
	Visual Basic.
	
	MORE INFORMATION
	================
	
	The following example uses MS-DOS interrupt (&h21), functions )&h440D),
	and minor code (&h46) to set the volume label and serial number for the
	specified drive.
	
	This information can be found in any MS-DOS programmer's reference, for versions
	of MS-DOS beyond 5.0.
	
	Code Example
	------------
	
	  ' Note that you will want to load the VBDOS.QLB file when starting
	  ' VBDOS to get this program to run.
	
	  ' $INCLUDE: 'vbdos.bi'
	
	  TYPE midstruc
	
	     midinfolevel AS INTEGER       ' Information level.
	     midserialnum AS LONG          ' Serial number.
	     midvollabel AS STRING * 11    ' ASCII volume label.
	     MidFileSysType AS STRING * 8  ' File system type.
	
	  END TYPE
	
	  DIM regs AS regtypex
	  DIM ms AS midstruc
	
	  ms.midserialnum = &HFFFFFFFF    ' Set the new volume serial number.
	  ms.midvollabel = "SIDEHACKERS"
	
	  regs.ax = &H440D
	  regs.bx = 1                     ' Specifies drive A (2 for B, 3 for C..).
	  regs.cx = &H846
	  ' Remove the apostrophe from the following line to change it from a comment
	  ' to an executed line if you want to retrieve the current values of the
	  ' volume label and the serial number for the specified drive:
	  ' regs.cx = &H866
	  regs.ds = VARSEG(ms)
	  regs.dx = VARPTR(ms)
	
	  CALL INTERRUPTX(&H21, regs, regs)
	
	  CLS
	
	  IF (regs.flags AND 1) THEN       ' Check for error.
	
	     PRINT "problem : "; regs.ax   ' Print error number.
	
	  ELSE
	
	     PRINT HEX$(ms.midSerialNum)   ' Print successful return values.
	     PRINT ms.midVolLabel
	     PRINT ms.midFileSysType
	
	  END IF
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword3 kbVB100DOS
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	
