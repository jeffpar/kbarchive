---
layout: page
title: "Q195374: BUG: PLIST Corruption or Crash with Call Attributive Profiling"
permalink: kb/195/Q195374/
---

## Q195374: BUG: PLIST Corruption or Crash with Call Attributive Profiling

	Article: Q195374
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Source Profiler, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using PLIST to format the output of a profile session in which you have
	used call attributive profiling, the output could be corrupt or you could
	receive an access violation such as the following.
	
	  The instruction at "0x004064ab" referenced memory at "0x73207373". The memory
	  could not be "read".
	
	  The instruction at "0x004050fe" referenced memory at "0xa34d34f0". The memory
	  could not be "read".
	
	Call attributive profiling is enabled by using the /AT switch with PREP.
	
	CAUSE
	=====
	
	An internal buffer used to store the symbol name plus the module name is limited
	to 255 characters.
	
	RESOLUTION
	==========
	
	Use one of the following two workarounds:
	
	- Do not use call attributive profiling; i.e. do not use the /AT switch with
	  PREP.
	
	  -or-
	
	- Use #define before any #includes to rename symbols to a shorter name. For
	  instance, "#define basic_string bs" will shorten the name of the Standard C++
	  Library string type from 12 characters to 2. The main drawback of this method
	  is that the names of the symbols are more difficult to read. There also may
	  be some symbols that cannot be reduced enough through this method to work
	  around this bug.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This bug is more typical among code that makes use of templates. In the Steps to
	Reproduce case below, notice that through each iteration of Proftest.bat, the
	output from plist is different, and if run through enough iterations, will
	generate an access violation.
	
	Steps to Reproduce Behavior
	---------------------------
	
	     // test.cpp
	     // compile with: CL.EXE /Zi /GX t.cpp /link /profile
	     #pragma warning ( disable : 4786)
	     #include <map>
	     #include <string>
	     int main ()
	     {
	        using namespace std;
	        map< int, map< int, string > > m;
	        map<int,string> q;
	        q[100] = string("100");
	        m[2] = q;
	        return 0;
	     }
	
	     // proftest.bat
	     @echo off
	     :top
	     prep /at test
	     profile test
	     prep /m test
	     plist test
	     goto top
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbMiscTools kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbSProfilerSearch kbVC32bitSearch kbSProfiler100
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
