---
layout: page
title: "Q120737: Winhlp32 &amp; Custom DLL Calling Conventions"
permalink: /kb/120/Q120737/
---

## Q120737: Winhlp32 &amp; Custom DLL Calling Conventions

	Article: Q120737
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbprg kbcode
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT help system can call custom DLLs at specific times while viewing
	specific help files. In Windows 3.1 and Windows NT on 80x86 architectures, the
	DLL is called with the _pascal calling convention.
	
	MORE INFORMATION
	================
	
	On the MIPS and PowerPC architectures, Windows NT 3.1 and 3.5 use a workaround
	because the architectures use a register calling convention: they pass four (for
	the MIPS) or eight (for the PowerPC) dummy arguments followed by the actual
	arguments. For example, on the 80x86 you might do:
	
	abc.hpj [CONFIG] section:
	    RegisterRoutine( "abc", "MyFunction", "UI" )
	abc.hlp macro call:<BR/>
	    MyFunction( hwndApp, 2 )
	abc.dll implementation:
	void MyFunction( HWND hwndApp, int i )
	{
	    if( i == 3 ) ....
	}
	
	On the MIPS, you would employ the dummy argument workaround, and do:
	
	abc.hpj [CONFIG] section:
	    RegisterRoutine( "abc", "MyFunction", "UI" )
	abc.hlp macro call:
	    MyFunction( hwndApp, 2 )
	abc.dll implementation:
	void MyFunction( int d1, int d2, int d3, int d4, HWND hwndApp, int i )
	{
	    if( i == 3 ) ....
	}
	
	Use these macros if you want your function declarations to be portable between
	various NT architectures:
	
	#if defined(_MIPS_)
	#define XR1STARGDEF int dummy1, int dummy2, int dummy3, int dummy4,
	#define XR1STARGREF 1,2,3,4,
	#elif defined(_PPC_)
	#define XR1STARGDEF int d1,int d2,int d3,int d4,int d5,int d6,int d7,int d8,
	#define XR1STARGREF 1,2,3,4,5,6,7,8,
	#else
	#define XR1STARGDEF
	#define XR1STARGREF
	#endif
	
	abc.dll implementation:
	
	void MyFunction( XR1STARGDEF HWND hwndApp, int i )
	{
	    if( i == 3 ) ....
	}
	
	If another C routine calls your DLL function, use:
	
	   MyFunction( XR1STARGREF hwnd, 33 );
	
	Additional query words: prodnt powerpc ppc
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
