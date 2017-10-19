---
layout: page
title: "Q136420: How to Create an Array of Unique Random Numbers"
permalink: /kb/136/Q136420/
---

## Q136420: How to Create an Array of Unique Random Numbers

	Article: Q136420
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,2.6a; MS-DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; UNIX:2.6; WINDOWS:2.5,2.5a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FoxPro RAND() function returns a random number between 0 and 1. This article
	shows by example how to:
	
	- Create random numbers between 5 and 10.
	
	- Easily create an array of random numbers between any two integers.
	
	- Make the random numbers in an array unique.
	
	The user-defined functions (UDFs) listed in this article demonstrate how.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a program file called Myudf.prg that contains the following code:
	
	     FUNCTION RANDOM
	     *  Returns a random number between any 2 numbers.
	     *  Syntax: =RANDOM(Lower Value, Higher Value)
	     *  Example:  lnX=RANDOM(5,10)
	     PARAMETER anLow,anHigh
	     lnRnumber=INT((RAND()*(anHigh-anLow+1))+anLow)
	     RETURN lnRnumber
	
	     FUNCTION A_RANDOM
	     *  Returns an array of random numbers between any 2 numbers.
	     *  The array must already be defined
	     *  Syntax:   =A_RANDOM(ArrayName,Lower Value, Upper Value)
	     *  Example:  =A_RANDOM('gaMyarray',17,25)
	     PARAMETER lcA_name,anLow,anHigh
	     lnAlength=ALEN(&lcA_name)
	     FOR lni=1 TO lnAlength
	       &lcA_name(lni)=INT((RAND()*(anHigh-anLow+1))+anLow)
	     ENDFOR
	     RETURN &lcA_name
	
	     FUNCTION U_RANDOM
	     *  Returns an array of unique random numbers  between any 2 numbers.
	     *  The array must already be defined
	     *  Syntax:   =U_RANDOM(Array Name, Lower Value, Upper Value)
	     *  Example:  =U_RANDOM('gaMyarray',1,10)
	     PARAMETER lcA_name,anLow,anHigh
	     lnAlength=ALEN(&lcA_name)
	     IF lnAlength>anHigh-anLow
	        lnAlength=anHigh-anLow+1
	     ENDIF
	     &lcA_name=.F.
	     lni=1
	     DO WHILE lni<=lnAlength
	        lnRnumber=INT((RAND()*(anHigh-anLow+1))+anLow)
	        llNextnum=.T.
	        IF lnRnumber=anLow .OR. lnRnumber=anHigh
	           DO CASE
	           CASE lnRnumber=anLow
	              lnK=1
	              DO WHILE lnK>0
	                 anLow=anLow+1
	                 lnK=ASCAN(&lcA_name,anLow)
	              ENDDO
	           CASE lnRnumber=anHigh
	              lnK=1
	              DO WHILE lnK>0
	                 anHigh=anHigh-1
	                 lnK=ASCAN(&lcA_name,anHigh)
	              ENDDO
	           ENDCASE
	        ELSE
	           lnK=ASCAN(&lcA_name,lnRnumber)
	           IF lnK>0
	              llNextnum=.F.
	           ENDIF
	        ENDIF
	        IF llNextnum
	           &lcA_name(lni)=lnRnumber
	           lni=lni+1
	        ENDIF
	     ENDDO
	
	2. Save and Close Myudf.prg
	
	3. Test the functions:
	
	  a. To print a single random number between 5 and 10, type the following in
	     the Command window:
	
	        SET PROCEDURE TO MYUDF.PRG
	        ? RANDOM(5,10)
	
	  b. To populate an array with random numbers, type the following in the
	     Command window:
	
	        SET PROCEDURE TO MYUDF.PRG
	        DIMENSION gaMyarray(10)
	        =A_RANDOM('gaMyarray',1,10)
	
	  c. If you want to populate an array with unique random numbers, type the
	     following in the Command window:
	
	        SET PROCEDURE TO MYUDF.PRG
	        DIMENSION gaMyarray(10)
	        U_Random('gaMyarray',1,10)
	
	Additional query words: VFoxWin FoxWin FoxDos FoxUnix
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300
	Version           : MACINTOSH:2.5b,2.5c,2.6a; MS-DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; UNIX:2.6; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	
	=============================================================================
	
