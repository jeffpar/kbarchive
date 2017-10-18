---
layout: page
title: "Q83661: SAMPLE: Executing Excel Functions with Return Values Using DDE"
permalink: kb/083/Q83661/
---

## Q83661: SAMPLE: Executing Excel Functions with Return Values Using DDE

	Article: Q83661
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbsample kb16bitonly kbDDE kbGrpDSUser kbOSWin310 kbOSWin300 kbUser
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Windows environment, an application cannot use the WM_DDE_EXECUTE message
	to execute a Microsoft Excel function that returns a value. Excel enforces this
	limitation because it has no mechanism to provide the return value to the client
	application. If the client application is not interested in the function's
	return value, it can work around this limitation by posting a WM_DDE_EXECUTE
	message to Excel with commands to do the following:
	
	- Create a macro sheet.
	
	- Write the desired function call to the macro sheet.
	
	- Run the macro.
	
	DDEXL is a sample in the Microsoft Software Library that demonstrates this
	technique. DDEXL allows the user to initiate a conversation with Excel, execute
	a series of Excel commands, which draw a chart (using CREATE.OBJECT), and
	terminate the conversation.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  DDEXL.EXE (http://support.microsoft.com/download/support/mslfiles/DDEXL.EXE)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words: softlib DDEXL.EXE
	
	======================================================================
	Keywords          : kbsample kb16bitonly kbDDE kbGrpDSUser kbOSWin310 kbOSWin300 kbUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
