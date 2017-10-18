---
layout: page
title: "Q165638: HOWTO: Print Two Reports in One Duplexed Report"
permalink: kb/165/Q165638/
---

## Q165638: HOWTO: Print Two Reports in One Duplexed Report

	Article: Q165638
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprint kbvfp300 kbvfp500
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because FoxPro reports are sent as separate print jobs, they are also printed on
	separate pages. So, if you have two one-page reports and you want to have them
	printed as one duplex report, you would have to combine the reports into one, or
	combine the output of the two reports--as the program code in this article
	illustrates.
	
	NOTE: The COPY FILE command used at the end of this program may not work under
	Windows NT. This is another issue being researched at this time.
	
	MORE INFORMATION
	================
	
	There are some cases where extra characters may be printed at the top of the two
	pages, but adjustments can be made to the code to prevent this. Specifically,
	you need to change the adjustment on the lines using the FSEEK() function so
	that the file pointer is moved by fewer characters.
	
	Please note the assumptions that this code makes:
	
	- You have a printer connected to a local printer port (LPT1 for this code to
	  work without modification), or you have captured a network printer to LPT1.
	
	- You have only two reports to be printed together, and they print one page
	  each.
	
	One additional note is that this program creates several files as temporary files
	in the default directory. Please take note of the names of the files so as not
	to overwrite any files you may already have (since SAFETY is turned OFF). These
	temporary files are not deleted, but could be with only a few additional lines
	of code.
	
	     **=========================================**
	     ** Begin program                           **
	     **=========================================**
	     ******* Environment Settings
	     ** Printer Settings... this allows the user to
	     ** choose which printer settings will be used in
	     ** creating the file. But remember, the file
	     ** will still be sent to the port indicated in
	     ** the COPY FILE command at the end of the program.
	     SET PRINTER TO GETPRINTER()
	
	     ** Safety should be off in case we have
	     ** already run this procedure before
	     tmpsafe = SET("SAFETY")
	     SET SAFETY OFF
	     ******* End environment settings
	
	     ******* Create template file
	     ** Create blank report
	     IF FILE("blank.frx")
	        DELETE FILE blank.frx
	     ENDIF
	     DEFINE WINDOW test FROM 0,0 TO 10,10
	     KEYBOARD "{CTRL+W}"
	     CREATE REPORT blank
	     RELEASE WINDOW blank
	     RELEASE WINDOW test
	
	     ** Change the printer settings to ensure duplex printing is
	     ** turned on and use selected settings. Please note that
	     ** duplex printing will work only on printers that support it.
	     USE blank.frx
	     REPLACE expr WITH "DUPLEX=2"  && turn duplex on
	     USE
	
	     ** Create blank table to cover two pages
	     SELECT 0
	     IF USED("blank")
	        USE IN blank
	     ENDIF
	     IF FILE("blank.dbf")
	        DELETE FILE blank.dbf
	     ENDIF
	     CREATE TABLE BLANK (test C)
	     FOR nCnt = 1 TO 25
	        APPEND BLANK
	     ENDFOR
	
	     ** Create template print file from blank report
	     REPORT FORM blank TO template.prn
	     USE IN blank
	
	     ** Create variables for each line of the template file
	     htemplate = FOPEN("template.prn")
	     linecnt = 0
	     DO WHILE !FEOF(htemplate)
	        linecnt = linecnt + 1
	        lnvar = "line" + ALLTRIM(STR(linecnt))
	        STORE FGETS(htemplate) TO &lnvar
	     ENDDO
	     =FCLOSE(htemplate)
	     ******* End create
	
	     ******* Process the individual reports
	     ** Remove printer settings from the reports
	     ** so they use the selected settings
	     && First report
	     report1 = GETFILE("FRX","Please select first report")
	     IF EMPTY(report1)
	        =MESSAGEBOX("You did not specify a file for the first report," + ;
	           CHR(13) + "so this program cannot continue.")
	        RETURN
	     ENDIF
	     USE (report1) IN 0 ALIAS one
	     SELECT one
	     onetmp = one.expr
	     REPLACE expr WITH ""
	     USE IN one
	     && Second report
	     report2 = GETFILE("FRX","Please select second report")
	     IF EMPTY(report2)
	        =MESSAGEBOX("You did not specify a file for the second report," + ;
	           CHR(13) + "so this program cannot continue.")
	        RETURN
	     ENDIF
	     USE (report2) IN 0 ALIAS two
	     SELECT two
	     rtmp = two.expr
	     REPLACE expr WITH ""
	     USE IN two
	
	     ** Send reports to files
	     REPORT FORM (report1) TO one.txt NOCONSOLE
	     REPORT FORM (report2) TO two.txt NOCONSOLE
	
	     ** Restore printer settings to the reports
	     && First report
	     USE (report1) IN 0 ALIAS one
	     SELECT one
	     REPLACE expr WITH rtmp
	     USE IN one
	     && Second report
	     USE (report2) IN 0 ALIAS two
	     SELECT two
	     REPLACE expr WITH rtmp
	     USE IN two
	
	     ** Determine the size of the input files
	     tmpdb4 = SET("COMPATIBLE")
	     SET COMPATIBLE ON
	     onesz = FSIZE("one.txt")
	     twosz = FSIZE("two.txt")
	     SET COMPATIBLE &tmpdb4
	     ******* End process
	
	     ******* Create final print file
	     ** Delete the file, if it exists, and create
	     ** a new file to contain the reports
	     IF FILE("final.prn")
	        DELETE FILE final.prn
	     ENDIF
	     hFinal = FCREATE("final.prn")
	
	     ** Write header codes
	     totchar = 0  && this will contain the length of the header
	     FOR nCnt = 1 TO linecnt-2
	        lnvar = "line" + ALLTRIM(STR(nCnt))
	        totchar = totchar + FPUTS(hFinal,EVAL(lnvar))
	     ENDFOR
	     pgvar = "line" + ALLTRIM(STR(linecnt-1))  && page break line
	     ejvar = "line" + ALLTRIM(STR(linecnt))  && end of job line
	
	     ** Write body of first report file
	     hOne = FOPEN("one.txt")
	     =FSEEK(hOne,totchar-(linecnt-2))
	     =FWRITE(hFinal,FREAD(hOne,onesz-totchar-LEN(EVAL(ejvar))))
	
	     ** Write pagebreak codes
	     =FPUTS(hFinal,EVAL(pgvar))
	
	     ** Write body of second report file
	     hTwo = FOPEN("two.txt")
	     =FSEEK(hTwo,totchar-(linecnt-2))
	     =FWRITE(hFinal,FREAD(hTwo,twosz-totchar-LEN(EVAL(ejvar))))
	
	     ** Write end-of-job codes
	     =FPUTS(hFinal,EVAL(ejvar))
	
	     ** Close all files
	     =FCLOSE(hFinal)
	     =FCLOSE(hOne)
	     =FCLOSE(hTwo)
	     ******* End create
	
	     ******* Send the final file to the printer
	     ** This line copies the file to the printer
	     ** connected to LPT1: in Windows. You may also
	     ** specify LPT1 or LPT2 instead of PRN.
	     COPY FILE final.prn TO PRN
	     ******* End send
	
	     ******* Restore Environment Settings
	     SET SAFETY &tmpsafe
	     ******* End restore
	     **=========================================**
	     ** End program                             **
	     **=========================================**
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbvfp300 kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
