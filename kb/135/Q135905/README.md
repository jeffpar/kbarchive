---
layout: page
title: "Q135905: How to Retrieve Records That Were Previously Zapped"
permalink: kb/135/Q135905/
---

## Q135905: How to Retrieve Records That Were Previously Zapped

	Article: Q135905
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes, Microsoft Visual FoxPro's ZAP command can be reversed and you can
	retrieve all the records by using a low-level file I/O. This method works only
	if the data was not overwritten by other files. The approximate number of
	records to retrieve is also important.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Open a program file named Lowlevel.prg and type in the following function:
	
	     FUNCTION UNZAP
	     PARAMETER Y
	     IF Y>0 .AND. USED()
	        IF RECCOUNT()=0
	           FILENAME=DBF()
	           USE
	           HANDLE=FOPEN(FILENAME,2)
	           IF HANDLE>0
	              BYTE=FREAD(HANDLE,32)
	              BKUP_BYTE=BYTE
	              FIELD_SIZE=ASC(SUBSTR(BYTE,11,1))+(ASC(SUBSTR(BYTE,12,1))*256)
	              FILE_SIZE=FSEEK(HANDLE,0,2)
	              BYTE8=CHR(INT(Y/(256*256*256)))
	              BYTE7=CHR(INT(Y/(256*256)))                        BYTE6=CHR(INT(Y/256)-IIF(Y/256>256,(INT(INT(Y/256)/256)*256),0))
	              BYTE5=CHR(MOD(Y,256))
	              BYTE=SUBSTR(BYTE,1,4)+BYTE5+BYTE6+BYTE7+BYTE8+SUBSTR(BYTE,9)
	              =FSEEK(HANDLE,0)
	              =FWRITE(HANDLE,BYTE)
	              =FCHSIZE(HANDLE,FILE_SIZE+(FIELD_SIZE*Y))
	              =FCLOSE(HANDLE)
	           ENDIF
	           USE &FILENAME
	        ENDIF
	     ENDIF
	
	2. Save and close the Lowlevel.prg program file.
	
	3. Back up the table that you are going to experiment on to protect against data
	  corruption.
	
	4. Test the function by zapping the back-up of the table and then use the UNZAP
	  function to retrieve the records. The following example uses the Foxuser.dbf
	  table:
	  a. In the Command window, type:
	
	        SET PROCEDURE TO LOWLEVEL.PRG
	        SET RESOURCE OFF
	        USE FOXUSER
	
	  b. Note how many records are in the foxuser file. For this example, assume
	     that there are 50 records.
	
	  c. In the Command window, type:
	
	        ZAP
	        =UNZAP(50)
	
	  d. Note that all of the records are retrieved.
	
	5. It is possible to use UNZAP to retrieve more records than what actually
	  existed, especially if you do not know exactly how many records to retrieve.
	
	  After you use UNZAP, you should browse the table to make sure only valid
	  records were retrieved. Invalid records will immediately be apparent by the
	  incomprehensible data in all the fields. Locate the last valid record and
	  repeat step 4(c) and use the correct number of records.
	
	6. If the Foxuser.dbf table is corrupt, delete the file. FoxPro will create a
	  new one.
	
	Additional query words: VFoxWin FoxWin FoxDos
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	
	=============================================================================
	
