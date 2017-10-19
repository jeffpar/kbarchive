---
layout: page
title: "Q177911: OLE2BIN Sample - Storing COleClientItems in a Database"
permalink: /kb/177/Q177911/
---

## Q177911: OLE2BIN Sample - Storing COleClientItems in a Database

	Article: Q177911
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbDatabase kbMFC kbODBC kbVC
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The OLE2BIN sample demonstrates how to save and load an MFC COleClientItem from
	a Access database (.mdb file). The storage and any COleClientItem data are
	stored.
	
	STEP2 of the Container tutorial sample was used as the starting point to
	demonstrate this technique. A Database menu was added, with two submenus, Save
	Object and Load Object. To save an object to the database, click a
	COleClientItem to select it and then click Save Object on the Database menu. You
	will be asked to provide a name for the object, which can then be used later to
	load the object from the database.
	
	To load an object, click Load Object on the Database menu. You will be asked to
	select an object that was previously saved. When you first run the sample, there
	is an object that has already been placed in the database.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Ole2bin.exe
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	The core functionality of the sample is located in two functions,
	CContainerView::OnDatabaseLoad() and CContainerView::OnDatabaseSave().
	
	Below is the code for the OnDatabaseSave() function. The only item that is not
	well documented is the m_bForceFlat member. This member tells the archive to
	store the data without creating additional substorages. All the data is saved
	into the one stream.
	
	NOTE: Because the COleClientItem is serialized, not only is the OLE storage
	saved, but all of the COleClientItem's data (position, display aspect, and so
	on) is also saved.
	
	Here is the OnDatabaseSave() method:
	------------------------------------
	
	     static const TCHAR szContents[] = _T("Contents");
	     #define INITIAL_ALLOC_SIZE 100000
	
	     void CContainerView::OnDatabaseSave()
	     {
	        LPLOCKBYTES pLockBytes = NULL;
	        LPSTORAGE pStorage = NULL;
	
	        ASSERT(m_pSelection != NULL);
	
	        CNameDlg dlg;
	        if (dlg.DoModal() == IDCANCEL || dlg.m_Name == "")
	        {
	           return;
	        }
	
	        CDatabase db;
	        if (!db.OpenEx("DRIVER=Microsoft Access Driver
	           (*.mdb);DBQ=BinDB.MDB;FIL=MS Access for Microsoft
	           Access;UID=Admin;PWD=;"))
	        {
	           AfxMessageBox("Access ODBC Driver not installed");
	           return;
	        }
	
	        CObjectSet rs(&db);
	        rs.Open();
	        rs.AddNew();
	
	        rs.m_Name = dlg.m_Name;
	
	        GlobalFree(rs.m_OleObject.m_hData);
	
	        rs.m_OleObject.m_hData = GlobalAlloc(GMEM_MOVEABLE,
	           INITIAL_ALLOC_SIZE);
	
	        if (FAILED(CreateILockBytesOnHGlobal(rs.m_OleObject.m_hData,FALSE,
	                     &pLockBytes)))
	        {
	           AfxMessageBox("Unable to retrieve LockBytes");
	           return;
	        }
	
	        if (FAILED(StgCreateDocfileOnILockBytes(pLockBytes, STGM_DIRECT |
	                STGM_CREATE | STGM_READWRITE | STGM_SHARE_EXCLUSIVE, 0,
	                &pStorage)))
	        {
	          AfxMessageBox("Failure creating storage on LockBytes");
	          pLockBytes->Release();
	          return;
	        }
	
	        COleStreamFile file;
	        CFileException fe;
	        if (!file.CreateStream(pStorage, szContents,
	              CFile::modeReadWrite|CFile::shareExclusive|CFile::modeCreate,
	              &fe))
	        {
	          AfxThrowFileException(fe.m_cause, fe.m_lOsError);
	        }
	
	        // save to Contents stream
	        CArchive saveArchive(&file, CArchive::store |
	                               CArchive::bNoFlushOnDelete);
	        saveArchive.m_pDocument = GetDocument();
	        saveArchive.m_bForceFlat = TRUE;
	
	        TRY
	        {
	            m_pSelection->Serialize(saveArchive);
	            saveArchive.Close();
	            file.Close();
	
	            // commit the storage
	            SCODE sc = pStorage->Commit(STGC_ONLYIFCURRENT);
	            if (sc != S_OK)
	              AfxThrowOleException(sc);
	        }
	        CATCH_ALL(e)
	        {
	            file.Abort();   // will not throw an exception
	            THROW_LAST();
	        }
	        END_CATCH_ALL
	
	        rs.SetFieldDirty(&rs.m_OleObject);
	        rs.SetFieldNull(&rs.m_OleObject, FALSE);
	
	        STATSTG statstg;
	        pLockBytes->Stat(&statstg,  STATFLAG_NONAME);
	        rs.m_OleObject.m_dwDataLength = statstg.cbSize.LowPart;
	
	        rs.Update();
	        rs.Close();
	
	        pLockBytes->Release();
	        pStorage->Release();
	     }
	
	Here is the OnDatabaseLoad() method, which is just the opposite of the
	OnDatabaseSave() method:
	-----------------------------------------------------------------------------------------------
	
	     void CContainerView::OnDatabaseLoad()
	     {
	        LPSTORAGE pStorage = NULL;
	        LPLOCKBYTES pLockBytes = NULL;
	
	        // Make certain there are objects in the database
	        // If there are, bring up dialog for user to select an object
	        CDatabase db;
	        if (!db.OpenEx("DRIVER=Microsoft Access Driver
	           (*.mdb);DBQ=BinDB.MDB;FIL=MS Access for Microsoft
	           Access;UID=Admin;PWD=;"))
	        {
	           AfxMessageBox("Access ODBC Driver not installed");
	           return;
	        }
	
	        CObjNameSet rsObjName(&db);
	
	        rsObjName.Open();
	        if (rsObjName.IsEOF())
	        {
	            rsObjName.Close();
	            AfxMessageBox("No objects exist in the database.");
	            return;
	        }
	
	        CObjDlg dlg(&rsObjName);
	        if (dlg.DoModal() == IDCANCEL)
	        {
	           return;
	        }
	
	        rsObjName.Close();
	
	        CObjectSet rs(&db);
	
	        CContainerItem * pItem = new CContainerItem;
	
	        rs.m_strFilter = "Name = '" + dlg.m_ObjectName + "'";
	
	        rs.Open();
	
	        if (FAILED(CreateILockBytesOnHGlobal(rs.m_OleObject.m_hData, FALSE,
	                      &pLockBytes)))
	        {
	            AfxMessageBox("Unable to retrieve LockBytes");
	            return;
	        }
	
	        HRESULT hr = StgOpenStorageOnILockBytes(pLockBytes, NULL,
	                      STGM_DIRECT | STGM_READ | STGM_SHARE_EXCLUSIVE  , NULL,
	                      0, &pStorage);
	
	        if (FAILED(hr))
	        {
	           AfxMessageBox("Failure opening storage");
	           pLockBytes->Release();
	           return;
	        }
	
	        COleStreamFile file;
	        CFileException fe;
	        if (!file.OpenStream(pStorage, szContents,
	               CFile::modeRead|CFile::shareExclusive, &fe))
	        {
	           if (fe.m_cause == CFileException::fileNotFound)
	              AfxThrowArchiveException(CArchiveException::badSchema);
	           else
	              AfxThrowFileException(fe.m_cause, fe.m_lOsError);
	        }
	
	        CArchive loadArchive(&file, CArchive::load |
	                             CArchive::bNoFlushOnDelete);
	        loadArchive.m_pDocument = GetDocument();
	        loadArchive.m_bForceFlat = TRUE;
	
	        TRY
	        {
	           pItem->Serialize(loadArchive);     // load main contents
	           loadArchive.Close();
	           file.Close();
	        }
	        CATCH_ALL(e)
	        {
	           file.Abort();   // will not throw an exception
	           // remove item because it didn't fully loaded
	           GetDocument()->RemoveItem(pItem);
	           THROW_LAST();
	        }
	        END_CATCH_ALL
	
	        rs.Close();
	
	        db.Close();
	
	        pLockBytes->Release();
	
	        GetDocument()->UpdateAllViews(NULL);
	     }
	
	Additional query words: OLE Field BLOB Binary kbVC500 kbVC600
	
	======================================================================
	Keywords          : kbfile kbSample kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :5.0,6.0
	
	=============================================================================
	
