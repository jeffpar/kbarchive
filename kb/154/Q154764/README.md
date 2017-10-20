---
layout: page
title: "Q154764: PRB: Excluding Libraries with the Visual C++ Profiler"
permalink: /kb/154/Q154764/
---

## Q154764: PRB: Excluding Libraries with the Visual C++ Profiler

{% raw %}

	Article: Q154764
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbusage kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The documentation on "Selective Profiling" in the Visual C++ User's Guide, under
	the chapter "Profiling Code" says:
	
	  ... The [profiler] section of TOOLS.INI specifies libraries and object (.OBJ)
	  files for the profiler to ignore. By default, TOOLS.INI excludes the Win32
	  libraries, Microsoft Foundation Class (MFC) libraries, and C run-time
	  libraries...
	
	If you exclude a library and profile for line coverage from the IDE, the profiler
	does not exclude profiling information related to the source files corresponding
	to the library. However, when you profile for function timing or function
	coverage, it does exclude profiling information related to the functions defined
	in that library.
	
	Similarly, if you exclude a source file and profile for function timing or
	function coverage, the profiler does not exclude profiling information related
	to the functions defined in that source file. However, when you profile for line
	coverage, it does exclude profiling information for that source file.
	
	See the More Information section below for an example.
	
	RESOLUTION
	==========
	
	Exclude the library for function timing and function coverage, and exclude the
	source file for line coverage.
	
	You can exclude both the library and source files so that it will work for all
	profiling methods. You may get the following warning in this case, but you can
	safely ignore it.
	
	  PREP : warning PRF4106: function/source/object/lib test.cpp was never matched
	
	MORE INFORMATION
	================
	
	Follow these steps to see the behavior:
	
	1. Create a new project of type static library with a Test.cpp file containing
	  the following code and build a Test.lib file.
	
	  void TestFunction()
	  {
	    int j = 0;
	
	    for (int i = 0; i < 100; i++)
	       j = i;
	  }
	
	2. Create another project of type console application with a Main.cpp file
	  containing the following code:
	
	  void TestFunction();
	
	  void main()
	  {
	    TestFunction();
	  }
	
	3. Include Test.lib into this project and build Test.exe. Make sure you have the
	  "Enable profiling" option checked in the Project Settings, Link tab.
	
	4. Insert the following statement under the [profiler] section of TOOLS.INI file
	  and make sure the INIT environment variable is pointing to the directory
	  containing TOOLS.INI.
	
	  exclude:Test.lib
	
	5. Run the profiler by clicking the Tools, Profile menu and clicking Line
	  coverage.
	
	Notice the output in the Profile window. It does contain profiling information
	for Test.cpp. The "exclude:Test.lib" statement didn't work for line coverage!
	Now, do the following:
	
	1. Run the profiler and select Function timing or Function coverage.
	
	2. Notice that the output does not contain profiling information for the
	  TestFunction(). It worked!
	
	3. Remove the "exclude:Test.lib" line that you inserted into TOOLS.INI in step 4
	  above, and add the following line:
	
	  exclude:Test.cpp(0-0)
	
	4. Repeat step 5.
	
	5. Notice that the output does not contain profiling information for Test.cpp.
	  It worked!
	
	6. Repeat step 2.
	
	7. Notice that the output does contain profiling information for the
	  TestFunction(). The "exclude:Test.cpp(0-0)" statement didn't work for
	  function profiling!
	
	8. Include both of the above exclude statements and notice that it works for all
	  profiling methods!
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
