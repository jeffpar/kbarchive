---
layout: page
title: "Q172398: FIX: Debug Assertion When Assigning to STL String"
permalink: /kb/172/Q172398/
---

## Q172398: FIX: Debug Assertion When Assigning to STL String

{% raw %}

	Article: Q172398
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbVC500bug kbVC600fix
	Last Modified: 05-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you assign a shorter string to an existing string that originally contained
	a longer string, the assignment corrupts the heap.
	
	When running a debug build, you may see an assertion similar to the following:
	
	  
	
	  Debug Error!
	   Program <your program name>
	   DAMAGE: after Normal block (#NNN) at 0xNNNNNNNN
	
	CAUSE
	=====
	
	This problem is due to a bug in the Standard C++ Library basic_string class
	implementation. When assigning a shorter string to an existing string that
	originally contained a longer string, the heap is corrupted. The assignment can
	be done either through operator=() or assign().
	
	RESOLUTION
	==========
	
	To work around the problem, call the string::erase member function before
	assigning the new value to the existing string.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	     //Compile options needed: /GX
	     #include <crtdbg.h>
	     #include <string>
	
	     int main()
	     {
	         std::string  str, str2;
	         str = "abcdefghijklmnopqrstuvwxyzabcdefghij" ;
	         str2 = str;
	
	         //Workaround, uncomment the following line
	         //str.erase() ;
	
	         str = "zyxw" ;
	         _CrtCheckMemory() ;
	
	         return 0;
	
	     }
	
	======================================================================
	Keywords          : kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
