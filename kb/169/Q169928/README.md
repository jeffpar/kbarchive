---
layout: page
title: "Q169928: HOWTO: Open a SourceSafe Database with OLE Automation in C++"
permalink: /kb/169/Q169928/
---

## Q169928: HOWTO: Open a SourceSafe Database with OLE Automation in C++

	Article: Q169928
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): _IK kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains sample C++ code along with an explanation of how to get a
	pointer to a SourceSafe database object and execute the Open method to start a
	session with a SourceSafe database.
	
	MORE INFORMATION
	================
	
	Visual SourceSafe must be registered before you can use its OLE Automation
	Model. The following CLSID should be found in HKEY_CLASSES_ROOT/CLSID:
	{783CD4E4-9D54-11CF-B8EE-00608CC9A71F}. Registration occurs by default when you
	install the SourceSafe Client.
	
	To work with the objects in the SourceSafe OLE Model, first you must have access
	to a VSSDatabase object, and call its Open method.
	
	1. Use the CLSIDFromProgID function to obtain the CLSID from the registry as
	  shown in the example below.
	
	2. Call CoGetClassObject with the CLSID obtained in Step 1 asking for a pointer
	  to the IClassFactory Interface.
	
	3. Use the CreateInstance Method from the IClassFactory interface to obtain a
	  pointer to an IVSSDatabase object.
	
	4. Call the open method of the IVSSDatabase object passing in the path to the
	  srcsafe.ini, a valid User Name and password as BSTRs.
	
	NOTE: You can use the SysAllocString function to convert an OLECHAR* to a BSTR.
	
	Use the MultiByteToWide function to convert an LPSTR to OLECHAR* as shown in the
	following code fragment:
	
	     if((x=MultiByteToWideChar(CP_ACP,0,path,-1,svalue,0)) != 1)
	     {
	
	       svalue = (OLECHAR*)malloc( x*sizeof(wchar_t) );
	       if(MultiByteToWideChar(CP_ACP, 0, path, -1, svalue, x ) == 0)
	         MessageBox( NULL, "Error in Conversion", "Multibytetowide", MB_OK );
	
	     }
	     else
	
	       svalue = L"";
	
	MultiByteToWide counts the characters and determines the size of the buffer
	needed to hold the BSTR. The appropriate size buffer is then allocated and the
	conversion is done. In the example above svalue is an OLECHAR*, and path is an
	LPSTR.
	
	Sample Code
	-----------
	
	The following sample code demonstrates how to open a SourceSafe database as
	described above:
	
	     // Be sure to link with the following libraries:
	     // user32.lib uuid.lib oleaut32.lib ole32.lib
	     #define INITGUID
	     #include <windows.h>
	     #include <ocidl.h>
	     #include "ssauto.h"
	
	     int main () {
	       CLSID clsid;
	       IClassFactory *pClf;
	       IVSSDatabase *pVdb;
	       BSTR bstrPath = SysAllocString(L"c:\\VSSclient\\srcsafe.ini");
	       BSTR bstrUName = SysAllocString(L"guest");
	       BSTR bstrUPass = SysAllocString(L"");
	
	       CoInitialize(0);
	       if(S_OK == CLSIDFromProgID(L"SourceSafe", &clsid ))
	       {
	         if(S_OK == CoGetClassObject( clsid, CLSCTX_ALL, NULL,
	           IID_IClassFactory, (void**)&pClf ))
	         {
	           if(S_OK == pClf->CreateInstance( NULL, IID_IVSSDatabase,
	             (void **) &pVdb ))
	           {
	             if(S_OK == pVdb->Open(bstrPath, bstrUName, bstrUPass))
	             {
	               //Database Successfully Opened!
	               //Add code here to use the open database.
	             }
	             pVdb->Release();
	           }
	           pClf->Release();
	         }
	       }
	       CoUninitialize();
	
	       SysFreeString(bstrPath);
	       SysFreeString(bstrUName);
	       SysFreeString(bstrUPass);
	       return 0;
	
	     }
	
	REFERENCES
	==========
	
	MSDN Library: SysAllocString; SysFreeString; CLSIDFromProgID; IClassFactory;
	CoGetClassObject; Visual SourceSafe OLE Automation
	
	The header file ssauto.h can be downloaded from the following Web site:
	
	  http://www.msdn.microsoft.com/SSAFE
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
