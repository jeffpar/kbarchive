---
layout: page
title: "Q81707: INFO: WM_CTLCOLOR Processing for Combo Boxes of all Styles"
permalink: kb/081/Q81707/
---

## Q81707: INFO: WM_CTLCOLOR Processing for Combo Boxes of all Styles

	Article: Q81707
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbComboBox kbCtrl kbSDKPlatform kbGrpDSUser
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows sends a WM_CTLCOLOR message to the parent of a control window to enable
	the parent to specify the color of the control. A notification code, which is
	the value of the high-order word of the lParam, accompanies the WM_CTLCOLOR
	message to indicate the control type for a WM_CTLCOLOR message. Windows does not
	define a notification code that enables an application to change the color of a
	combo box control. However, Windows sends WM_CTLCOLOR messages to a combo box
	control that relate to its component parts: one message for the list box portion
	and, if applicable, another message for the edit control portion. An application
	can subclass the control to intercept and process these messages. This article
	discusses how to perform the subclassing and how to address the problems that
	arise when an application changes the colors of a combo box under Windows 3.0.
	
	MORE INFORMATION
	================
	
	Under Windows versions 3.0 and later, Windows sends a WM_CTLCOLOR message to a
	combo box for each of its individual elements. An application can subclass the
	combo box control to process the message. The text below discusses each of the
	combo box styles and how the color can be changed for each style.
	
	CBS_SIMPLE Style
	----------------
	
	Under Windows 3.0, an application must process three WM_CTLCOLOR notifications
	codes, CTLCOLOR_EDIT, CTLCOLOR_MSGBOX, and CTLCOLOR_LISTBOX, to change the
	colors for a CBS_SIMPLE-style list box. Under Windows 3.1, the application is
	not required to process the CTLCOLOR_MSGBOX notification.
	
	Each time the application processes a notification, it must set the foreground
	and background colors, using SetTextColor and SetBkColor, respectively. The
	wParam accompanying the WM_CTLCOLOR message contains a handle to the appropriate
	display context. In addition, the application must return a valid handle to the
	appropriate background brush that Windows will use to paint those areas not
	occupied by text.
	
	CBS_DROPDOWN Style
	------------------
	
	To change the colors of a CBS_DROPDOWN-style combo box under Windows 3.0, process
	the same three notifications as for the CBS_SIMPLE combo box. However, there is
	a difficulty with regard to setting the text color. In the drop-down list box,
	the colors set with SetBkColor and SetTextColor are not used. Instead, the combo
	box uses the system default colors. As a workaround, change the combo box to the
	owner-draw style. Process the WM_DRAWITEM message to draw the individual items
	with the desired text colors.
	
	For more information on using an owner-draw combo box in an application, query on
	the following words in the Microsoft Knowledge Base:
	
	  prod(winsdk) and owncombo
	
	Under Windows 3.1, it is not necessary to use an owner-draw combo box. The
	application can process the CTLCOLOR_EDIT and CTLCOLOR_LISTBOX notifications to
	change the color of a combo box.
	
	CBS_DROPDOWNLIST Style
	----------------------
	
	To change the color of a CBS_DROPDOWNLIST-style combo box, process the
	CTLCOLOR_LISTBOX notification. However, the application must process this
	notification in the combo box subclass procedure and in the window procedure for
	the parent window of the combo box.
	
	Under Windows 3.0, the text color problem discussed above for CBS_DROPDOWN-style
	combo boxes is evident for CBS_DROPDOWNLIST combo boxes. To address this
	problem, the application must use an owner-draw combo box.
	
	Although it is not necessary to use an owner-draw combo box under Windows 3.1,
	the application must process the CTLCOLOR_LISTBOX notification in both the combo
	box subclass procedure and in the window procedure for the parent window of the
	combo box.
	
	NOTE: WM_CTLCOLOR with codes is obsolete in Win32. Each code now has its own
	message, such as WM_CTRLCOLORBTN, WM_CTLCOLORLISTBOX, and so forth. Otherwise,
	things work the way they do in Windows 3.1.
	
	Additional query words: combobox listbox
	
	======================================================================
	Keywords          : kb16bitonly kbComboBox kbCtrl kbSDKPlatform kbGrpDSUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	
