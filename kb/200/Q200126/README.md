---
layout: page
title: "Q200126: HOWTO: Determining the Domain of A User Through ADSI"
permalink: kb/200/Q200126/
---

## Q200126: HOWTO: Determining the Domain of A User Through ADSI

	Article: Q200126
	Product(s): Microsoft Windows NT
	Version(s): winnt:2.0,2.5,4.0
	Operating System(s): 
	Keyword(s): kbADSI kbGrpDSPlatform kbDSupport
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Active Directory Service Interfaces, versions 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Active Directory Services Interface (ADSI) is the preferred method for
	working with Microsoft Windows NT user accounts. However, there may be times
	when the Windows NT provider in ADSI does not highlight a method or property
	needed for a specific task. In that case, determine the domain and name of the
	user being referenced by an ADsPath, so that other calls can be made.
	
	NOTE: This method only applies to Windows NT 3.0 or 4.0 domains.
	
	MORE INFORMATION
	================
	
	To determine the domain of a user given its ADsPath complete the following
	steps:
	
	1. Get the user object.
	
	2. Get the ADsPath of the object's parent.
	
	3. Verify the parent's class is "Domain".
	
	4. Get the name of the parent object.
	
	Sample Code
	-----------
	
	     /*++
	
	     ATL is used to simplify the COM interface usage
	
	     assert()'s are used instead of real error checking
	     for readability.
	
	     Build command line:<BR/>
	
	         cl main.cpp adsiid.lib activeds.lib
	
	     --*/ 
	
	     #define UNICODE
	     #define _UNICODE
	     #include <windows.h>
	     #include <activeds.h>
	     #include <atlbase.h>
	     #include <stdio.h>
	     #include <assert.h>
	     #include <atlimpl.cpp>
	
	     #define RTN_OK      0
	     #define RTN_USAGE   1
	     #define RTN_ERROR   13
	
	     extern "C" int wmain (int argc, wchar_t *argv[])
	     {
	
	         DWORD dwRes;
	         CComPtr<IADsUser> pUser;
	         CComPtr<IADs> pObject;
	         CComBSTR strDomainPath, strUser, strDomain;
	         CComBSTR strClass;
	         HRESULT hr;
	
	         // initialize COM
	         // 
	         hr = CoInitialize (NULL);
	         assert (SUCCEEDED(hr));
	
	         // check command line
	         // 
	         if (argc != 2) {
	             printf ("Usage: %S <ADS path to domain user>\n", argv[0]);
	             return (RTN_USAGE);
	         }
	
	         // get the user object
	         // 
	         hr = ADsGetObject (
	                     argv[1],
	                     IID_IADsUser,
	                     reinterpret_cast<void**>(&pUser)
	                     );
	         assert (SUCCEEDED(hr));
	
	         // get the user name
	         // 
	         hr = pUser->get_Name (&strUser);
	         assert (SUCCEEDED(hr));
	
	         // get the parent of the object
	         // 
	         hr = pUser->get_Parent (&strDomainPath);
	         assert (SUCCEEDED (hr));
	
	         hr = ADsGetObject (
	                     strDomainPath,
	                     IID_IADs,
	                     reinterpret_cast<void**>(&pObject)
	                     );
	         assert (SUCCEEDED(hr));
	
	         // verify that it's a domain - this could have been done by
	         // getting an IADsDomain interface in the ADsGetObject call...
	         // 
	         hr = pObject->get_Class (&strClass);
	         assert (SUCCEEDED(hr));
	
	         assert (!wcscmp (TEXT("Domain"), strClass));
	
	         // get the domain name
	         // 
	         hr = pObject->get_Name (&strDomain);
	         assert (SUCCEEDED(hr));
	
	         printf ("Domain of user %S is %S\n", strUser, strDomain);
	
	         return (RTN_OK);
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADSI kbGrpDSPlatform kbDSupport 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbAudDeveloper kbADSISearch kbADSI200 kbADSI250
	Version           : winnt:2.0,2.5,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
