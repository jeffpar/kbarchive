---
layout: page
title: "Q137139: HOWTO: Optimize the Reactivation of In-Place Active Servers"
permalink: /kb/137/Q137139/
---

## Q137139: HOWTO: Optimize the Reactivation of In-Place Active Servers

	Article: Q137139
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbInplaceAct kbMFC kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52, 1.52b 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an OLE container embeds an in-place active capable server, the
	deactivation/reactivation process may be considered too long. One way to
	optimize the process is to hide the server rather than deactivate it. Simply
	hiding the server will enable a faster reactivation should the embedded object
	be reactivated.
	
	MORE INFORMATION
	================
	
	Optimizing the deactivation/reactivation process for an object embedded in an
	MFC container application involves overriding the virtual
	COleClientItem::OnDeactivateUI and COleClientItem::OnActivate methods.
	
	By default, MFC OLE container applications created with versions of AppWizard
	prior to version 4.0 contain the following implementation of the
	COleClientItem::OnDeactivateUI method:
	
	     void CCntrItem::OnDeactivateUI(BOOL bUndoable)
	     {
	       COleClientItem::OnDeactivateUI(bUndoable);
	
	       // Close an in-place active item whenever it removes the user
	       // interface. The action here should match as closely as possible
	       // the handling of the ESC key in the view.
	
	       Deactivate();   // nothing fancy here -- just deactivate the object
	     }
	
	To optimize the deactivation/reactivation process, modify the AppWizard generated
	version of this function to have it invoke the embedded item's OLEIVERB_HIDE
	verb to have the item hide itself: "
	
	     void CCntrItem::OnDeactivateUI(BOOL bUndoable)
	     {
	       COleClientItem::OnDeactivateUI(bUndoable);
	
	       // Hide the object if it is not an outside-in object
	       DWORD dwMisc = 0;
	       m_lpObject->GetMiscStatus(GetDrawAspect(), &dwMisc);
	       if (dwMisc & OLEMISC_INSIDEOUT)
	          DoVerb(OLEIVERB_HIDE, NULL);
	     }
	
	" (without the quotation marks) The second step in optimizing the
	deactivation/reactivation process involves modifying the virtual
	COleClientItem::OnActivate method to correctly handle activation of another
	embedded object. To override COleClientItem::OnActivate, first add the following
	public method declaration to the declaration of the MFC container application's
	COleClientItem derived class: "
	
	     virtual void OnActivate();
	
	" (without the quotation marks) Add the following definition of the OnActivate
	method to the implementation file for the container's COleClientItem derived
	class: "
	
	     void CCntrItem::OnActivate()
	     {
	       // allow only one in-place active item per frame
	       CView* pView = (CView*)GetActiveView();
	       ASSERT_VALID(pView);
	       COleClientItem* pItem = GetDocument()->GetInPlaceActiveItem(pView);
	       if (pItem != NULL && pItem != this)
	         pItem->Close();
	
	       COleClientItem::OnActivate();
	     }
	
	" (without the quotation marks) If the container has previously hidden an
	embedded object, this function will close it prior to activating the new item.
	Note that this optimization is similar to the technique that Microsoft Excel and
	the rich edit control use in similar circumstances.
	
	Beginning with Visual C++ version 4.0, AppWizard-generated OLE containers contain
	the optimized versions of COleClientItem::OnDeactivateUI and
	COleClientItem::OnActivate automatically. There is no need to manually add the
	changes shown above.
	
	
	Additional query words: Word embedded UIActive
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbInplaceAct kbMFC kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
