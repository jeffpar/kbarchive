---
layout: page
title: "Q83009: BUG: Common Dialog GP-Fault on ESC Key with Mouse Button Down"
permalink: /kb/083/Q83009/
---

## Q83009: BUG: Common Dialog GP-Fault on ESC Key with Mouse Button Down

	Article: Q83009
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCmnDlg kbCmnDlgFileO kbCmnDlgSave kbGrpDSUser kbOSWin310bug
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an application that uses the File Open or Save As dialog box from the Common
	Dialogs dynamic-link library (DLL), when the user opens a combo box with the
	mouse, holds down the left mouse button, and then presses the ESC key to close
	the dialog box, a GP-fault occurs.
	
	RESOLUTION
	==========
	
	You can ignore the faults that result from calling GetOpenFileName() and
	GetSaveFileName() without incident. There are as many as eight warnings before
	control is returned to the application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Common Dialogs DLL version 3.1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbCmnDlg kbCmnDlgFileO kbCmnDlgSave kbGrpDSUser kbOSWin310bug 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	
