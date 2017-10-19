---
layout: page
title: "Q303200: HOWTO: Use eVB to Debug ActiveX DLLS in eVC++"
permalink: /kb/303/Q303200/
---

## Q303200: HOWTO: Use eVB to Debug ActiveX DLLS in eVC++

	Article: Q303200
	Product(s): Microsoft C Compiler
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 21-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE eMbedded Visual C++, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the procedure for debugging ActiveX DLLs written in
	eMbedded Visual C++ by using eMbedded Visual Basic programs.
	
	MORE INFORMATION
	================
	
	Visual Basic programs in Windows CE devices are run by interpreting the
	generated .vb file of your project by the Pvbload.exe file. If Pvbload.exe and
	other components that are needed to run Visual Basic programs do not reside in
	the device, you may have to download them from the desktop. (See "Distributing
	your eMbedded Visual Basic Application" in Windows CE Help for further
	information.)
	
	Your Visual Basic setup program should contain all these necessary files. On the
	desktop side Pvbload.exe resides under the proper processor-dependent directory.
	If you have installed eMbedded Visual Tools 3.0 in C:\Windows CE Tools, for the
	Pocket PC using an ARM processor, Pvbload.exe will reside at C:\Windows CE
	Tools\Wce300\MS Pocket PC\Runtimes\Arm\Pvbload.exe. You should have the same
	version of the image on both sides (desktop and device).
	
	To debug a DLL from the eMbedded Visual Basic side, you should perform the
	following steps:
	
	1. Create the .vb file of the project: From the File menu, click Make <your
	  project>.vb.
	
	2. Download the .vb file to the desired location on the device. For example,
	  \Windows\<your programs>.
	
	3. Open the DLL project in eMbedded Visual C++. From the Project menu, click
	  Settings. Go to the Debug tab.
	
	4. In the Local executable path and file name field specify the desktop location
	  of the Pvbload.exe file. This path depends on the type of the device
	  processor.
	
	NOTE: Throughout this procedure you must specify the entire path along with the
	file name. Windows CE does not use the concept of "current directory."
	
	5. In the Remote executable path and file name field specify the device location
	  of Pvbload.exe.
	
	6. In the Program arguments field, specify the location of the .vb file on the
	  device.
	
	7. Insert a break point in the DLL method which your eVB program invokes, and
	  then from the Build menu, point to Start Debug and click Go (or press F5).
	  The execution will stop at the break point.
	
	NOTE: You cannot debug both the eMbedded Visual Basic side and the eMbedded
	Visual C++ side at the same time like you would do on the desktop.
	
	Additional query words: Debug DLL
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbWinCEETKSearch kbWinCESearch kbWinCEETK300VC
	Version           : :3.0
	Issue type        : kbhowto
	
	=============================================================================
	
