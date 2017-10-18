---
layout: page
title: "Q61681: Use of FASTOPEN and BASIC Application Causes &quot;Disk Full&quot; Error"
permalink: kb/061/Q61681/
---

## Q61681: Use of FASTOPEN and BASIC Application Causes &quot;Disk Full&quot; Error

	Article: Q61681
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.01,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When FASTOPEN is loaded and the BASIC program listed below is executed, a "Disk
	full" error occurs. When FASTOPEN is not loaded, this error does not occur.
	
	The following BASIC program creates a random file with a size of 64 MB, and then
	asks for a "START" and an "END" record within the file to write the records
	between "START" and "END":
	
	  OPEN "TESTDAT" FOR RANDOM AS #1 LEN = 1024
	  CLS
	  PRINT "************** Write into TESTDAT 1024 - Byte Records *********"
	  PRINT
	  INPUT "Start writing at record:"; START
	  INPUT "Stop writing at record :"; FINAL
	  FIELD #1, 1024 AS A$
	  LSET A$ = STRING$(1024, "H")
	  FOR I = START TO FINAL
	          PUT 1, 65539
	          PUT 1, I
	          LOCATE 10, 10
	          PRINT I
	          IF INKEY$ = CHR$(27) THEN EXIT FOR
	  NEXT I
	  CLOSE
	  END
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 4.01 and 5.0. We
	are researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 4.01 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS401
	Version           : MS-DOS:4.01,5.0
	
	=============================================================================
	
