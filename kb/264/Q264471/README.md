---
layout: page
title: "Q264471: SAMPLE: PageHeap1.exe Finds Heap Corruption and Memory Errors"
permalink: /kb/264/Q264471/
---

## Q264471: SAMPLE: PageHeap1.exe Finds Heap Corruption and Memory Errors

{% raw %}

	Article: Q264471
	Product(s): Microsoft C Compiler
	Version(s): 2000,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbOSWin2000 kbVC kbGrpDSVCDB kbDSupportkbfaq
	Last Modified: 26-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ .NET (2002) supports both the managed code model that is provided by the Microsoft .NET Framework and the unmanaged native Microsoft Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The PageHeap utility can be enabled for applications so that all malloc, new,
	and heapAlloc allocations are monitored automatically for memory errors. This
	article contains the PageHeap utility, plus a PageHeap1 sample that demonstrates
	how to use the utility to detect memory errors.
	
	PageHeap1 is a Microsoft Visual C++ project with several types of memory errors.
	To enable PageHeap on this sample application, type in the following from the
	commmand line:
	
	  "pageheap /enable pgh.exe 0x01" (without the quotation marks)
	
	Then, type in the following, and note the application name that PageHeap
	monitors:
	
	  "pageheap" (without the quotation marks)
	
	For many applications, 0x01 is the only flag you need. You can get more
	information on its usage by running PageHeap with the question mark flag (/?)
	from the command line.
	
	
	Windows XP comes with a tool called Application Verifier which ships with the
	Application Compatibility Toolkit. This tool can be used instead of PageHeap.
	The Application Verifier can be installed from the Support folder on the Windows
	XP CD-ROM and is called Act20.exe.
	
	MORE INFORMATION
	================
	
	PageHeap returns a pointer to allocated memory on 8 byte boundaries. The end of
	the returned pointer is followed by 0 to 7 guard bytes (depending on the size
	requested, 0 to 7 bytes are added to round up the request size to be on an 8
	byte boundry), followed by a memory page marked PAGE_NOACCESS (see VirtualAlloc
	documentation for more information). For example:
	
	  char * p;
	  p = new char[5];
	
	PageHeap returns a pointer to the 5 bytes plus 3 guard bytes to make up a total
	of 8 bytes, such as .....XXX . If the memory allocation size is a multiple of
	eight, there are no guard bytes added to the returned pointer.
	
	If the end of the allocation is overwritten, the guard bytes change and PageHeap
	causes an Access Violation (AV) when the memory is freed. If the application
	reads or writes past the allocation (including the guard bytes), it incurrs an
	instant AV.
	
	How to Use PageHeap1 sample
	---------------------------
	
	1. Build the pgh project and run the pgh.exe. (Note: You must do a release build
	  for PageHeap to work with new/malloc). Launch the PageHeap1.exe, and note
	  that there is a dialog box pop-up.
	
	2. On the dialog box, you can see a TextBox, a "Bad Alloc/Free" check box, and
	  three pair of buttons, "new" & "delete", "PageAlloc" & "Heap Free"
	  and "COM new" & "COM Delete". The TextBox takes in the size of memory you
	  want to have allocated. If the "Bad Alloc/Free" check box is selected, each
	  allocation type (new, PageAlloc and COM new) allocates memory and then writes
	  past the allocation. If "bad Alloc" is not checked, no memory overwrite
	  occurs.
	
	  Button "new" tests the "new" operator, button "PageAlloc" tests HeapAlloc. The
	  COM new does not use CoTaskMemAlloc but rather calls into a COM DLL that
	  simply calls new. To test "COM new," you must either register
	  r1LeakMemMod.dll or build the r1LeakMemMod project.
	
	  You must use a run-time DLL library for PageHeap to work. (From the Visual C++
	  IDE, Projects\settings\ C++ tab, Category: Code Generation, Use run-time
	  library).
	
	3. After checking the box of "Bad Alloc/Free," if the memory allocation size is
	  5 bytes, click on the "new" button, 5 bytes memory will be allocated and "0"
	  is written into the sixth byte. Writing to the sixth byte is an illegal
	  memory overwrite, however it occurs on a guard byte so PageHeap does not
	  detect this error until the memory is deleted. When you click the "delete"
	  button, PageHeap detects the overwrite and you will see an error message box
	  similar to following
	
	  The exception Breakpoint A breakpoint has been reached. (0x80000003) occurred
	  in the application at location 0x77f9f9df.
	
	  If you have Visual C++ specified as JIT debugger, you can click on the
	  "Cancel" button and debug into the code.
	
	  If you change the allocation size to 8 (or any multiple of 8), selecting new,
	  pageAlloc or "Com New" results in an instant AV because you have written to a
	  address with no access. (ie, you don't have to delete the memory to detect
	  the error).
	
	Note:
	
	- Limitations: PageHeap can only find memory errors from the malloc family
	  (hence C++ operator new) and heapAlloc. Many applications use custom
	  allocators and PageHeap is unable to intercept these allocations.
	
	- When you have finished testing an application run
	
	  pageheap /disable <appName>
	
	  from the command line to turn off PageHeap for that application.
	
	- PageHeap enabled applications can consume much more memory than the same
	  application without PageHeap enabled. You may have to increase your swap file
	  to satisify the increased memory demand.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Pageheap1.exe now
	  (http://download.microsoft.com/download/vc60pro/Utility/6.0/WIN98/EN-US/PageHeap1.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Pageheap1vcnet.exe now
	  (http://download.microsoft.com/download/VisualStudioNET/sample/1.13/WIN98MeXP/EN-US/Pageheap1vcnet.exe)
	
	Release Date: June 25, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	REFERENCES
	==========
	
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Rick Anderson, Microsoft Corporation
	
	
	Additional query words: Memory leak PageHeap corrupt Pageheapvcnet
	
	======================================================================
	Keywords          : kbfile kbSample kbOSWin2000 kbVC kbGrpDSVCDB kbDSupport kbfaq
	Technology        : kbVCsearch kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbAudDeveloper kbWinAdvServSearch kbVC600 kbVC32bitSearch kbVCNET
	Version           : :2000,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
