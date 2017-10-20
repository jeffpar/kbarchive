---
layout: page
title: "Q169927: HOWTO: Get History Using SourceSafe OLE Automation in C++"
permalink: /kb/169/Q169927/
---

## Q169927: HOWTO: Get History Using SourceSafe OLE Automation in C++

{% raw %}

	Article: Q169927
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code in this article, along with the description of the structures
	and functions used, provides a guide to retrieving a collection of SourceSafe
	items and getting the history for these items. The sample code is written in
	C++.
	
	MORE INFORMATION
	================
	
	The SourceSafe Object Model contains 7 objects. The top-most of these objects is
	the VSSDatabase object. The first step in any SourceSafe OLE Automation client
	is to make a connection to a VSSDatabase pointer through the IClassFactory
	interface. This article assumes that there is already a pointer to the
	VSSDatabase object. For more information about getting a VSSDatabase pointer,
	please see the following Knowledge Base article:
	
	  Q169928 HOWTO: Open a SourceSafe Database with OLE Automation in C++
	
	There are several operations available from the VSSItem object that produce
	collections. The Items property returns a collection of all children associated
	with a VSSItem, this is useful for listing all the children of a SourceSafe
	Project. The Checkouts property returns a collection of all checkouts on a file
	in Sourcesafe.
	
	The method discussed in this article is the Versions method, which returns a
	collection of Version objects. These represent old versions, labels and other
	actions that have been applied to the file or project in SourceSafe during its
	lifetime.
	
	Once you have a pointer to a valid IVSSItem, call the get_Versions method.
	get_Versions requires a long integer containing a number representing flag
	values, and a pointer to a pointer to an IVSSVersions object.
	
	Call the _NewEnum method from pointer to IVSSVersions passing a pointer to an
	LPUNKNOWN. Then QueryInterface on the LPUNKNOWN for an IEnumVARIANT interface.
	The IEnumVARIANT Interface supports Next, Skip, and Reset methods. Using the
	Next Method within a while loop allows you to retrieve each version within the
	collection using the punkVal property to get a pointer to IUnknown.
	
	Sample Code
	-----------
	
	     #include <windows.h>
	     #include <ocidl.h>
	     #include <stdio.h>
	     #include "ssauto.h"
	     void ListVersions( IVSSDatabase* db, LPCSTR path )
	     {
	       BSTR bstrval;
	       char lpbuf[200];
	       char lpbuf2[200];
	
	       IVSSItem     *vssi;
	       IVSSVersion  *vers;
	       IVSSVersions *vx;
	       LPUNKNOWN    lpunk;
	       IEnumVARIANT *ppvobj;
	       VARIANT      st;
	       OLECHAR*     svalue;
	       BSTR         bstrValue;
	       int          x;
	       ULONG        fetched;
	       long         lvnum;
	
	       if( (x = MultiByteToWideChar(CP_ACP, 0, path, -1, svalue, 0 )) != 1)
	       {
	         svalue = new OLECHAR[x];
	         if( MultiByteToWideChar(CP_ACP, 0, path, -1, svalue, x ) == 0 )
	           MessageBox(NULL, "Error in Conversion", "Multibytetowide", MB_OK);
	       }
	       else
	         svalue = L"";
	
	       bstrValue = SysAllocString(svalue);
	
	       if( S_OK == db->get_VSSItem(bstrValue, FALSE, &vssi) )
	       {
	         if( S_OK == vssi->get_Versions( 0l, &vx ) )
	         {
	           if( S_OK == vx->_NewEnum(&lpunk) )
	           {
	             if(!FAILED(lpunk->
	               QueryInterface(IID_IEnumVARIANT, (void**)&ppvobj)))
	             {
	               vssi->get_Spec( &bstrval );
	               x = WideCharToMultiByte( CP_ACP, 0, (LPCWSTR)bstrval, -1,
	                 lpbuf, sizeof(lpbuf), NULL, NULL );
	               printf("History of: %s\n", lpbuf );
	               printf("ACTION   USER NAME   VERSION NUMBER\n");
	
	               do
	               {
	                 ppvobj->Next( 1UL, &st, &fetched );
	                 if( fetched != 0 )
	                 {
	                   if(!FAILED(st.punkVal->
	                     QueryInterface(IID_IVSSVersion,(void**)&vers)))
	                   {
	                     vers->get_Action( &bstrval );
	                     WideCharToMultiByte( CP_ACP, 0, (LPCWSTR)bstrval, -1,
	                       lpbuf, sizeof(lpbuf), NULL, NULL );
	                     vers->get_Username( &bstrval );
	                     WideCharToMultiByte( CP_ACP, 0, (LPCWSTR)bstrval, -1,
	                       lpbuf2, sizeof( lpbuf2 ), NULL, NULL );
	                     vers->get_VersionNumber( &lvnum );
	                     printf("%s  %s  %ld\n", lpbuf, lpbuf2, lvnum );
	
	                     vers->Release();
	                   }
	                   st.punkVal->Release();
	                 }
	               } while( fetched != 0 );
	               ppvobj->Release();
	             }
	             lpunk->Release();
	           }
	           vx->Release();
	         }
	         vssi->Release();
	       }
	       SysFreeString(bstrValue);
	
	     }
	
	REFERENCES
	==========
	
	MSDN Library: IClassFactory; IEnumVARIANT Interface; Visual SourceSafe OLE
	Automation
	
	You can download the header file ssauto.h from the following Web site:
	
	  http://www.msdn.microsoft.com/SSAFE
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
