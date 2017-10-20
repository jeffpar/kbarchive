---
layout: page
title: "Q112640: Odvarlb.exe Pages Down in Owner-Draw Variable List Box"
permalink: /kb/112/Q112640/
---

## Q112640: Odvarlb.exe Pages Down in Owner-Draw Variable List Box

{% raw %}

	Article: Q112640
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbCtrl kbListBox kbSDKPlatform kbGrpDSUser kbOSWin310
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the Microsoft Windows 3.1 SDK, when page down is used in an owner- draw
	variable list box, the selection is changed to the last visible item in the list
	box (as it should). However, at this point no subsequent page downs will work.
	
	To address the page-down problem, the owner-draw variable list box is subclassed.
	In the subclass procedure, WM_KEYDOWN is processed. When wParam is VK_NEXT, the
	PAGE DOWN key was pressed, and the actual paging down is implemented. The
	ODVARLB sample shows how to work around this problem.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Odvarlb.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	NOTE: This is not a problem with Win32-based applications. The steps required for
	implementing the page down are as follows:
	
	1. Find out how many items exist in the list box. LB_GETCOUNT message can be
	  used to get this information:
	
	        // Get maximum number of items in the list box.
	        iMaxItems = SendMessage(hWnd,LB_GETCOUNT,0,0L);
	
	2. Find out which item now has the selection; this item will be moved to the top
	  of the list box on a page down. This can be done by sending an LB_GETCURSEL
	  to the list box:
	
	        // Get the index for the item which is to be at the top.
	        iTopIdx    = SendMessage(hWnd,LB_GETCURSEL,0,0L);
	
	3. If the item that has the focus now is the last item in the list then we
	  cannot page down further, so just return.
	
	        // If the focus is already on the last item, we have reached
	        // the end of the list so just return.
	        if (iTopIdx != (iMaxItems -1))
	            // Continue we have more work to do.
	
	4. Otherwise, get the height of the list box by calling GetClientRect():
	
	        // Get the client area rectangle of the list box.
	         GetClientRect(hWnd, &rc);
	
	5. Then find out how many items will fit in the list box; because this is an
	  owner-draw variable list box, some more elaborate calculation is necessary.
	  To do this cleanly, a WM_MEASUREITEM message is sent to the parent of the
	  list box and WM_MEASUREITEM code calculates the height for each of the items
	  one by one. Then the height of each item is accumulated and is compared with
	  the list box's height until the last item in the current page is located.
	
	        // Get the index for the last visible item in the list
	        // box based on the new top item.
	        iBottomIdx = GetLBIndex(hWnd,iTopIdx,iMaxItems,rc.bottom);
	
	  The GetLBIndex() function finds the last item that should be visible after the
	  page down is completed. Below is the code for GetLBIndex:
	
	       int GetLBIndex(HWND hLB,int iTopIdx,UINT iMaxLBItems, int lbHeight)
	       {
	           MEASUREITEMSTRUCT mis;
	           int ItmHeights = 0;          // Keeps track of total item heights.
	
	           // Set up the measure item structures fields.
	           mis.CtlType = ODT_LISTBOX;
	           mis.itemID  = iTopIdx;
	
	           while (mis.itemID <= (iMaxLBItems - 1))
	              {
	              // Get the items measurement, height in particular.
	              SendMessage(GetParent(hLB),WM_MEASUREITEM,
	                          0, (LPARAM)(LPMEASUREITEMSTRUCT)&mis);
	
	              // Add it to our total height.
	              ItmHeights += mis.itemHeight;
	
	              // If the total item height is still less than
	              // the list box:
	              if (ItmHeights <= lbHeight)
	               // Unless we have reached the end of out list.
	                if (mis.itemID == (iMaxLBItems - 1))
	              // In this case, return the index to the last item in the list.
	                   return (mis.itemID);
	                else
	               // Check the next item, we want to cycle through again.
	                   ++mis.itemID ;
	              else
	               // We have found the last item to be displayed in the list box
	               // so return it.
	                return (--mis.itemID);
	              }
	           return (iTopIdx);
	       }
	
	6. When the height of the list box is less than or equal to the height of an
	  item, the list box displays only one item or part of an item. In this
	  situation some special-case handling is required. When the user presses the
	  PAGE DOWN key, the next item in the list becomes visible. Below is the code
	  used to adjust the top and bottom index for this special case:
	
	        // Special case: When the height of the list box is less than or
	        // equal to the height of an item, the list box displays only one
	        // item or part of an item at a time. So, when paging down we need
	        // to display the next item in the list.
	        if (iBottomIdx <= iTopIdx)
	           iBottomIdx = ++iTopIdx;
	
	7. Now the item in step 2 (or 6, iTopIdx) is placed at the top of the list and
	  the selection (highlighted) is given to the last item, which is the item
	  obtained in step 5 (or 6, iBottomIdx). The scroll bar thumb position is
	  automatically updated.
	
	        // Move the item that had the focus to the top, then set the
	        // selection to the last visible item in the list box.
	        SendMessage(hWnd,LB_SETCURSEL,(WPARAM) iBottomIdx, 0L);
	        SendMessage(hWnd,LB_SETTOPINDEX,(WPARAM) iTopIdx, 0L);
	
	  NOTE: Just doing this will cause flashing so the painting is turned off in the
	  list box until the page down process is complete. Then the entire list box is
	  invalidated and the list box window is updated to reflect the changes.
	
	        // Turn off all painting to prevent flashing.
	        SendMessage(hWnd, WM_SETREDRAW, (WPARAM) FALSE,0L);
	
	        // Move the item that had the focus to the top, then set the
	        // focus to the last visible item in the list box.
	        SendMessage(hWnd,LB_SETCURSEL,(WPARAM) iBottomIdx, 0L);
	        SendMessage(hWnd,LB_SETTOPINDEX,(WPARAM) iTopIdx, 0L);
	
	        // We are done, so turn on painting. Invalidate the list box window
	        // for painting and then update the list window.
	        SendMessage(hWnd, WM_SETREDRAW, (WPARAM) TRUE,0L);
	        InvalidateRect(hWnd,NULL,TRUE);
	        UpdateWindow(hWnd);
	
	  However, adding the WM_SETREDRAW messages to eliminate flashing prevents the
	  scroll bar from being updated. To address this problem, the scroll bar
	  position is retrieved via GetScrollPos() and then reset and painted via
	  SetScrollPos().
	
	        pos = GetScrollPos(hWnd,SB_VERT);
	        SetScrollPos(hWnd,SB_VERT,pos,TRUE);
	
	  The code for this workaround is the ODLB.C file. All the necessary code for
	  this workaround is actually contained in two functions,
	
	        SbListSubProc() - The subclass procedure for the list box.
	        GetLBIndex()    - Finds the last visible item in the list box
	                          after paging down.
	
	To see the demonstration, select the list box menu item and then page down!
	
	The font on the list box can also be changed using the Change Font menu option.
	Changing the font demonstrates how the code works with a different number of
	visible items in the list box.
	
	Additional query words: owner draw listbox
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbCtrl kbListBox kbSDKPlatform kbGrpDSUser kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
