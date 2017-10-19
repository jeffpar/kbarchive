---
layout: page
title: "Q74797: FormEdit.exe Implements Sizable Form Fields in Windows"
permalink: /kb/074/Q74797/
---

## Q74797: FormEdit.exe Implements Sizable Form Fields in Windows

	Article: Q74797
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbCtrl kbSDKPlatform kbGrpDSUser
	Last Modified: 19-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FormEdit.exe is a sample program that demonstrates one implementation of
	creating a form edit under Windows. Each form can be moved and sized with the
	mouse.
	
	This program uses two novel techniques to move and size the windows. These
	techniques are discussed in detail below.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	FormEdit.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Each field on the form is a child window. Each child window has an ID value that
	corresponds to a structure in a database. In this example, the database is a
	simple array.
	
	Moving Windows
	--------------
	
	The coordinates for each mouse message that is sent to the child window are
	translated into the corresponding coordinates in the parent window, then the
	message is passed to the parent window. In this manner, the parent window
	receives all mouse messages.
	
	If the parent window receives a WM_LBUTTONDOWN message, it checks to see if the
	point of the click is within a child window; if so, a state variable is set.
	
	When the WM_MOUSEMOVE message is received, the parent will check the state
	variable. If it set, the child window is moved to the new position selected with
	the mouse.
	
	Once the WM_LBUTTONUP message is received, the state variable is cleared.
	
	The child window responds to the WM_MOVE message by updating its record
	structure.
	
	Sizing Windows
	--------------
	
	Each child window is created with the WS_THICKFRAME style bit.
	
	The WM_NCPAINT message is trapped, and the DrawCoolBorder() function is called in
	the place of standard nonclient painting processing. A three dimensional effect
	is drawn instead of the standard Windows sizing border. When the user moves the
	mouse over this area, the standard sizing arrows are displayed, and the user can
	change the window size using conventional click-and-drag methods.
	
	The child window responds to the WM_SIZE message by updating its record
	structure.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbCtrl kbSDKPlatform kbGrpDSUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
