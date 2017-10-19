---
layout: page
title: "Q186920: HOWTO: Change the Report Designer Ruler Measurement"
permalink: /kb/186/Q186920/
---

## Q186920: HOWTO: Change the Report Designer Ruler Measurement

	Article: Q186920
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,2.6a,3.0b; MS-DOS:2.5,2.5a,2.5b,2.6,2.6a; UNIX:2.6; WINDOWS:2.5,2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for UNIX, version 2.6 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be necessary to change the measurement unit of the ruler in the Report
	Designer. For instance, the Report Form Wizard in Visual FoxPro for Windows
	defaults to inches even if Measurement System in the Regional Settings
	Properties is set to Metric. Applications that allow users to modify reports
	could use this functionality, allowing the user to choose between a Metric ruler
	and a U. S. ruler.
	
	MORE INFORMATION
	================
	
	According to the 50frx1.frx report form in the HOME() + "FILESPEC" directory of
	Visual FoxPro 5.0 (Visual FoxPro 3.0x has the file 30frx1.frx), the Ruler field
	of a .frx report file "specifies 1 if the ruler is displayed". When the report
	is created, the value of the Ruler field could actually be one of three values.
	The list below shows the three values and the measurement system to which each
	value corresponds:
	
	  1 = U. S. (inches)
	  2 = Metric
	  3 = Pixels
	
	The following sample code shows how to programmatically change the value of this
	field and consequentially change the ruler measurement.
	
	Sample Code
	-----------
	
	     *-- Code begins here
	     lsRptFile = GETFILE("FRX", "Report file to open:", "Open", 0)
	     IF LEN(ALLTRIM(lsRptFile)) = 0
	         RETURN
	     ENDIF
	     USE(lsRptFile)
	     LOCATE FOR objtype = 1 && Find the record for the report form object.
	     IF FOUND()
	        REPLACE ruler WITH 2 && Use the metric ruler.
	     ELSE
	        MESSAGEBOX("Not a valid report file.", 0, "Error")
	        USE
	        RETURN
	     ENDIF
	     USE
	
	     *-- View the report to see the changes.
	     MODIFY REPORT (lsRptFile)
	     *-- Code ends here
	
	NOTE: In FoxPro 2.x for MS-DOS and Unix, the system menu disappears when you
	modify the report in the program. Once you close the Report Designer and the
	program exits, the system menu returns.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike A. Stewart, Microsoft Corporation
	
	
	Additional query words: kbDSupport kdDSE kbnokeyword
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : MACINTOSH:2.5b,2.5c,2.6a,3.0b; MS-DOS:2.5,2.5a,2.5b,2.6,2.6a; UNIX:2.6; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0,3.0b,5.0,5.0a
	Issue type        : kbhowto
	
	=============================================================================
	
