---
layout: page
title: "Q137946: HOWTO: Distribute Win32s Files w/ FoxPro 3.0 App on Network"
permalink: /kb/137/Q137946/
---

## Q137946: HOWTO: Distribute Win32s Files w/ FoxPro 3.0 App on Network

	Article: Q137946
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to set up an application created in Visual FoxPro for
	Windows to be run from a network server.
	
	MORE INFORMATION
	================
	
	In previous versions of FoxPro for Windows, you could set up an application to
	run on a network server by copying the application .EXE and all the required
	support files to a directory on the network server. Once the files were copied
	to the server, you could set up an icon on each workstation to point to the .EXE
	file on the network server. However, these steps are not sufficient when setting
	up a Visual FoxPro application executable to run under Windows version 3.x or
	Windows for Workgroups version 3.x because these operating systems require that
	Win32s be installed. Once Win32s is installed in the 16-bit Windows environment,
	you can set up a Visual FoxPro application to be run from a network server the
	same way you set it up in previous versions of FoxPro.
	
	You can use the Setup Wizard to create distribution disks or a network setup
	directory that will only install Win32s. The Setup Wizard requires that at least
	one user-specified file be installed. This can be any file. This article uses a
	file named Test.txt that is copied to the Windows directory.
	
	The following steps outline how to use the Setup Wizard to create the Win32s
	distribution disks:
	
	1. Create a new directory and copy Test.txt into that directory.
	
	2. Run the Setup Wizard, and specify the newly created directory as the
	  Distribution Tree Directory. Then click Next.
	
	3. Choose Win32s as the only Optional Component, and click Next.
	
	4. Specify a Disk Images Directory, and choose the type of disks needed. Then
	  click Next.
	
	5. Enter Win32s for the Dialog Caption, and click Next.
	
	6. Type C:\Test in the Default Destination Directory field, and type Test in the
	  Program Manager Group field. Then click Next.
	
	7. Change the Target Dir to Test.txt to WinDir in step 6 of the setup wizard.
	
	8. Click Finish.
	
	Once the disk images are created, copy them to floppy disks. Then to install
	Win32s, run Setup.exe from disk number one.
	
	This process creates three 1.44-MB disks, or four 1.2-MB disks.
	
	Additional query words: VfoxWin VFp300
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
