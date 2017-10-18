---
layout: page
title: "Q88680: DOC: ControlData Structure Not Completely Documented"
permalink: kb/088/Q88680/
---

## Q88680: DOC: ControlData Structure Not Completely Documented

	Article: Q88680
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbCtrl kbResource kbSDKPlatform
	Last Modified: 11-JUN-1999
	
	3.10
	WINDOWS
	kbtoolkbtoolg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ControlData structure documented on page 92 of the "Programmer's Reference,
	Volume 4: Resources" manual that comes with the Microsoft Windows version 3.1
	Software Development Kit (SDK) is not complete. This structure is also not
	complete in the online Help file (under the heading "Dialog Box Resource").
	
	The correct structure is:
	
	     struct ControlData {
	
	     WORD  x;
	     WORD  y;
	     WORD  cx;
	     WORD  cy;
	     WORD  wID;
	     DWORD lStyle;
	     union
	     {
	         BYTE class;     /* if (class & 0x80) */ 
	         char szClass[]; /* otherwise         */ 
	     } ClassID;
	     char szText[];
	     BYTE cbCreateInfo;  /* added */ 
	     char CreateInfo[];  /* added */ 
	
	      };
	
	cbCreateInfo specifies the number of bytes of additional data that follows this
	item's description and precedes the next item's description (that is, it
	specifies the length of CreateInfo).
	
	CreateInfo also specifies additional data that the CreateWindow function passes
	to the WM_CREATE handler of the control (through the lpCreateParams field of the
	CREATESTRUCT data structure). This field is zero length if cbCreateInfo is zero.
	
	MORE INFORMATION
	================
	
	When you are using the Windows 3.1 SDK Dialog Editor and Resource Compiler to
	create dialog box templates that are bound to .EXE files, the cbCreateInfo field
	is initialized to 0. The only way for an application to use these fields is to
	create a dialog box template on the fly and call one of the following functions:
	CreateDialogIndirect, CreateDialogIndirectParam, DialogBoxIndirect, or
	DialogBoxIndirectParam.
	
	Note that the Windows 3.1 Dialog Manager passes a pointer to the item following
	the cbCreateInfo field in the dialog template even if cbCreateInfo is 0. This
	means that controls that rely on the lpCreateParams field in the CREATESTRUCT
	being NULL when there is no extra creation information will NOT function
	properly when using a standard Windows dialog resource.
	
	Additional query words: 3.10 docerr
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbCtrl kbResource kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
