---
layout: page
title: "Q263902: PRB: Table/dbf File Record Count Incorrect Based on File Size"
permalink: /kb/263/Q263902/
---

## Q263902: PRB: Table/dbf File Record Count Incorrect Based on File Size

	Article: Q263902
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbServer kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSu
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A table (.dbf) file shows that it has a number of records that is greater than
	or less than the number that is expected based on the file's size.
	
	RESOLUTION
	==========
	
	In most cases, the preceding symptoms can be overcome by modifying the header of
	the table/dbf file to reflect a calculated number of records. This process is
	offered as a workaround. Its usefulness is limited to a situation where all of
	the following are true:
	
	- The expected data is contained within the file.
	- The file size is consistent with the amount of data that it contains.
	- The file's Header Information, apart from the bytes that store the number of
	  records, is all valid.
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The following demonstrates how to calculate the number of records that a table
	should contain.
	
	1. Create a program named RECCALC.PRG and add the following code:
	
	  IF EMPTY(ALIAS())
	     =MESSAGEBOX("No table is open in the selected work area.")
	     RETURN
	  ENDIF
	  lnFile = ADIR(laFile,DBF())
	  IF lnFile > 0
	     lnFileSize = laFile(2)
	     lnRecords = INT((lnFileSize - HEADER())/RECSIZE())
	  ELSE
	     lnRecords = RECCOUNT()
	  ENDIF
	  RETURN lnRecords
	
	2. Open a table in the currently selected work area.
	
	3. To show the calculated number of records printed to the Visual FoxPro screen,
	  run the program from the Command window as follows:
	
	  ?RECCALC()
	
	In the event that the table header has been written or modified to reflect that
	the table contains any number of records different from what is actually
	contained in the file, the following code can be used to modify the header to
	reflect the calculated number of records. This program uses low-level file
	input/output (I/O) to modify the table header programmatically.
	
	1. Create a program named RECHEADR.PRG and add the following code:
	
	  IF EMPTY(ALIAS())
	     =MESSAGEBOX("No table is open in the selected work area.")
	     RETURN
	  ENDIF
	
	  lnCalcRecords = RECCALC()
	
	  IF RECCOUNT() <> lnCalcRecords
	     lcFileName = DBF()
	     USE
	     lnHandle = FOPEN(lcFileName, 2)
	
	     IF lnHandle > 0
	        lnHeaderData = FREAD(lnHandle,32)
	        BKUP_lnHeaderData = lnHeaderData
	
	        lnHeaderByte8 = CHR(INT(lnCalcRecords / (256^3)))
	        lnHeaderByte7 = CHR(INT(lnCalcRecords / (256^2)))
	
	        lnHeaderByte6 = CHR(INT(lnCalcRecords / 256) - ;
	           IIF(lnCalcRecords / 256 > 256, ;
	               (INT(INT(lnCalcRecords / 256) / 256) * 256), ;
	               0))
	
	        lnHeaderByte5 = CHR(MOD(lnCalcRecords,256))
	
	        lnHeaderData = SUBSTR(lnHeaderData, 1, 4) + ;
	           lnHeaderByte5 + lnHeaderByte6 + lnHeaderByte7 + ;
	           lnHeaderByte8 + SUBSTR(lnHeaderData, 9)
	
	        =FSEEK(lnHandle, 0)
	        =FWRITE(lnHandle, lnHeaderData)
	        =FCLOSE(lnHandle)
	     ENDIF
	     USE (lcFileName)
	     RETURN .T.  && Program modified the table header
	  ELSE
	     RETURN .F.  && Program did not modify the table header
	  ENDIF
	
	2. Open a table in the currently selected work area.
	
	3. To modify the table header to reflect the calculated number of records, run
	  the program from the Command window as follows:
	
	  ?RECHEADR()
	
	4. If a modification was made, note that a logical '.T.' (True) is printed to
	  the Visual FoxPro screen. Otherwise, a logical '.F.' (False) is printed.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	It is possible to use a hexidecimal editing tool to modify the header of a table.
	The header bytes that contain the record count are located in columns 4, 5, 6,
	and 7 of address 00000000 (topmost row). In versions of Visual FoxPro 5.0 and
	later, a hexidecimal editing tool is located at
	HOME()+"tools\hexedit\hexedit.app".
	
	NOTE: The following steps should be taken only on a table/dbf file that is of NO
	IMPORTANCE.
	
	1. Use a hexidecimal editing tool and open a .dbf file.
	
	2. At address 00000000, change the information in columns 4, 5, 6, and 7 to read
	  as 00 (double zero).
	
	3. Save the changes and close the file.
	
	4. In Visual FoxPro, open the modified .dbf file as a table, and note that the
	  record count is zero.
	
	REFERENCES
	==========
	
	For additional information about using low-level file I/O to modify a table
	header, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q135905 How to Retrieve Records That Were Previously Zapped
	
	For additional informationabout situations than can result in a table with data
	but zero records, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q263914 PRB: CREATEOFFLINE() Results in No Records
	
	Additional query words:
	
	======================================================================
	Keywords          : kbServer kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
