---
layout: page
title: "Q191128: BUG: GetItem and SetItem Do Not Have an Indent Parameter"
permalink: /kb/191/Q191128/
---

## Q191128: BUG: GetItem and SetItem Do Not Have an Indent Parameter

{% raw %}

	Article: Q191128
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbCtrl kbListView kbMFC kbVC420bug kbVC500bug kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CListCtrl member functions GetItem and SetItem lack an Indent parameter.
	
	CAUSE
	=====
	
	The LVITEM structure was modified with version 4.70 of ComCtrl32.dll to include
	an indent parameter. This parameter specifies how many image widths to indent an
	item. However, there is no place to specify this parameter in the form of the
	CListCtrl member function SetItem that takes a list view item's attributes.
	
	RESOLUTION
	==========
	
	You can set the value of the iIndent member of the LVITEM structure by using the
	form of the CListCtrl member function SetItem that accepts a pointer to a
	LV_ITEM structure. For example:
	
	     void CMyCListCtrl::SetItemIndent( int nItem, int nIndent )
	     {
	        LV_ITEM lvi;
	
	        lvi.iItem = nItem;
	        lvi.iSubItem = 0;
	        lvi.mask = LVIF_INDENT;
	        lvi.iIndent = nIndent;
	
	        VERIFY( SetItem( &lvi ) );
	     }
	
	Likewise, to obtain the indentation of an item in a CListCtrl, use the form of
	the CListCtrl member function GetItem that accepts a pointer to a LV_ITEM
	structure:
	
	     int CMyCListCtrl::GetItemIndent( int nItem )
	     {
	        LV_ITEM lvi;
	
	        lvi.iItem = nItem;
	        lvi.iSubItem = 0;
	        lvi.mask = LVIF_INDENT;
	
	        VERIFY( GetItem( &lvi ) );
	
	        return lvi.iIndent;
	     }
	
	Note that because iIndent specifies the number of image widths to indent the
	item, you must associate an image list of small images with the items.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	CListCtrl::SetItem has two forms: one that takes a pointer to an LV_ITEM
	structure and one that takes individual parameters. The second form does not
	have a parameter representing the number of image widths to indent an item.
	
	Additional query words: LVITEM LV_ITEM LVM_SETITEM LVM_GETITEM CListView
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbCtrl kbListView kbMFC kbVC420bug kbVC500bug kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
