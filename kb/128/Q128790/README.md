---
layout: page
title: "Q128790: PRB: The SPAWN.C Sample Fails as a C++ Application"
permalink: kb/128/Q128790/
---

## Q128790: PRB: The SPAWN.C Sample Fails as a C++ Application

	Article: Q128790
	Product(s): Microsoft C Compiler
	Version(s): 1.0 1.5 1.51 2.0 2.1 4.0 4.1
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SPAWN.C program fails to spawn applications correctly when it is copied to a
	C++ file (SPAWN.CPP).
	
	Attempting the conversion results in these two problems:
	
	- You receive error C2662:
	
	  
	
	  '__spawnv' : cannot convert parameter 3 from'char
	  __far*[4]' to 'const char __far *const __far * '
	
	- You receive errors stating that you have the wrong number of arguments, or
	  the spawned program fails, which may force you to reboot the computer. These
	  problems are caused by the fact that the definition of NULL in C++ is
	  different from the definition of NULL in C.
	
	RESOLUTION
	==========
	
	These same issues are frequently encountered when converting C programs to the
	C++ language.
	
	Casting the args and my_env variables with (const char *const *) will resolve the
	first problem. Alternatively, you can work around this problem by redefining the
	prototype in PROCESS.H.
	
	To resolve the second problem, you need to understand the change in the
	definition of NULL. In C++, NULL is defined as 0 (zero); in C, NULL is defined
	as (void *). Therefore, you can solve the second problem by casting NULL with
	(void *). This problem is encountered in far data models only.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed:    none, /AL or /AC will reproduce the
	     *                                            problems with NULL.
	     */ 
	
	The following code is a correctly modified SPAWN.CPP:
	
	     /* SPAWN.CPP: This program accepts a number in the range
	      * 1-8 from the command line. Based on the number it receives,
	      * it executes one of  the eight different procedures that
	      * spawn the process named child. For some of these procedures,
	      * the CHILD.EXE file must be in the same directory; for
	      * others, it need only be in the same path.
	      */ 
	     #include <stdio.h>
	     #include <process.h>
	     char *my_env[] =
	     {
	        "THIS=environment will be",
	        "PASSED=to child.exe by the",
	        "_SPAWNLE=and",
	        "_SPAWNLPE=and",
	        "_SPAWNVE=and",
	        "_SPAWNVPE=functions",
	        NULL
	     };
	     void main( int argc, char *argv[] )
	     {
	        char *args[4];
	        /* Set up parameters to be sent: */ 
	        args[0] = "child";
	        args[1] = "spawn??";
	        args[2] = "two";
	        args[3] = NULL;
	        switch (argv[1][0])   /* Based on first letter of argument */ 
	        {
	        case '1':
	           _spawnl( _P_WAIT, argv[2], argv[2], "_spawnl", "two",
	          (void *)NULL );
	           break;
	        case '2':
	           _spawnle( _P_WAIT, argv[2], argv[2], "_spawnle", "two",
	           (void *)NULL, my_env );
	           break;
	        case '3':
	           _spawnlp( _P_WAIT, argv[2], argv[2], "_spawnlp", "two",
	           (void *)NULL );
	           break;
	        case '4':
	           _spawnlpe( _P_WAIT, argv[2], argv[2], "_spawnlpe", "two",
	           (void *)NULL, my_env );
	           break;
	        case '5':
	           _spawnv( _P_OVERLAY, argv[2],
	           (const char *const __near *)args );
	           break;
	        case '6':
	           _spawnve( _P_OVERLAY, argv[2], (const char *const *)args,
	           (const char * const *)my_env );
	           break;
	        case '7':
	           _spawnvp( _P_OVERLAY, argv[2], (const char *const *)args );
	           break;
	        case '8':
	           _spawnvpe( _P_OVERLAY, argv[2], (const char *const *)args,
	           (const char * const *)my_env );
	           break;
	        default:
	           printf( "SYNTAX: SPAWN <1-8> <childprogram>\n" );
	           exit( 1 );
	        }
	        printf( "from SPAWN!\n" );
	     }
	
	Additional query words: 8.0 8.0c 8.00 8.00c 9.00 9.10 10.00 10.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 1.0 1.5 1.51 2.0 2.1 4.0 4.1
	Issue type        : kbprb
	
	=============================================================================
	
