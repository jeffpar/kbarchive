---
layout: page
title: "Q80784: DOC: Suggested Changes to the DEVCAPS2 Sample App"
permalink: kb/080/Q80784/
---

## Q80784: DOC: Suggested Changes to the DEVCAPS2 Sample App

	Article: Q80784
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kbSDKWin16
	Last Modified: 16-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbfile
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DEVCAPS2 is a sample application developed for the Windows environment by
	Charles Petzold. DEVCAPS2 demonstrates how to retrieve various capabilities of a
	printer or display device. This sample is included in the book "Programming
	Windows Version 3," published by Microsoft Press.
	
	This article describes a change that should be made to the code in DEVCAPS2, and
	also to any application based on DEVCAPS2. This change works around a problem in
	calling the DeviceMode() API.
	
	MORE INFORMATION
	================
	
	Problem Description
	-------------------
	
	When the user selects DeviceMode from the File menu and modifies the printer
	settings in the dialog box, the unmodified version of DEVCAPS2 does not update
	the WIN.INI file with the changed information. Similarly, any changes to printer
	settings made using the Control Panel are not reflected in the dialog box in
	DEVCAPS2.
	
	The DeviceMode menu item is designed to allow the user to modify any printer
	settings globally, for all applications. Any application that uses the
	DeviceMode dialog box should use the new printer settings. In addition, the
	application should write the new printer settings into the WIN.INI file.
	
	Resolution
	----------
	
	Because the DEVCAPS2 program calls the DeviceMode() API with incorrect
	parameters, it exhibits the behavior described above. The following code appears
	in the DEVCAPS2.C file starting at line 176:
	
	     szOutput = strtok(szDriver,", ");
	     strcat(strcpy(szDriverFile, szDriver), ".DRV");
	
	The code above sets szOutput equal to the name of the device driver (for example,
	"EPSON9") rather than to the output port (for example, "LPT1:"). To correct this
	problem, modify the code to add an additional call to the strtok function, as in
	the following code:
	
	     szOutput = strtok(szDriver, ", ");
	     szOutput = strtok(NULL, ", ");
	     strcat(strcpy(szDriverFile, szDriver), ".DRV");
	
	After the modification, szOutput points to the output port. In the subsequent
	call to DeviceMode(), the parameters are correct, and the function works as
	expected.
	
	In Windows version 3.1, applications should call ExtDeviceMode() instead of
	DeviceMode().
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kbdocfix kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
