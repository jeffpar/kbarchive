---
layout: page
title: "Q125372: How To Check for a Floppy Disk Using FOXTOOLS"
permalink: /kb/125/Q125372/
---

## Q125372: How To Check for a Floppy Disk Using FOXTOOLS

	Article: Q125372
	Product(s): Microsoft FoxPro
	Version(s): 2.6x 3.00 3.00b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft FoxPro for Windows, version 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The code in this article demonstrates how to use FOXTOOLS.FLL to register and
	call Windows API functions that check the floppy drive to determine if a disk is
	present.
	
	MORE INFORMATION
	================
	
	There is no single FoxPro command that determines if a floppy disk drive is
	empty. Fortunately, several third-party and shareware routines exist to perform
	this function. However, most of these routines were written for use with FoxPro
	for MS-DOS.
	
	The following code example employs FOXTOOLS.FLL to register and call Windows API
	functions that check the floppy drive for a disk and return an error message if
	the disk drive is empty.
	
	     * Function isdiskin - determine if a specified disk is present in
	     * FoxPro for Windows
	     *
	     * passed: drive letter, in the form of <drive letter A-Z> or
	     * <drive letter A-Z:>
	     * returns: logical .t. if disk can be read, .f. if it cannot
	     *
	     *    example:
	     *    IF isdiskin("A:")
	     *      WAIT WINDOW "There is a disk in drive A:"
	     *    ENDIF
	
	     FUNCTION isdiskin
	
	     PARAMETERS m.drive
	
	     * test passed drive letter - is it greater than 2 characters,
	     * blank, or outside the range of A-Z? If so, then return .f.
	     m.drive = ALLTRIM(m.drive)
	     IF LEN(m.drive) > 2 .OR. LEN(m.drive) = 0 .OR. .NOT. ;
	     BETWEEN(ASC(UPPER(m.drive)), 65, 90)
	     RETURN .f.
	     ENDIF
	
	     IF RIGHT(m.drive,1) # ":"
	        m.drive = m.drive + ":"
	     ENDIF
	
	     * detect if FOXTOOLS.FLL is already loaded; if not, load it
	     m.isloaded = "FOXTOOLS" $ SET("LIBRARY")
	     IF .NOT. m.isloaded
	        SET LIBRARY TO SYS(2004)+"FOXTOOLS.FLL" ADDITIVE
	     ENDIF
	
	     * detect if another error routine is already present, save its name
	     m.olderror = ON('error')
	     ON ERROR DO diskerr
	
	     * hang onto the old error mode for later restoration
	     m.seterrmode = REGFN("SetErrorMode", "I", "I")
	
	     * SetErrorMode with an argument of 1 causes Windows to relinquish
	     * critical error handling back
	     * to the application, which ideally does a DOS
	     * GetExtendedErrorInformation call to determine
	     * the nature of the error. FoxPro doesn't do this, only recognizes
	     * that the error has occurred
	     * and so calls the ON ERROR routine with an error() value of 0.
	     m.olderrstate = CALLFN(m.seterrmode,1)
	
	     * default is no disk errors; our ON ERROR routine sets this variable
	     m.diskerr = .f.
	
	     * try to find the NUL file in the root of the passed drive
	     m.drivestate = FILE(m.drive + "\NUL")
	
	     IF .NOT. m.diskerr
	        * no disk error, so what did the file() call return?
	        IF m.drivestate
	        m.driveok = .t.
	        ELSE
	        m.driveok = .f.
	        ENDIF
	     ELSE
	        m.driveok = .f.
	     ENDIF
	
	     * restore the old error handler, old error state, old library state
	     * and old talk state
	     IF .NOT. EMPTY(m.olderror)
	        ON ERROR DO (m.olderror)
	     ELSE
	        ON ERROR
	     ENDIF
	
	     m.resterrstate = CALLFN(m.seterrmode,m.olderrstate)
	
	     IF .NOT. m.isloaded
	        RELEASE LIBRARY SYS(2004)+"FOXTOOLS.FLL"
	     ENDIF
	
	     RETURN m.driveok
	
	     * FoxPro thinks the error() is 0 after the failed file() call with
	     *SetErrorMode = 1. Just set
	     * our m.diskerr variable .t. on any error
	     PROCEDURE diskerr
	
	     m.diskerr = .t.
	
	Additional query words: VFoxWin FoxWin kbinf 2.60 2.60a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300 kbVFP300b
	Version           : 2.6x 3.00 3.00b
	
	=============================================================================
	
