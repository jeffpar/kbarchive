---
layout: page
title: "Q151666: PRB: C2065/C2064 Errors when Using Win32 APIs in MFC Program"
permalink: /kb/151/Q151666/
---

## Q151666: PRB: C2065/C2064 Errors when Using Win32 APIs in MFC Program

{% raw %}

	Article: Q151666
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kberrmsg kbMFC kbVC400 kbVC410 kbGrpDSMFCATL kbArchitecture
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using some Win32 APIs, such as PurgeComm() and RegFlushKey(), in an AppWizard
	generated application will cause C2065 and C2064 compilation errors. For
	example, a call to the PurgeComm() function will produce the following errors:
	
	  
	
	  error C2065: 'PurgeComm' : undeclared identifier
	
	  
	
	  error C2064: term does not evaluate to a function
	
	CAUSE
	=====
	
	In Visual C++ 4.x, AppWizard automatically adds a macro definition for
	VC_EXTRALEAN to the project's precompiled header. Its purpose is to help speed
	up compilation by excluding less-frequently used declarations from the various
	Windows header files.
	
	When VC_EXTRALEAN is defined in the precompiled header, the following SDK symbols
	get defined in afxv_w32.h:
	
	  #define WIN32_EXTRA_LEAN
	  #define NOSERVICE
	  #define NOMCX
	  #define NOIME
	  #define NOSOUND
	  #define NOCOMM
	  #define NOKANJI
	  #define NORPC
	  #define NOPROXYSTUB
	  #define NOIMAGE
	  #define NOTAPE
	
	  #ifndef NO_ANSIUNI_ONLY
	  #ifdef _UNICODE
	  #define UNICODE_ONLY
	  #else
	  #define ANSI_ONLY
	  #endif
	  #endif //!NO_ANSIUNI_ONLY
	
	Because the macro NOCOMM is being defined, the prototype for PurgeComm() is
	excluded. This behavior causes the errors.
	
	RESOLUTION
	==========
	
	One solution is to remove the #define VC_EXTRALEAN line from stdafx.h. This
	keeps the Communication, Registry, and other areas of the Win32 APIs that are
	not directly used by MFC in the project.
	
	An alternative is to replace the "#define VC_EXTRALEAN" line with the set of
	#define lines listed above, and then selectively remove those #define's that
	should not be included. For instance, if the Communication APIs are called, you
	may have all the #define lines listed above except the "#define NOCOMM" line in
	the stdafx.h.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For complete information on what the macros listed above exclude, search the
	windows.h and afxv_w32.h files for the symbols.
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kberrmsg kbMFC kbVC400 kbVC410 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
