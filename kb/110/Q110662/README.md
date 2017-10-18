---
layout: page
title: "Q110662: BUG: SystemParametersInfo() Does Not Modify WIN.INI"
permalink: kb/110/Q110662/
---

## Q110662: BUG: SystemParametersInfo() Does Not Modify WIN.INI

	Article: Q110662
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSysSettings kbGrpDSUser kbOSWin310bug
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a program uses the SystemParametersInfo() function with the
	SPI_SETMOUSEBUTTONSWAP and SPIF_UPDATEINIFILE flags to reverse the mouse
	buttons' orientation and modify WIN.INI, the appropiate changes to WIN.INI are
	not made. The next time Windows starts, the buttons are back to the default
	orientation.
	
	CAUSE
	=====
	
	Calling SystemParametersInfo (SPI_SETMOUSEBUTTONSWAP, TRUE, NULL,
	SPIF_UPDATEINIFILE), modifies or creates the SwapMouseButtons entry in the
	"Windows" section of WIN.INI. However, the value this function writes is "1",
	unlike the Control Panel's mouse applet which writes "Yes".
	
	"Yes", not "1", is the value recognized to swap the buttons during the startup of
	Windows. When Windows loads the settings from WIN.INI, Windows looks for the
	"SwapMouseButtons" entry in the "Windows" section, expecting a value of "Yes".
	If another value is encountered, Windows defaults to "No", which will cause
	Windows to use the default orientation of the mouse buttons.
	
	RESOLUTION
	==========
	
	An alternative way to swap the mouse buttons and modify the entry correctly is
	to use both SwapMouseButton() and WriteProfileString() to alter the mouse button
	orientation and explicitly modify the initialization file. The following code
	shows the method explained:
	
	    :
	    :
	    SwapMouseButton (TRUE);
	    WriteProfileString ("Windows", "SwapMouseButtons", "Yes");
	    :
	    :
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft Windows SDK version
	3.1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbSysSettings kbGrpDSUser kbOSWin310bug 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	
