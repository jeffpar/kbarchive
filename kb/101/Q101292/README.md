---
layout: page
title: "Q101292: How to Create a WordPerfect Merge File"
permalink: kb/101/Q101292/
---

## Q101292: How to Create a WordPerfect Merge File

	Article: Q101292
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WordPerfect secondary merge files use specific codes to separate data items.
	Because these codes differ from the standard delimiters used in text files, you
	must use FoxPro's low-level file functions to create the file with the
	appropriate codes.
	
	MORE INFORMATION
	================
	
	File Conversions
	----------------
	
	WordPerfect 6.0 for MS-DOS:
	
	In WordPerfect 6.0 for MS-DOS, when prompted, choose one of the following two
	conversions:
	
	- ASCII text (Standard)
	
	- ASCII text (CR/LF to SRt)
	
	NOTE: If you create your WordPerfect merge file in FoxPro for Windows and then
	import it into WordPerfect for MS-DOS, you may see control characters.
	
	WordPerfect 5.2 for Windows:
	
	When you import data from FoxPro for Windows into WordPerfect 5.2 for Windows,
	you will be asked to convert the file format when you choose Open from the File
	menu. Choose any of the ANSI options for Windows:
	
	- ANSI Text (Windows)
	
	- ANSI Delimited Text (Windows)
	
	- ANSI Text CR/LF to SRt (Windows)
	
	NOTE: If you try to import the file from FoxPro for Windows as an ASCII file, you
	will see double-headed vertical arrows and spade characters. Use ANSI when using
	the Windows products.
	
	Cross-Platform Program
	----------------------
	
	The following program is provided as an example of using FoxPro's low-level file
	functions to create a WordPerfect merge file.
	
	     *     WPMRG.PRG - Creates a WordPerfect merge file.
	     *     Pass it the database name and output filename.
	     *     This procedure uses database fields
	     *     FNAME, LNAME, ADDRESS, CITY, STATE, and ZIP.
	     *     It returns a negative number if an error occurs;
	     *     otherwise, it returns a 1.
	
	     PARA fil_name, out_file
	     IF USED(fil_name)
	        m.env=SELECT()
	        m.dbf_open=.F.
	        SELECT (fil_name)
	     ELSE
	        IF FILE(ALLTRIM(fil_name)+".DBF")
	           m.env=SELECT()
	           m.dbf_open=.T.
	           SELECT 0
	           USE (fil_name)
	        ELSE
	           reason="            NO INPUT FILE!"
	           DO NOTIFY WITH reason
	           RETURN -1
	        ENDIF
	     ENDIF
	
	     handle=FCREATE(out_file)
	     IF handle<0
	        DO CASE
	        CASE FERROR()=4
	           reason="CAN'T CREATE FILE - OUT OF FILE HANDLES"
	        CASE FERROR()=5
	           reason="CAN'T CREATE FILE - ACCESS DENIED"
	        CASE FERROR()=8
	           reason="CAN'T CREATE FILE - OUT OF MEMORY"
	        CASE FERROR()=29
	           reason="CAN'T CREATE FILE - DISK FULL"
	        CASE FERROR()=31
	           reason="CAN'T CREATE FILE - GENERAL FAILURE"
	        ENDCASE
	        DO NOTIFY WITH reason
	        RETURN -2
	     ELSE
	        SCAN
	           alldata=ALLTRIM(fname)+" "+ALLTRIM(lname)+CHR(18)+ ;
	              ALLTRIM(address)+CHR(18)+ALLTRIM(city)+CHR(18)+ ;
	
	           ALLTRIM(state)+CHR(18)+ALLTRIM(zip)+CHR(18)+CHR(5)+CHR(12)
	           =FWRITE(handle,alldata)
	           =FSEEK(handle,0,2)
	        ENDSCAN
	        =FCLOSE(handle)
	     ENDIF
	     SELECT (m.env)
	     IF m.dbf_open
	        USE
	     ENDIF
	     RETURN 1     && End of main procedure
	
	     PROCEDURE NOTIFY
	     PARAMETER reason
	     DEFINE WIND alert FROM 7,17 TO 12,60 DOUBLE COLOR SCHEME 7
	     ACTIVATE WIND alert
	     @1,7 SAY "UNABLE TO CREATE FILE"
	     @2,7 SAY reason
	     @3,7 SAY "PRESS A KEY TO EXIT"
	     =INKEY(0)
	     DEACTIVATE WIND alert
	     CANCEL
	
	Additional query words: VFoxWin FoxDos FoxWin WP WPD WPW SIX.0 merge
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
