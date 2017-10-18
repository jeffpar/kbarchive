---
layout: page
title: "Q152533: CLIBIN.EXE Converting COleClientItem into CLongBinary"
permalink: kb/152/Q152533/
---

## Q152533: CLIBIN.EXE Converting COleClientItem into CLongBinary

	Article: Q152533
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbcode kbfile kbsample kbDAOsearch kbDatabase kbMFC kbODBC kbVC
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CLIBIN.EXE is a Microsoft Foundation Class sample that demonstrates how to write
	the data from an OLE Embedded Item to an OLE Object field in an Access 7.0
	Database. This particular sample uses the MFC/ODBC classes.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Clibin.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	NOTE: Use the -d option when running CLIBIN.EXE to decompress the file and
	recreate the proper directory structure.
	
	MORE INFORMATION
	================
	
	This sample writes the OLE Embedded Item's data to an Access OLE Object field
	from within the Container App's OnInsertItem member of the CView class. There is
	an Access database that goes along with this sample located in the project's
	directory called "longbin.mdb." Remember to register this .mdb file with the
	ODBC Administrator.
	
	The following code demonstrates how to accomplish this procedure:
	
	Sample Code
	-----------
	
	      ////////////////////////////////////////////////////////////////// 
	      // Extract COleClientItem data and write it out to an Access Field
	      // m_pSet is the recordset object
	      // The recordset's CLongBinary member is: m_longbin
	      // pItem is the COleClientItem object ( embed item )
	
	      /****************************************************************/ 
	      //NOTE: This is a constant large enough for an average Winword
	      // document. Increase this number if the item you will be
	      // inserting is larger!!!!!!!!
	      const int DOCSIZE = 100000;
	
	      LPPERSISTSTORAGE pPersist = NULL;
	      LPLOCKBYTES pLockBytes = NULL;
	      LPSTORAGE pStorage = NULL;
	      LPVOID pVoid = NULL;
	      HRESULT hr = S_OK;
	
	      // make sure the recordset is in Add mode
	      m_pSet->AddNew( );
	
	      // free the current memory of the CLongBinary
	      GlobalFree( m_pSet->m_longbin.m_hData );
	
	      // pItem ( the COleClientItem object ) has a contained IOleObject
	      // interface called m_lpObject.
	      // Call QI to get the OLE objects data.
	      if( FAILED( pItem->m_lpObject->QueryInterface( IID_IPersistStorage,
	                                                 (LPVOID*)&pPersist ) ) )
	      {
	          AfxMessageBox( _T( "interface not found" ) );
	          return;
	      }
	
	      // Alloc the CLongBinary
	      if( ( m_pSet->m_longbin.m_hData =
	                       GlobalAlloc( GMEM_MOVEABLE, DOCSIZE ) ) == NULL )
	      {
	          AfxMessageBox( _T( "memory error" ) );
	          goto term1; // special error condition clean-up label
	      }
	
	      // Now lock it so we can write to it.
	      if( ( pVoid = GlobalLock( m_pSet->m_longbin.m_hData ) ) == NULL )
	      {
	          AfxMessageBox( _T( "memory error" ) );
	          goto term1; // special error condition clean-up label
	      }
	
	      // Create ILockBytes to be converted to an IStorage
	      if( FAILED( CreateILockBytesOnHGlobal( m_pSet->m_longbin.m_hData,
	                                              FALSE, &pLockBytes ) ) )
	      {
	          AfxMessageBox( _T( "interface not found" ) );
	          goto term1; // special error condition clean-up label
	      }
	
	      // Convert the ILockBytes to an IStorage
	      if( FAILED( StgCreateDocfileOnILockBytes( pLockBytes, STGM_DIRECT
	                 | STGM_CREATE | STGM_READWRITE | STGM_SHARE_EXCLUSIVE,
	                                                          0, &pStorage ) ) )
	      {
	          AfxMessageBox( _T( "interface not found" ) );
	          goto term2; // special error condition clean-up label
	      }
	
	      // Now we can write the item's persistent data into the storage
	      // we've provided.
	      if( FAILED( pPersist->Save( pStorage, FALSE ) ) )
	      {
	          AfxMessageBox( _T( "Save failed" ) );
	          goto term3; // special error condition clean-up label
	      }
	
	      // manage the field state for CLongBinary RFX
	      m_pSet->SetFieldDirty( &m_pSet->m_longbin, TRUE );
	      m_pSet->SetFieldNull( &m_pSet->m_longbin, FALSE );
	
	      // set the CLongBinary length
	      m_pSet->m_longbin.m_dwDataLength =
	                                GlobalSize(m_pSet->m_longbin.m_hData );
	
	      // Update the datasource
	      m_pSet->Update( );
	
	      // clean-up
	      GlobalFree( m_pSet->m_longbin.m_hData );
	      pStorage->Release( );
	      pLockBytes->Release( );
	      pPersist->Release( );
	      return;
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kbcode kbfile kbsample kbDAOsearch kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	
	=============================================================================
	
