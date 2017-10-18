---
layout: page
title: "Q86908: FoxPro System Information Function"
permalink: kb/086/Q86908/
---

## Q86908: FoxPro System Information Function

	Article: Q86908
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.50 2.50a | 2.50 2.50a 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The SYS functions provide system information about a Microsoft FoxPro
	installation. The values SYS(2011) through SYS(2021) are new to FoxPro version
	2.0.
	
	To query system information interactively, enter
	
	     ? SYS(#)
	
	in the Command window, where "#" represents the appropriate function number. For
	example, ? SYS(9) returns the FoxPro serial number. The returned value is
	displayed in the last cursor position of the active window, or by default the
	return value is displayed in the lower-left corner of the screen.
	
	Another method of checking system information is to use the following:
	
	     WAIT WINDOW SYS(#)
	
	where "#" represents the appropriate function number. Or you can place SYS(#) in
	the Debug window.
	
	These alternative methods offer at least one advantage over the ? SYS(#) method
	since the ? SYS(#) method writes to the last cursor position for the active
	window, and it is possible to have other objects obscure the output of the ?
	SYS(#) command so that you can't see where the returned value is being
	displayed.
	
	The output from the WAIT WINDOW SYS(#) method is displayed at a predictable
	location in a predictable fashion. If the Debug window method is used, the
	output is displayed in the Debug window.
	
	For more information, see pages 3-874 through 3-891 of the "Microsoft FoxPro
	Commands & Functions" manual for version 2.0, or see pages L3-1065 through
	L3-1083 of the "Microsoft FoxPro Language Reference" manual for version 2.5.
	
	MORE INFORMATION
	================
	
	The following table lists the SYS functions and the value each returns:
	
	  Function       Returns
	  --------       -------
	
	  SYS(0)         Network machine number
	  SYS(1)         Julian system date
	  SYS(2)         Seconds since midnight
	  SYS(3)         Unique filename
	  SYS(5)         DEFAULT drive
	  SYS(6)         Current PRINTER device
	  SYS(7)         Current FORMAT file
	  SYS(9)         FoxPro serial number
	  SYS(10)        String from day number
	  SYS(11)        Julian day number
	  SYS(12)        Remaining memory
	  SYS(13)        Printer status
	  SYS(14)        Index expression
	  SYS(15)        Character translation
	  SYS(16)        Name of executing program
	  SYS(17)        Processor in use
	  SYS(18)        Current GET field or object
	  SYS(21)        Master index number
	  SYS(22)        Master tag or index name
	  SYS(23)        FoxPro EMS memory usage
	  SYS(24)        EMS memory limit
	  SYS(100)       Current CONSOLE setting
	  SYS(101)       Current DEVICE setting
	  SYS(102)       Current PRINTER setting
	  SYS(103)       Current TALK setting
	  SYS(1001)      FoxPro memory
	  SYS(1016)      User object memory use
	  SYS(2000)      File wildcard match
	  SYS(2001)      SET command status
	  SYS(2002)      Turn cursor on or off
	  SYS(2003)      Current directory
	  SYS(2004)      FoxPro start directory
	  SYS(2005)      Current resource file
	  SYS(2006)      Current graphics card
	  SYS(2007)      Checksum
	  SYS(2008)      Cursor shape
	  SYS(2009)      Swap cursor shape
	  SYS(2010)      CONFIG.SYS file setting
	  SYS(2011)      Current lock status
	  SYS(2012)      Memo field block size
	  SYS(2013)      System menu name string
	  SYS(2014)      Minimum path
	  SYS(2015)      Unique procedure name
	  SYS(2016)      SHOW GETS WINDOW name
	  SYS(2017)      Display sign-on screen
	  SYS(2018)      Error message parameter
	  SYS(2019)      CONFIG.FP name and location
	  SYS(2020)      Default disk size
	  SYS(2021)      Filtered index expression
	  SYS(2022)      Disk cluster size
	  SYS(2023)      Temporary file drive
	
	Additional query words: VFoxWin FoxDos FoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP500 kbVFP600
	Version           : 2.00 2.50 2.50a | 2.50 2.50a 3.0
	
	=============================================================================
	
