---
layout: page
title: "Q115731: How to Read Memo Field Data from Delimited ASCII Files"
permalink: /kb/115/Q115731/
---

## Q115731: How to Read Memo Field Data from Delimited ASCII Files

	Article: Q115731
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 2.50b 2.60 | 2.00 2.5
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxPro uses the APPEND FROM command to read in text stored in various types of
	delimited ASCII file formats. The APPEND FROM command will read in all data with
	the exception of any memo field data. This data is completely ignored by the
	APPEND FROM command. The suggested work around has always been to read the file
	in using low-level I/O. This requires writing a program that will read the data
	in 1 byte at a time. The program shown below will work with almost any type of
	delimited ASCII text file and will read in the memo field data that in the past
	had been left out.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     ***************************************************
	     *  Append data from any delimited ASCII file into
	     *  a predefined FoxPro database file. The intent
	     *  is to read in memo field data, but the program
	     *  will also address files with varying delimiters.
	     *  This program assumes that the target database
	     *  file is currently in use, used exclusively, and
	     *  in the current work area.
	     ***************************************************
	     PARAMETERS text_file, char_delimiter, field_delimiter
	
	     ***************************************************
	     *  Create an array of database structure.
	     *  Determine number of records in array for FOR
	     *  loop counting.
	     ***************************************************
	     =AFIELDS(structure)
	     rows = ALEN(structure,1)
	
	     ***************************************************
	     *  Attempt to open text file with low-level handle.
	     *  If the test is successful, continue; otherwise,
	     *  report reason for failure.
	     ***************************************************
	     file_handle = FOPEN(text_file)
	     IF file_handle < 0
	        DO errhand WITH FERROR()
	        RETURN .F.
	     ENDIF
	
	     ***************************************************
	     *  Begin DO WHILE loop and continue until end of
	     *  file marker is reached in text file.
	     ***************************************************
	     DO WHILE !FEOF(file_handle)
	        APPEND BLANK
	        FOR i = 1 TO rows
	           IF structure[i,2] = "N"
	              =readnum("",0)
	           ELSE
	              =readchar("",0)
	           ENDIF
	        ENDFOR
	     ENDDO
	     =FCLOSE(file_handle)
	
	     ***************************************************
	     *  Read numeric field data into corresponding
	     *  field in database.
	     ************************************************
	     FUNCTION readnum
	     PARAMETERS accum_text, count_comma
	     DO WHILE count_comma < 1
	        single = FREAD(file_handle,1)
	        IF single = field_delimiter OR single = CHR(13)
	           single = ""
	           count_comma = count_comma + 1
	           IF count_comma < 1 AND i > rows
	              =FSEEK(file_handle,1,1)
	           ENDIF
	        ELSE
	           accum_text = accum_text + single
	        ENDIF
	     ENDDO
	     REPLACE &structure[i,1] WITH VAL(accum_text)
	     accum_text = ""
	     RETURN
	
	     ***************************************************
	     *  Read all field types in as character except
	     *  numeric fields.
	     ***************************************************
	     FUNCTION readchar
	     PARAMETERS accum_text, count_quotes
	     DO WHILE count_quotes < 2 AND !FEOF(file_handle)
	        single = FREAD(file_handle,1)
	        IF single = char_delimiter
	           single = ""
	           count_quotes = count_quotes + 1
	           IF count_quotes >= 2
	              x=FREAD(file_handle,1)
	              IF x = CHR(13)
	                 =FSEEK(file_handle,1,1)
	              ENDIF
	           ENDIF
	        ELSE
	           accum_text = accum_text + single
	        ENDIF
	     ENDDO
	     REPLACE &structure[i,1] WITH accum_text
	     accum_text = ""
	     RETURN
	
	     ***************************************************
	     *  Error handling routine
	     ***************************************************
	     FUNCTION errhand
	     PARAMETERS error
	     DO CASE
	        CASE error = 2
	           reason = "File not found"
	        CASE error = 4
	           reason = "Too many files open"
	        CASE error = 5
	           reason = "File access denied"
	        CASE error = 6
	           reason = "Invalid file handle given"
	        CASE error = 8
	           reason = "Out of memory"
	        CASE error = 25
	           reason = "Seek error (can't seek before start of file)"
	        CASE error = 29
	           reason = "Disk is full"
	        CASE error = 31
	           reason = "Error opening file"
	     ENDCASE
	     WAIT WINDOW "Cannot open file: "+reason
	
	NOTE: This program assumes an ASCII file format as the source file. If there is
	an end-of-file (EOF) marker in this file, the program will not terminate and
	will remain in an infinite loop until the ESC key is pressed. Despite this minor
	problem, the data will still be read correctly. To avoid this problem, remove
	the EOF marker with a text editor.
	
	Additional query words: VFoxWin FoxDos FoxWin 2.00
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro250cMac kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : 2.50 2.50a 2.50b 2.60 | 2.00 2.5
	
	=============================================================================
	
