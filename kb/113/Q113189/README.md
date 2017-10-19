---
layout: page
title: "Q113189: ListDlg.exe Implements a List Box Full of Dialog Boxes"
permalink: /kb/113/Q113189/
---

## Q113189: ListDlg.exe Implements a List Box Full of Dialog Boxes

	Article: Q113189
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbCtrl kbDlg kbListBox kbGrpDSUser kbOSWin310
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases, a user interface may require many dialog boxes to be present at
	one time. It is possible to display these dialog boxes inside of an owner-draw
	list box by moving the dialog boxes over the area that the list box's items
	cover.
	
	The LISTDLG sample demonstrates this method of displaying dialog boxes. The
	sample uses a fixed height, owner-draw list box with a vertical scroll bar to
	display several modeless dialog boxes. The scroll bar can be used to scroll
	through the dialog boxes.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Listdlg.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	This sample demonstrates how to implement an owner-draw list box that contains a
	list of modeless dialog boxes. The sample displays a dialog box containing a
	list box with the LBS_OWNERDRAWFIXED style. It then creates five modeless dialog
	boxes and places five entries in the list box. Then, the sample associates a
	dialog box handle for each entry in the list box by sending an LB_SETITEMDATA
	message to the list box for each list box entry.
	
	The LISTDLG sample implements an owner-draw list box and shows how to handle the
	WM_MEASUREITEM and the WM_DRAWITEM messages associated with the list box. When a
	WM_DRAWITEM message is sent to the owner of the list box, the appropriate
	modeless dialog box is moved via MoveWindow() to cover the entire area of the
	list box item specified in the itemID field of the DRAWITEMSTRUCT structure. To
	show which dialog box (list box item) is currently selected, the WM_CTLCOLOR
	message is used to change the background and text color of the dialog boxes.
	When a dialog box is currently selected, its background color will be
	COLOR_HIGHLIGHT and its text color will be COLOR_HIGHLIGHTTEXT.
	
	The WM_MOUSEACTIVATE, WM_SETFOCUS, and WM_CTLCOLOR messages for the dialog boxes
	are all handled by the following three generic functions in the source file
	DIALOG.C:
	
	  BOOL HandleMouseActivate(int nIndex, HWND hDlg)
	  BOOL HandleSetFocus(int nIndex, HWND hDlg)
	  BOOL HandleCtlColor(int nIndex, HWND hDlg, WORD wParam, LONG lParam)
	
	The "nIndex" parameter is the zero-based list box item index associated with the
	dialog box and hDlg is a handle to the dialog box. It is important that all
	dialog boxes that are associated with the list box call these functions when
	processing the above messages.
	
	To select a dialog box from the list box, just click the left mouse button
	anywhere on the dialog box, as you would do to select a normal list box item.
	You can also scroll through the dialog boxes by using the scroll bar on the list
	box. You can move from one dialog box to the next one in line by choosing the
	Next button on any dialog box. The focus will scroll around to the first dialog
	box in the list when the Next button of the last dialog box is chosen. It is
	important that all dialog boxes that are associated with the list box have a
	Next button so keyboard mobility is possible.
	
	Additional query words: listbox dialogs scrollbar softlib kbfile
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbCtrl kbDlg kbListBox kbGrpDSUser kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
