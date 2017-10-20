---
layout: page
title: "Q11352: SAMPLE: IconLib.exe-Using DLLs to Share Menus and Resources"
permalink: /kb/011/Q11352/
---

## Q11352: SAMPLE: IconLib.exe-Using DLLs to Share Menus and Resources

{% raw %}

	Article: Q11352
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IconLib.exe is a sample that demonstrates how to create a dynamic-link library
	(DLL) of shared resources for use in multiple applications.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	IconLib.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Resources may be loaded from Windows DLLs as well as from Windows applications.
	The module handle returned by the GetModuleHandle() function may be used as an
	"instance handle" for finding, loading, and locking resources.
	
	The technique illustrated in this example is the use of a DLL as the repository
	of all shared icons, menus, dialog boxes, and so on.
	
	Some resources are machine dependent and must be transformed before being passed
	to an application. Normally, an application gets a default procedure during task
	startup, which transforms any machine-dependent resources. Libraries are not
	tasks and thus do not get a default procedure. The application must install a
	transformation procedure for a library if it wants to access machine-dependent
	resources in the DLL.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
