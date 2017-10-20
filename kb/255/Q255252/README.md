---
layout: page
title: "Q255252: INFO: Accessing and Building Projects Over a Network Using VC++"
permalink: /kb/255/Q255252/
---

## Q255252: INFO: Accessing and Building Projects Over a Network Using VC++

{% raw %}

	Article: Q255252
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbnetwork kbide kbOSUNIX kbVC kbVC500 kbVC600 kbOSWin kbDevStudio kbOSNovell kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual C++ was not specifically designed and tested to access and build projects
	directly over a network. If you try to perform these tasks with Visual C++, you
	will experience problems with building and performance. Visual C++ does not
	perform any special operations to accommodate network drives and shares, and it
	is unaware of whether the file it is reading or writing is on a network drive or
	a local drive. Use of Visual C++ in this manner is not supported.
	
	MORE INFORMATION
	================
	
	You will experience performance problems when you use Visual C++ to access
	projects in the following configurations:
	
	- Share a Visual C++ project on a Windows 98-based computer. On a computer
	  running Windows NT 4.0, use Visual C++ to open the shared project. From the
	  FileView tab, select a file and double-click to open it. You will experience
	  a delay. This is due to the fact that Windows 98 is a nonopportunistic
	  locking server. (If the same project is shared from Windows NT 4.0 or Windows
	  2000, you might not experience this problem.)
	
	- Share a Visual C++ project on a Windows 98-based computer. On a computer
	  running Windows NT 4.0, map the share to a drive. Open the project from the
	  mapped drive using Visual C++. You will notice that Visual C++ accesses the
	  project's source and header files approximately every 4 seconds. (If the same
	  project is shared from Windows NT 4.0 or Windows 2000, you might not
	  experience this problem.)
	
	There may be several other network configurations under which Visual C++
	performance could suffer. For example; you may be using SAMBA to obtain files
	from remote UNIX computers. SAMBA is a file service that attempts to emulate
	Windows server message block (SMB) network file protocol.
	
	Microsoft recommends that you use source code control software to obtain a local
	copy of projects for use with Visual C++. Microsoft Visual SourceSafe is source
	code control software that is optimized for use with Visual C++. There are other
	source code control software packages available, but they may not be optimized
	for use with Visual C++, so you may run into performance problems. In such
	cases, contact the vendor of the source code control software for assistance.
	
	REFERENCES
	==========
	
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q236399 HOWTO: Troubleshoot Visual C++ Performance Problems
	
	  Q130615 PRB: Unwanted Rebuilds Occur When Using NMAKE or Visual C++
	
	See the following area in the MSDN Library for Visual C++ 6.0 for documentation
	on Visual SourceSafe:
	
	  MSDN Library; Visual Studio 6.0 Documentation; Visual SourceSafe
	  Documentation
	
	See the following topic in the MSDN Library for Visual C++ 6.0 for documentation
	on Opportunistic Locks:
	
	  MSDN Library; Platform SDK; Base Services; Files and I/O; File Systems; About
	  File Systems; Shared File System Features; Opportunistic Locks
	
	http://msdn.microsoft.com/visualc/technical/articles/teamwork/default.asp
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbide kbOSUNIX kbVC kbVC500 kbVC600 kbOSWin kbDevStudio kbOSNovell kbDSupport kbGrpDSTools kbPerformance 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
