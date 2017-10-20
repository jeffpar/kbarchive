---
layout: page
title: "Q196755: HOWTO: Determine the Location of a Crash"
permalink: /kb/196/Q196755/
---

## Q196755: HOWTO: Determine the Location of a Crash

{% raw %}

	Article: Q196755
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.0,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbVC400 kbVC420 kbVC500 kbVC600
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to identify, based on the address in the error
	message, where a failure is happening in your code.
	
	For example, a customer reports a crash while running a release version of your
	application, and the only information you have is the numeric address.
	
	MORE INFORMATION
	================
	
	Technique 1 - Using a MAP file
	------------------------------
	
	If you can not generate debug information on all of the objects in your
	application, you can still identify the function where the crash is occurring.
	For example, one reason you might be unable to get debug information is if you
	are using a library that did not include it.
	
	By using a MAP file you can identify the function that contains the code that is
	crashing. To generate the MAP file, use the /MAP linker switch when you build
	your release-mode build. If you have a crash in a debug build, you already have
	more effective information than a MAP file and should simply debug your
	application. You can also create a map file in the MSDev shell:
	
	1. In Project settings for the release configuration, click the Link tab.
	
	2. Under category General, select Generate mapfile.
	
	3. Rebuild your application.
	
	Assume you start from an application error such as the following:
	
	  testcrash.exe - Application Error
	  The instruction at "0x004011a9" referenced memory at "0x00000000". The
	  memory could not be "written"
	
	You would then look in the column of Rva+Base values and note where the location
	fits. The following is taken from a sample MAP file. To find this section in
	your own MAP file, search on "Rva+Base":
	
	  <... lines removed ...>
	    Address            Publics by Value              Rva+Base   Lib:Object
	  
	   0001:00000000
	  ?_GetBaseMessageMap@CTestcrashApp@@KGPBUAFX_MSGMAP@@XZ 00401000 f
	  testcrash.obj
	   0001:00000010       ?GetMessageMap@CTestcrashApp@@MBEPBUAFX_MSGMAP@@XZ
	  00401010 f testcrash.obj
	   0001:00000020       ??0CTestcrashApp@@QAE@XZ      00401020 f
	  testcrash.obj
	   0001:00000080       ??_ECTestcrashApp@@UAEPAXI@Z  00401080 f
	  testcrash.obj
	   0001:00000080       ??_GCTestcrashApp@@UAEPAXI@Z  00401080 f
	  testcrash.obj
	   0001:00000170       ?InitInstance@CTestcrashApp@@UAEHXZ 00401170 f
	  testcrash.obj
	   0001:00000210       ??1CTestcrashDlg@@UAE@XZ      00401210 f
	  testcrash.obj
	   0001:00000260       ?Serialize@CObject@@UAEXAAVCArchive@@@Z 00401260 f
	  testcrash.obj
	  <... lines removed ...>
	
	The columns in a MAP are not always well aligned so it may be a little hard to
	read. The number following the function name indicates the starting address of
	the function. We find the function containing the crash by noticing that address
	0x004011a9 falls after the start of ?InitInstance@CTestcrashApp@@UAEHXZ (start
	address is 00401170) and before the start of the next function
	??1CTestcrashDlg@@UAE@XZ (start address is 00401210). The crash thus seems to be
	in InitInstance.
	
	This method can usually be used to identify a function, but it won't narrow down
	the problem to a specific line or statement.
	
	Technique 2 - Using a PDB file
	------------------------------
	
	If the crash is in your own code, then you can probably create a PDB file, which
	gives you much more accurate data on where the crash is occurring.
	
	There are several settings that need to be changed to generate a useful PDB
	file:
	
	1. Save a copy of the MAP file created as described in Technique 1.
	
	2. In MSDev, click Project Settings for the release configuration.
	
	3. Click C++ tab, under the category General, under Debug info, select Program
	  Database (the corresponding compiler switch is /Zi).
	
	4. Click the Link tab, under the category General, select Generate debug info
	  (the corresponding linker switch is /debug). Make sure that "Use program
	  database" is selected on the Link tab, category Customize (the corresponding
	  linker switch is similar to the following:
	
	  /pdb:"Release/myproject.pdb" ).
	
	5. On the Link tab, in the Project Options box, append the following:
	
	  /OPT:ICF /OPT:REF
	
	6. Rebuild your application.
	
	7. Use Windiff or FC to compare the MAP file generated at this step with the MAP
	  file saved in step 1.
	
	8. Compare the Rva+Base of the function where the crash occurred. If it has not
	  changed after rebuilding in step 6, you can skip step 9.
	
	9. If the Rva+Base has changed, calculate the difference in the start location
	  of the function. Add this difference to the location of the reported crash so
	  that you have an adjusted location, which will match the .exe and PDB you
	  have just created. Use the adjusted value in all remaining steps.
	
	You now have a PDB file that you can use to debug the released executable and
	determine exactly where the crash occurred:
	
	1. Load your project in MSDev (be sure to use the release configuration).
	
	2. Press F11 to step into your application.
	
	3. Press ALT+F9 to bring up the Breakpoints dialog box.
	
	4. Set a breakpoint at the location of the crash (be sure to include the "0x" at
	  the beginning).
	
	5. Open the file containing the function that you identified in Technique 1; you
	  should see the breakpoint location. This is where the crash occurred.
	
	REFERENCES
	==========
	
	For more information on debugging techniques, please refer to the Visual C++
	online documents under the topic:
	
	  Using Visual C++ -- VC++ User's Guide -- Debugger
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbDebug kbVC400 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINNT:4.0,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
