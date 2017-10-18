---
layout: page
title: "Q139953: BUG: DATETIME Datatype Rounds Fractions of a Second"
permalink: kb/139/Q139953/
---

## Q139953: BUG: DATETIME Datatype Rounds Fractions of a Second

	Article: Q139953
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Repeatedly adding (or subtracting) a fraction of a second to (or from) a
	variable that contains a DATATIME data type results in an unexpected value being
	stored in the variable.
	
	CAUSE
	=====
	
	Visual FoxPro rounds the fraction of a second being added (or subtracted) up (or
	down) to the nearest whole second and stores the rounded value in the variable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Type the following line of code in the Command window:
	
	     X = {1/1/95 12:00:00PM}
	
	2. Type the following line of code in the Command window:
	
	     Y = X + .1
	
	3. Type the following line of code in the Command window:
	
	     ? Y == X
	
	The return value is True (.T.) even though you added a tenth of a second to x.
	
	Another Demonstration of the Problem
	------------------------------------
	
	1. Type the following line of code in the Command window:
	
	     MODIFY COMMAND test
	
	2. In the program window produced by the previous command, type the following
	  lines of code:
	
	     *---------------------
	     *-- BEGIN PROGRAM TEST
	     *---------------------
	     CLEAR
	
	     LOCAL X, Y
	     X = {1/1/95 12:00:00pm}
	     FOR I = 1 to 5
	
	       *-- Show which iteration you are on
	       DO CASE
	            CASE I = 1
	                 WAIT WINDOW "Iteration 1" TIMEOUT .75
	            CASE I = 2
	                 WAIT WINDOW "Iteration 2" TIMEOUT.75
	            CASE I = 3
	                 WAIT WINDOW "Iteration 3" TIMEOUT.75
	            CASE I = 4
	                 WAIT WINDOW "Iteration 4" TIMEOUT.75
	            OTHERWISE
	                 WAIT WINDOW "Last Iteration" TIMEOUT.75
	       ENDCASE
	
	       *-- Add 1 tenth of a second to Y
	       Y = X + .1
	
	       *-- Display X
	       WAIT WINDOW "X = " + TTOC(X) TIMEOUT 1
	
	       *-- Compare Y and X
	       *-- One would think the following comparison would return .F.
	       WAIT WINDOW "Y == X is " + IIF(Y==X,".T.",".F.") + ;
	            "  <<= First Test" + CHR(13) + ;
	            "Y has been incremented" + CHR(13) + CHR(13) +;
	            "Press any key to continue"
	
	       *-- Add 1 tenth of a second to X
	       X = X + .1
	
	       *-- Compare Y and X
	       *-- One would think the following comparison would return .T.
	       WAIT WINDOW "Y == X is " + IIF(Y==X,".T.",".F.") + ;
	            "  <<= Second Test" + CHR(13) + ;
	            "X has been incremented" + CHR(13) + CHR(13) + ;
	            "Press any key to continue"
	
	       *-- Display Y
	       WAIT WINDOW "Y = " + TTOC(Y) + ;
	            CHR(13) + ;
	            "Y has been incremented by .1 seconds" ;
	            TIMEOUT 2
	     ENDFOR
	     *---------------------
	     *-- END PROGRAM TEST
	     *---------------------
	
	3. Run the program. A one-second increase in time is displayed after five tenths
	  of a second have accumulated. The incremented tenths are held by the variable
	  but are never displayed until rounding the accumulated number of tenths
	  results in a full second. Additionally, the comparison appears to be based on
	  the rounding of the fractions of a second, not on the actual number stored to
	  the variable.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
