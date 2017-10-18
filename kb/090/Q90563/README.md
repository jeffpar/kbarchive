---
layout: page
title: "Q90563: Using the AdvancedSetUpDialog() Configuration Call"
permalink: kb/090/Q90563/
---

## Q90563: Using the AdvancedSetUpDialog() Configuration Call

	Article: Q90563
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows printer drivers are expected to export the ExtDeviceMode() function,
	which displays a configuration dialog box for the printer. This dialog box
	generally prompts the user for characteristics of the printout, such as
	orientation, paper size, and paper source. This box is displayed whenever an
	application or DLL calls into the ExtDeviceMode() function; for example, when
	the Configure button in the printer control panel application is clicked.
	
	However, with the introduction of the common dialog box DLL, this top-level
	configuration dialog box has been generalized and is now being provided by the
	print common dialog box. Thus, those applications that configure the printer via
	the common print dialog box will raise a different top-level configuration
	dialog box than those applications that call ExtDeviceMode() directly for this
	purpose.
	
	MORE INFORMATION
	================
	
	To still allow the user to configure driver-specific characteristics, Windows
	version 3.1 printer drivers can export the AdvancedSetUpDialog() procedure that,
	when invoked, raises another dialog box to prompt the user for additional print
	configuration information. If the common print dialog box detects the presence
	of this function in the driver, it activates a button labeled Options that, when
	clicked, calls the AdvancedSetUpDialog() function. The dialog box that is raised
	upon invocation of the ExtDeviceMode() function, however, frequently has the
	same Options button that, in turn, calls AdvancedSetUpDialog().
	
	This approach bears the problem that a printer driver may want to know whether
	the AdvancedSetUpDialog() function has been called from the Options button of
	the common print dialog box or the top-level ExtDeviceMode() configuration
	dialog box. For example, if the printer driver offers a feature that is included
	in the ExtDeviceMode() dialog box, then this feature should also be available in
	the AdvancedSetUpDialog() box in case the top-level configuration box has been
	bypassed by the common print dialog box; however, IF the advanced dialog box has
	been selected through the ExtDeviceMode() dialog box, the feature should not be
	available in the advanced dialog box to avoid redundancy.
	
	To work around this problem, the dialog box procedure for the top-level dialog
	box procedure should set a global flag that the advanced dialog box can test
	upon to determine whether it has been called from the driver's top- level
	configuration dialog box. In addition, the first parameter passed to
	AdvancedSetUpDialog()--the window handle that serves as the parent for the
	dialog box--can be used to determine where the AdvancedSetUpDialog() function
	was called from.
	
	Microsoft recommends that applications use the common print dialog box wherever
	possible when setting up a printer, and that printer drivers do not duplicate
	functionality in the AdvancedSetUpDialog() and ExtDeviceMode() dialog boxes to
	prompt the user for printer-specific characteristics.
	
	REFERENCES
	==========
	
	The AdvancedSetUpDialog() function is documented on pages 134-135 in the
	Microsoft Windows version 3.1 "Device Driver Adaptation Guide."
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK310
	Version           : :3.1
	
	=============================================================================
	
