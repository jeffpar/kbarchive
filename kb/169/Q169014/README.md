---
layout: page
title: "Q169014: How to Setup for a Remote Debug"
permalink: /kb/169/Q169014/
---

## Q169014: How to Setup for a Remote Debug

	Article: Q169014
	Product(s): Internet Information Server
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to setup a remote debug for troubleshooting problems
	with your Internet Information Server (IIS). These steps should be followed
	after you consult a Microsoft Support Professional and you agree that a debug is
	necessary.
	
	MORE INFORMATION
	================
	
	Process 1 - To install the symbol files
	---------------------------------------
	
	This process should be used to enhance the output log of a Dr. Watson file. It
	should also be used in conjunction with Process 2 for a remote debug.
	
	1. Make sure you are running the latest Service Pack (SP) update to Microsoft
	  Windows NT Server.
	
	2. Obtain the latest Service Pack symbols file from the Service Pack compact
	  disc.
	
	3. If you install from the downloaded symbols file, type in the following
	  command to install them:
	
	      Filename -d Install Path
	
	
	  where Filename is the downloaded file, and Install Path is the path to your
	  Windows NT Server directory with \Symbols appended. For example, Sym_400I.exe
	  -d C:\Winnt\Symbols.
	
	4. If you install from the SP compact disc, copy all subdirectories from the
	  Support\Debug\Symbols directory to the Winnt\Symbols directory.
	
	Process 2 - To set up for a debug
	---------------------------------
	
	1. Create a directory called Debug under your Windows NT directory.
	
	2. Unzip and copy the following files (from the Windows NT Resource Kit) to the
	  debug directory you created:
	
	      Tlist.exe (in the \Compdiag directory)
	      Remote.exe (in the \Netadmin directory)
	
	
	  If you do not have the resource kit, you can obtain these files from your
	  Microsoft Support Professional.
	
	3. Copy the .Exe and .Dll files located on the Windows NT compact disc
	  (\Support\Debug\) to the Debug directory.
	
	4. Start a command window and change into your debug directory.
	
	5. Use Tlist.exe file to list the processes. Make a note of the ID for the
	  Inetinfo.exe process. It is the number to the left of the process.
	
	6. Type in the following command (leaving quotes in place):
	
	      Remote /s "cdb -p " debug
	
	
	7. At the debug prompt, type the following:
	
	      .logopen c:\debug.txt
	
	
	8. Press g and ENTER to restart the inet service.
	
	9. Minimize the command window and wait for the server to stop. Contact your
	  Support Professional, and then start the remote session.
	
	Process 3 - To set up RAS
	-------------------------
	
	1. Make sure you have RAS service installed on a Windows NT Server on the
	  network.
	
	2. Make sure that the RAS is set up to receive incoming calls.
	
	3. Create a user account that is a member of the administrators group. Ensure
	  that the user has dial-in privileges.
	
	Process 4 - To create a debug file
	----------------------------------
	
	These steps can be used in case you get a crash, and you need to restart the
	computer before a Debug engineer can get back in touch with you.
	
	1. In the debug window, type the following:
	
	     kv
	
	2. Type the following:
	
	     .logclose
	
	3. Type q
	
	4. You can now restart the server and mail the log file to the Support Engineer
	  you are working with.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : :2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	
