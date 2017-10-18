---
layout: page
title: "Q155678: HOWTO: Share Files Under Source-Code Control in Visual C++"
permalink: kb/155/Q155678/
---

## Q155678: HOWTO: Share Files Under Source-Code Control in Visual C++

	Article: Q155678
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbVC400
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes several different methods that may be used to share files
	between different Visual C++ projects that are under source-code control.
	
	MORE INFORMATION
	================
	
	For best results, mirror your local directory structure on your SourceSafe
	server. For example, if your file is in C:\Common\Resources, then add the file
	to a SourceSafe project named $/Common/Resources. All of this must be done using
	either the SourceSafe Explorer or SS.EXE from the Command prompt.
	
	Method 1
	--------
	
	Assume that you have some files in C:\Shared that are in SourceSafe project
	$/Shared and you have a Visual C++ project in C:\Projects\MyProject that is in
	SourceSafe project $/Projects/MyProject. Do the following to add the files in
	C:\Shared in the Visual C++ project in C:\Projects\MyProject:
	
	1. Open the C:\Projects\MyProject Visual C++ project in Developer Studio.
	
	2. From the Insert menu, select "Files into Project...".
	
	3. Change the directory to C:\Shared, select the files you wish to include in
	  your Visual C++ project, and click the OK button.
	
	4. When prompted to put the newly-added files under source-code control, click
	  NO. The files are already under source-code control and do not need to be
	  added.
	
	5. From the Tools.Source Control menu, select "Refresh Status." Note that the
	  icons for the files you have added now reflect the same status as the files
	  had in the project that is located in C:\Shared.
	
	The advantages of this behavior are:
	
	1. There is only one copy of each file on the local hard drive.
	
	2. The source-code control status for all files appears in Visual C++.
	
	3. All source-code control manipulation occurs within Visual C++.
	
	The disadvantages are:
	
	1. A modified, not-checked-in version of a file in C:\Shared will affect all
	  projects on the local machine that use this file.
	
	2. All files must reside on the same drive (in this case, C:).
	
	3. The directory structure containing the Visual C++ project and the shared
	  files must be mirrored in the SourceSafe database. In the example above,
	  $/Shared mirrors C:\Shared and $/Projects/MyProject mirrors
	  C:\Projects\MyProject. You may not have the files in C:\Shared in SourceSafe
	  project $/ShareFiles for this method to work.
	
	Method 2
	--------
	
	Assume that you have some files that are under source-code control in C:\Shared
	and that you have a Visual C++ project in C:\Projects\MyProject that is also
	under source-code control. Do the following to add the files in C:\Shared in the
	Visual C++ project in C:\Projects\MyProject:
	
	1. Open the C:\Projects\MyProject Visual C++ project in Developer Studio.
	
	2. From the Tools.Source Control menu, select "Share from SourceSafe...".
	
	3. A dialog box with your SourceSafe projects will appear. Highlight the project
	  that corresponds to C:\Shared, select the files you wish to include in your
	  Visual C++ project, and then click the Share button and the Close button.
	
	The advantages to this behavior are:
	
	1. A modified, not-checked-in version of a file in C:\Projects\MyProject will
	  only affect C:\Projects\MyProject and not other projects that also share the
	  file with this method.
	
	2. The source-code control status for all files appears in Visual C++.
	
	3. All source-code control manipulation occurs within Visual C++.
	
	4. Not all files must reside on the same drive. Different projects may reside on
	  different drives.
	
	The disadvantage is:
	
	1. There are multiple copies of each file on the local hard drive, but only one
	  copy in the SourceSafe database. In this case, there is a copy in C:\Shared
	  and a copy in C:\Projects\MyProject.
	
	Method 3
	--------
	
	Assume that you have some files that are under source-code control in D:\Shared
	and that you have a Visual C++ project in C:\Projects\MyProject that is also
	under source-code control. Do the following to add the files in D:\Shared in the
	Visual C++ project in C:\Projects\MyProject:
	
	1. Open the C:\Projects\MyProject Visual C++ project in Developer Studio.
	
	2. In the Insert menu, select "Files into Project...".
	
	3. Change the directory to D:\Shared, select the files you wish to include in
	  your Visual C++ project, and click the Add button.
	
	4. When prompted to put the newly-added files under source-code control, click
	  NO.
	
	The advantages to this behavior are:
	
	1. There is only one copy of each file on the local hard drive.
	
	2. Not all files must reside on the same drive. Different projects may reside on
	  different drives.
	
	The disadvantages are:
	
	1. A modified, not-checked-in version of a file in D:\Shared will affect all
	  projects that use this file.
	
	2. The source-code control status for the files in D:\Shared will not appear in
	  Visual C++.
	
	3. Not all source-code control manipulation occurs within Visual C++. You will
	  need to use the SourceSafe Explorer for the files in D:\Shared.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbVC400 
	Technology        : kbVCsearch kbVC400 kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500
	Issue type        : kbhowto
	
	=============================================================================
	
