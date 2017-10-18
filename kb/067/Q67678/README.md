---
layout: page
title: "Q67678: List Box and Combo Box Capacity Limits"
permalink: kb/067/Q67678/
---

## Q67678: List Box and Combo Box Capacity Limits

	Article: Q67678
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows graphical environment, the storage capacity of a list
	box or combo box is limited by the total amount of text. Each item is stored in
	memory as a NULL-terminated string.
	
	The maximum amount of memory that a list box or combo box can use to store text
	depends on the version of Windows in use. In Windows versions 2.x, the amount of
	free memory in the user module's data segment limits available storage.
	
	Beginning with Windows 3.0, each list box or combo box has its own data segment,
	which allows it to store 64K of text. If a list box or combo box in an
	application must store more text, the application can store up to 8160 items in
	an owner-draw list box or combo box that does not have the LBS_HASSTRINGS list
	box or CBS_HASSTRINGS combo box style. In this case, the application stores and
	manages the item text separately.
	
	MORE INFORMATION
	================
	
	An owner-draw list box or owner-draw combo box is limited to 64K of data
	storage, as are regular (nonowner draw) list boxes and combo boxes. Because the
	application manages the text when the list box or combo box do not have the
	LBS_HASSTRINGS or CBS_HASSTRINGS styles, each item in an owner-draw list box or
	owner-draw combo box require 8 bytes, 4 of which store the application-supplied
	32-bit item-identifier value.
	
	The list box (or combo box) uses 256 bytes of the 64K segment for internal
	storage, and uses the rest for items. This yields room for 8160 items, as
	follows:
	
	  (64K segment - 256 bytes) / (8 bytes per item)
	
	NOTE: In a list box with the LBS_HASSTRINGS style or combo box with the
	CBS_HASSTRINGS style, the text pointed to by the pointer passed in the lParam of
	LB_ADDSTRING or CB_ADDSTRING (or LB_INSERTSTRING or CB_INSERTSTRING) is stored
	in the list box's or combo box's storage area. An additional 32-bit storage
	value can be associated with each item with the LB_SETITEMDATA or CB_SETITEMDATA
	styles.
	
	When the LBS_HASSTRINGS or CBS_HASSTRINGS styles are not present, Windows no
	longer stores text for the list box or combo box. Instead of storing the text
	pointed to by the lParam of LB_ADDSTRING or CB_ADDSTRING (or LB_INSERTSTRING or
	CB_INSERTSTRING), only the 32-bit value itself is stored, thus dramatically
	reducing the needed storage. When the owner-draw list box or owner-draw combo
	box receive the WM_DRAWITEM message, it is up to the drawing routine to
	interpret the 32-bit value.
	
	Additional query words: no32bit 3.00 3.10 listbox combobox list-box combo-box
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
