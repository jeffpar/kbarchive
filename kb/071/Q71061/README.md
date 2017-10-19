---
layout: page
title: "Q71061: MenuBmp.exe Contains Owner-Draw Menus with Bitmaps"
permalink: /kb/071/Q71061/
---

## Q71061: MenuBmp.exe Contains Owner-Draw Menus with Bitmaps

	Article: Q71061
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): _IK kbfile kbsample kbMenu kbOSWin2000 kbGrpDSUser kbOSWin310 kbOSWin300
	Last Modified: 09-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an application creates an owner-draw menu item with the MF_OWNERDRAW style,
	the application receives a WM_MEASUREITEM message for that item. The application
	is required to fill the MEASUREITEMSTRUCT pointed to by the lParam of this
	message.
	
	The itemWidth field of the MEASUREITEMSTRUCT is normally filled with the actual
	width of the item. However, when Windows displays that menu item, the width is
	increased by the width of a check mark; that is, Windows automatically expands
	the item to leave space for a check mark.
	
	To make the menu item only as wide as the actual item, fill the itemWidth field
	with the width of the item, minus the width of a check mark, as returned by
	GetMenuCheckMarkDimensions().
	
	MenuBmp.exe is a sample that contains an example of owner-draw menus with bitmaps
	where each item is only as large as the bitmap.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  MenuBmp.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	The following code fragment demonstrates processing a WM_MEASUREITEM message that
	results in a menu item only as wide as the actual item. In this case, the menu
	is being made with bitmaps. The handle to the bitmap is stored as part of the
	item data.
	
	  // Local variables.
	     LPMEASUREITEMSTRUCT     lpItem;
	     HBITMAP                 hBitmap;
	     BITMAP                  bm;
	     WORD                    cxCheck;
	
	     ...
	
	     case WM_MEASUREITEM:
	         // lParam is a pointer to the structure.
	         lpItem = (LPMEASUREITEMSTRUCT)lParam;
	
	         // A bitmap handle was stored in the item data.
	         hBitmap = LOWORD(lpItem->itemData);
	
	         /*
	          * The width of a check mark is automatically added to
	          * menu items so we need to subtract it to make the
	          * menu the minimum size.
	          */ 
	         cxCheck = LOWORD(GetMenuCheckMarkDimensions());
	
	         // Get the bitmap dimensions
	         GetObject(hBitmap, sizeof(BITMAP), (LPVOID)&bm);
	
	         // Set the width to the width of the bitmap - cxCheck
	         lpItem->itemWidth = bm.bmWidth - cxCheck;
	
	         // Add one to the bitmap height for some spacing.
	         lpItem->itemHeight = bm.bmHeight + 1;
	
	         break;
	
	     ...
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK kbfile kbsample kbMenu kbOSWin2000 kbGrpDSUser kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
