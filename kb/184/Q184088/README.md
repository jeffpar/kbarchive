---
layout: page
title: "Q184088: FIX: LNK4056 Warning Generated with Comma in #pragma Comment"
permalink: /kb/184/Q184088/
---

## Q184088: FIX: LNK4056 Warning Generated with Comma in #pragma Comment

	Article: Q184088
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.0a,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC500bug kbVC600f
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.0a, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The comment pragma allows the user to insert strings into an executable. If a
	comma is used in the comment string, as follows:
	
	  #pragma comment(exestr,"This is a , comma")
	
	then the linker generates the following warning:
	
	  warning LNK4056: extra arguments ignored for option
	  "/comment:This is a , comma"
	
	where the "extra arguments" refers to the text after the "," in the comment
	string.
	
	CAUSE
	=====
	
	The comment pragma is translated by the compiler into the /comment linker
	option. The linker interprets the comma as a separator between arguments, and
	ignores the "second" argument.
	
	RESOLUTION
	==========
	
	Add a space or some other character in place of the comma, and then edit the
	executable and replace the space with a comma. To do this, open the executable
	file in Developer Studio using the binary format. Select File/Open, choose
	Binary under the "Open As" combo box, and open the .exe file. Locate the string,
	and edit the executable directly to add a comma where needed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug was corrected in Visual C++ 6.0.
	
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  #pragma comment(exestr,"This is a , comma")
	
	  void main(void)
	  {}
	
	REFERENCES
	==========
	
	Visual C++ version 5.0 Online Documentation, #pragma comment:
	mk:@ivt:vccore/F39/D3B/S4C36D.HTM
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC400a kbVC500Search
	Version           : winnt:2.0,2.1,2.2,4.0,4.0a,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
