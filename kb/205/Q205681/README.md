---
layout: page
title: "Q205681: FIX: Operator ++ In Return Statement May Cause Access Violation"
permalink: /kb/205/Q205681/
---

## Q205681: FIX: Operator ++ In Return Statement May Cause Access Violation

{% raw %}

	Article: Q205681
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbVC600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A compiled program may cause access violation if it contains a function
	returning a struct by value, and the return expression has either a postfix
	increment or decrement operator.
	
	RESOLUTION
	==========
	
	There following are workarounds for this problem.
	
	1. Remove the postfix increment/decrement operator from the return expression.
	
	2. Use the prefix increment/decrement operator.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	To reproduce the problem, build and run the following sample program.
	
	  Sample
	  ----------------
	
	  #include <stdio.h>
	  #include <stdlib.h>
	
	  typedef struct
	  {
	   int   type;
	   int   offset;
	  }
	  ST;
	
	  int i;
	
	  struct
	  {
	   ST  *tab;   
	   int used;  
	  }
	  STAdmin;
	
	  ST MyFunction ()
	  {
	  #ifdef WORKAROUND_1
	     int temp = i++;
	     return STAdmin.tab[temp];
	  #endif
	
	  #ifdef WORKAROUND_2
	     return STAdmin.tab[++i - 1];
	  #endif<BR/>
	
	     return STAdmin.tab[i++];
	  }
	
	  void main(void)
	  {
	     ST a;
	     int i;
	
	     STAdmin.tab = (ST*) malloc(sizeof(ST)*10);
	     STAdmin.used = 0;
	
	     // Initialize the Array 
	     for(i=0;i<10;i++)
	     {
	         STAdmin.tab[i].offset=i;
	         printf("%d\n",STAdmin.tab[i].offset);
	     }
	
	     // Read in the Array 
	     for(i=0;i<10;i++)
	     {
	  	a = MyFunction();
	  	printf("%d\n",a.offset);
	     }
	  }
	  // End of Sample Code
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbservicepack kbVC600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
