---
layout: page
title: "Q130399: ADT2: ADT Apps from Win 95 Cause Err in Win 3.1 and WFW 3.11"
permalink: kb/130/Q130399/
---

## Q130399: ADT2: ADT Apps from Win 95 Cause Err in Win 3.1 and WFW 3.11

	Article: Q130399
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 05-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	If you use the Microsoft Access Developer's Toolkit (ADT) in Microsoft Windows
	95 to create a custom Setup program and distribution disks for Your application,
	users who install your application on computers running Windows version 3.1 or
	Windows for Workgroups 3.11 receive the following error messages:
	
	- During the application's custom Setup program:
	
	  <Application name> Setup not completed successfully
	
	- When an OLE object is selected:
	
	  There is a problem initializing MSAOLE20.DLL
	
	Also, the following problems occur:
	
	- No program group is created in Program Manager for the application.
	- No SYSTEM.MDA file is created for the application.
	- Embedded OLE objects appear empty or blank.
	- File Manager, Microsoft Office, and other programs may generate the following
	  error message:
	
	  This application requires a newer version of Windows.
	
	- Microsoft Access version 2.0 (MSACCESS.EXE) generates the following error
	  message when you start the application:
	
	  Couldn't open VER.DLL.
	
	
	
	CAUSE
	=====
	
	The ADT Setup Wizard copies several system files to the Setup disks. If you
	create the disks with Windows 95, but the disks are then used to install your
	application on a computer running Windows 3.1 or Windows for Workgroups 3.11,
	the Windows 3.1 or Windows for Workgroups 3.11 system files are replaced by
	their Windows 95 equivalents. This can affect the following system files:
	
	  COMPOBJ.DLL
	  OLE2.DLL
	  OLE2.REG
	  OLE2DISP.DLL
	  OLE2NLS.DLL
	  STDOLE.TLB
	  STORAGE.DLL
	  TYPELIB.DLL
	  VER.DLL
	
	RESOLUTION
	==========
	
	To avoid this behavior, run the ADT Setup Wizard on a computer running Windows
	3.1 or Windows for Workgroups 3.11, if you plan to distribute your application
	to anyone running those operating systems. There is no workaround available that
	will allow you to create your disk images on a computer running Windows 95 and
	then distribute them on a computer running Windows 3.1 or Windows for Workgroups
	3.11.
	
	NOTE: If you use the ADT Setup Wizard with Windows 3.1 or Windows for Workgroups
	3.11, you can create custom applications that install and run successfully on
	computers running Windows 3.1, Windows for Workgroups 3.11, or Windows 95.
	
	NOTE: The above behavior does not apply to the applications that you create with
	Microsoft Access 2.0 on Windows 95 computers. You can design your applications
	with Microsoft Access 2.0 on computers running Windows 95 and distribute the
	application to other systems running Windows 95.
	
	To resolve the problems caused by installing an ADT application created in
	Windows 95 on a computer running Windows 3.1 or Windows for Workgroups 3.11, you
	can replace the affected system files on the client's computer by decompressing
	the VER.DLL file from your Windows 3.1 or Windows for Workgroups 3.11
	installation disks and installing the Microsoft Access version 2.0 Service
	Pack.
	
	NOTE: You must rename the affected files before you install the Microsoft Access
	2.0 Service Pack.
	
	Decompressing the VER.DLL File
	------------------------------
	
	To decompress the VER.DLL file, follow these steps:
	
	1. Copy the DECOMP.EXE file from Disk 1 of your Microsoft Access disks to your
	  Windows directory.
	
	  NOTE: DECOMP.EXE can also be found on Disk 1 of the Microsoft Access
	  Developer's Toolkit and the Microsoft Office 4.3 disks.
	
	2. Find the VER.DLL file on your Windows 3.1 or Windows for Workgroups 3.11
	  installation disks. It is usually located on Disk 2 or 3.
	
	3. Insert the Windows disk (containing the VER.DLL file) in a floppy drive, type
	  the following line, and then press ENTER:
	
	  " DECOMP <drive>:\VER.DL_ <drive>:\<directory>\VER.DLL"
	  (without the quotation marks)
	
	  For example, to decompress the file from a disk in drive A to the
	  Windows\System subdirectory on drive C, you would type the following line:
	
	  "DECOMP A:\VER.DL_ C:\WINDOWS\SYSTEM\VER.DLL" (without the quotation marks)
	
	The size of the VER.DLL file when expanded should be 9,008, 9696, or 12,144.
	
	NOTE: In some cases, you may receive the error
	
	  No header in file.
	  File may not be compressed
	
	when using DECOMP.EXE. If this happens, try using EXPAND.EXE."
	
	Installing the Microsoft Access Service Pack
	--------------------------------------------
	
	For information about how to obtain the Microsoft Access version 2.0 Service Pack
	and how to install it, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q122927
	  TITLE : WX1124: Microsoft Access Version 2.0 Service Pack
	
	  ARTICLE-ID: Q123823
	  TITLE : ACC2: MS Access Version 2.0 Service Pack Questions and Answers
	
	Additional query words: w_works
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
