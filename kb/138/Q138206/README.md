---
layout: page
title: "Q138206: Why &quot;A&quot;=&quot;&quot; Is Not the Same as &quot;&quot;=&quot;A&quot;"
permalink: /kb/138/Q138206/
---

## Q138206: Why &quot;A&quot;=&quot;&quot; Is Not the Same as &quot;&quot;=&quot;A&quot;

	Article: Q138206
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the single equal sign (=) to test for a match between a string
	variable and an empty string, different results are obtained depending on which
	side of the equal sign the empty string ("") is placed. This is unlike string
	comparison routines that do not test first for length, such as the double equal
	sign (==) operator in Visual FoxPro.
	
	MORE INFORMATION
	================
	
	The code that follows is an example of how a string comparison routine might be
	written in the C programming language. Although this is not the exact code used
	by the architects of Visual FoxPro, it has been written in order to explain why
	a comparison between a string to an empty or null string might result in a true
	or false, depending on which side of the equal sign the null string appears.
	
	  #include <stdio.h>
	  #include <string.h>
	  int mycompare( char *, char * );        /* declare compare function  */ 
	
	  main()
	     {
	     char a1[]="Test", a2[]="";   /* data to compare */ 
	
	     /* Call the compare function    */ 
	     printf("%c\n", mycompare(a1,a2)?'T':'F' );
	
	     /* Call the compare function, switching the addresses of the data */ 
	     printf("%c\n", mycompare(a2,a1)?'T':'F' );
	     }  /* end of main program */ 
	
	     mycompare( char * c1, char * c2)
	     {
	     /* This is an example of C source code to compare two 'strings'   */ 
	     /* in memory. The starting addresses of the two strings already   */ 
	     /* in memory is passed to this function and assigned to local     */ 
	     /* variables designated by "star" (meaning 'pointer to' or        */ 
	     /* 'address of') c1 and "star" c2                                 */ 
	
	     /* Create a local variable to hold the length of the string, loop */ 
	     /* counter, and the result                                        */ 
	     int iLen, iCounter, iResult;
	
	     /* get the size of the string being compared to the primary string*/ 
	     iLen = strlen( c2 );
	
	     /* initially set the result to true (non-zero)                    */ 
	     iResult = 1;
	
	     for ( iCounter=0; iCounter < iLen; iCounter++)
	     /* A standard C 'for' loop. The first element of any C array is    */ 
	     /* element zero, not element one, so you start the counter at zero.*/ 
	     /* Now, the array in memory actually contains the 'string' plus    */ 
	     /* an additional ASCII zero terminating character. You must        */ 
	     /* subtract one from the length to get the actual length of the    */ 
	     /* string being compared, thus iLen-1. Even so, because the loop   */ 
	     /* counter begins at zero and the strlen function returns the      */ 
	     /* actual length of the string, you loop as long as the counter    */ 
	     /* is less than the length.                                        */ 
	        {
	        if ( *(c1+iCounter) != *(c2+iCounter) )
	           if (iResult)
	              iResult = 0;
	        }
	
	     /* This code goes through and compares both strings character     */ 
	     /* by character until the end of string 2, pointed to by          */ 
	     /* *(c2+iCounter, is reached. During this time, if the characters */ 
	     /* do not match and the result is not already false, the result   */ 
	     /* is set to false.                                               */ 
	
	     /* But what happens if iLen-1 is already zero because the string  */ 
	     /* is empty?  You never enter the loop and iResult remains set    */ 
	     /* to 1 (true). This is returned by the function, thus            */ 
	     /* "Test"="" is true. However, when you reverse the data, iLen-1  */ 
	     /* contains the length of the string being compared. You enter    */ 
	     /* the For loop and iResult is set to false when comparing the    */ 
	     /* first character.                                               */ 
	
	     return iResult;
	     }  /* end of mycompare() function */ 
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbhowto
	
	=============================================================================
	
