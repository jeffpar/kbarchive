---
layout: page
title: "Q218611: FIX: Incorrect Code Generated With /Og and /Ob1"
permalink: /kb/218/Q218611/
---

## Q218611: FIX: Incorrect Code Generated With /Og and /Ob1

	Article: Q218611
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Incorrect code is generated for a comparison such as
	
	     if (!(i > 0))
	
	when it is compiled with both the /Og and /Ob1.
	
	RESOLUTION
	==========
	
	To work around the problem disable either the /Ob1 or /Og optimization.
	
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
	
	The following code is output.
	
	       i=7<BR/>
	       Error!<BR/><BR/>
	
	It should output the following:
	
	       i=7<BR/>
	       i=6<BR/>
	       i=5<BR/>
	       i=4<BR/>
	       i=3<BR/>
	       i=2<BR/>
	       i=1<BR/>
	       i=0<BR/>
	
	Steps to Reproduce Behavior
	---------------------------
	
	Compile the following code with /Og and /Ob1.
	
	  #include <stdio.h>
	  class C
	  {
	  public:
	      C(int i) { mLow = i; mHigh = 0; }
	      int getByte(int i) const;
	      unsigned long mLow;
	      unsigned long mHigh;
	  };
	
	  inline int C::getByte(int i) const
	  {
	      if (i < 4)
	  	return (mLow >> (i << 3)) & 0xFF;
	      else
	  	return (mHigh >> ((i - 4) << 3)) & 0xFF;
	  }
	
	  int main()
	  {
	      C h (1);
	      int i = 7;
	      for ( i = 7; ; i--) {
	  		printf("i=%d\n",i);
	          if (h.getByte(i) != 0)
	              break;
	          if (!(i > 0)) {				// Incorrect code
	              printf("Error!\n");
	              break;
	          }
	      }
	      return 1; 
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
