---
layout: page
title: "Q79055: INFO: Overcoming the 64 Kilobyte Limit for List Box Data"
permalink: /kb/079/Q79055/
---

## Q79055: INFO: Overcoming the 64 Kilobyte Limit for List Box Data

{% raw %}

	Article: Q79055
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbCtrl kbListBox kbSDKPlatform kbFAQ kbwin16sdkfaq kb16bitonly
	Last Modified: 18-JUL-2001
	
	3.00
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses a technique to overcome the 64K size limit for strings in
	a list box. It does not discuss many of the implementation details of owner-draw
	list boxes. For more information about these implementation details, please
	query on the following words:
	
	  prod(winsdk) and odlist
	
	Standard list box controls are limited to 64K of data. An application can
	overcome this barrier by implementing an owner-draw list box and managing the
	data. This can be accomplished by using the list box to store an index to the
	data, rather than storing the text of each string.
	
	MORE INFORMATION
	================
	
	In a standard list box control, the data strings are stored in a global memory
	block that is allocated and managed by Windows. As the number of strings in the
	list box grows, Windows increases the size of the memory block as necessary to
	accommodate the data. However, this block is limited to 64K.
	
	One method to overcome this barrier is to implement an owner-draw list box. For
	each string visible in the list box, Windows sends a WM_DRAWITEM message to the
	window procedure of the parent window of an owner-draw list box. When an
	application processes a WM_DRAWITEM message, it displays the string.
	
	For discussion purposes, assume that the application has an index into a database
	of information. Each index identifies a string to be displayed in the list box.
	When the application creates the list box, it is important that the
	LBS_HASSTRINGS style NOT be specified. Although the list box displays strings,
	the data stored in the list box is a numeric index to the strings, not the
	strings themselves. Add the data to the list box using a loop with the following
	statements:
	
	     SendMessage(hListbox, LB_ADDSTRING, 0, lMyLongIndex);
	
	The value lMyLongIndex is a value of type LONG that identifies the string.
	
	When the parent window's window procedure receives a WM_DRAWITEM message, run the
	following code:
	
	     lMyLongIndex = (LONG)(((LPDRAWITEMSTRUCT)lParam)->itemData);
	     GetString(lMyLongIndex, szString);
	     >
	        ...
	
	        // Other WM_DRAWITEM processing
	
	        ...
	
	        DrawText(hDC, szString, ...);
	
	This code retrieves the index of the selected item from the DRAWITEMSTRUCT
	structure pointed to by lParam. GetString() is an application-defined function
	that uses the index to retrieve the string and place it into szString. Finally,
	the DrawText() function is used to draw the string into the correct display
	context (identified by hDC).
	
	This method adds one level of indirection to each access of the list box data. By
	storing an index to each string in the list box, rather than storing the strings
	themselves, the amount of memory required to maintain the strings in the list
	box is dramatically reduced. A list box is limited to 64K of data. Storing a
	long value for each entry allows up to 8160 entries in the list box. Each entry
	requires 8 bytes (4 bytes for the long value and 4 bytes of overhead) and the
	list box itself requires 256 bytes for overhead.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          : kbCtrl kbListBox kbSDKPlatform kbFAQ kbwin16sdkfaq kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
