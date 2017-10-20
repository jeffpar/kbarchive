---
layout: page
title: "Q43331: Changing System Time or Date Will Temporarily Pause Clock"
permalink: /kb/043/Q43331/
---

## Q43331: Changing System Time or Date Will Temporarily Pause Clock

{% raw %}

	Article: Q43331
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The system clock temporarily pauses when the time or the date is set. This
	feature prevents cases in which the date or time may need to be updated during
	the actual time change. For example, an attempt to set the system date exactly
	at midnight using _dos_setdate() will not produce the desired effect if the
	system changes the date at the same time it is being set. Therefore, the system
	clock pauses.
	
	The effects of such a pause can be seen in the sample program that follows. If
	you run this program, you will find upon exit that the system time is the same
	as when the program was started.
	
	MORE INFORMATION
	================
	
	The following is the sample program:
	
	  /* Note - this code takes a couple of minutes to run */ 
	  #include <stdio.h>
	  #include <dos.h>
	  struct dosdate_t Date;
	  struct dostime_t Time;
	  unsigned long loop;
	  void main(void)  {
	     _dos_getdate(&Date);       /* Show time when starting */ 
	     _dos_gettime(&Time);
	     printf ("Today's date is %d-%d-%d\n", Date.month, Date.day,
	             Date.year);
	     printf ("Start time = %d:%d\n", Time.hour, Time.minute);
	
	     Date.year = 1988;
	     for (loop = 1; loop <= 200000; loop++) {
	        _dos_setdate(&Date);
	     }
	
	     _dos_getdate(&Date);       /* Show time after loop */ 
	     _dos_gettime(&Time);
	     printf ("Date is now %d-%d-%d\n", Date.month, Date.day, Date.year);
	     printf ("End time = %d:%d\n", Time.hour, Time.minute);
	  }
	
	Additional query words: kbinf 6.00 6.00a 6.00ax 7.00 1.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	
	=============================================================================
	

{% endraw %}
