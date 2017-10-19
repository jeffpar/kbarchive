---
layout: page
title: "Q120682: How to Exclude CLSIDs from OLE's Insert Object Dialog"
permalink: /kb/120/Q120682/
---

## Q120682: How to Exclude CLSIDs from OLE's Insert Object Dialog

	Article: Q120682
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.5 
	   - Microsoft Visual C++, 32-bit Editions, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When building a container/server application with the Microsoft Foundation OLE
	Classes, you should prohibit the application user from inserting an object of
	the type serviced by the application itself. In fact, with an MDI application,
	if you try to embed your server's object in your server's document, you'll get
	the following message and trace messages indicating that a QueryInterface call
	failed:
	
	Message box statement:
	
	  
	
	  Failed to create object. Make sure that the object is entered
	  in the system registry.
	
	Trace messages:
	
	  
	
	  Warning: constructing COleException, scode = E_NOINTERFACE ($80000004)
	  Warning: Throwing an Exception of type COleException"
	
	This article gives an example showing how to customize the OLE Insert Object
	dialog wrapped by the COleInsertDialog class. This customization omits your
	server object's class id from the selection list so the user won't be able to
	embed it.
	
	MORE INFORMATION
	================
	
	The COleInsertDialog class contains a member m_io -- as described in online help
	for the OLE Classes:
	
	  COleInsertDialog::m_io
	
	  Structure of type OLEUIINSERTOBJECT used to control the
	  behavior of the Insert Object dialog box. Members of
	  this structure can be modified either directly or
	  through member functions.
	
	The OLEUIINSERTOBJECT dialog contains two members which allow the user to exclude
	specific object types from the dialog's selection list by CLSID. The member
	lpClsidExclude is a pointer of type LPCLSID and therefore must point directly to
	a variable of type CLSID. The member cClsidExclude is a UINT and contains the
	number of CLSID types that are pointed to by lpClsidExclude. If you want to
	exclude more than one CLSID, use an array.
	
	The sample code below demonstrates how to exclude the AppWizard generated CLSID
	for the application's own object. This CLSID can be found in the CWinApp-derived
	class implementation file as the static global variable "clsid" and will look
	something like this:
	
	  // This identifier was generated to be statistically unique for your app.
	  // You may change it if you prefer to choose a specific identifier.
	  static const CLSID BASED_CODE clsid = {   0x565295c6, 0xc992, 0x11cd,
	                          { 0x96, 0xf2, 0x0, 0xaa, 0x0, 0x3b, 0x80,0x67 } };
	
	For the purpose of accessing clsid from a view class member function, take the
	"static" storage class off the above declaration.
	
	You can then assign the lpClsidExclude pointer to &clsid from any module in
	the program. For the purpose of this sample, cClsidExclude is a count of one, so
	no array will be used.
	
	The code to assign these members must be run before displaying the dialog.
	Therefore it's best to assign these members in the container view class'
	OnInsertObject() member. The OnInsertObject() shown in the sample code below is
	based on the one that AppWizard provides.
	
	Sample Code
	-----------
	
	  /* AppWizard generated OnInsertObject() function modified to
	   * exclude our own object type from the OLE Insert Object Dialog.
	   */ 
	  void CSvrcntrView::OnInsertObject()
	  {
	      // Invoke the standard Insert Object dialog box to obtain information
	      //  for new CSvrcntrCntrItem object.
	      COleInsertDialog dlg;
	      // Our own object's clsid - don't insert it!
	      dlg.m_io.lpClsidExclude = (LPCLSID) &clsid;
	      dlg.m_io.cClsidExclude = 1;    // Number of clsid's in the array.
	
	      if (dlg.DoModal() != IDOK)
	          return;
	
	      BeginWaitCursor();
	
	      CSvrcntrCntrItem* pItem = NULL;
	      TRY
	      {
	          // Create new item connected to this document.
	          CSvrcntrDoc* pDoc = GetDocument();
	          ASSERT_VALID(pDoc);
	          pItem = new CSvrcntrCntrItem(pDoc);
	          ASSERT_VALID(pItem);
	
	          // Initialize the item from the dialog data.
	          if (!dlg.CreateItem(pItem))
	              AfxThrowMemoryException();  // any exception will do
	          ASSERT_VALID(pItem);
	
	          // If item created from class list (not from file) then launch
	          //  the server to edit the item.
	          if (dlg.GetSelectionType() == COleInsertDialog::createNewItem)
	              pItem->DoVerb(OLEIVERB_SHOW, this);
	
	         ASSERT_VALID(pItem);
	
	          // As an arbitrary user interface design, this sets the selection
	          //  to the last item inserted.
	
	          // TODO: reimplement selection as appropriate for your application
	
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
	
	Additional query words: kbinf 1.50 2.00 2.50 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMFC
	
	=============================================================================
	
