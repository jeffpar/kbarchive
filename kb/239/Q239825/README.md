---
layout: page
title: "Q239825: INFO: Transfer Files Between Desktop and Windows CE Emulator"
permalink: /kb/239/Q239825/
---

## Q239825: INFO: Transfer Files Between Desktop and Windows CE Emulator

{% raw %}

	Article: Q239825
	Product(s): Microsoft C Compiler
	Version(s): 2000,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbOSWinNT400 kbOSWin2000 kbVBp600 kbVC500 kbVC600 kbVS97 kbVS600 kbOSWinCEsearch kbDSup
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++, versions 5.0, 6.0 
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some common actions for Windows CE developers are:
	
	- Transferring or copying files between the desktop and the emulator object
	  store.
	
	- Deleting a file from the emulator.
	
	- Checking to see if a file exists in the object store.
	
	- Synchronizing a tree with the object store.
	
	- Running a file or application from the object store with parameters.
	
	A command-line utility is provided by Microsoft to enable these actions.
	
	MORE INFORMATION
	================
	
	To perform these transferring, deleting, synchronizing, and executing
	activities, use the command-line utility Empfile.exe, which is found in the
	Emulation\Windows folder for the target emulator. For example, if you are
	targeting for the Windows CE version 2.0 Emulation for Handheld PCs then on your
	desktop at the command prompt you would change the directory to:
	
	  <path>\WCE200\MS HPC\Emulation\Windows
	
	The following is a list of command line options.
	
	Usage:
	
	 EMPFILE [options]...
	
	Options:
	
	-c SOURCE DEST  'put' or 'get' a file from the object store
	-d FILE         delete a file on the object store
	-e FILE         check to see if a file exists on the object store
	-s              synchronize the object store with Wce\Emul\Platform\ tree
	-r MYAPP ARGS   run Myapp.exe in the object store with arguments ARGS
	
	Examples:
	
	  EMPFILE -s
	          synchronize Wce\Emul\PLATFORM\ tree with the object store
	
	  EMPFILE -c c:\test.exe wce:windows\test.exe
	          copy C:\Test.exe to the object store's Windows\ directory
	
	  EMPFILE -c wce:test.exe c:\test.exe
	          copy Test.exe from the object store to c:\ 
	
	  EMPFILE -e windows\text.exe
	          verify that Test.exe exists in the object store's Windows\ directory
	
	  EMPFILE -d test.txt
	          delete Test.txt from the object store root directory
	
	  EMPFILE -r test.exe -10
	          run test.exe from the object store with parameter "-10"
	
	NOTES:
	
	- "PLATFORM" is the platform selected in the Emulation Settings dialog box.
	
	- Wildcards (such as in "*.exe") are not supported.
	
	- Specify the fully qualified path name for the copy command.
	
	- The -s option is available only for Emulation for Palm-Size PC Version 2.01
	  and Emulation for Handheld PC Version 2.0
	
	REFERENCES
	==========
	
	At the command prompt in the Emulation\Windows folder type:
	
	  "EMPFILE/?" (without the quotation marks)
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Vidyanand Rajpathak, Microsoft Corporation
	
	
	Additional query words: Object Store, Emulator, Synchronize
	
	======================================================================
	Keywords          : kbOSWinNT400 kbOSWin2000 kbVBp600 kbVC500 kbVC600 kbVS97 kbVS600 kbOSWinCEsearch kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCETKVCSearch kbWinCESearch kbWinAdvServSearch kbWinCETK500VC kbWinCETK600VC
	Version           : :2000,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
