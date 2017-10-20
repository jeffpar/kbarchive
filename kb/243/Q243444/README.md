---
layout: page
title: "Q243444: BUG: &lt;CSTDLIB&gt; Does Not Define the Namespace &quot;STD&quot;"
permalink: /kb/243/Q243444/
---

## Q243444: BUG: &lt;CSTDLIB&gt; Does Not Define the Namespace &quot;STD&quot;

{% raw %}

	Article: Q243444
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC600bug kbDSupport kbGrpDSVCCompilerkbbuglist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to reference a function from the STD C++ library header
	<cstdlib> using the namespace STD (for example, std::exit(0)) causes the
	compiler to emit a C2653 or a C2039 (depending upon whether or not namespace
	"STD" is defined at the point where the error is emitted).
	
	CAUSE
	=====
	
	<cstdlib> does not define the namespace "STD". This is contrary to the
	VC++ documentation, which says:
	
	  "Include the standard header <cstdlib> to effectively include the
	  standard header <stdlib.h> within the std namespace."
	
	RESOLUTION
	==========
	
	To work around the problem, place the "#include <cstdlib>" in the
	namespace "STD".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Attempting to compile the following will cause the compiler to display the
	following error:
	
	  "error C2653: 'std' : is not a class or namespace name"
	
	  // Compile Options:  /GX
	  #include <cstdlib>
	
	  void main()
	  {
	       std::exit(0);
	  }
	
	However, attempting to compile the following causes the compiler to display the
	following error:
	
	  "error C2039: 'exit' : is not a member of 'std'"
	
	  // Compile Options:  /GX
	  #include <vector>
	  #include <cstdlib>
	
	  void main()
	  {
	       std::exit(0);
	  }
	
	In the first case, the C2653 is displayed, because the namespace "STD" has not
	been defined. In the second case, the C2039 is displayed, because the namespace
	"STD" has been defined (in the header <vector>), but the function exit is
	not part of that namespace. To work around the problem in either case, simply
	enclose the "#include <cstdlib>" in the namespace "STD", as follows:
	
	  // Compile Options:  /GX
	  namespace std {
	  #include <cstdlib>
	  };
	
	  void main()
	  {
	       std::exit(0);
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC600bug kbDSupport kbGrpDSVCCompiler kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
