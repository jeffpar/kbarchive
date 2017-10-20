---
layout: page
title: "Q153200: How To Determine Whether a Number is Prime"
permalink: /kb/153/Q153200/
---

## Q153200: How To Determine Whether a Number is Prime

{% raw %}

	Article: Q153200
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,2.6a; MS-DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; UNIX:2.6; WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	- Microsoft Visual FoxPro for Macintosh, Professional Edition, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is no single function in FoxPro or Visual FoxPro that determines whether a
	number is prime. This article describes how to use a program that allows you to
	enter a positive number and then reports if that number is prime.
	
	MORE INFORMATION
	================
	
	A prime number is a number divisible only by one and itself. The following
	program uses the MOD()and ABS() functions along with a For...Next loop to check
	if a number is prime:
	
	     CLEAR
	     SET TALK OFF
	     x=0
	     @ 1,10 SAY "Please enter a positive integer"  GET x
	     READ
	     x=ABS(x)
	     FOR i=2 to x-1
	        IF MOD(x,i)=0
	            @2,10 SAY  "The number "+ ALLTRIM(STR(x))+ " is not prime."
	            RETURN
	        ENDIF
	     ENDFOR
	     @ 2,10 SAY "The number "+ ALLTRIM(STR(x))+ " is prime."
	     SET TALK ON
	
	While this program uses the READ statement for backward compatibility with FoxPro
	2.x versions, the basic algorithm may be used in a form within Visual FoxPro.
	
	Additional query words: VFoxWin VFoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbVFP300Mac kbVFP300 kbVFP300b
	Version           : MACINTOSH:2.5b,2.5c,2.6a; MS-DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; UNIX:2.6; WINDOWS:3.0,3.0b; :3.0
	
	=============================================================================
	

{% endraw %}
