---
layout: page
title: "Q129401: Using Low-Level I/O to Remove Leading CR/LF Created by LIST"
permalink: /kb/129/Q129401/
---

## Q129401: Using Low-Level I/O to Remove Leading CR/LF Created by LIST

	Article: Q129401
	Product(s): Microsoft FoxPro
	Version(s): 2.6a,3.0,5.0,6.0,7.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0, 7.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The LIST TO FILE <filename> command places a CR/LF at the beginning of the
	file <filename>. If the file created is used as input to another program,
	it may be necessary to programmatically remove these two leading bytes. One way
	of doing this is through the use of low-level file I/O functions.
	
	MORE INFORMATION
	================
	
	The following code is an example of how to use low-level file functions to alter
	a text file that begins with a carriage return/line feed pair:
	
	  * Open the sample table Customer.dbf
	     CLOSE ALL
	     CLEAR ALL
	     USE customer
	
	     * Create the text file.
	     IF "Visual" $ VERSION() && Check if you are running VFP 3.0 or later
	     LIST TO FILE output.txt FOR country="USA"
	     ELSE
	     LIST TO FILE output.txt FOR state="FL"
	     ENDIF
	     * Now the text file has a leading CR/LF at the beginning.
	     * To get rid of this, do the following:
	     handle=FOPEN("output.txt",12)      && Low level open, read/write.
	     IF handle > 0                      && Do you have a good open?
	        * When opened, file pointer points at beginning of file.
	        * To get size of file, seek end of file, return the number of bytes
	        * the pointer was moved.
	        SIZE=FSEEK(handle,0,2)
	        FOR LOOP=2 TO SIZE
	           =FSEEK(handle,LOOP,0)      && Go to data byte to be copied.
	           the_char = FREAD(handle,1)
	           =FSEEK(handle,LOOP-2,0)    && Where to write the data.
	           =FWRITE(handle,the_char,1) && Write the character.
	        ENDFOR
	        * Now that the data in the file has been migrated two
	        * bytes down to cover up the CR/LF at the beginning
	        * of the file, read just the size of the file to
	        * truncate the two garbage bytes at the end of the file.
	        =FCHSIZE(handle,SIZE-2)
	        =FCLOSE(handle)   && Done.
	     ENDIF
	
	Additional query words: VFoxWin FoxWin hard return cr / lf input output
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300 kbVFP500 kbVFP600 kbVFP700
	Version           : :2.6a,3.0,5.0,6.0,7.0
	
	=============================================================================
	
