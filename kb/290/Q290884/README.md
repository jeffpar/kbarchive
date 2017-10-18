---
layout: page
title: "Q290884: HOWTO: Determine Which Application Is Running in COM+ or MTS"
permalink: kb/290/Q290884/
---

## Q290884: HOWTO: Determine Which Application Is Running in COM+ or MTS

	Article: Q290884
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbCOMPlus kbMTS kbDSupport kbiis400 kbiis500
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	- Microsoft Windows NT version 4.0 Option Pack 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For different reasons, but mainly for troubleshooting purposes, you may want to
	determine which application is running within Microsoft COM+ under Microsoft
	Windows 2000 or Microsoft Transaction Server (MTS) under Windows NT 4.0. All the
	applications are running in processes that have the same name (such as
	Dllhost.exe in Windows 2000 and Mtx.exe in Windows NT 4.0).
	
	For example, Internet Information Server (IIS) uses these processes extensively
	when it is running Web sites or applications Out Of Process (or High Isolation).
	System administrators and developers need a way to determine which Web site or
	package is running inside every process.
	
	MORE INFORMATION
	================
	
	Steps to Determine Which Application Is Running Under Every Process
	-------------------------------------------------------------------
	
	In Windows NT 4.0:
	
	The applications under Microsoft Transaction Server run under the process called
	Mtx.exe. On a computer that has IIS installed, one Mtx.exe process is running
	the "system" package, and one Mtx.exe process is running for every Web site that
	is running Out of Process or for every package that you created.
	
	To determine which package is running which process, you can use the Emcmd.exe or
	Tlist.exe utilities. You can obtain Emcmd.exe or Tlist.exe from the Windows
	debugging package, which is available from the following Microsoft Web site:
	
	  http://www.microsoft.com/ddk/debugging
	
	NOTE: Version 3.5 of the debuggers has Emcmd.exe. The functionality of Emcmd.exe
	is rolled into Tlist.exe in versions 4.0 and later. After you obtain the above
	utilities, type the following commands at a command prompt to run the
	utilities:
	
	  "emcmd.exe /p" (without the quotation marks)
	
	-or-
	
	  "tlist.exe -k" (without the quotation marks)
	
	In Windows 2000:
	
	The applications under Microsoft COM+ run under the process called Dllhost.exe.
	On a computer that has IIS installed, one Dllhost.exe process is running the
	"system" package, and one Dllhost.exe process is running for every Web site that
	is running Out of Process or for every package that you created.
	
	To determine which package is running which process on a Windows 2000-based
	computer, follow these steps:
	
	1. On the Start menu, point to Programs, point to Administrative Tools, and then
	  click Component Services.
	
	2. Click to expand the Component Services, Computers, and My Computer nodes.
	
	3. Click COM+ Applications.
	
	4. On the View menu, click Status View.
	
	5. The right pane displays the name of every package that is running. You can
	  also see the Process ID of the corresponding Dllhost.exe in which the package
	  is running.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q281434 How to Isolate a DLL Into a Separate Process By Using Microsoft
	  Transaction Server (MTS)
	
	  Q281335 How to Isolate a DLL into a Separate Process By Using Component
	  Services
	
	Additional query words: IIS COM+ MTS emcmd package
	
	======================================================================
	Keywords          : kbCOMPlus kbMTS kbDSupport kbiis400 kbiis500 
	Technology        : kbWinNTsearch kbWinNT400search kbiisSearch kbiis500 kbiis400 kbWinNT400OptionPack
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
