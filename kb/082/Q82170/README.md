---
layout: page
title: "Q82170: SAMPLE: DLLDlg.exe Demonstrates Creating Dialog Box in DLL"
permalink: kb/082/Q82170/
---

## Q82170: SAMPLE: DLLDlg.exe Demonstrates Creating Dialog Box in DLL

	Article: Q82170
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbDlg kbGrpDSUser kbOSWin310 kbOSWin300
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Dlldlg.exe is a file in the Microsoft Software Library that demonstrates
	creating a dialog box in a dynamic-link library (DLL). The DLL contains a
	routine that calls the DialogBox function. After the user types some text into
	an edit control in the dialog box and chooses the OK button, the routine calls
	the MessageBox() function to display the text.
	
	Because a DLL has only one instance, it is not necessary to call the
	MakeProcInstance() function for the dialog box procedure. The DLLDLG sample
	demonstrates this by specifying the dialog box procedure's name in the call to
	the DialogBox() function.
	
	The DialogBox() function uses the value of its hInstance parameter to locate the
	dialog box's resource template. For this reason, the hInstance value must point
	to the module that contains the template. For the DLLDLG sample, the hInstance
	value passed to the DialogBox() function is the value of the hInstance parameter
	passed to LibMain().
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  DLLDLG.EXE
	  (http://support.microsoft.com/download/support/mslfiles/DLLDLG.EXE)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words: softlib DLLDLG.EXE
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbDlg kbGrpDSUser kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
