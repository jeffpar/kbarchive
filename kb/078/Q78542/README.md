---
layout: page
title: "Q78542: Retrieving MS-DOS Environment Vars from a Windows DLL"
permalink: /kb/078/Q78542/
---

## Q78542: Retrieving MS-DOS Environment Vars from a Windows DLL

{% raw %}

	Article: Q78542
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The C run-time library function getenv() does not work when called from a
	Windows dynamic-link library (DLL). MS-DOS environment variables can be found by
	searching the environment block. This article explains a method to retrieve
	information from environment variables.
	
	NOTE: In Visual C++ version 1.0, getenv() does work correctly as long as you do
	not link in LIBENTRY.OBJ (you need the default library version that initializes
	the run time) and mark your DLL function as _export to correctly load DS.
	
	MORE INFORMATION
	================
	
	In a Windows system, an application's environment block is not available to a
	DLL. For this reason, the getenv() C run-time library function does not work
	when called from a DLL.
	
	To gain access to environment variables, an application must use the Windows
	GetDOSEnvironment() function, which returns a far pointer to the environment
	block of the currently running task. Using this pointer, the application can
	search the environment block for the desired variable. The format of the
	environment block is as follows:
	
	1. Each environment variable is followed by an equal sign (=), the contents of
	  the variable, and a NULL terminator (\0).
	
	2. The last environment variable in the block is terminated with two NULL
	  characters.
	
	An environment variable set with the following MS-DOS command
	
	  set envvar=c:\this\is\a\test
	
	is stored in memory as follows:
	
	  ENVVAR=c:\this\is\a\test\0
	
	MS-DOS converts environment variables to uppercase letters; therefore, all
	searches for an environment variable must take this into account.
	
	Below is source code to a function called DLLGetEnv() that acts as a substitute
	for the getenv() function in a DLL:
	
	  /* forward declaration */ 
	  LPSTR FAR PASCAL DLLGetEnv ( LPSTR );
	
	  /*********************************************************************
	  *  DLLGetEnv ( lpszVariableName )                                    *
	  *                                                                    *
	  *  Takes a LPSTR to the name of an environment variable and returns  *
	  *  the contents of that variable. Returns NULL if the environment    *
	  *  variable does not exist. The search for the environment variable  *
	  *  is case sensitive.                                                *
	  *                                                                    *
	  *********************************************************************/ 
	
	  LPSTR FAR PASCAL DLLGetEnv ( LPSTR lpszVariableName )
	    {
	    LPSTR lpEnvSearch;
	    LPSTR lpszVarSearch;
	
	    if ( !*lpszVariableName )  //  Check for a NULL pointer
	      return NULL;
	
	                          //  Get a pointer to the MS-DOS environment block
	    lpEnvSearch = GetDOSEnvironment ();
	
	    while ( *lpEnvSearch )  //  While there are strings to parse
	      {     /*
	             *  Make a copy of the pointer to the name of the
	             *  environment variable to search for.
	             */ 
	      lpszVarSearch = lpszVariableName;
	
	                //  Check to see if the variable names match
	      while ( *lpEnvSearch && * lpszVarSearch &&
	              *lpEnvSearch == *lpszVarSearch )
	        {
	        lpEnvSearch++;
	        lpszVarSearch++;
	        }
	          /*
	           *  If the names match, the lpEnvSearch pointer is on the "="
	           *  character and lpszVarSearch is on a null terminator.
	           *  Increment and return lpszEnvSearch, which will point to the
	           *  environment variable's contents.
	           *
	           *  If the names do not match, increment lpEnvSearch until it
	           *  reaches the end of the current variable string.
	           */ 
	      if ( *lpEnvSearch == '=' && *lpszVarSearch == '\0' )
	        return ( lpEnvSearch + 1 );
	      else
	        while ( *lpEnvSearch )
	          lpEnvSearch++;
	
	          /*
	           *  At this point the end of the environment variable's string
	           *  has been reached. Increment lpEnvSearch to move to the
	           *  next variable in the environment block. If it is NULL,
	           *  the end of the environment block has been reached.
	           */ 
	      lpEnvSearch++;
	      }
	
	    return NULL;  /*
	                   *  If this section of code is reached, the variable
	                   *  was not found.
	                   */ 
	    }
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
