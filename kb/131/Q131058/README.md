---
layout: page
title: "Q131058: INFO: Tips for Remote Debugging with Visual C++ 2.x, 4.0/5.0/6.0"
permalink: kb/131/Q131058/
---

## Q131058: INFO: Tips for Remote Debugging with Visual C++ 2.x, 4.0/5.0/6.0

	Article: Q131058
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbtshoot kbDebug kbide kbVC200 kbVC210 kbVC400 kbVC420 kbVC500 kbVC600
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Chapter 14 of the Visual C++ User's Guide for Visual C++ version 2.x and Chapter
	17 of the Visual C++ User's Guide for Visual C++ version 4.0 describe how to
	install the Remote Debug Monitor (Msvcmon.exe) and how to configure the remote
	connection. Query on "Remote Debug" if you are using Visual C++ versions 5.0 and
	6.0. This article provides further details and gives two methods to help you get
	started. Note that Visual C++ versions 4.2 and 5.0 do not support WIN32S and
	Macintosh platforms; versions 5.0 and 6.0 do not support Serial connection.
	
	MORE INFORMATION
	================
	
	The remote debug monitor is a small program on the target computer that
	communicates with the debugger and controls the execution of the program you are
	debugging.
	
	To install the remote debug monitor:
	
	- On a Windows 95 or NT computer, the remote debug monitor consists of the
	  following files: Msvcmon.exe, Msvcrt40.dll, Tln0com.dll, Tln0t.dll, and
	  Dmn0.dll. Copy these files to the remote computer.
	
	  If you are using Visual C++ version 5.0, then copy Msvcmon.exe, Msvcrt.dll,
	  Tln0t.dll, Dm.dll, Msvcp50.dll and Msdis100.dll to the remote computer. If
	  the remote computer is Windows NT 4.0, then copy Psapi.dll also.
	
	  If you are using Visual C++ version 6.0, the remote debug monitor consists of
	  the following files: Msvcmon.exe, Msvcrt.dll, Tln0t.dll, Dm.dll, Msvcp60.dll,
	  and Msdis110.dll. For Windows NT only, the remote debugger also requires
	  psapi.dll. Copy these files to a remote target computer directory, move
	  Msvcrt.dll to the System32 directory, and restart. If you are using Windows
	  95 or Windows 98, move the msvcrt.dll file to the Windows System driectory
	  and restart.
	
	- On a Win32s computer, the remote debug monitor consists of Msvcmon.exe,
	  Tlw3com.dll, and Dmw3.dll. These files are installed automatically during
	  setup.
	
	- On a Macintosh, the remote monitor is a control panel, called VC++ Debug
	  Monitor, installed automatically by the Visual C++ for Macintosh setup
	  program.
	
	- On a Power Macintosh, the remote debugger is an application, called VC++
	  PowerMac Remote Monitor, installed automatically by the Visual C++ for
	  Macintosh setup program. Setup also installs the following files: VC++ Power
	  Macintosh File Utility, VC++ Power Macintosh ADSP Transport, VC++ Power
	  Macintosh TCP/IP Transport, and VC++ Power Macintosh Serial Transport.
	
	Method One - Windows NT Host, Win32s Remote
	-------------------------------------------
	
	If you are using Visual C++ versions 4.2 and 5.0, the host and remote machines
	can be either a Windows NT machine or a Windows 95 machine, as can the local
	machine. Therefore, the project can reside in the local machine of your choice.
	
	1. Set up a shared directory that both the local Windows NT machine and the
	  remote machine can view. The shared directory can be on either machine or a
	  network drive. The easiest option is to share the directory on the local
	  Windows NT machine that contains the project's executable.
	
	2. Load the project into the Visual C++ development environment running on
	  Windows NT.
	
	3. Open the Project Setting dialog box. (In Visual C++ 2.x, choose Settings from
	  the Project menu; in Visual C++ 4.0, choose Settings from the Build menu; in
	  Visual C++ 5.0 and 6.0, choose Settings from the Project menu.) Click the
	  Debug tab. Set the following sections:
	   - Executable for Debug Session: Enter the name and path of the executable as
	     the local Windows NT computer sees it.
	
	   - Additional DLLs: Enter the name and path of any DLLs as the local Windows
	     NT computer sees them.
	
	   - Remote Executable Path: Enter the name and path of the executable as the
	     remote computer sees it.
	
	   - Working Directory: Should be blank.
	
	4. Start the remote debugger on the remote computer by starting MSVCMON.EXE. For
	  the Win32s platform, find the Visual C++ Win32s program group, and select the
	  Visual C++ Debug Monitor icon. Choose the connect button to start the
	  connection.
	
	5. On the Windows NT host computer, check the connection information. In the
	  Visual C++ 2.x, choose Options from the Tools menu. Then click the Debug tab.
	  Make sure Remote Debugging is selected. Choose the Connections button, and
	  confirm the type of connection. Also, click Settings and confirm the
	  settings. In Visual C++ 4.0, choose Remote Connection from the Tools menu.
	  Confirm the choices for Platform and Connection. Click Settings to configure
	  the specified connection.
	
	  In Visual C++ 5.0 and 6.0, choose Debugger Remote connection from the Build
	  menu. Choose Network (TCP/IP) then Settings. Enter remote machine name or IP
	  address, no password needed. You can ignore the symbolic information not
	  found messages for the system DLLs when the debugger is started in Step 6
	  below.
	
	  NOTE: For Intel (x86) machines, Visual C++ 2.x only supports remote debugging
	  via serial connections. In Visual C++ 4.0, it is possible to debug using a
	  network connection with TCP/IP except on Win32s, which requires a serial
	  connection.
	
	6. Start Debugging.
	
	Method Two
	----------
	
	If you can't make a shareable directory, copy the executable and any needed DLLs
	to the remote computer. With this method you need to be sure that the
	executables and DLLs are re-copied whenever changes are made. All the other
	steps remain the same.
	
	Troubleshooting
	---------------
	
	If the development environment can't find the executable, make sure the correct
	directories for the correct computers are given in step 3.
	
	Because Visual C++ version 5.0 supports only TCP/IP connection, check for correct
	machine name and proper network connection with TCP/IP protocol available. The
	following troubleshooting does not apply to version 5.0 or 6.0.
	
	If the connection fails:
	
	- Test the COM port by running Terminal (a Windows version 3.x and Windows NT
	  applet) on both your Windows NT computer and your Win32s computer. (For
	  information on how to use Terminal, please see your Windows manual.) Anything
	  typed into Terminal on one computer should show up in Terminal on the other.
	
	- Check the COM port settings. The most reliable setting is 9600 baud with
	  XON/XOFF.
	
	- Try a different cable (a null modem cable).
	
	- Try a different COM port.
	
	- If you are using the Windows debug kernel, use the normal kernel.
	
	- On Win32s, complete a Windows clean boot, and do not start any applications
	  other than the remote monitor.
	
	For additional information about how to perform a clean boot, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q87290 What Is a Clean Boot for Windows 3.1?
	
	  Q90511 What Is a Clean Boot for Windows for Workgroups?
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot kbDebug kbide kbVC200 kbVC210 kbVC400 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :2.0,2.1,4.0,4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
