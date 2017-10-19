---
layout: page
title: "Q250300: PRB: FoxPro DIR Command Returns Incorrect Year for Years &gt; 1999"
permalink: /kb/250/Q250300/
---

## Q250300: PRB: FoxPro DIR Command Returns Incorrect Year for Years &gt; 1999

	Article: Q250300
	Product(s): Microsoft FoxPro
	Version(s): 2.0,2.5,2.5a,2.5b,2.5c,2.6,2.6a,3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbYear2000 kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbXBase kbGrpDSFox kbDSupport kbCodeSn
	Last Modified: 17-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, Professional Edition, version 3.0 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FoxPro DIR command returns the century portion of the date in the Last
	Update column as 19xx for any table modified after 12/31/1999.
	
	CAUSE
	=====
	
	The date of the last update is stored in the header of the .dbf file. The DIR
	command looks at the table header to retrieve the last update information.
	Because this information is stored in YYMMDD format, FoxPro can not determine
	the century and assumes the 1900s.
	
	RESOLUTION
	==========
	
	Two possible workarounds are described in this section. The first workaround
	uses the ADIR function to provide basic information about the tables. This code
	can be modified to return information on all files and not just FoxPro tables.
	Copy this code into a program and execute it:
	
	  nCnt=ADIR(aFileList,"*.DBF")
	  FOR x = 1 TO nCnt
	      ? aFileList[x,1], aFileList[x,2], aFileList[x,3]
	  ENDFOR
	
	The second code example provides a more extensive workaround that also uses the
	ADIR function. Copy the code sample into a program named Zdir.prg and run it
	with one of the following commands:
	
	- 
	
	  DO Zdir
	
	  -or-
	
	- 
	
	  DO Zdir with "*.DBF"
	
	  -or-
	
	- 
	
	  =Zdir("*.DBF")
	
	To retrieve a list of any file type, use the following syntax:
	
	  DO Zdir WITH "*.*"
	
	Here is the code sample:
	
	  PARAMETERS cFileMask
	  * Output strings
	  PRIVATE cFileName, cRecCount, cFileDate, cFileSize
	  * Environment Settings
	  PRIVATE cSetTalk, cSetEscape, cOnError, cSetResource
	
	  PRIVATE nFileCnt, nFileSize, cReadStr, x, hdl, nIdx, lVFP, cByte1, cTempAlias, cFileToOpen
	  PRIVATE nCol, nSRows, nSCols, cJustPath, lDBF, nLen, aFileList[1], nTableType, nCnt
	  PRIVATE lCancel
	
	  IF SET('TALK') = "ON"
	  	SET TALK OFF
	  	cSetTalk = "ON"
	  ELSE
	  	cSetTalk = "OFF"
	  ENDIF
	
	  cOnError = ON("ERROR")
	
	  cSetEscape = SET('ESCAPE')
	  SET ESCAPE OFF
	
	  cSetResource = SET('RESOURCE')
	  SET RESOURCE OFF
	
	  * Status of the cancel key
	  lCancel = .F.
	
	  * Used for scaling the rows and columns to the current desktop
	  nSRows = SROWS()
	  nSCols = SCOLS()
	
	  * Is this VFP - used in determining table type on Fox 2.x
	  lVFP = ( "VISUAL" $ UPPER(VERSION()) )
	
	  IF TYPE("cFileMask") <> "C"
	  	cFileMask = "*.dbf"
	  ENDIF
	
	  cJustPath = JUSTPATH(cFileMask)
	  * Set the path to either the path passed in or the current folder
	  cJustPath = ADDBS(IIF(EMPTY(cJustPath), SYS(5) + SYS(2003), cJustPath))
	
	  lDBF = ( UPPER(JUSTEXT(cFileMask)) = "DBF" )
	
	  nFileCnt = ADIR(aFileList, cFileMask)
	  IF nFileCnt = 0
	  	DIMENSION aFileList[1,5]
	  	nFileSize = 0
	  ELSE
	  *** NOTE -- DIR puts '_' first, ASORT puts "_" last
	  	=ASORT(aFileList)
	  ENDIF
	
	  nFileSize = 0
	  nCol = 0
	  ?  && Start with a blank line
	  IF lDBF
	  	? "Database Table/DBF files"
	  	?? " # Records" AT 25
	  	?? "Last Update" AT 37
	  	?? "      Size" AT 50
	  ENDIF
	  IF nFileCnt = 0
	  	? "None"
	  ENDIF
	
	  cTempAlias = SYS(2015)
	  FOR x = 1 TO nFileCnt
	  	cFileName = aFileList[x,1]
	  	cFileToOpen = ALLTRIM(cJustPath + cFileName)
	  	cFileDate = PADL(DTOC(aFileList[x,3]), 11)
	
	  	IF lDBF
	  		hdl = FOPEN(cFileToOpen, 0)
	
	  		IF hdl > 0
	  * Nobody has the table exclusive, so check the header for record count
	  			cByte1 = dec2hex(str2long(FREAD(hdl, 1)))  && Table type
	  			cReadStr = ""
	  			FOR nCnt = 7 TO 4 STEP -1
	  				nIdx = FSEEK(hdl, nCnt, 0)
	  				cReadStr = cReadStr + dec2hex(str2long(FREAD(hdl, 1)))
	  			ENDFOR
	  			cRecCount = PADL(STR(Hex2Dec(cReadStr)), 10)  && Convert the Hex string to numeric and then format
	  			=FCLOSE(hdl)
	
	  * Check to see if the table is Fox 2.x or VFP or Not a table
	  			DO CASE
	  			CASE INLIST(cByte1, "02", "03", "43", "63", "83", "8B", "CB", "F5", "FB")
	  * FoxPro 2.x table
	  				nTableType = 1
	  			CASE INLIST(cByte1, "30")
	  * Visual FoxPro Table
	  				nTableType = 2
	  			OTHERWISE
	  * Not a table
	  				nTableType = 0
	  			ENDCASE
	  			IF nTableType = 0 ;
	  					OR (nTableType = 2 AND NOT lVFP)
	  				cFileName = cFileName + "  Not a Fox database"
	  				cRecCount = ""
	  			ENDIF
	  		ELSE
	  * File cannot be opened at all.
	  			cRecCount = "Can't read file"
	  			cFileDate = ""
	  		ENDIF
	
	  		cFileSize = PADL(STR(aFileList[x,2]), 11)
	
	  		?  cFileName
	  		?? cRecCount AT 25
	  		?? cFileDate AT 37
	  		?? cFileSize AT 50
	  	ELSE
	  * Format the output to fit columns on the desktop.
	  		IF nCol = 0
	  			? cFileName AT nCol*14
	  		ELSE
	  			?? cFileName AT nCol*14
	  		ENDIF
	  		nLen = INT(LEN(ALLTRIM(cFileName)) / 13)
	  		IF nLen > 0
	  			nCol = nCol + nLen
	  		ENDIF
	  		nCol = IIF((nCol + 2) * 14 > nSCols, 0, nCol + 1)
	  	ENDIF
	  	nFileSize = nFileSize + aFileList[x,2]
	
	  	IF INT(ROW()) >= INT(nSRows) - 2 ;
	  			AND nCol = 0
	  		WAIT WINDOW
	  		lCancel = ( LASTKEY() = 27 )  && User hit the escape key
	  		IF NOT lCancel
	  			CLEAR
	  		ENDIF
	  	ENDIF
	  	IF lCancel
	  		EXIT
	  	ENDIF
	  ENDFOR
	  IF lCancel
	  	? "*** INTERRUPTED ***"
	  ELSE
	  	?
	  	? TRANSFORM(nFileSize, "999999999") + " bytes in " + ALLTRIM(STR(nFileCnt)) + " files."
	  	? TRANSFORM(DISKSPACE(), "999999999") + " bytes remaining on drive."
	  ENDIF
	
	  IF cSetTalk = "ON"
	  	SET TALK ON
	  ENDIF
	  IF cSetEscape = "ON"
	  	SET ESCAPE ON
	  ENDIF
	
	  IF cSetResource = "ON"
	  	SET RESOURCE ON
	  ENDIF
	
	  RETURN ""
	
	  FUNCTION Hex2Dec
	  ******************************************************************************
	  * passed:  1-byte integer (up to 255)
	  * returns:  1-byte hex string (up to FF)
	  * example:
	  *	nDecimal = 111
	  *	cHex = dec2hex(nDecimal)   returns "6F"
	  PARAMETER cHexStr
	  PRIVATE nDecimal
	  cHexStr = UPPER(cHexStr)
	  nDecimal = 0
	  FOR i=1 TO LEN(cHexStr)
	  	nDecimal = nDecimal + IIF(ISDIGIT(SUBSTR(cHexStr, i, 1)), ;
	  		VAL(SUBSTR(cHexStr, i, 1)), ;
	  		ASC(SUBSTR(cHexStr, i, 1)) - ASC('A') + 10) * 16 ^ (LEN(cHexStr) - i)
	  ENDFOR
	
	  RETURN nDecimal
	
	  FUNCTION dec2hex
	  ******************************************************************************
	  * passed:  1-byte integer (up to 255)
	  * returns:  1-byte hex string (up to FF)
	  * example:
	  *	nDecimal = 111
	  *	cHex = dec2hex(nDecimal)   returns "6F"
	  PARAMETER nDecimal
	  PRIVATE cBit1, cBit2, cHexStr
	  cBit1 = INT(nDecimal/16)
	  cBit2 = nDecimal - (cBit1 * 16)
	
	  cHexStr = CHR(IIF(cBit1 > 9, 55, 48) + cBit1) + ;
	  	CHR(IIF(cBit2 > 9, 55, 48) + cBit2)
	  RETURN cHexStr
	
	  FUNCTION str2long
	  ******************************************************************************
	  * passed:  4-byte character string (m.longstr) in low-high ASCII format
	  * returns:  long integer value
	  * example:
	  *	m.longstr = "1111"
	  *	m.longval = str2long(m.longstr)
	
	  PARAMETERS cLongStr
	  PRIVATE i, nDecimal
	  nDecimal = 0
	  FOR i = 0 TO 24 STEP 8
	  	nDecimal = nDecimal + (ASC(cLongStr) * (2^i))
	  	cLongStr = RIGHT(cLongStr, LEN(cLongStr) - 1)
	  NEXT
	  RETURN nDecimal
	
	  FUNCTION JUSTPATH
	  * Returns just the pathname.
	  PARAMETERS m.FilName
	  m.FilName = ALLTRIM(UPPER(m.FilName))
	  IF "\" $ m.FilName
	  	m.FilName = SUBSTR(m.FilName,1,RAT("\",m.FilName))
	  	IF RIGHT(m.FilName,1) = "\" AND LEN(m.FilName) > 1 ;
	  			AND SUBSTR(m.FilName,LEN(m.FilName)-1,1) <> ":"
	  		FilName = SUBSTR(m.FilName,1,LEN(m.FilName)-1)
	  	ENDIF
	  	RETURN m.FilName
	  ELSE
	  	RETURN ""
	  ENDIF
	
	  FUNCTION JUSTEXT
	  * Return just the extension from "filname"
	  PARAMETERS m.FilName
	  PRIVATE m.ext
	  m.FilName = JUSTFNAME(m.FilName)   && prevents problems with ..\ paths
	  m.ext = ""
	  IF AT(".", m.FilName) > 0
	  	m.ext = SUBSTR(m.FilName, AT(".", m.FilName) + 1, 3)
	  ENDIF
	  RETURN UPPER(m.ext)
	
	  FUNCTION JUSTFNAME
	  * Return just the filename (i.e., no path) from "filname"
	  PARAMETERS m.FilName
	  IF RAT("\",m.FilName) > 0
	  	m.FilName = SUBSTR(m.FilName,RAT("\",m.FilName)+1,255)
	  ENDIF
	  IF AT(":",m.FilName) > 0
	  	m.FilName = SUBSTR(m.FilName,AT(":",m.FilName)+1,255)
	  ENDIF
	  RETURN ALLTRIM(UPPER(m.FilName))
	
	  FUNCTION ADDBS
	  * Add a backslash unless there is one already there.
	  PARAMETER m.pathname
	  PRIVATE m.separator
	  m.separator = IIF(_MAC,":","\")
	  m.pathname = ALLTRIM(UPPER(m.pathname))
	  IF !(RIGHT(m.pathname,1) $ '\:') AND !EMPTY(m.pathname)
	  	m.pathname = m.pathname + m.separator
	  ENDIF
	  RETURN m.pathname
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Change the system date of the computer to 02/01/2000. The specific date is
	  not critical as long as the year is 2000 or later.
	
	2. In the FoxPro Command window, type the following without the comments:
	
	  SET CENTURY ON
	  USE <tablename>         && Name of the table.
	  APPEND BLANK            && Appends a blank record to the table.DIR
	  USE                     && This closes the table.
	  DIR
	
	An incorrect answer is listed for the modified table: 02/01/1900.
	NOTE: Remember to reset the system date of your computer back to today.
	
	REFERENCES
	==========
	
	For additional information about the LUPDATE(), the FDATE(), and the ADIR()
	functions, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q176481 FIX: LUPDATE() Does Not Report Correct Century for Year 2000
	
	  Q130165 PRB: LUPDATE() Does Not Return Date of Last Update
	
	  Q113943 INFO: New and Enhanced Commands and Functions in FoxPro Ver 2.6
	
	  Q100554 INFO: Using ADIR() Function to Obtain MS-DOS File Information
	
	Microsoft FoxPro Help, topic: "LUPDATE() Function"
	
	Microsoft FoxPro Help, topic: "FDATE() Function"
	
	Microsoft FoxPro Help, topic: "ADIR() Function"
	
	
	Additional query words: Y2K DIR
	
	======================================================================
	Keywords          : kbYear2000 kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbXBase kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300Mac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : :2.0,2.5,2.5a,2.5b,2.5c,2.6,2.6a,3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
