---
layout: page
title: "Q136284: How to Find the Size of an .FPT File with Different Blocksizes"
permalink: kb/136/Q136284/
---

## Q136284: How to Find the Size of an .FPT File with Different Blocksizes

	Article: Q136284
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a,2.6,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.6, 2.6a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes changing the blocksize of a memo field can result in significant
	savings in disk space. The BLOCKTEST() function listed in this article can
	determine exactly how much disk space can be gained or lost with different
	blocksizes.
	
	MORE INFORMATION
	================
	
	1. Open a program file called LowLevel.prg and add this code:
	
	     FUNCTION BLOCKTEST
	     PARAMETER lnTempsize
	     CLEAR
	     IF lnTempsize>0
	       IF lnTempsize<=32
	         lnTempsize=lnTempsize*512
	       ENDIF
	       lnTempblk=0
	       lcFilename=LEFT(DBF(),LEN(DBF())-4)
	       lnBlksize=VAL(SYS(2012))
	       USE
	       lnHandle=FOPEN(lcFilename+".FPT")
	       IF lnHandle>0
	          lnFilesize=FSEEK(lnHandle,0,2)
	          =FSEEK(lnHandle,0)
	          lcByte=FREAD(lnHandle,8)
	          lnBlknum=ASC(SUBSTR(lcByte,4,1))+(ASC(SUBSTR(lcByte,3,1))*256)+;
	             (ASC(SUBSTR(lcByte,2,1))*256*256)+;
	             (ASC(SUBSTR(lcByte,1,1))*256*256*256)
	          ?  "Current Memo Stats"
	          ?  "    Blocksize    "+ALLTRIM(STR(lnBlksize))
	          ?  "    # of blocks  "+ALLTRIM(STR(lnBlknum))
	          ?  "    Filesize     "+ALLTRIM(STR(lnFilesize))+" Bytes"
	          lnBlkend=0
	          lni=1
	          DO WHILE lnBlkend<512
	             lnBlkend=lni*lnBlksize
	             lni=lni+1
	          ENDDO
	          =FSEEK(lnHandle,lnBlkend+4)
	          lnRec=0
	          FOR lni=lni TO lnBlknum
	             lcByte=FREAD(lnHandle,4)
	             =FSEEK(lnHandle,lnBlksize-4,1)
	             IF (lnBlksize*lni)>lnBlkend
	                lnx=ASC(SUBSTR(lcByte,4,1))+:
	                   (ASC(SUBSTR(lcByte,3,1))*256)+;
	                   (ASC(SUBSTR(lcByte,2,1))*256*256)+;
	                   (ASC(SUBSTR(lcByte,1,1))*256*256*256)+8
	                lnRec=lnRec+1
	                lnk=INT((lnx-1)/lnBlksize)
	                lni=lni+lnk
	                lnTempblk=lnTempblk+INT(lnx/lnTempsize)+;
	                   IIF(MOD(lnx,lnTempsize)=0,0,1)
	                =FSEEK(lnHandle,(lnBlksize*lnk),1)
	             ENDIF
	          ENDFOR
	          =FCLOSE(lnHandle)
	          lnTempblk=lnTempblk+INT(512/lnTempsize)+;
	             IIF(MOD(512,lnTempsize)=0,0,1)
	          lnTempfile=lnTempsize*lnTempblk
	          ?
	          ?  "Requested Memo Stats"
	          ?  "    Blocksize    "+ALLTRIM(STR(lnTempsize))
	          ?  "    # of blocks  "+ALLTRIM(STR(lnTempblk))
	          ?  "    Filesize     "+ALLTRIM(STR(lnTempfile))+" Bytes"
	          ?
	          ? "Savings: "+ALLTRIM(STR(lnFilesize-lnTempfile))+" Bytes"
	          USE &lcFilename
	          IF lnRec>RECCOUNT()
	            ?
	            ? ALLTRIM(str(lnrec-reccount()))+;
	               " disconneted records in memo file."
	            ? "Please PACK MEMO and run this command again"
	          ENDIF
	          RETURN lnTempfile
	       ENDIF
	     ENDIF
	
	2. Save and close LowLevel.prg.
	
	3. Test the function by opening a table with a memo field. For this example, the
	  table is Restaurs.dbf. A blocksize of 64 will be tested. In the Command
	  window, type:
	
	     SET PROCEDURE TO LOWLEVEL.PRG
	     USE C:\FPW26\SAMPLE\ORGANIZE\DBFS\RESTAURS
	     =BLOCKTEST(64)
	
	  Note that if the current blocksize is 64, there will be no savings in creating
	  a new file with the same blocksize.
	
	4. Test it again using the following different block sizes:
	
	     =BLOCKTEST(32)
	     =BLOCKTEST(35)
	     =BLOCKTEST(40)
	
	5. To change the blocksize of Restaurs.dbf TO 40, use these commands:
	
	     SET BLOCKSIZE TO 40
	     COPY TO TEMP
	     USE
	
	     ERASE RESTAURS.DBF
	     ERASE RESTAURS.FPT
	
	     RENAME TEMP.DBF TO RESTAURS.DBF
	     RENAME TEMP.FPT TO RESTAURS.FPT
	
	Additional query words: VFoxWin FoxWin FoxDos
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a,2.6,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	
	=============================================================================
	
