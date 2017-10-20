---
layout: page
title: "Q148498: DOC: CListBox::ItemFromPoint() Works Only in Windows 95"
permalink: /kb/148/Q148498/
---

## Q148498: DOC: CListBox::ItemFromPoint() Works Only in Windows 95

{% raw %}

	Article: Q148498
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbcode kbdocfix kbdocerr kbMFC KbUIDesign kbVC210bug kbVC220bug kbVC400bug kbVC410bug k
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, versions 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CListBox member function ItemFromPoint() is not implemented in Win32s or
	Windows NT, but the documentation for the member function does not state this
	fact.
	
	MORE INFORMATION
	================
	
	The ItemFromPoint() member function relies on the LB_ITEMFROMPOINT message which
	the documentation correctly states is supported only in Windows 95.
	
	The Win32 SDK function LBItemFromPt() could be used as an alternative to
	CListBox::ItemFromPoint(). The drawback is LBItemFromPt() does not have exactly
	the same functionality. However, the workaround demonstrated in the folloiwng
	sample code does provide the same functionality.
	
	Sample Code
	-----------
	
	The following code shows how ItemFromPoint() can be implemented to behave the
	same way on Windows 95, Win32s, and Windows NT. In this sample code, CMyListBox
	is derived from CListBox:
	
	  UINT CMyListBox::ItemFromPoint(CPoint pt,BOOL &bOutside)
	  {
	    // If we are on Win95, just call the base class
	    if((BYTE)::GetVersion() >= 4)
	      return CListBox::ItemFromPoint(pt,bOutside);
	
	    if(GetCount()<1)
	    {
	      bOutside=TRUE;
	      return 0;
	    }
	
	    CRect rectClient;
	    GetClientRect(&rectClient);
	
	    bOutside=!rectClient.PtInRect(pt);
	
	    if (pt.y < rectClient.top)
	      pt.y = rectClient.top;
	    if (pt.x < rectClient.left)
	      pt.x = rectClient.left;
	
	    CRect rectCheck;
	    int lastY = -1;
	
	    for ( int nIndex = GetTopIndex(); nIndex < GetCount(); nIndex++)
	    {
	      GetItemRect(nIndex , &rectCheck);
	      rectCheck.right+=1;
	      if(!rectClient.PtInRect(rectCheck.TopLeft()))
	        break;
	
	      if (rectCheck.PtInRect(pt))
	        return nIndex;
	
	      // check for case where mouse is below the last item in a column of
	      // an LBS_MULTICOLUMN list box
	      if ( GetStyle() & LBS_MULTICOLUMN &&
	           nIndex < GetCount()-1 &&
	           pt.x>=rectCheck.left &&
	           pt.x<rectCheck.right)
	      {
	          CRect rectNext;
	          GetItemRect(nIndex+1, &rectNext);
	          if (rectNext.left > rectCheck.left)
	              return nIndex;
	      }
	
	      if (pt.y>=rectCheck.top)
	          lastY = nIndex;
	    }
	
	    return lastY;
	  }
	
	This documentation error was corrected in Visual C++ 32-bit Edition version 4.2.
	
	Additional query words: kbVC400bug 2.10 2.20 4.00 4.10 4.20 3.10 3.20 vcfixlist420
	
	======================================================================
	Keywords          : kbcode kbdocfix kbdocerr kbMFC KbUIDesign kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
