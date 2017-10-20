---
layout: page
title: "Q151167: BUG: LNK2001 Error for Static Member in Class Template"
permalink: /kb/151/Q151167/
---

## Q151167: BUG: LNK2001 Error for Static Member in Class Template

{% raw %}

	Article: Q151167
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC42
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Linker error LNK2001 is generated for static member variables of nested classes
	in class templates. The message states:
	
	  error LNK2001: unresolved external symbol "public: static int
	  Outer<int>::Inner::sobj"(?sobj@Inner@?$Outer@H@@2HA)
	
	RESOLUTION
	==========
	
	Do not use static member variables in nested classes of class templates.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The sample code below gives the error message LNK2001.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  template<class T> class Outer
	  {
	  public:
	      static T souter;
	
	      class Inner
	      {
	      public:
	          static T sobj;
	      };
	  };
	
	  template <class T> double Outer<double>::souter = 1;
	
	  template <class T> int Outer<int>::Inner::sobj = 5;
	
	  void main()
	  {
	      double dval = Outer<double>::souter;
	
	      int i = Outer<int>::Inner::sobj;
	  }
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
