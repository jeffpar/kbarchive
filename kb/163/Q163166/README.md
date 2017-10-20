---
layout: page
title: "Q163166: HOWTO: Fixing the &quot;500 Extended Server Error&quot; Problem on ISAPI"
permalink: /kb/163/Q163166/
---

## Q163166: HOWTO: Fixing the &quot;500 Extended Server Error&quot; Problem on ISAPI

{% raw %}

	Article: Q163166
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbiis300 kbiis400 kbiis500
	Last Modified: 19-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to fix the following Microsoft Internet Information
	Server (IIS) error:
	
	  500 Server Error. Specified Module could not be found
	
	MORE INFORMATION
	================
	
	When a Web browser (such as Internet Explorer 3.0) invokes an ISAPI DLL on the
	IIS, the server may display the above error message. The reason for this error
	is that one or more DLLs on which the ISAPI DLL directly or transitively depends
	is either not installed on the IIS server or the DLLs are located in a directory
	that IIS does not search. If this is the case, IIS sends back to the browser an
	HTTP status code 500, which the browser then displays as the above error message
	instead of the expected output from the ISAPI DLL.
	
	To fix this situation, copy all the DLLs on which your ISAPI DLL directly or
	transitively depends to the System32 directory of the IIS server.
	
	A very common cause for this problem is building an ISAPI DLL using the ISAPI
	Wizard in Visual C++, using the share libraries option, and then not having the
	Visual C++ and MFC runtime DLLs installed on the IIS server. The Visual C++ and
	MFC runtime DLLs typically needed are the following.
	
	For Visual C++ 4.2 Debug:
	
	- Msvcrtd.dll
	- Mfc42d.dll
	
	For Visual C++ 4.2 Release:
	
	- Msvcrt.dll
	- Mfc42.dll
	
	For Visual C++ 4.1 Debug:
	
	- Msvcrtd.dll
	- Mfc41d.dll
	
	For Visual C++ 4.1 Release:
	
	- Msvcrt.dll
	- Mfc41.dll
	
	To generically determine which DLLs you need to install on your IIS server, use
	either the DUMPBIN utility that ships with Visual C++ (use the /imports option),
	or the Quick View facility of Windows Explorer (if it is installed) to view what
	DLLs your ISAPI DLL depends on. Either program provides you with a list of
	dependent DLLs. Remember you may need to repeat this process for any DLLs listed
	to determine transitive DLL dependencies.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q135338 How To View Exported Functions in a DLL.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Leon
	Braginski, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbiis300 kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200 kbiis100
	Version           : winnt:1.0,2.0,3.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
