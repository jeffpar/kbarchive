---
layout: page
title: "Q249900: PRB: Unable to Open/Import FoxPro Table in Some Applications"
permalink: /kb/249/Q249900/
---

## Q249900: PRB: Unable to Open/Import FoxPro Table in Some Applications

{% raw %}

	Article: Q249900
	Product(s): Microsoft FoxPro
	Version(s): 2.5,2.5a,2.5b,2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbYear2000 kbDatabase kbvfp300 kbvfp500 kbvfp600 KbDBFDBC kbGrpDSFox kbDSupp
	Last Modified: 14-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An error message may appear in some applications when you open or import a
	FoxPro table that was created or modified after 12/31/1999.
	
	CAUSE
	=====
	
	The error message may be caused by one of the following:
	
	- The second byte of the FoxPro table header is a hex value and is reset to 00
	  in the year 2000 and increments by 1 each year (that is, 01 in 2001) by
	  FoxPro. Some applications treat this value as an offset from 1900 and
	  continue to increment the hex value (63, 64, 65 ... representing 1999, 2000,
	  2001 ...). The original file format definition allowed some ambiguity, so
	  either interpretation is common.
	
	- If the application is reading the second byte of the FoxPro table header,
	  which represents the year of table creation or modification, then the
	  hexadecimal 00 may be interpreted as character NULL rather than a date.
	
	- The application may add the value of the second byte of the FoxPro table to
	  the year 1900.
	
	RESOLUTION
	==========
	
	The FoxPro table header stores the information for the date of creation or
	modification of the table. The code in Method 1 changes the second byte of the
	header to the CHR() value of the year of the system date minus 1900. Please note
	that the changes to the table header shown in Method 1 and Method 2 are
	temporary. The next time FoxPro modifies the table header, for example when it
	appends a blank record, the byte reverts back to its original value.
	
	To resolve this problem, use one of the following methods: METHOD 1
	
	This method works for FoxPro versions 2.x and all versions of Visual FoxPro.
	
	1. Copy the following code and save it in a .prg file:
	
	  CLOSE ALL
	     fname=GETFILE("dbf")
	     IF EMPTY(fname)
	          RETU
	     ELSE
	          fh = FOPEN(fname,12)
	     ENDIF
	     IF fh < 0
	          WAIT 'Cannot open or create output file' WINDOW NOWAIT
	     ELSE
	          =FSEEK(fh, 1, 0)
	          =FWRITE(fh, CHR( YEAR( DATE() ) - 1900))  
	          =FCLOSE(fh)
	          WAIT 'File Updated Successfully' WINDOW NOWAIT
	     ENDIF
	
	2. Run the .prg file and choose a .dbf file to be updated.
	
	METHOD 2
	
	This method only works for Visual FoxPro 5.0 and 6.0.
	
	1. Run the Hexedit.scx form from the SYS(2004)+"\Tools\Hexedit" folder by using
	  the following command:
	
	  DO FORM SYS(2004)+"\tools\hexedit\hexedit"
	
	2. Select the .dbf file to be updated.
	
	3. Click the value of column 1 for address 00000000.
	
	4. Change the value from 00 to CHR(YEAR(DATE()) - 1900). For example, use 64 for
	  2000, and 65 for 2001.
	
	5. Click Close.
	
	6. Click Yes to save the sector on the disk.
	
	METHOD 3
	
	Use the Visual FoxPro ODBC driver to connect to the table.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	
	Additional query words: Y2K
	
	======================================================================
	Keywords          : kb3rdparty kbYear2000 kbDatabase kbvfp300 kbvfp500 kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :2.5,2.5a,2.5b,2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
