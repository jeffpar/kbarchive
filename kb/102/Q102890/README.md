---
layout: page
title: "Q102890: How to Calculate Running Totals in a BROWSE Command"
permalink: /kb/102/Q102890/
---

## Q102890: How to Calculate Running Totals in a BROWSE Command

	Article: Q102890
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5; WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.5 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can display running totals from database fields, or running totals for a
	particular control break, by using calculated fields in a BROWSE command.
	
	The following example uses the CUSTOMER database and displays the running total
	of year-to-date purchases (YTDPURCH field) using the file and field names in
	FoxPro 2.x:
	
	     SELECT 0
	     USE CUSTOMER
	     BROWSE FIELDS CNO, YTDPURCH, RUNNINGYTD=RUNNINGSUM()
	   
	     PROCEDURE RUNNINGSUM
	     m.saverec = RECNO()
	     GO TOP
	     SUM YTDPURCH WHILE RECNO() <= m.saverec TO m.total
	     GO m.saverec
	     RETURN m.total
	
	The same concept can also be applied to display running totals for a particular
	control break. For example, if we wanted to calculate the running total of
	year-to-date purchases by company number (CNO), and have an index tag on CNO,
	the following code could be used:
	
	     SELECT 0
	     USE CUSTOMER
	     SET ORDER TO TAG CNO
	     BROWSE FIELDS CNO, YTDPURCH, RUNNINGSUM = CNOTOT(CNO)
	   
	     FUNCTION CNOTOT
	     PARAMETERS mkey
	     m.saverec = RECNO()
	     SEEK mkey
	     SUM YTDPURCH WHILE CNO=mkey .AND. RECNO()<=m.saverec to m.total
	     GO m.saverec
	     RETURN m.total
	
	Additional query words: VFoxWin FoxDos FoxWin 2.00, 2.50, BROWSE, CALCULATE
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250 kbVFP300
	Version           : MS-DOS:2.0,2.5; WINDOWS:2.5,3.0
	
	=============================================================================
	
