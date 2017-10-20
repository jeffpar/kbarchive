---
layout: page
title: "Q254021: HOWTO: Return an Array of Recordsets from an ADO/RDS Server"
permalink: /kb/254/Q254021/
---

## Q254021: HOWTO: Return an Array of Recordsets from an ADO/RDS Server

{% raw %}

	Article: Q254021
	Product(s): Microsoft C Compiler
	Version(s): 2.1,2.5,2.6,6.0SP3
	Operating System(s): 
	Keyword(s): kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC260 kbATM kbmdac270
	Last Modified: 23-AUG-2001
	
	This article assumes intermediate knowledge of ATL, ADO and RDS technologies.
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0sp3 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0sp3 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0sp3 
	- Microsoft Data Access Components versions 2.1, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates one way to pass an array of Recordsets from an ActiveX
	Data Objects (ADO)/Remote Data Service (RDS) server.
	
	MORE INFORMATION
	================
	
	The following Active Template Library (ATL) server has been tested against the
	Pubs database in SQL Server version 7.0. You must have a valid data source name
	(DSN) that is named "MyDSN" and that points to the Pubs database in order to
	conduct the test successfully.
	
	Steps to Create the ATL Server
	------------------------------
	
	1. Use Appwizard to create an ATL server. You can accept the default server type
	  Dynamic Link Library to create an in-proc server.
	
	2. Add support for MFC and allow merging of proxy/stub code.
	
	3. Right click the server, browse to Add ATL object, and then add a full
	  Control. Name your control MyRsArray.
	
	4. Right click the interface for your control class (IMyRsArray), and browse to
	  Add Method. Add a method and name it GetRsArray. This method should take a
	  VARIANT * as an [in,out] parameter.
	
	5. Paste the code below into the GetRsArray method implementation:
	
	  STDMETHODIMP CMyRsArray::GetRsArray(VARIANT * pvar)
	  {
	        AFX_MANAGE_STATE(AfxGetStaticModuleState())
	  	
	        HRESULT hr;
	        _variant_t var1, var2;		// Variants to wrap the recordsets.
	
	        // Clear return value.
	        VariantClear(pvar);
	
	        SAFEARRAY * pSA;
	        // Create the safearray.
	        SAFEARRAYBOUND sabRSarray[1];  // A one-dimensional array.
	        sabRSarray[0].cElements=2;		// Two elements.
	        sabRSarray[0].lLbound=0;		//Lower bound of array.
	  	
	        pSA=SafeArrayCreate(VT_VARIANT,1, sabRSarray);
	
	        try
	        {
	             // Create the recordsets.
	  	   _RecordsetPtr RS1(__uuidof(Recordset));
	  	   _RecordsetPtr RS2(__uuidof(Recordset));
	  	  
	             _ConnectionPtr spConn1(__uuidof(Connection));
	  	   _ConnectionPtr spConn2(__uuidof(Connection));
	
	             // Make sure you pass valid connection properties to connect and get recordsets.
	             hr=spConn1->Open(OLESTR("dsn=MyDSN"),OLESTR("user_id"),
	                     OLESTR("password"), -1);
	             hr=spConn2->Open(OLESTR("dsn=MyDSN"),OLESTR("user_id"),
	                     OLESTR("password"), -1);
	
	    	   // Disconnected recordsets must use adUseClient.
	             RS1->CursorLocation = adUseClient;
	  	   RS2->CursorLocation = adUseClient;
	
	             hr=RS1->Open(OLESTR("select * from authors"), spConn1.GetInterfacePtr(), adOpenKeyset, adLockBatchOptimistic, adCmdText);
	  	       
	  	   hr=RS2->Open(OLESTR("select * from authors"), spConn2.GetInterfacePtr(), adOpenStatic, adLockBatchOptimistic, -1);
	  	
	             // Disassociate the connection from the recordset.
	             RS1->PutRefActiveConnection(NULL);
	  	   RS2->PutRefActiveConnection(NULL);
	
	  	
	            // Copy IDispatch pointer of recordset into our _variant_t array.
	             // This will AddRef the recordset one time (refcount now is 2).
	  	   var1 = _variant_t( (IDispatch*) RS1 );
	  	   var2 = _variant_t( (IDispatch*) RS2 );
	  	   RS1 = NULL;
	  	   RS2 = NULL; // refcount now is 1, variants contain last reference to recordsets.
	
	   	   // Fill the safearray.
	  	   long ndex;
	  	   ndex = 0;
	  	   hr=SafeArrayPutElement(pSA, &ndex, &var1);
	  	   ndex = 1;
	  	   hr=SafeArrayPutElement(pSA, &ndex, &var2);
	
	   	   // Load the safearray into an output variable.
	
	  	   pvar->vt = VT_ARRAY|VT_VARIANT;
	  	   pvar->parray = pSA;
	        }
	        catch( _com_error e)
	        {
	   	   hr = e.Error();
	        }
	
	        return S_OK;
	  }
	
	NOTES
	
	- pVar is the name of the VARIANT * that is passed as an input to the
	  GetRsArray method. The same pVar will hold the recordset array as an output
	  of the GetRsArray method.
	
	- Each recordset is placed into a variant before being placed in the safearray.
	
	- The safearray is then placed into a variant.
	
	- The vt of the variant that the safearray is placed into is set to
	  VT_ARRAY||VT_VARIANT. This is necessary for marshalling.
	
	REFERENCES
	==========
	
	Please refer to the Platform SDK and MSDN for more information on ATL, ADO, and
	RDS technologies.
	
	Additional query words: safe array record sets
	
	======================================================================
	Keywords          : kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC260 kbATM kbmdac270 
	Technology        : kbVCsearch kbAudDeveloper kbMDACSearch kbMDAC210 kbMDAC250 kbMDAC260 kbVC32bitSearch kbVC600SP3 kbMDAC270
	Version           : :2.1,2.5,2.6,6.0SP3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
