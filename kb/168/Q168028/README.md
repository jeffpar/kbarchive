---
layout: page
title: "Q168028: FIX: C2955 Caused by the &quot;using&quot; Declaration"
permalink: /kb/168/Q168028/
---

## Q168028: FIX: C2955 Caused by the &quot;using&quot; Declaration

{% raw %}

	Article: Q168028
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbtool kbCompiler kbCPPonly kbLangCPP kbVC kbVC500bug kbVS97sp1fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to use the "using" declaration on a template class defined in a
	namespace, the following error message appears:
	
	  error C2955: 'identifier' : use of class template requires template argument
	  list
	
	RESOLUTION
	==========
	
	Use the using directive instead of the using declaration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	The using declaration introduces a name into the declarative region in which the
	using declaration appears. It allows an individual name from a specific
	namespace to be used without explicit qualification. The using directive allows
	all the names in a namespace to be used without qualification.
	
	The following sample demonstrates the problem and the workaround.
	
	Sample Code
	-----------
	
	      /* Compiler Options: /GX */ 
	
	      #include <list>
	
	      //#define WORKAROUND //Uncomment this line to workaround
	
	      #ifndef WORKAROUND
	      using std::list ; //C2955 here
	      #else
	      using namespace std ;
	      #endif
	
	      int main()
	      {
	     list<int> li ;
	     return 0 ;
	      }
	
	REFERENCES
	==========
	
	TITLE: using Declaration
	URL: mk:@ivt:vccore/F3C/D3E/S4C3C5.HTM
	
	TITLE: using Directive
	URL: mk:@ivt:vccore/F3C/D3E/S4C3C6.HTM
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kberrmsg kbtool kbCompiler kbCPPonly kbLangCPP kbVC kbVC500bug kbVS97sp1fix 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
