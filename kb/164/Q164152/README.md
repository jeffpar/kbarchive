---
layout: page
title: "Q164152: VC Hangs When Clicking Advanced Button on Source Control"
permalink: /kb/164/Q164152/
---

## Q164152: VC Hangs When Clicking Advanced Button on Source Control

	Article: Q164152
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0; winnt:4.2
	Operating System(s): 
	Keyword(s): kbfile kbSSafe500 kbVC420
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Developer Studio 4.2 integrated with Visual SourceSafe 5.0
	(build2218) and you click Tools, Options, Source Control tab, and then click
	Advanced, Developer Studio may lock up. This problem has been corrected with
	version 4.70 of Comctl32.dll.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Comctl32.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	The dialog box can't be dismissed and no other controls work inside of Developer
	Studio. To exit Developer Studio, You have to use the Task Manager to End Task
	on Developer Studio. This is the only way you can exit.
	
	The problem is related to the file comctl32.dll (at least version 4.00.950). This
	DLL is used to display the advanced dialog box. Comctl32.dll resides in the
	Windows\System folder for Windows 95 and Winnt\System32 folder for Windows NT.
	The problem does not appear when you use Version 4.70 of Comctl32.dll.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbSSafe500 kbVC420 
	Technology        : kbVCsearch kbSSafeSearch kbAudDeveloper kbVC420 kbVC32bitSearch kbSSafe500
	Version           : WINDOWS:5.0; winnt:4.2
	
	=============================================================================
	
