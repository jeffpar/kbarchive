---
layout: page
title: "Q252490: HOWTO: Use ADSI to Query the Global Catalog for a UPN"
permalink: /kb/252/Q252490/
---

## Q252490: HOWTO: Use ADSI to Query the Global Catalog for a UPN

	Article: Q252490
	Product(s): Microsoft Windows NT
	Version(s): 2.0,2.5,2000
	Operating System(s): 
	Keyword(s): kbADSI kbVBp kbVC kbGrpDSMsg kbDSupport w2000adsi w2000gc kbGlobalCatalog
	Last Modified: 16-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Active Directory Service Interfaces, versions 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A User Principal Name (UPN) is composed of a user account logon name and the
	user principal name suffix joined by the "@" sign. The UPN allows for a
	simplified logon. Most commonly, the UPN is the user's e-mail address. Because
	the user principal name provides the ability to perform a single logon anywhere
	in the enterprise, the UPN is required to be unique across the entire Microsoft
	Windows 2000 forest. This is achieved by querying the Global Catalog for an
	existing user with that UPN.
	
	This article contains code samples written in Microsoft Visual Basic and
	Microsoft Visual C++ that demonstrate how to query the Global Catalog for a UPN.
	
	MORE INFORMATION
	================
	
	Before setting a UPN for a new or existing user, the Global Catalog should be
	queried. The Active Directory Users and Computers Microsoft Management Console
	(MMC) snap-in queries the Global Catalog, as should any other application making
	modifications to the UPN. Although querying the Global Catalog does not
	absolutely guarantee that a UPN is unique across the enterprise, it is a
	recommended practice that greatly reduces the chances of duplication. Following
	is a Microsoft Visual Basic/VBScript code example that uses Active Directory
	Services Interfaces (ADSI) Lightweight Directory Access Protocol (LDAP) provider
	to query the Global Catalog for a UPN:
	
	  'The following lines are commented for use in VBScript
	  Dim oConnection 'As ADODB.Connection
	  Dim oRecordset 'As ADODB.Recordset
	  Dim strQuery 'As String
	  Dim strUPN 'As String
	  Dim oCont 'As IADsContainer
	  Dim oGC 'As IADs
	  Dim strADsPath 'As String
	
	  'TO DO : Change the UPN to fit your environment
	  strUPN = "User1@Corp.com"
	
	  'Find the Global Catalog server
	  Set oCont = GetObject("GC:")
	  For Each oGC In oCont
	    strADsPath = oGC.ADsPath
	  Next
	
	  Set oConnection = CreateObject("ADODB.Connection")
	  Set oRecordset = CreateObject("ADODB.Recordset")
	  oConnection.Provider = "ADsDSOObject"  'The ADSI OLE-DB provider
	
	  oConnection.Open "ADs Provider"
	  strQuery = "<" & strADsPath & ">;(&(objectClass=user)(objectCategory=person)(userprincipalName=" & strUPN & "));userPrincipalName,cn,distinguishedName;subtree"
	  Set oRecordset = oConnection.Execute(strQuery)
	
	  If oRecordset.EOF And oRecordset.BOF Then
	    MsgBox "No duplicate UPN found"
	  Else
	    While Not oRecordset.EOF
	       MsgBox oRecordset.Fields("userPrincipalName") & " found!" & vbLf & oRecordset.Fields("cn") & " located at " & oRecordset.Fields("distinguishedName")
	       oRecordset.MoveNext
	  Wend
	  End If
	
	  Set oCont = Nothing
	  Set oGC = Nothing
	  Set oRecordset = Nothing
	  Set oConnection = Nothing
	
	Following is a similar example for use in Microsoft Visual C++:
	
	  #define UNICODE
	  #define _UNICODE
	  #include <wchar.h>
	  #include <activeds.h>
	
	  HRESULT FindUPN(LPOLESTR bstrUPN);
	
	  int wmain(int argc, wchar_t *argv[])
	  {
	  	LPOLESTR lpstrUPN=NULL;
	  	
	  	//Initialize COM
	  	CoInitialize(NULL);
	  	
	  	HRESULT hr = S_OK;
	  	
	  	if(argc != 2)
	  	{
	  		wprintf(L"This program will query the GC for the existence of a UPN\n");
	  		wprintf(L"Please enter the UPN to search for\n");
	  	}
	  	else
	  	{
	  		lpstrUPN = argv[1];
	  		hr = FindUPN(lpstrUPN);
	  		if (FAILED(hr))
	  			wprintf(L"Search failed with hr: %d\n", hr);
	  	}
	  	
	  	// Uninitialize COM
	  	CoUninitialize();
	  	return 0;
	  }
	
	  HRESULT FindUPN(LPOLESTR pszUPN)
	  {
	      HRESULT hr = E_FAIL;
	      HRESULT hrGC = S_OK;
	  	
	  	VARIANT var;
	  	ULONG lFetch;
	  	
	      // Interface Pointers
	      IDirectorySearch *pGCSearch = NULL;
	  	IADsContainer *pContainer = NULL;
	      IUnknown *pUnk = NULL;
	  	IEnumVARIANT *pEnum = NULL;
	     	IDispatch *pDisp = NULL;
	      IADs *pADs = NULL;
	  	
	  	//Bind to Global Catalog
	      hr = ADsOpenObject(L"GC:",  //NT 4.0, Win9.x client must include the servername, e.g GC://myServer
	  		NULL,
	  		NULL,
	  		ADS_SECURE_AUTHENTICATION, //Use Secure Authentication
	  		IID_IADsContainer,
	  		(void**)&pContainer);
	  	
	  	if (SUCCEEDED(hr))
	  	{
	  		hr = pContainer->get__NewEnum( &pUnk );
	  		if (SUCCEEDED(hr))
	  		{
	  			hr = pUnk->QueryInterface( IID_IEnumVARIANT, (void**) &pEnum );
	  			if (SUCCEEDED(hr))
	  			{
	  				// Now Enumerate--there should be only one item.
	  				hr = pEnum->Next( 1, &var, &lFetch );
	  				if (SUCCEEDED(hr))
	  				{
	  					while( hr == S_OK )
	  					{
	  						if ( lFetch == 1 )
	  						{
	  							pDisp = V_DISPATCH(&var);
	  							hr = pDisp->QueryInterface( IID_IDirectorySearch, (void**)&pGCSearch); 
	  							hrGC = hr;
	  						}
	  						VariantClear(&var);
	  						hr = pEnum->Next( 1, &var, &lFetch );
	  					};
	  				}
	  			}
	  			if (pEnum)
	  				pEnum->Release();
	  		}
	  		if (pUnk)
	  			pUnk->Release();
	  	}
	  	if (pContainer)
	  		pContainer->Release();
	  	
	  	
	  	if (FAILED(hrGC))
	  	{
	  		if (pGCSearch)
	  			pGCSearch->Release();
	  		return hrGC;
	  	}
	  	
	  	//Create search filter
	  	WCHAR rgSearchFilter[1024];
	  	wsprintf(rgSearchFilter,L"(&(objectCategory=person)(objectClass=user)(userPrincipalName=%s))", pszUPN);
	  	
	      //Search entire subtree from root.
	  	ADS_SEARCHPREF_INFO SearchPrefs;
	  	SearchPrefs.dwSearchPref = ADS_SEARCHPREF_SEARCH_SCOPE;
	  	SearchPrefs.vValue.dwType = ADSTYPE_INTEGER;
	  	SearchPrefs.vValue.Integer = ADS_SCOPE_SUBTREE;
	      DWORD dwNumPrefs = 1;
	  	
	  	// COL for iterations
	      ADS_SEARCH_COLUMN col;
	  	
	      // Handle used for searching
	      ADS_SEARCH_HANDLE hSearch;
	  	
	  	// Set the search preference
	      hr = pGCSearch->SetSearchPreference( &SearchPrefs, dwNumPrefs);
	      if (FAILED(hr))
	          return hr;
	  	// Set attributes to return
	  	CONST DWORD dwAttrNameSize = 3;
	      LPOLESTR pszAttribute[dwAttrNameSize] = {L"cn",L"distinguishedName",L"userPrincipalName"};
	  	
	      // Execute the search
	      hr = pGCSearch->ExecuteSearch(rgSearchFilter,
	  		pszAttribute,
	  		dwAttrNameSize,
	  		&hSearch
	  		);
	  	if ( SUCCEEDED(hr) )
	  	{    
	  		if(pGCSearch->GetFirstRow(hSearch) ==  S_ADS_NOMORE_ROWS )
	  		{
	  			wprintf(L"There is no UPN with that value\n");
	  		}
	  		else   //The UPN was found
	  		{
	  			do
	  			{	
	  				// loop through the array of passed column names,
	  				// print the data for each column
	  				for (DWORD x = 0; x < dwAttrNameSize; x++)
	  				{
	  					
	  					// Get the data for this column
	  					hr = pGCSearch->GetColumn( hSearch, pszAttribute[x], &col );
	  					
	  					if ( SUCCEEDED(hr) )
	  					{
	  						// Print the data for the column and free the column
	  						// Note the attributes we asked for are type CaseIgnoreString.
	  						wprintf(L"%s: %s\r\n",pszAttribute[x],col.pADsValues->CaseIgnoreString); 
	  						pGCSearch->FreeColumn( &col );
	  					}
	  					else
	  						wprintf(L"<%s property is not a string>",pszAttribute[x]);
	  				}
	  				wprintf(L"------------------------------\n");
	  			}
	  			while( pGCSearch->GetNextRow( hSearch) != S_ADS_NOMORE_ROWS );
	  		}
	  		// Close the search handle to clean up
	          pGCSearch->CloseSearchHandle(hSearch);
	
	  	} 
	  	if (pGCSearch)
	  		pGCSearch->Release();
	      return hr;
	  }
	
	REFERENCES
	==========
	
	For information about duplicate user principal names see the following article
	in the Microsoft Knowledge Base:
	
	  Q251359 PRB: Possible Duplicate User Principal Names
	
	For additional information about Active Directory Services Interfaces (ADSI), see
	the following web site:
	
	  http://www.microsoft.com/adsi
	
	For code examples of retrieving UPN suffixes, creating users, and modifying UPNs,
	see the samples and documentation located in the Platform SDK, which is
	available from the following Microsoft Web site:
	
	  http://msdn.microsoft.com/downloads/default.asp?URL=/code/topic.asp?URL=/msdn-files/028/000/123/topic.xml
	
	Additional query words: ldap adsi
	
	======================================================================
	Keywords          : kbADSI kbVBp kbVC kbGrpDSMsg kbDSupport w2000adsi w2000gc kbGlobalCatalog 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbAudDeveloper kbADSISearch kbWinAdvServSearch kbADSI200 kbADSI250
	Version           : :2.0,2.5,2000
	Issue type        : kbhowto
	
	=============================================================================
	
