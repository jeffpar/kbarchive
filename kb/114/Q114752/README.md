---
layout: page
title: "Q114752: Commands and Functions Affected by SET COMPATIBLE"
permalink: kb/114/Q114752/
---

## Q114752: Commands and Functions Affected by SET COMPATIBLE

	Article: Q114752
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The commands and functions listed in this article are affected by the SET
	COMPATIBLE command.
	
	MORE INFORMATION
	================
	
	Affected in FoxPro 2.5, 2.5a, 2.5b, and 2.6
	-------------------------------------------
	
	All file-processing commands with a drive reference (for example, SET DEFAULT TO
	c:\foxprow\tutorial).
	
	  @ ... GET with a RANGE clause
	  @ ... SAY with CHR(7)
	  @ ... SAY scrolling
	  @ ... SAY when STATUS is ON
	  ACTIVATE SCREEN
	  ACTIVATE WINDOW
	  APPEND MEMO
	  DECLARE
	  DIMENSION
	  GO | GOTO with SET TALK ON
	  INKEY( )
	  LASTKEY( )
	  LIKE( )
	  MENU and POPUP commands
	  PLAY MACRO
	  READ with an @ ... GET VALID clause
	  READ with a numeric PICTURE clause
	  READ-Nested READs
	  RUN | !
	  SET COLOR TO
	  SET FIELDS
	  SET MESSAGE
	  SET PRINT TO <file>
	  STORE
	  SUM
	  TRANSFORM( ) with a numeric PICTURE clause
	  SELECT( )
	  SYS(2001, "COLOR")
	
	Affected in FoxPro 2.6 Only
	---------------------------
	
	  FSIZE( )
	  SET("BORDER")
	
	For a full description of how each of these commands and functions are affected,
	see SET COMPATIBLE in the FoxPro "Language Reference."
	
	Affected in Visual FoxPro 3.0
	-----------------------------
	
	According to the Microsoft Visual FoxPro Help, the following commands and
	functions are affected by SET COMPATIBLE:
	
	  @ ... GET with a RANGE clause
	  @ ... SAY with CHR(7)
	  @ ... SAY scrolling
	  @ ... SAY when STATUS is ON
	  ACTIVATE SCREEN
	  ACTIVATE WINDOW
	  APPEND MEMO
	  DECLARE
	  DIMENSION
	  GO | GOTO with SET TALK ON
	  FSIZE( )
	  INKEY( )
	  LASTKEY( )
	  LIKE( )
	  READ with an @ ... GET VALID clause
	  Nested READs
	  READ
	  RUN | !
	  SET COLOR TO
	  SET BORDER
	  SET FIELDS
	  SET MESSAGE
	  SET MEMOWIDTH
	  SET PRINTER TO <file>
	  STORE
	  SUM
	  TRANSFORM( ) with a numeric PICTURE clause
	  SELECT( )
	  SYS(2001, "COLOR")
	
	Menu commands
	
	  PLAY MACRO
	
	REFERENCES
	==========
	
	FoxPro online Help file, "Compatibility" topic
	
	Additional query words: VFoxWin FoxDos FoxWin foxhelp.dbf foxhelp.hlp db4 foxplus akz
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MS-DOS:2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	
	=============================================================================
	
