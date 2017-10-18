---
layout: page
title: "Q138266: HOWTO: Implement Scaled Printing in an MFC/OLE Container"
permalink: kb/138/Q138266/
---

## Q138266: HOWTO: Implement Scaled Printing in an MFC/OLE Container

	Article: Q138266
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbprint kbContainer kbGDI kbMFC kbPrinting kbVC150 kbVC200 kbVC400 kbVC500 kbVC60
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to implement scaling properly.
	
	Printing an embedded object from an AppWizard-generated OLE container application
	may cause the printout of the embedded object to appear too small.
	
	The developer of an OLE container must implement the code to scale an embedded
	object properly from the screen device to the printer device. If only the screen
	device is considered, the embedded object will appear too small on a printout.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	
	In the MFC Container sample, step 2 implements a container that does not consider
	the difference in resolution between the screen device and the printer device.
	If, for instance, Scribble, step 7 is embedded in Container and PRINT or PRINT
	PREVIEW is selected, the embedded object will appear too small.
	
	Using Container as an example of MFC container that doesn't support scaling, the
	following code can be added to CContainView::OnDraw() to implement proper
	scaling:
	
	    void CContainerView::OnDraw(CDC* pDC)
	  {
	      CContainerDoc* pDoc = GetDocument();
	      ASSERT_VALID(pDoc);
	      
	      // draw the OLE items from the list
	      POSITION pos = pDoc->GetStartPosition();
	      while (pos != NULL)
	      {
	          // draw the item
	          CContainerItem* pItem = (CContainerItem*)pDoc->GetNextItem(pos);
	          
	          // copy the client items rect, which will be scaled
	          CRect rect2(pItem->m_rect);
	          if(pDC->IsPrinting())
	          {
	              // get the printer's pixel resolution
	              int ixp=pDC->GetDeviceCaps(LOGPIXELSX);
	              int iyp=pDC->GetDeviceCaps(LOGPIXELSY);
	              
	              // get the current window's resolution
	              CDC* pddc = GetDC();
	              int ixd=pddc->GetDeviceCaps(LOGPIXELSX);
	              int iyd=pddc->GetDeviceCaps(LOGPIXELSY);
	              
	              // scale rect2 up by the ratio of the resolutions
	              int width  = MulDiv(rect2.Width(),ixp, ixd);
	              int height = MulDiv(rect2.Height(), iyp, iyd);
	              rect2.left = MulDiv(rect2.left, ixp, ixd);
	              rect2.top  = MulDiv(rect2.top,  ixp, ixd);
	              rect2.right  = rect2.left + width;
	              rect2.bottom = rect2.top + height;
	          }
	          
	          pItem->Draw(pDC, rect2);
	          if(!pDC->IsPrinting())
	          {
	              // draw the tracker over the item
	              CRectTracker tracker;
	              SetupTracker(pItem, &tracker);
	              tracker.Draw(pDC);
	          }
	      }
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbprint kbContainer kbGDI kbMFC kbPrinting kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
