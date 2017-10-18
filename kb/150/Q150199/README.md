---
layout: page
title: "Q150199: DOC: ThreadingModel Is Not a Subkey"
permalink: kb/150/Q150199/
---

## Q150199: DOC: ThreadingModel Is Not a Subkey

	Article: Q150199
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbVC420fix
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	In the article "Processes and Threads" from the OLE Programmer's Reference,
	paragraph 12 gives the following incorrect information:
	
	  For thread-aware DLL-based or in-process objects, you need to set the
	  threading model in the registry. The default model when you do not specify a
	  threading model is single-thread-per-process. To specify a model, you add the
	  ThreadingModel subkey to the InprocServer32 key in the registration database.
	
	ThreadingModel is not a subkey; it is a named value.
	
	This documentation error was fixed in the "Processes and Threads" article of the
	Visual C++ 4.2 CD online OLE Programmer[ASCII 146]s reference. The text has been
	modified as follows:
	
	  For thread-aware DLL-based or in-process objects, you need to set the
	  threading model in the registry. The default model when you do not specify a
	  threading model is single-thread-per-process. To specify a model, you add the
	  ThreadingModel named-value to the InprocServer32 key in the registration
	  database.
	
	MORE INFORMATION
	================
	
	To set the threading model, perform these steps:
	
	1. Run Regedit in Windows 95, or run Regedt32 in Windows NT.
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  For information about how to edit the registry, view the "Changing Keys And
	  Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	  Information in the Registry" and "Edit Registry Data" Help topics in
	  Regedt32.exe. Note that you should back up the registry before you edit it.
	  If you are running Windows NT, you should also update your Emergency Repair
	  Disk (ERD).
	
	2. Choose the HKEY_CLASSES_ROOT folder, and then choose the CLSID folder.
	
	3. Find the GUID for the object you want to enable with apartment-model
	  threading. Then expand the object's folder.
	
	4. Expand the InprocServer32 key.
	
	5. From the Windows 95 Edit menu, select New. Then select String Value, and type
	  ThreadingModel. Select the name just typed from the Edit menu, select Modify,
	  and type Apartment for Value data.
	
	  -or-
	
	  From the Windows NT Edit menu, select Add Value. Type ThreadingModel for the
	  Value Name. Click OK, and type Apartment for the String value.
	
	Additional query words: kbVC400bug thread apartment
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbVC420fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC200 kbVC210 kbVC32bitSearch
	Version           : :2.0,2.1,2.2,4.0,4.1,4.2
	Issue type        : kbbug
	
	=============================================================================
	
