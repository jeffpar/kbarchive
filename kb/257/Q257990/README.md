---
layout: page
title: "Q257990: HOWTO: Obtain List of Pinned Files from OLE Automation in VC++"
permalink: /kb/257/Q257990/
---

## Q257990: HOWTO: Obtain List of Pinned Files from OLE Automation in VC++

	Article: Q257990
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbSSafe500 kbSSafe600 kbDSupport kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual SourceSafe OLE Automation does not directly expose any pinning
	functionality. Because of this, there is no direct way to tell if a file it
	pinned from OLE Automation. The following sample code shows how to work around
	this problem and obtain this information from a Visual C++ program.
	
	NOTE: This sample code assumes that you reference the Visual SourceSafe OLE
	Automation by using the following:
	
	  #import "path to ssapi.dll" no_namespace
	
	MORE INFORMATION
	================
	
	The following code assumes that you have a Visual Basic project and, when you
	want to get the path information, that you call the CheckPaths function. It
	could easily be modified to take a project as a parameter and also to do
	something different with the results.
	
	  void CheckPaths()
	  {
	     // Reference to the VSS objects
	     IVSSDatabasePtr   objVSSDatabase;
	     IVSSItemPtr       objItem;
	     IVSSItemsPtr      objItems;
	     IVSSItemPtr       vssItem;
	     IUnknownPtr       lpunk;
	     IEnumVARIANTPtr   ppvobj;
	     ULONG             fetched;
	     VARIANT           st;
	
	     try {
	        // Create the database object and open a connection to our database
	        objVSSDatabase.CreateInstance(__uuidof(VSSDatabase));
	        objVSSDatabase->Open(L"C:\\Program Files\\Microsoft Visual Studio\\Common\\VSS60a\\srcsafe.ini", L"Admin", L"");
	
	        // Create the Item object and set it to be $/ (the root project)
	        objItem = objVSSDatabase->GetVSSItem("$/", false);
	
	        // Check for pinned files in this project
	        Links(objItem);
	
	        // Get the items for this project
	        objItems = objItem->GetItems(false);
	
	        // Prepare to loop through the items
	        lpunk = objItems->_NewEnum();
	        lpunk.QueryInterface(IID_IEnumVARIANT, (void **)&ppvobj);
	
	        // Loop through the items
	        do {
	           ppvobj->Next( 1UL, &st, &fetched );
	           if( fetched != 0 ) {
	              // Try to get the item
	              if(!FAILED(st.punkVal->
	                 QueryInterface(__uuidof(IVSSItem), (void**)&vssItem))) {
	                 // If the item is a project, call the function to check if there
	                 // are subprojects in this project
	                 if (vssItem->GetType() == 0)
	                    CheckSubProjects(vssItem);
	              }
	              st.punkVal->Release();
	           }
	        } while (fetched != 0);
	
	        ppvobj->Release();
	        lpunk->Release();
	
	        // Inform the user that you are finished
	        AfxMessageBox("All Done!");
	
	     } catch (_com_error e) {
	        // Some error handlers
	     }
	  }
	
	  void CheckSubProjects(IVSSItemPtr objVSSProject)
	  {
	     // Reference to the VSS objects
	     IVSSItemsPtr     objItems;
	     IVSSItemPtr      vssItem;
	     IUnknownPtr      lpunk;
	     IEnumVARIANTPtr  ppvobj;
	     ULONG            fetched;
	     VARIANT          st;
	
	     try {
	        // Check for pinned files in this project
	        Links(objVSSProject);
	
	        // Get the items for this project
	        objItems = objVSSProject->GetItems(false);
	
	        // Prepare to loop through the items
	        lpunk = objItems->_NewEnum();
	        lpunk.QueryInterface(IID_IEnumVARIANT, (void **)&ppvobj);
	
	        // Loop through the items
	        do {
	           ppvobj->Next( 1UL, &st, &fetched );
	           if( fetched != 0 ) {
	              // Try to get the item
	              if(!FAILED(st.punkVal->
	                 QueryInterface(__uuidof(IVSSItem), (void**)&vssItem))) {
	                 // If the item is a project, call the function to check if there
	                 // are subprojects in this project
	                 if (vssItem->GetType() == 0)
	                    CheckSubProjects(vssItem);
	              }
	              st.punkVal->Release();
	           }
	        } while (fetched != 0);
	
	        ppvobj->Release();
	        lpunk->Release();
	     } catch (_com_error e) {
	        // Some error handlers
	     }
	  }
	
	  void Links(IVSSItemPtr objVSSFile)
	  {
	     // Reference to the VSS objects
	     IVSSVersionsPtr   objVersions;
	     IVSSVersionPtr    objVersion;
	     CString           UnpinArray[40];
	     CString           vssAction;
	     IUnknownPtr       lpunk;
	     IEnumVARIANTPtr   ppvobj;
	     ULONG             fetched;
	     VARIANT           st;
	     int               i, j, found;
	
	     try {
	        // Initialize variables
	        found = i = j = 0;
	
	        // Get the items for this project
	        objVersions = objVSSFile->GetVersions(0L);
	
	        // Prepare to loop through the items
	        lpunk = objVersions->_NewEnum();
	        lpunk.QueryInterface(IID_IEnumVARIANT, (void **)&ppvobj);
	
	        // Loop through the items
	        do {
	           ppvobj->Next( 1UL, &st, &fetched );
	           if( fetched != 0 ) {
	              // Try to get the item
	              if(!FAILED(st.punkVal->
	                 QueryInterface(__uuidof(IVSSVersion), (void**)&objVersion))) {
	                 // See what the event is that you are looking at
	                 vssAction = (LPCTSTR) objVersion->GetAction();
	                 // If it is a pin, check if you already have an unpin for this file
	                 if (vssAction.Left(6) == "Pinned") {
	                    for (j = 0; j <= i; j++) {
	                       if ((!UnpinArray[j].IsEmpty()) && (vssAction.Find(UnpinArray[j], 0) != -1)) {
	                          // Set found to 1, the file is not pinned.
	                          found = 1;
	                          break;
	                       }
	                    }
	
	                    // If you found it, print it out
	                    if (found == 0)
	                       OutputDebugString(vssAction);
	
	                 } else if (vssAction.Left(8) == "Unpinned") {
	                    UnpinArray[i] = vssAction.Right(vssAction.GetLength() - 10);
	                    i++;
	                 }
	              }
	              st.punkVal->Release();
	           }
	        } while (fetched != 0);
	
	        ppvobj->Release();
	        lpunk->Release();
	     } catch (_com_error e) {
	        // Some error handlers
	     }
	  }
	
	REFERENCES
	==========
	
	For more information, see the Visual SourceSafe 6.0 Automation topic on the
	following MSDN Web site at:
	
	  http://msdn.microsoft.com/library/techart/vssauto.htm
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q257989 HOWTO: Pin and Unpin Files in SourceSafe from OLE Automation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbSSafe500 kbSSafe600 kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
