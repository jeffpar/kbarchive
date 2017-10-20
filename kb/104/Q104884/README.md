---
layout: page
title: "Q104884: How to Write to the Calendar/Diary Programmatically"
permalink: /kb/104/Q104884/
---

## Q104884: How to Write to the Calendar/Diary Programmatically

{% raw %}

	Article: Q104884
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5x,2.6,2.6a; WINDOWS:2.5x,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	All entries in the FoxPro calendar/diary tool are saved in the active resource
	file (FOXUSER.DBF by default). You can create these entries under program
	control and display information saved in the calendar/diary, as explained below.
	
	MORE INFORMATION
	================
	
	All entries related to the calendar/diary are read from the active resource
	file. To enter information under program control, you must operate from a
	database that has the same structure as the original FOXUSER.DBF file. This
	database cannot be the active resource file at the time the data is appended
	under program control.
	
	NOTE: There is one record per date.
	
	The fields and their contents are as follows:
	
	  Structure
	  ---------
	
	  TYPE          C                12
	  ID            C                12
	  NAME          C                24
	  READONLY      L                 1
	  CKVAL         N                 6
	  DATA          M                10
	  UPDATED       D                 8
	
	Contents of the Fields
	----------------------
	
	  TYPE should be replaced with the string "DATA".
	
	  ID should be replaced with the string "DIARYDATA".
	
	  NAME should be replaced with DTOS(<mdate>), where <mdate> is the
	  date to be selected in the calendar. The data in NAME should be character
	  type data and have the format YYYYMMDD.
	
	  DATA should be replaced with the text to be displayed in the diary. DATA is a
	  memo field. To place data in a memo field, you can use the APPEND MEMO
	  command.
	
	  CKVAL should be replaced with VAL(SYS(2007,DATA)). SYS(2007) returns a
	  character expression, in this case the checksum value of the memo field.
	
	  UPDATED should be replaced with the DATE() function (system date).
	
	After the data is replaced in the database, the database should be closed. It
	then can be used as a resource file.
	
	Additional query words: VFoxWin FoxDos FoxWin 2.50 2.50a 2.50b calendar appointment modify alter change
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : MS-DOS:2.0,2.5x,2.6,2.6a; WINDOWS:2.5x,2.6,2.6a,3.0
	
	=============================================================================
	

{% endraw %}
