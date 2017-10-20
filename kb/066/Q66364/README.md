---
layout: page
title: "Q66364: DOC: How Dialog Functions Return Values Indicate Failure"
permalink: /kb/066/Q66364/
---

## Q66364: DOC: How Dialog Functions Return Values Indicate Failure

{% raw %}

	Article: Q66364
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbDlg kbSDKPlatform
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows has eight functions that are used to create dialog boxes: four are for
	modal dialog boxes, and four are for modeless dialog boxes.
	
	Modal dialog boxes are created using the DialogBox, DialogBoxIndirect,
	DialogBoxParam, and DialogBoxIndirectParam functions. These functions return -1
	to signal failure.
	
	Modeless dialog boxes are created with the CreateDialog, CreateDialogIndirect,
	CreateDialogParam, and CreateDialogIndirectParam functions. These functions
	returns NULL to signal failure.
	
	The "Microsoft Windows Software Development Kit Reference Volume 1" for version
	3.0 incorrectly specifies on page 4-44 the failure return value for the
	CreateDialogParam function to be -1. The documentation should state that the
	function returns NULL. This documentation error has been corrected on page 91 of
	the "Microsoft Windows Software Development Kit: Programmer's Reference, Volume
	2: Functions" for version 3.1.
	
	MORE INFORMATION
	================
	
	The DialogBox* functions that create modal dialog boxes return the value
	specified as the second parameter to the EndDialog function, which is used to
	end the processing in a modal dialog box.
	
	The DialogBox* functions cannot return NULL (==FALSE) to indicate an error
	because returning the TRUE or FALSE values through the EndDialog function might
	be useful to an application: possibly to indicate that the user selected an OK
	or Cancel button.
	
	The CreateDialog* functions that create modeless dialog boxes return a window
	handle when the dialog box is successfully created. The value -1 (0xFFFF) can be
	a valid window handle and is not sufficient to indicate a situation in which the
	function failed and a dialog box was not created. Because NULL is the only
	invalid window handle, it is used as a return value to indicate the failure of a
	CreateDialog* function. The NULL return value indicates failure for all Windows
	functions that return a HANDLE data type.
	
	Additional query words: 3.00 3.10 param indirect docerr
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbDlg kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
