---
layout: page
title: "Q183111: IFilter SDK Sample Doesn't Build Under Visual C 5 SP3"
permalink: kb/183/Q183111/
---

## Q183111: IFilter SDK Sample Doesn't Build Under Visual C 5 SP3

	Article: Q183111
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The IFilter SDK sample does not build under Visual C++ version 5.0 Service Pack
	3 and reports the following error message:
	
	  .\global.hxx(40) : error C2433: '_CRTAPI1' : 'inline' not permitted on
	  data declarations
	
	CAUSE
	=====
	
	The definition for _CRTAPI1 has been removed from the Windows header files in
	Service Pack 3.
	
	RESOLUTION
	==========
	
	Add the definition of _CRTAPI to the Pch.cxx file as follows:
	
	  // 
	  //  Copyright (C) Microsoft Corporation, 1992 - 1996
	  // 
	  //  File:       pch.cxx
	  // 
	  //  Contents:   Pre-compiled header
	  // 
	
	   #include <windows.h>
	
	   #ifndef _CRTAPI1
	   #if _MSC_VER >= 800 && _M_IX86 >= 300
	   #define _CRTAPI1 __cdecl
	   #else  /* _MSC_VER >= 800 && _M_IX86 >= 300 */ 
	   #define _CRTAPI1
	   #endif  /* _MSC_VER >= 800 && _M_IX86 >= 300 */ 
	   #endif  /* _CRTAPI1 */ 
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 4.0. Microsoft is researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kbdsi
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
