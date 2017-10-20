---
layout: page
title: "Q11997: HOWTO: Modify the Environment for a Spawned Process"
permalink: /kb/011/Q11997/
---

## Q11997: HOWTO: Modify the Environment for a Spawned Process

{% raw %}

	Article: Q11997
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC100 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The text below discusses the process through which an application can modify the
	PROMPT environment variable in a spawned process. Use the same procedure to
	modify any environment variable in a spawned process.
	
	PROMPT is an environment variable used by MS-DOS, OS/2, and Windows NT. To change
	the value for the PROMPT environment variable, use one of the following two
	methods to specify the environment in which a child process runs.
	
	- Use one of the spawn*e() functions. See the run-time library reference manual
	  or the online help file provided with your compiler for specific information
	  about the spawn() family of functions.
	
	- Use the putenv() function to modify the environment in which your application
	  executes, then start the child process with one of the spawn() functions. See
	  the run-time library reference manual or the online help file provided with
	  your compiler for specific information about the putenv() function.
	
	In general, a process can alter only the environment in which a child process
	will run. The C run-time library functions simulate the ability to alter the
	environment space in which the current process runs by making a copy of the
	environment when the process starts up and allowing the process to modify the
	copy of the environment.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC100 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
