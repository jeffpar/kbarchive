---
layout: page
title: "Q151662: HOWTO: How To Disable Tabs in CPropertySheet"
permalink: /kb/151/Q151662/
---

## Q151662: HOWTO: How To Disable Tabs in CPropertySheet

	Article: Q151662
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbMFC kbPropSheet KbUIDesign kbVC kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to disable tabs in a CPropertySheet so the user is
	not allowed to activate the tab. To accomplish this behavior, you can do the
	following:
	
	- Handle the TCN_SELCHANGING notification in the sheet and save the index of
	  the current tab.
	
	- Handle the TCN_SELCHANGE notification in the sheet and call GetActiveIndex()
	  to determine if you want the page disabled.
	
	- If you want the page disabled, post a PSM_SETCURSEL message to the sheet
	  using the index that was saved in TCN_SELCHANGING.
	
	The sample code below shows how to implement an EnablePage() function that allows
	you to enable and disable pages.
	
	MORE INFORMATION
	================
	
	Because there is no way to gray out the text in the tab of the disabled page,
	append "Disabled" to the tab label to inform the user that the page is
	disabled.
	
	Instead of posting a PSM_SETCURSEL message in the handler for TCN_SELCHANGE to
	activate a different page, you can accomplish this behavior in OnSetActive() for
	a CPropertyPage.
	
	If OnSetActive() returns FALSE, it tries to activate the next tab. The method
	described above allows you to reactivate the previously active tab.
	
	Sample Code
	-----------
	
	     // This sample disables page #2 of a property sheet.
	
	     // We need to include this file so we can use CMap
	     #include <afxtempl.h>
	
	     class CMySheet : public CPropertySheet
	     {
	     protected:
	         // we save the current page in TCN_SELCHANGING
	         int m_nLastActive;
	         // list of indexes of disabled pages
	         CMap <int, int&, int, int&> m_DisabledPages;
	     public:
	         void EnablePage (int nPage, BOOL bEnable = TRUE);
	     ...
	     };
	
	     BOOL CMySheet::OnInitDialog()
	     {
	         // OnInitDialog() must be called before EnablePage()
	         // or GetTabControl() will fail.
	         BOOL bReturn = CPropertySheet::OnInitDialog();
	         // disable page #2
	         EnablePage (1, FALSE);
	         return bReturn;
	     }
	
	     void CMySheet::EnablePage (int nPage, BOOL bEnable)
	     {
	         // if we want to enable the page
	         if (bEnable)
	         {
	             // remove the index from the map
	             m_DisabledPages.RemoveKey (nPage);
	             // take out " - Disabled" from tab label
	             CTabCtrl* pTab = GetTabControl();
	             ASSERT (pTab);
	             TC_ITEM ti;
	             char szText[100];
	             ti.mask = TCIF_TEXT;
	             ti.pszText = szText;
	             ti.cchTextMax = 100;
	             VERIFY (pTab->GetItem (nPage, &ti));
	             char * pFound = strstr (szText, " - Disabled");
	             if (pFound)
	             {
	                 *pFound = '\0';
	                 VERIFY (pTab->SetItem (nPage, &ti));
	             }
	         }
	         // if we want to disable it
	         else
	         {
	             // add the index to the map
	             m_DisabledPages.SetAt (nPage, nPage);
	             // add " - Disabled" to tab label
	             CTabCtrl* pTab = GetTabControl();
	             ASSERT (pTab);
	             TC_ITEM ti;
	             char szText[100];
	             ti.mask = TCIF_TEXT;
	             ti.pszText = szText;
	             ti.cchTextMax = 100;
	             VERIFY (pTab->GetItem (nPage, &ti));
	             strcat (szText, " - Disabled");
	             VERIFY (pTab->SetItem (nPage, &ti));
	         }
	     }
	
	     BOOL CMySheet::OnNotify(WPARAM wParam, LPARAM lParam, LRESULT* pResult)
	     {
	         NMHDR* pnmh = (NMHDR*)lParam;
	         // tab is about to change
	         if (TCN_SELCHANGING == pnmh->code)
	             // save the current page index
	             m_nLastActive = GetActiveIndex ();
	         // tab has been changed
	         else if (TCN_SELCHANGE == pnmh->code)
	         {
	             // get the current page index
	             int nCurrentPage = GetActiveIndex ();
	             // if current page is in our map of disabled pages
	             if (m_DisabledPages.Lookup (nCurrentPage, nCurrentPage))
	             // activate the previous page
	             PostMessage (PSM_SETCURSEL, m_nLastActive);
	         }
	         return CPropertySheet::OnNotify(wParam, lParam, pResult);
	     }
	
	     /* Compile options needed: default
	     */ 
	
	Additional query words: 4.00 4.10 CPropertySheet CPropertyPage disable
	
	======================================================================
	Keywords          : kbMFC kbPropSheet KbUIDesign kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbhowto
	
	=============================================================================
	
