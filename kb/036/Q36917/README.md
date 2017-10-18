---
layout: page
title: "Q36917: INFO: DlgDirSelect() Has Undocumented Behavior"
permalink: kb/036/Q36917/
---

## Q36917: INFO: DlgDirSelect() Has Undocumented Behavior

	Article: Q36917
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCtrl kbListBox kbSDKPlatform kbGrpDSUser
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use DlgDirSelect() to get the selection from a list box and there is no
	selection, DlgDirSelect() returns zero and leaves the output string unchanged.
	
	Clicking in the white space after the last item in a list box is one reason there
	may not be a selection.
	
	Because DlgDirSelect() returns 0 (zero) when the selection is a file and 0 when
	there is no selection at all, using the return value alone is not enough to
	determine if there is a current selection. One way to determine if there is a
	selection is to send the LB_GETCURSEL message to the list box. If the return
	value is not LB_ERR from this message, there currently is a selected item in the
	list box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbCtrl kbListBox kbSDKPlatform kbGrpDSUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	
