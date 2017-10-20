---
layout: page
title: "Q241848: HOWTO: Tips for Setting Remote Debugging by Using Visual C++"
permalink: /kb/241/Q241848/
---

## Q241848: HOWTO: Tips for Setting Remote Debugging by Using Visual C++

{% raw %}

	Article: Q241848
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up remote debugging quickly when you use
	Microsoft Visual C++ 5.0 or 6.0 to debug applications on non-development
	computers.
	
	MORE INFORMATION
	================
	
	When mentioned in the steps, the target computer is the computer that does not
	have Visual C++ installed on it and it is the computer that is usually called
	the "clean" computer. Whereas, the host computer is the computer that has Visual
	C++ installed on it and where the debugging with the integrated development
	environment (IDE) takes place.
	
	1. Before you start make sure both computers can see each other on the network.
	  This makes it easier than setting up a serial connection between the two and
	  makes the remote debugging much faster.
	
	2. On the target computer, create a share so that the host computer can access
	  it. For example, it debug on the host like such as \\server\share\somedll.dll
	
	3. Copy the following files to the target computer share created or the system
	  folder. On a Windows 95, Windows 98, Windows NT 4.0 or Windows 2000 system,
	  the remote debug monitor consists of the following files:
	
	   - MSVCMON.exe
	
	   - MSVCRT.dll
	
	   - TLN0T.dll
	
	   - DM.dll
	
	   - MSVCP6O.dll
	
	   - MSDIS110.dll
	
	  NOTE: For Windows NT only, the remote debugger also requires the PSAPI.dll
	  file. Here are the locations that you can find the files in:
	
	  File          Copy From Location
	  MSVCMON.exe   \COMMON\MSDEV98\BIN
	  TLN0T.dll     \COMMON\MSDEV98\BIN
	  DM.dll        \COMMON\MSDEV98\BIN
	  MSDIS110.dll  \COMMON\MSDEV98\BIN
	  MSVCRT.dll    %SYSTEMROOT%\SYSTEM(32) 
	  MSVCP60.dll   %SYSTEMROOT%\SYSTEM(32) (MSVCP50.dll for VC++ 5.0)
	  PSAPI.dll     %SYSTEMROOT%\SYSTEM32 (Don't copy file to Windows 9x-based computers!)
	
	  NOTE: If MSVCRT.dll is on the host computer, and is an earlier version than
	  that on the target computer, do not copy it to the target. If MSVCRT.dll is
	  copied to the target, then reboot the target computer because MSVCRT.dll is a
	  known DLL.
	
	4. Copy your DLL and EXE files to the share. Be sure to copy any third party
	  information that you may need. Also copy any dependent DLLs such as
	  MFC42D.dll and MSVCRTD.dll to the share. Also, make sure all that all COM DLL
	  and EXE files being used by your program are registered on the target.
	
	5. Copy the PDB files to the share. This includes all of the PDB files in the
	  debug or release directories for the project on the host computer. If you do
	  not have any PDB files because you are doing release builds, you can add
	  debug info to the release project by using the following steps:
	
	  a. Go to the Project menu and select Settings.
	
	  b. Select the C/C++ tab
	
	  c. Click Category and select General.
	
	  d. Change Debug info from None to Program Database.
	
	  e. Select the Link tab.
	
	  f. Click Category and select General.
	
	  g. Check the Generate Debug Info check box.
	
	  h. Rebuild and run.
	
	6. On the host computer, the one with the source code, change the debug target
	  in the Remote executable path and file name edit box in the Project Settings
	  Debug tab to reflect the DLL/EXE that is to be debugged.
	  For example: \\server\share\somedll.dll
	
	7. Next, in the Visual C++ IDE, from the Build menu select Debugger Remote
	  Connection. Change it from Local to Remote. Click Settings and change the
	  Target machine name or address. You can also give an IP address instead.
	
	8. Set breakpoints in the source code that you want to debug. Do this before you
	  start the remote monitor.
	
	9. On the target computer, run MSVCMON.exe. This has to be running before you
	  try to connect. Click Settings and change the Target machine name or address
	  to the host computer name. You can also give an IP address instead. Always be
	  sure that the target has this running before wondering why the debugger is
	  not working.
	
	You are ready to debug now. On the host computer, from the Build menu select
	Start Debug and then click Go.
	
	REFERENCES
	==========
	
	- For additional information, click the article number below to view the
	  article in the Microsoft Knowledge Base:
	
	  Q131058 Tips for Remote Debugging with Visual C++ 2.x, 4.0/5.0/6.0
	
	- Search on "Debugging Remote Applications" in the Visual C++ Programmer's
	  Guide or go here:
	
	  http://msdn.microsoft.com/isapi/msdnlib.idc?theURL=/library/devprods/vs6/visualc/vccore/_core_debugging_remote_applications.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
