---
layout: page
title: "Q128599: FIX: More Than 65536 Export Entries May Cause LNK2001 Errors"
permalink: /kb/128/Q128599/
---

## Q128599: FIX: More Than 65536 Export Entries May Cause LNK2001 Errors

{% raw %}

	Article: Q128599
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Linker (LINK.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When linking to an import library, you may get unresolved external errors
	(LNK2001) on objects that are exported using the __declspec(dllexport)
	attribute. This problem is most common when exporting a large number of classes
	from a DLL.
	
	CAUSE
	=====
	
	The compiler generates export directives for each definition of an exported
	object in a source file. The linker combines these into a list when generating
	the executable that is translated into an import library.
	
	The linker fails to distinguish between distinct and non-distinct (or duplicate)
	export directives. Because Win32 is limited to 64 KB of ordinals per DLL, the
	linker uses a two-byte unsigned integer to count the exports. The unsigned
	integer counter wraps around after counting 65536 exports. This results in
	smaller than expected import libraries.
	
	This is only a problem in large DLLs that export a lot of information.
	
	RESOLUTION
	==========
	
	Here are three possible workarounds for this problem:
	
	- Use conditional compilation to limit what is exported from each .OBJ file.
	  Please see the sample pseudo-code provided below for an example.
	
	- Export your objects using a DEF file. The best way to ensure you export the
	  correct symbols is to use a .MAP file. You can copy and paste the decorated
	  symbols into the .DEF file. For example:
	
	  SAMPLE.DEF
	  ----------
	
	  LIBRARY SAMPLE
	
	  EXPORTS
	     ?showsub1@@YAXXZ
	     ?sub1@@YAHH@Z
	     ??0sub1test@@QAE@XZ
	     ??1sub1test@@QAE@XZ
	
	- Divide your DLL into multiple DLLs by functionality. While this may involve
	  the most work to implement, modularity may offer long term benefits.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	The following sample code illustrates how to conditionally compile code to avoid
	the problem. An example showing how to generate this bug would be too large to
	attach to this article because the source code would have to export more than
	65536 symbols.
	
	Sample Code
	-----------
	
	  /* Compiler options needed: default DLL compiler options
	  */ 
	
	  A.H
	  ---
	
	  #if defined (A_OBJ)
	  #define DeclSpec __declspec(dllexport)
	  #else
	  #define DeclSpec
	  #endif
	
	  class DeclSpec AObject
	  {
	  public:
	     AObject();
	     ~AObject();
	  };
	
	  B.H
	  ---
	
	  #if defined (B_OBJ)
	  #define DeclSpec __declspec(dllexport)
	  #else
	  #define DeclSpec
	  #endif
	
	  class DeclSpec BObject
	  {
	  public:
	     BObject();
	     ~BObject();
	  };
	
	  #undef DeclSpec
	
	  A.CPP
	  -----
	
	  #define A_OBJ
	  // Alternatively, you can define A_OBJ in the Preprocessor field of
	  // your compiler settings in the Project Settings dialog box.
	  #include "a.h"
	  #include "b.h"
	
	  AObject::AObject()
	  { }
	
	  AObject::~AObject()
	  { }
	
	  B.CPP
	  -----
	
	  #define B_OBJ
	  #include "a.h"
	  #include "b.h"
	
	  BObject::BObject()
	  { }
	
	  BObject::~BObject()
	  { }
	
	
	Additional query words: 2.00 2.10 9.00 9.10
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVCsearch kbAudDeveloper kbLINKSearch kbLINK100
	Version           : 2.00 2.10
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
