---
layout: page
title: "Q179269: HOWTO: Use Source Profiler to Profile Dynamic-Link Libraries"
permalink: /kb/179/Q179269/
---

## Q179269: HOWTO: Use Source Profiler to Profile Dynamic-Link Libraries

{% raw %}

	Article: Q179269
	Product(s): Microsoft Programming Utilities
	Version(s): winnt:2.0,2.1,2.2,4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Source Profiler, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.0a, 4.1, 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Visual C++ Help discusses two ways to profile a dynamic-link
	library (DLL), but it does not indicate when to use each example. This article
	describes a general-purpose method of profiling DLLs.
	
	MORE INFORMATION
	================
	
	The first part of the Help on profiling a DLL describes the use of self-
	profiling DLLs, using the PREP option /OM. Self-profiling DLLs are not
	necessary, except when profiling DLLs that are dynamically loaded using the
	LoadLibrary instruction. Use the following batch file example (name it
	Profdll.bat) to profile a single DLL, accessed with LoadLibrary. Profdll.bat
	profiles a DLL with the assumption that the .exe file has not been prepared for
	profiling.
	
	Sample Batch File
	-----------------
	
	  COPY %1.dll save
	  PREP /OM %1.dll
	  COPY %1._ll %1.dll
	  PROFILE /I %1 /O %1 %2 %3 %4 %5 %6
	  COPY save %1.dll
	  PREP /M %1
	  PLIST %1
	
	If you have a main program (for example, Hearts.exe) that uses a DLL (for
	example, Cards.dll) and you want to profile only the DLL, you can run the batch
	file as:
	
	  PROFDLL cards hearts
	
	Note that the command above generates a warning message that the main program has
	not been prepared for profiling. You can ignore this message.
	
	The second example batch file in the Help shows how to profile multiple DLLs as
	well as the calling executable. This example profiles an executable named
	"wingame" and two DLLs named "aliens" and "hiscore":
	
	Sample Batch File
	-----------------
	
	  PREP /OM /FC wingame.exe aliens.dll hiscore.dll
	  PROFILE wingame.exe
	  PREP /M  wingame
	  PLIST wingame >wingame.out
	
	This method is most effective when the DLLs are loaded at run time, through the
	use of an import library. The Source Profiler, however, does not report any data
	for a dynamically loaded DLL if you use function profiling. The maximum number
	of DLLs that can be profiled this way is:
	
	- 7 for Visual C++, versions 2.x and 4.x
	
	- 15 for Visual C++, version 5.0
	
	- 31 for Visual C++, version 6.0
	
	When you combine import DLLs and LoadLibrary DLLs in a single executable, the
	Help is unclear about how to handle this. The first method provides information
	about a single DLL, and the second method does not work for all types of
	profiling.
	
	You must combine these two methods when considering larger, more complex
	projects. First, create self-profiling objects for all items in the profile:
	
	  PREP /OM /FT myfile.exe import1.dll loadlib1.dll ...
	
	where "myfile.exe" is the executable program, "import1.dll" is a DLL called
	through an import library, and "loadlib1.dll" is a DLL called through the
	LoadLibrary and GetProcAddress functions.
	
	Next, use the first method and copy the _LL files over all DLLs loaded using
	LoadLibrary:
	
	  copy loadlib1.dll loadlib1.tmp
	  copy loadlib1._ll loadlib1.dll
	
	The rest of the procedure is the same as for most profiles:
	
	  PROFILE myfile.exe
	  PREP /M myfile
	  PLIST myfile >> profile.out
	
	Putting it all together, you can generalize the process as follows:
	
	1. PREP /OM /[profiling type] exename dllname1 dllname2 ... where [profiling
	  type] is either /FT, /FC, /FV, /LC, or /LV
	
	2. If a DLL is loaded using LoadLibrary, copy the _LL file over the existing
	  .dll file. You should backup the original DLL, just in case:
	
	     copy dllname.dll dllname.tmp
	     copy dllname._ll dllname.dll
	
	  where "dllname" is the name of the DLL accessed using LoadLibrary. Note that
	  the _LL file is not created for /LC and /LV profiling types.
	
	3. Run the remaining PROFILE, PREP, and PLIST steps as outlined above and in the
	  Visual C++ Help.
	
	You should not try to profile a DLL that may have been loaded at run time and
	dynamically in the same application.
	
	REFERENCES
	==========
	
	Visual C++, version 5.0; Profiling DLLs from a Batch File; Profiling Multiple
	.dll and .exe Files
	
	URL: mk:@ivt:vccore/F33/D36/S4D19E.HTM URL: mk:@ivt:vccore/F33/D36/S4D19F.HTM
	
	Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.0a, 4.1, 4.2, 4.2b; search on:
	"Profiling DLLs from a batch file"; "Profiling multiple .dll and .exe files"
	
	Additional query words: Profile.dll _LL _XE line profiling
	
	======================================================================
	Keywords          : kbcode kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbSProfilerSearch kbVC32bitSearch kbSProfiler100
	Version           : winnt:2.0,2.1,2.2,4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
