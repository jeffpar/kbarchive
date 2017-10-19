---
layout: page
title: "Q75001: SAMPLE: Parent.exe Uses SetParent to Change Parent of Child"
permalink: /kb/075/Q75001/
---

## Q75001: SAMPLE: Parent.exe Uses SetParent to Change Parent of Child

	Article: Q75001
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbMDI kbOSWin2000 kbGrpDSUser kbOSWin310 kbWndw kbWndwProp kbOSWin300
	Last Modified: 09-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Parent.exe is a sample application that demonstrates how to dynamically change
	the parent of a child window by using the SetParent function.
	
	NOTE: This technique is very risky when applied to pop-up windows. Pop-up windows
	do not have a parent, instead they have an owner, which is a different
	relationship. Trying to change the parent of a pop-up window can cause the
	application or Windows to crash.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  Parent.exe
	  (http://support.microsoft.com/download/support/mslfiles/Parent.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbMDI kbOSWin2000 kbGrpDSUser kbOSWin310 kbWndw kbWndwProp kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	
