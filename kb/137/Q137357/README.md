---
layout: page
title: "Q137357: HOWTO: Insert Objects Without Using Insert Object Dialog Box"
permalink: /kb/137/Q137357/
---

## Q137357: HOWTO: Insert Objects Without Using Insert Object Dialog Box

	Article: Q137357
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,1.52,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbole kbActiveX kbCOMt kbDlg kbMFC kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrp
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When building an OLE container or OLE server application using MFC OLE classes,
	you should insert an OLE embedded object programmatically, without using the
	InsertObject dialog box. This article show you how.
	
	In a default MFC AppWizard-generated OLE container or OLE server application, a
	command handler is implemented to enable the user to insert an object by
	clicking Insert New Object on the Edit menu. The AppWizard- generated code makes
	use of the COleInsertDialog class, which is an MFC wrapper for the
	OLEUIINSERTOBJECT common dialog box. The COleInsertDialog data and member
	functions are used to embed the object.
	
	MORE INFORMATION
	================
	
	The member function most responsible for the embedding of an OLE object is
	COleInsertDialog::CreateItem, which takes a pointer to a COleClientItem as a
	formal parameter.
	
	When the user clicks Insert New Object on the Edit menu, a COleInsertDialog is
	created, and it is shown by calling its DoModal function. When the dialog box is
	dismissed, some of its data members are set by selections made by the user, such
	as Create From File or Create New.
	
	The implementation of COleInsertDialog::CreateItem calls the COleClientItem
	member functions to embed the object, which leads to the solution of by- passing
	the COleInsertDialog class and calling COleClientItem to do the work.
	
	Here is an excerpt from COleInsertDialog::CreateItem:
	
	  *******Begin Excerpt*******
	     switch (selType)
	     {
	       case linkToFile:
	        // link to file selected
	       ASSERT(m_szFileName[0] != 0);
	             bResult=pNewItem->CreateLinkFromFile(m_szFileName);
	       break;
	
	       case insertFromFile:
	       // insert file selected
	       ASSERT(m_szFileName[0] != 0);
	       bResult=pNewItem->CreateFromFile(m_szFileName);
	       break;
	
	       default:
	       // otherwise must be create new
	       ASSERT(selType == createNewItem);
	       bResult=pNewItem->CreateNewItem(m_io.clsid);
	       break;
	     }
	
	  *******End Excerpt*******
	
	This code features a switch structure whose logic flow is controlled by the
	selType set by the user interaction with the COleInsertDialog dialog box.
	
	The following code demonstrates how to insert an OLE embedded object
	programmatically. The code shows the creation of an instance of a COleClientItem
	object, which then calls its CreateNewItem member function to create and embed a
	Microsoft Excel worksheet.
	
	Sample Code
	-----------
	
	     /* Compile options needed : None
	     */ 
	
	     void CMyView::OnInsertObject()
	     {
	
	       BeginWaitCursor();
	
	       CMyOleClientItem* pItem = NULL;
	       TRY
	       {
	           // Create new item connected to this document.
	           CMyDoc* pDoc = GetDocument();
	           ASSERT_VALID(pDoc);
	           pItem = new CMyOleClientItem(pDoc);
	           ASSERT_VALID(pItem);
	
	           // Get Class ID for Excel sheet
	           // This is used in creation
	           CLSID clsid;
	           if(FAILED(::CLSIDFromProgID("Excel.Sheet",&clsid)))
	             AfxThrowMemoryException();
	
	           // Create the Excel embedded item
	           if(!pItem->CreateNewItem(clsid))
	             AfxThrowMemoryException();  // any exception will do
	           ASSERT_VALID(pItem);
	
	           // Launch the server to edit the item.
	           pItem->DoVerb(OLEIVERB_SHOW, this);
	
	           ASSERT_VALID(pItem);
	
	           // As an arbitrary user interface design, this sets the
	           // selection to the last item inserted.
	
	           // TODO: reimplement selection as appropriate for your
	           // application
	
	           m_pSelection = pItem;   // set selection to last inserted item
	           pDoc->UpdateAllViews(NULL);
	       }
	       CATCH(CException, e)
	       {
	           if (pItem != NULL)
	           {
	             ASSERT_VALID(pItem);
	             pItem->Delete();
	           }
	           AfxMessageBox(IDP_FAILED_TO_CREATE);
	       }
	       END_CATCH
	
	       EndWaitCursor();
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbole kbActiveX kbCOMt kbDlg kbMFC kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL kbDialog 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.5,1.51,1.52,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
