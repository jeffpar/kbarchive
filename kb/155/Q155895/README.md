---
layout: page
title: "Q155895: How To Find an Item in a Tree Control Via its Label"
permalink: kb/155/Q155895/
---

## Q155895: How To Find an Item in a Tree Control Via its Label

	Article: Q155895
	Product(s): Microsoft C Compiler
	Version(s): 2.20 4.00 4.10 4.20
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "tree view" common control does not have any built-in method for searching
	the entire tree, or for selecting an item contained within the tree when given a
	specific item label. This article provides code that returns the location of any
	item in a tree when given a specific label to search for.
	
	The GetItemByName() function takes the window handle of the tree control,
	HTREEITEM, which points to the item in the tree to start searching and a string
	for which to search.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  #include <windows.h>
	  #include <commctrl.h>
	
	  // Note: If you have items with more than 50 characters
	  // of text, you'll need to increase this value.
	  #define MAXTEXTLEN 50
	
	  HTREEITEM GetItemByName(HWND hWnd, HTREEITEM hItem,
	                          LPCTSTR szItemName)
	  {
	      // If hItem is NULL, start search from root item.
	      if (hItem == NULL)
	          hItem = (HTREEITEM)SendMessage(hWnd, TVM_GETNEXTITEM,
	                                         TVGN_ROOT, 0);
	      while (hItem != NULL)
	      {
	          char szBuffer[MAXTEXTLEN+1];
	          TV_ITEM item;
	
	          item.hItem = hItem;
	          item.mask = TVIF_TEXT | TVIF_CHILDREN;
	          item.pszText = szBuffer;
	          item.cchTextMax = MAXTEXTLEN;
	          SendMessage(hWnd, TVM_GETITEM, 0, (LPARAM)&item);
	
	          // Did we find it?
	          if (lstrcmp(szBuffer, szItemName) == 0)
	              return hItem;
	
	          // Check whether we have child items.
	          if (item.cChildren)
	          {
	              // Recursively traverse child items.
	              HTREEITEM hItemFound, hItemChild;
	
	              hItemChild = (HTREEITEM)SendMessage(hWnd, TVM_GETNEXTITEM,
	                                                  TVGN_CHILD, (LPARAM)hItem);
	              hItemFound = GetItemByName(hWnd, hItemChild, szItemName);
	
	              // Did we find it?
	              if (hItemFound != NULL)
	                  return hItemFound;
	          }
	
	          // Go to next sibling item.
	          hItem = (HTREEITEM)SendMessage(hWnd, TVM_GETNEXTITEM,
	                                         TVGN_NEXT, (LPARAM)hItem);
	      }
	
	      // Not found.
	      return NULL;
	  }
	
	For example, to search the entire tree for the word "Jeff" and then highlight
	that word, you can use the following code:
	
	Using Windows SDK:
	
	      HTREEITEM hItem;
	      hItem = GetItemByName(hWndTreeCtrl, NULL, "Jeff");
	      if (hItem != NULL)
	          SendMessage(hWndTreeCtrl, TVM_SELECTITEM, TVGN_CARET,
	                      (LPARAM)hItem);
	
	Using MFC:
	
	      HTREEITEM hItem = GetItemByName(m_TreeCtrl.GetSafeHwnd(),
	                                      NULL, "Jeff");
	      if (hItem != NULL)
	          m_TreeCtrl.SelectItem(hItem);
	
	Additional query words: 2.20 4.00 4.10 4.20 kbdsd CTreeCtrl
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC32bitSearch
	Version           : 2.20 4.00 4.10 4.20
	
	=============================================================================
	
