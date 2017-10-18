---
layout: page
title: "Q148689: How to Parse Config.fpw Programmatically"
permalink: kb/148/Q148689/
---

## Q148689: How to Parse Config.fpw Programmatically

	Article: Q148689
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to parse through a text file programmatically.
	This example uses Config.fpw. The code searches for a specific entry, and then
	it modifies the entry if it is found or adds it if not found.
	
	You might want to use this technique in distributed applications, for example, to
	control the operating environment.
	
	MORE INFORMATION
	================
	
	This code example checks to determine if the Visual FoxPro system variable
	MVCOUNT is less than 2000. If follows this process:
	
	1. Open or Create the Config.fpw file as applicable,
	
	2. Search through the Config.fpw file for the MVCOUNT= entry.
	
	  a. If it finds an entry, it modifies it to read MVCOUNT=2000.
	
	  b. If it doesn't find an entry, it creates one.
	
	3. Write the modified file contents back to disk, and close the file.
	
	Code Sample
	-----------
	
	  * Parsefpw.prg
	  * ------------
	  * To make this backward compatible to FoxPro 2.x, replace the MESSAGEBOX()
	  * functions with WAIT WINDOWs
	  *
	  cNewLine   = "MVCOUNT=2000"+CHR(13)      && This is the line to change/add
	  nUpdateStat = 0                          && Use to determine which message
	  cVFPConfigLoc = SYS(2019)
	  nFileHand   = FOPEN(cVFPConfigLoc, 2)    && open with read/write privileges
	  IF nFileHand == -1                       && Can't find Config.fpw
	    nFileHand = FCREATE(cVFPConfigLoc, 0)  && Create an Config.fpw
	    IF nFileHand == -1                     && Can't create Config.fpw
	      = FCLOSE(nFileHand)
	      nUpdateStat = 1                      && Not existing, Cannot Create
	    ELSE
	      = FWRITE(nFileHand, cNewLine)
	      = FCLOSE(nFileHand)
	      nUpdateStat = 2                      && Not existing, Did Create
	    ENDIF
	  ELSE
	    filesize = FSEEK(nFileHand, 0, 2)
	    = FSEEK(nFileHand, 0, 0)               && position file pointer to BOF
	    contents = FREAD(nFileHand, filesize)
	    spos = RAT("MVCOUNT", UPPER(contents)) && from right to find last
	  MVCOUNT
	
	    IF spos <> 0                           && Contains "MVCOUNT" entry
	      * len = length (for example, len=20+1=21 for "MVCOUNT = 30 ")
	      * len = AT(CHR(13)+CHR(10), SUBSTR(contents, spos)) - 1 && w/o CR & LF
	      len = AT(CHR(13)+CHR(10), SUBSTR(contents, spos)) + 1 && with CR & LF
	      IF LEN = 0
	        LEN = LEN(SUBSTR(contents, spos))
	      ENDIF
	    ELSE                                   && "MVCOUNT" Not there, append it
	      LEN = AT(CHR(26), contents)          && CHR(26) = Escape = EOF marker
	      IF LEN <> 0
	        contents = LEFT(contents, LEN - 1)
	        LEN = 0
	      ENDIF
	      spos = RAT(CHR(13)+CHR(10), contents, ;
	      IIF(RIGHT(contents, 2) <> CHR(13)+CHR(10), 1, 2))
	      spos = spos + IIF(spos = 0, 1, 2)
	    ENDIF
	    contents = STUFF(contents, spos, LEN, cNewLine)
	    = FSEEK(nFileHand, 0, 0)
	    = FWRITE(nFileHand, contents)
	    = FCHSIZE(nFileHand, LEN(contents))
	    = FCLOSE(nFileHand)
	    nUpdateStat = 3                           && Did exist, Modified
	  ENDIF
	  ?? CHR(7)
	  cMsg1 = "A file named Config.fpw must exist in <YourApp>"+CHR(13);
	         +"startup directory. This file must contain an
	  MVCOUNT=2000"+CHR(13);
	         +"statement in order for the <YourApp> application to
	  operate"+CHR(13);
	         +"correctly."+CHR(13)+CHR(13)
	  DO CASE
	  CASE nUpdateStat = 1 && Not existing, Cannot Create
	    =MESSAGEBOX(cMsg1+;
	      +"The computer system could not find this file nor could it"+CHR(13);
	      +"create one. Until one exists, <YourApp> cannot be used.",0)
	  CASE nUpdateStat = 2 && Not existing, Did Create
	    =MESSAGEBOX(cMsg1+;
	      +"The <YourApp> startup directory did not include this"+CHR(13);
	      +"file so one was created for you. The new Config.fpw file"+CHR(13);
	      +"contains all the required settings for the <YourApp>"+CHR(13);
	      +"application to run."+CHR(13)+CHR(13);
	      +"In order to activate this statement you need to RESTART the"+CHR(13);
	      +"<YourApp> application.",0)
	  CASE nUpdateStat = 3 && Did exist, Modified
	    =MESSAGEBOX(cMsg1+;
	      +"Your existing Config.fpw file has now been modified to
	  contain"+CHR(13);
	      +"an MVCOUNT=2000 statement. To activate this statement you
	  need"+CHR(13);
	      +"to RESTART the <YourApp> application.",0)
	  ENDCASE
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	
	=============================================================================
	
