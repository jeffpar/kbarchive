---
layout: page
title: "Q134369: Microsoft SourceSafe Frequently Asked Questions (FAQ)"
permalink: /kb/134/Q134369/
---

## Q134369: Microsoft SourceSafe Frequently Asked Questions (FAQ)

{% raw %}

	Article: Q134369
	Product(s): Microsoft SourceSafe
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbSSafe kbFAQ kbDSupportkbfaq
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article covers some of the most Frequently Asked Questions (FAQ) about
	Microsoft SourceSafe.
	
	MORE INFORMATION
	================
	
	1. Q. Where is SourceSafe putting my files?
	
	  A. SourceSafe stores any files added to it in its DATA directory. The DATA
	  directory is like a database, but only SourceSafe has access.
	
	  To create a network share to access files outside of SourceSafe, the Shadow
	  directory is used. The Shadow directory is a read-only location you can use
	  to build from or access the latest files stored in SourceSafe.
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q124529 How to Access SourceSafe Code from a Central Directory
	
	
	2. Q. How do I install SourceSafe on a network?
	
	  A. SourceSafe stores its contents like a database. All SourceSafe information
	  shared by users will be in one location, the DATA directory. When the product
	  is installed for multiple users, you want to install SourceSafe in a location
	  where everyone has access. Typically, this location is a network server.
	
	  Users often want to have executables and other personal files on the local
	  machine for speed purposes. This can be done with the following steps:
	
	  1. Copy executables and Dynamic Link Libraries (DLLs) to the local directory.
	
	  2. Set the environment variable SSDIR to point to the network installation of
	     SourceSafe. For example: SET SSDIR=G:\SS.
	
	  Some additional optional steps are:
	
	   - Make a copy of the SS\TEMP directory on the local machine. Set the
	     variable Temp_Path in the SS.INI. For example: Temp_Path = c:\ss\temp.
	
	   - Make a copy of the SS\USERS\<user name> subdirectory on the local
	     machine. Set the variable for the desired user in the Users.txt file to
	     point to the new location. For example: JOHN = c:\ss\users\john\ss.ini.
	
	  For additional information, please see the following articles in the Microsoft
	  Knowledge Base:
	
	  Q130142 How to Install SourceSafe on a Windows NT Client Workstation
	
	  Q130141 How to Install SourceSafe on a Windows Client Workstation
	
	  Q129112 How to Install SourceSafe on a Windows 95 Workstation
	
	
	3. Q. What is SSWCL.EXE?
	
	  A. SSWCL.EXE is the command line product for the Windows platform. This
	  executable allows you to execute SourceSafe commands from Windows.
	
	  For example: the command SSWCL dir $/ -r displays the contents of the Root
	  project ($/) recursively.
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q124526 SourceSafe: Using the Windows Command Line
	
	
	4. Q. What are sharing, branching, and merging?
	
	  A. Sharing is a unique feature of SourceSafe that allows you to access the
	  same file from multiple projects. This feature is very beneficial for users
	  who have several different projects that share common components.
	
	  All actions that take place on the file can be viewed from all projects the
	  file is currently in. Therefore, a change made in one project will be
	  reflected in all projects.
	
	  Branching, takes a shared file and "separates" it or breaks the link with it
	  and the other projects it currently is in. At this point, changes made to the
	  file will not be reflected in the other file(s). This feature is often used
	  when there is a need for specializing a common file, often for language
	  differences or customizing an application.
	
	  The Merge command allows you to merge any changes between separated files.
	  This is often useful when a fix made to a branched file needs to be updated
	  with the original project(s).
	
	  For additional information, please see the following articles in the Microsoft
	  Knowledge Base:
	
	  Q132923 Sharing SourceSafe Projects
	
	  Q132971 Merging SourceSafe Files
	
	  Q132922 Sharing SourceSafe Files
	
	  Q132921 Branching or Separating SourceSafe Files and Projects
	
	
	5. Q. Where can I go for additional help?
	
	  A. The following documentation ships with Visual SourceSafe:
	
	   - Manuals
	
	   - Online Help
	
	   - README.WRI
	
	  Additional sources of information include:
	
	   - The Microsoft Knowledge Base:
	
	  Q129725 Obtaining Knowledge Base Articles on the World Wide Web
	
	   - Microsoft Technet
	
	   - Microsoft MSDN
	
	  If you need to contact Microsoft Technical Support, the following information
	  will help the SourceSafe support engineers answer your question.
	
	   - Version of SourceSafe. Identify whether you are using the GUI, Command
	     Line, or Add-in product.
	
	   - Operating System (Microsoft Windows 95, Macintosh System 7.5, and so
	     forth).
	
	   - If you are reporting a problem, identify the specific conditions or steps
	     to reproduce the problem.
	
	6. Q. How do I send suggestions for product features or improvements to
	  Microsoft?
	
	  A. Contact the Microsoft Wish Line at (206) 936-WISH [936-9474]. If it takes
	  more than two minutes to describe, you can:
	
	   - Fax the suggestion to us at (206) 936-7329
	
	  -or-
	
	   - Send a letter addressed:
	
	     Attn: Microsoft Wish
	     One Microsoft Way
	     Redmond WA, 98052
	
	  -or-
	
	   - You can access the following URL on the Web to send feedback for
	     SourceSafe:
	
	  http://www.msdn.microsoft.com/ssafe
	
	     Then, click the Submit Feedback button.
	
	Additional query words: FAQ
	
	======================================================================
	Keywords          : kbSSafe kbFAQ kbDSupport kbfaq
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
