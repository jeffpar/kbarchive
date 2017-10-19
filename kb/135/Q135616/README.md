---
layout: page
title: "Q135616: How to Remove Records from a Table Without Using Delete/Pack"
permalink: /kb/135/Q135616/
---

## Q135616: How to Remove Records from a Table Without Using Delete/Pack

	Article: Q135616
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.6, 2.6a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the DELETE or PACK commands to remove records can be very time consuming.
	ZAP is very fast, but removes all the records. With FoxPro's low-level file I/O,
	you can quickly remove a select number of unwanted records from the end of a
	table.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	1. Open a program file, name it Lowlevel.prg, and type the following function
	  code:
	
	     FUNCTION ZAPLAST
	     PARAMETER lnY
	     IF USED()
	       lnZ=RECCOUNT()
	       IF lnY<=lnZ
	         lcFILENAME=DBF()
	         USE
	         lnHANDLE=FOPEN(lcFILENAME,2)
	         IF lnHANDLE>0
	           lcBYTE=FREAD(lnHANDLE,32)
	           lnFLD_SIZE=ASC(SUBSTR(lcBYTE,11,1))+;
	              (ASC(SUBSTR(lcBYTE,12,1))*256)
	           lnFILESIZE=FSEEK(lnHANDLE,0,2)
	           lnX=lnZ-lnY
	           lcBYTE8=CHR(INT(lnX/(256*256*256)))
	           lcBYTE7=CHR(INT(lnX/(256*256)))
	           lcBYTE6=CHR(INT(lnX/256))
	           lcBYTE5=CHR(MOD(lnX,256))
	           lcBYTE=SUBSTR(lcBYTE,1,4)+lcBYTE5+;
	              lcBYTE6+lcBYTE7+lcBYTE8+SUBSTR(lcBYTE,9)
	           =FSEEK(lnHANDLE,0)
	           =FWRITE(lnHANDLE,lcBYTE)
	           =FCHSIZE(lnHANDLE,lnFILESIZE+(lnFLD_SIZE*lnX))
	           =FCLOSE(lnHANDLE)
	         ENDIF
	         USE &lcFILENAME
	       ENDIF
	     ENDIF
	
	2. Save and close Lowlevel.prg
	
	3. Test the function by removing a single record from a table. For this example,
	  use the Customer.dbf table - but back up the table first. Records that are
	  deleted with ZAPLAST() cannot be recovered.
	
	  a. In the Command window, type:
	
	        SET PROCEDURE TO LOWLEVEL.PRG
	        USE C:\FPW26\TUTORIAL\CUSTOMER EXCLUSIVE
	
	  b. Take note of how many records are in the table. For this example, there
	     are 500 records.
	
	  c. In the Command window, type:
	
	        =ZAPLAST(1)
	
	  d. Note that there is one less record in the database. Originally there were
	     500 records; now there are only 499.
	
	4. Any number of records can be deleted. For example, to delete 27 records,
	  change step 3.c. to =ZAPLAST(27)
	
	NOTE: Only records at then end of the table can be deleted with ZAPLAST().
	ZAPLAST() will not recognize index orders or Visual FoxPro triggers.
	
	Additional query words: VFoxWin FoxWin FoxDos
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300
	
	=============================================================================
	
