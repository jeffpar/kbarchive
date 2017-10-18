---
layout: page
title: "Q118434: BUG: GETFILEINFOQQ with UNPACKTIMEQQ Fails in MS-DOS"
permalink: kb/118/Q118434/
---

## Q118434: BUG: GETFILEINFOQQ with UNPACKTIMEQQ Fails in MS-DOS

	Article: Q118434
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using GETFILEINFOQQ to get the creation time of a file and UNPACKTIMEQQ to
	unpack the data into a usable form results in a time that is off by several
	hours. This problem occurs only in MS-DOS or version 3.1 of Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft FORTRAN PowerStation for
	MS-DOS, version 1.0a.
	
	MORE INFORMATION
	================
	
	To generate the the incorrect file time:
	
	1. Compile the sample code below, and name the code "TEST.FOR".
	
	2. Type "dir test.for" (without the quotation marks) at the MS-DOS prompt in the
	  directory containing the sample code. Record the present year, month, day,
	  hour, and minute.
	
	3. Run the sample code from MS-DOS or from an MS-DOS command prompt in Windows
	  (not Windows NT), and compare the date and time shown with the date and time
	  from step 2.
	
	Sample Code
	-----------
	
	  c compile options needed: none
	
	        include 'flib.fi'
	        include 'flib.fd'
	        integer*2 iyr, imon,iday,ihr,imin,isec
	        character*1 AMPM /'a'/ 
	        record /FILE$INFO/info
	        ihandle = FILE$FIRST
	        len=getfileinfoqq('TEST.FOR' ,info, ihandle)
	        call unpacktimeqq(info.lastwrite, iyr,imon,iday,ihr,imin,isec)
	        if (ihr .gt. 11) AMPM = 'p'
	        if (ihr .gt. 12) ihr = ihr-12
	        write (*,"(1x,2(I2.2,'-'),I2.2,I4,':',I2.2,a)")
	       +  imon,iday,iyr-1900,ihr,imin,AMPM
	        END
	
	Additional query words: 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100aDOS
	Version           : :1.0a
	
	=============================================================================
	
