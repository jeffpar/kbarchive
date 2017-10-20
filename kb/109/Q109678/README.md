---
layout: page
title: "Q109678: FIX: CodeView/Visual Workbench Can't Watch static const Member"
permalink: /kb/109/Q109678/
---

## Q109678: FIX: CodeView/Visual Workbench Can't Watch static const Member

{% raw %}

	Article: Q109678
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0,1.5,2.0,4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kbDebug kbidekbbuglist kbfixlist
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.1 
	- Microsoft CodeView for Windows, versions 4.0, 4.01, 4.1 
	- The Visual Workbench Integrated Debugger, used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ for Windows* use 1699, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to watch a static const member of a class in CodeView or the Visual
	Workbench debugger by placing a watch on classname::member, the debugger will
	display the error
	
	  CXX0030 expression not evaluatable
	
	  -or-
	
	  CXX0017 expression cannot be evaluated
	
	or it will show invalid information. Also, if you try to watch the class that
	contains the static const member and expand the class to look at the members,
	the debugger will not display the correct information for the static const
	member.
	
	RESOLUTION
	==========
	
	You can work around this by making the member variable static and not const, or
	by setting a watch on an instance of the class. For example, set the watch on
	scmemGlobal.scInt in the sample code below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version
	2.1.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Zi /Od
	  */ 
	
	  #include <stdio.h>
	
	  class CSCMember
	  {
	  public:
	      static const int scInt;
	      static int sInt;
	      const int cInt;
	  public:
	      CSCMember () : cInt(4) {};
	  };
	
	  const int CSCMember::scInt= 2;
	  int CSCMember::sInt= 3;
	
	  CSCMember scmemGlobal;
	
	  void main ()
	  {
	      /*
	      The first line prints the correct value, but you cannot
	      watch the variable in the debugger by placing a watch on
	      CSCMember::scInt or by watching the members of scmemGlobal.
	      */ 
	      printf ("static const member= %d\n", scmemGlobal.scInt);
	      printf ("static member= %d\n", scmemGlobal.sInt);
	      printf ("const member= %d\n", scmemGlobal.cInt);
	  }
	
	Additional query words: 4.00 4.10 1.00 1.10 1.50 2.00
	
	======================================================================
	Keywords          : kbDebug kbide kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCodeView kbZNotKeyword3
	Version           : :1.0,1.5,2.0,4.0,4.01,4.1
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
