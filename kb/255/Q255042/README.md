---
layout: page
title: "Q255042: HOWTO: Make Machine Accounts by Using ADSI with Visual C++"
permalink: /kb/255/Q255042/
---

## Q255042: HOWTO: Make Machine Accounts by Using ADSI with Visual C++

{% raw %}

	Article: Q255042
	Product(s): Microsoft Windows NT
	Version(s): 2.5
	Operating System(s): 
	Keyword(s): kbADSI kbMsg kbOSWin2000 kbVC kbGrpDSMsg kbAudDeveloper kbHOWTOmaster
	Last Modified: 13-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Active Directory Service Interfaces, version 2.5, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Steps and Sample Code for Making a Machine Account
	- Building this Sample
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This article illustrates how to write a Visual C++ application that uses Active
	Directory Service Interfaces (ADSI) through the the LDAP provider to create
	machine accounts on a Windows 2000 domain.
	
	Steps and Sample Code for Making a Machine Account
	--------------------------------------------------
	
	1. Bind to LDAP://RootDSE.
	
	2. Build ADsPath for the computer's container using the defaultNamingContext
	  property of the RootDSE object and the well-known GUID (WKGUID) of the
	  computer's container (aa312825768811d1aded00c04fd8d5cd).
	
	3. Bind to the computer's container by requesting an IDirectoryObject interface.
	  Use the IDirectoryObject::QueryInterface method to obtain an IADsContainer
	  interface.
	
	4. Create a new computer object using the IADsContainer::Create method. The
	  IADsContainer::Create method returns an IDispatch pointer for the new
	  computer object. ADsPath is used to create the new computer object and must
	  contain the prefix "CN=" on the new computer name.
	
	5. Obtain an IADsUser interface for the new computer object by using the
	  IDispatch::QueryInterface method returned by the IADsContainer::Create call.
	  The IADsUser interface allows easy access to specific properties of the new
	  computer account such as samAccountName, AccountDisabled, and the
	  IADsSecurityDiscriptor interface.
	
	6. Set samAccountName to the computer name with a "$" appended to the end.
	
	7. Set the initial password for the new computer account using the
	  IADsUser::SetPassword method. The initial password for the machine account
	  must be set to the name of the computer in lower case.
	
	8. Add Access Control Entry for the user or group that has permissions to add
	  the machine to the domain. The access control entry rights added by the
	  sample code grants full permissions to the trustee. When the ADSI Users and
	  Computers snap-in is used to add a computer account, specific access control
	  entry is added to the ACL that grant the minimum rights necessary to join the
	  computer to the domain. Note that determining the minimum access right
	  (Access Control Entry) is left as an exercise for the reader. Reference the
	  ADSI User and Computers snap-in documentation for details on how to view the
	  extended rights for the machine account.
	
	9. Enable the computer account by setting the IADsUser::AccountDisabled property
	  to zero. This step is necessary for a Windows NT 4.0 machine account. If the
	  account is disabled for a Windows NT 4.0 computer, then the computer is not
	  able to join the domain. This step is optional for computers running Windows
	  2000 because the machine account is enabled once the computer running Windows
	  2000 attempts to log onto the network.
	
	Building this Sample
	--------------------
	
	1. In Visual Studio Visual C++, make a new Win32 Console Application by
	  selecting to make a Simple Application. Do not modify the StdAfx.Cpp file.
	
	2. Paste the following code into a new project source file:
	
	  /*
	  **  Machineacc.cpp creates a machine account on an Windows 2000 domain
	  **    using ADSI and the LDAP provider.
	  **
	  **  Libraries:   activeds.lib, adsiid.lib
	  **
	  **  Copyright (c) 1998 Microsoft Corporation
	  **  All Rights Reserved
	  ** 
	  */ 
	
	  #include "stdafx.h"
	  #define UF_WORKSTATION_TRUST_ACCOUNT 0x1000
	  #define UF_ACCOUNTDISABLE  0x2
	  #define UF_PASSWD_NOTREQD  0x20
	  #define ADS_GUID_COMPUTRS_CONTAINER L"aa312825768811d1aded00c04fd8d5cd"
	  #define ADS_ACETYPE_ACCESS_ALLOWED 0
	  #define ADS_ACEFLAG_INHERIT_ACE 2
	
	  HRESULT workWithSD(VARIANT pAds, WCHAR *Trustee);
	  IADsAccessControlEntry *createAce(
	                     long mask,
	                     long type, 
	                     long flag,
	                     BSTR trustee);
	
	  void ParseCommandLine( int iCount, char *args[], BSTR *newmachine, 
	  BSTR *newmachine2, BSTR *newmachinepassword, WCHAR *trustee);
	  void PrintUsage( char * );
	
	  int main( int argc, char *argv[])
	  {
	      IADs             *pNS = NULL,
	                       *pRoot=NULL,
	  		     *pIADs = NULL,
	                       *pAuth=NULL;
	      IDirectoryObject *pCompContObject=NULL; //pICompDirObj
	      IADsGroup        *pGrp = NULL;
	      IADsContainer	 *pICompContainer= NULL;
	      IADsComputer	 *pIComputer = NULL;
	
	      WCHAR adsPath[255];
	      
	      IADsOpenDSObject *pDSObj=NULL;
	
	      HRESULT hr;
	  	
	      DWORD lFlag;
	      VARIANT var;
	      VariantInit(&var);
	      //----PARAMETERS ----
	
	      lFlag = UF_WORKSTATION_TRUST_ACCOUNT | UF_ACCOUNTDISABLE | UF_PASSWD_NOTREQD;
	      //----BUILD WELL-KNOWN GUID ADSPATH FOR COMPUTER CONTAINER----
	
	      hr = CoInitialize(NULL);
	
	      // 
	      //Allocate bstrs for the object class, the new machine name, and the
	      //machine accounts user name.
	      // 
	      BSTR computerclass = SysAllocString(L"computer");
	      BSTR newmachinename, newmachinename2, newmachinepassword;
	      WCHAR Trustee[255];
	      ParseCommandLine( argc, argv, &newmachinename, &newmachinename2, &newmachinepassword, Trustee);
	      // 
	      // You need an IADs interface for the LDAP provider.
	      // 
	
	      hr = ADsGetObject(TEXT("LDAP://rootDSE"),
	                        IID_IADs,
	                        (void**)&pRoot);
	
	      if (FAILED(hr)) {
	         wprintf(L"Bind to rootDSE failed: 0x%x\n", hr);
	         return hr;
	      }
	
	      hr = pRoot->Get(L"defaultNamingContext",&var);
	      wcscpy(adsPath,L"LDAP://<WKGUID=");
	      wcscat(adsPath,ADS_GUID_COMPUTRS_CONTAINER);
	      wcscat(adsPath,L",");
	      wcscat(adsPath,var.bstrVal);
	      wcscat(adsPath,L">");
	      hr = ADsGetObject(adsPath, IID_IADs, (void**) &pIADs);
	      
	
	      // Bind again to get the correct ADsPath.
	
	      hr = pIADs->Get(L"distinguishedName",&var);
	      wcscpy(adsPath,L"LDAP://");
	      wcscat(adsPath,var.bstrVal);
	      pIADs->Release();
	      // 
	      // You need an IDispatch pointer for the new computer object,
	      // declare one.
	      // 
	      IDispatch	 *pIDispatch;
	      // 
	      // Retrieve the IAdsContainer interfaces from the Computers container.  
	      // Use the Create method to obtain an IDispatch pointer to the new computer account
	      // Then QI for the IAdsUser interface.  This interfaces allow you to
	      // set the samAccountName for the computer account (new machine with a "$" appended)
	      // 
	      hr = ADsGetObject(adsPath, IID_IDirectoryObject, (void**) &pCompContObject);
	      hr = pCompContObject->QueryInterface(IID_IADsContainer,(void**) &pICompContainer);
	      hr = pICompContainer->Create(computerclass,newmachinename, &pIDispatch);
	      // 
	      // Set the property BSTR with the samAccountName property and set the
	      // password for the machine account. The initial password is the same
	      // as the computer name.  A new password is to be negotiated between the 
	      // machine the domain on a periodic basis.
	      // 
	      BSTR property = SysAllocString(L"samAccountName");
	      IADsUser	*pCompUser = NULL;
	      // 
	      // Set up the variant structure for the computer account name.
	      // 
	      VariantInit(&var);
	      var.vt = VT_BSTR;
	      var.bstrVal = newmachinename2;
	      // 
	      // Need an IAdsUser interface, QI the IDispatch pointer of the new computer object
	      // for it.
	      // 
	      hr = pIDispatch->QueryInterface(IID_IADsUser, (void**) &pCompUser);
	      // 
	      // Set the samAccountName and other properties of the 
	      // the machine account.
	      // 
	      hr = pCompUser->Put(property,var);
	      // 
	      // Set up the Variant structure with the userAccountControl flags.
	      // 
	      VariantInit(&var);
	      var.vt=VT_I4;
	      var.lVal = (LONG) lFlag;
	      SysFreeString( property);
	      property = SysAllocString(L"userAccountControl");
	      hr = pCompUser->Put(property,var);
	      // 
	      // Be sure to flush the changes in the local ADSI cache to the DC 
	      // by using the SetInfo call on the 
	      // user object.
	      // 
	      hr = pCompUser->SetInfo();
	      // 
	      // Set the initial password on the machine account.
	      // 
	      hr = pCompUser->SetPassword(newmachinepassword);
	      // 
	      // Free the system allocated BSTR values.
	      // 
	      SysFreeString(property);
	      SysFreeString(newmachinename);
	      SysFreeString(newmachinepassword);
	      SysFreeString(computerclass);
	      // 
	      // 
	      // Obtain the machine account SID and add some entries to its ACL.
	      // The ntSecurityDesciptor property returns as an IDispatch pointer in the
	      // variant var
	      // 
	      property=SysAllocString(L"ntSecurityDescriptor");
	      VariantClear(&var);
	      hr = pCompUser->Get(property,&var);
	      // 
	      // Set the sid.
	      // AddRef the IDispatch pointer because we are handing it off
	      // to another routine.
	      // 
	      V_DISPATCH(&var)->AddRef();
	      // 
	      // WorkWithSD adds entries to the ACL. ( See the below)
	      // 
	      hr = workWithSD(var, Trustee);
	      // 
	      // Put the modified security descriptor back into the ntSecurityDescriptor property.
	      // Note that this is done on the local system's ADSI cache; force the changes to 
	      // the AD by calling pCompUser->SetInfo.
	      // 
	      hr=pCompUser->Put(property,var);
	      hr = pCompUser->SetInfo();
	      V_DISPATCH(&var)->Release();	
	      VariantClear(&var);
	      // 
	      //Enable account by setting the AccountDisbled property to 0
	      //	
	      var.vt=VT_BOOL;
	      var.boolVal = 0;
	      hr = pCompUser->put_AccountDisabled (0);
	      hr = pCompUser->SetInfo();
	      // 
	      // Clean up.
	      // 
	      if( pCompUser) pCompUser->Release();
	      if( pIDispatch) pIDispatch->Release();
	      if( pCompContObject ) pCompContObject->Release();
	      if( pICompContainer ) pICompContainer->Release();
	      return S_OK;
	  }
	
	  // 
	  // WorkWithSD takes a Variant pointer to an IDispatch interface
	  // for a security descriptor.
	  // 
	  // Retrieves the discretionary ACL and adds the necessary entries for a computer account.
	  // 
	  HRESULT workWithSD(VARIANT pAds, WCHAR *Trustee)
	  {
	
	     HRESULT hr;
	     // 
	     // We have an IDispatch pointer, we need an IADsSecurityDescriptor pointer.
	     // Request one from the IDispatch pointer using the QI method.
	     // 
	     IADsSecurityDescriptor *pSD;
	     hr = V_DISPATCH(&pAds)->QueryInterface(IID_IADsSecurityDescriptor,
	                                    (void**)&pSD);
	    
	     if(!pSD) {
	         V_DISPATCH(&pAds)->Release();
	         return (0);
	     }
	     // 
	     // The Discretionary ACL is returned as an IDispatch pointer,
	     // Declare and IDispatch pointer and then QI the pointer for an IADsAccessControlList 
	     // pointer.
	     // 
	     IDispatch *pDisp;
	     IADsAccessControlList *dacl;
	     hr = pSD->get_DiscretionaryAcl(&pDisp);
	     hr = pDisp->QueryInterface(IID_IADsAccessControlList, 
	                                (void**)&dacl);
	     IADsAccessControlEntry *pAce; 
	     // 
	     // Declare an ace pointer, then use the createAce function to create
	     // one for the appropriate trustee.
	     // 
	     pAce = createAce(-1,                    // full permissions
	                       ADS_ACETYPE_ACCESS_ALLOWED,
	                       ADS_ACEFLAG_INHERIT_ACE,
	                       Trustee);
	     // 
	     // The AddAce method on the ACL object expects a IDispatch pointer, not
	     // a IAdsAccessControlEntry pointer, QI for the IDispatch pointer from the
	     // Ace, then use this IDispatch pointer as the argument to the AddAce method
	     // on the ACL.
	     // 
	  	IDispatch *pAceDisp;
	  	
	      hr = pAce->QueryInterface(IID_IDispatch,(void**)&pAceDisp);
	      if(FAILED(hr)) {
	          pAce->Release();
	          return hr;
	      }
	      // 
	      // Add the IDispatch pointer for the ACE to the ACL.
	      // Because you are done with it release it.
	      //   
	      hr = dacl->AddAce(pAceDisp);
	      pAceDisp->Release();
	      // 
	      // Remember the pDisp pointer that contains an IDispatch pointer for
	      // the ACL.
	      // 
	      // Put the ACL back into the SD using the IDispatch pointer for the
	      // ACL, then clean up and exit.
	      // 
	      hr = pSD->put_DiscretionaryAcl(pDisp);
	      if(dacl) dacl->Release();
	      if(pSD)  pSD->Release();
	      if(pAce) pAce->Release();
	      return S_OK;
	  }
	
	  //////////////////////////////////// 
	  // Function to create an allowed ACE
	  //////////////////////////////////// 
	  IADsAccessControlEntry *createAce(
	                     long mask,
	                     long type, 
	                     long flag,
	                     BSTR trustee)
	  {
	      HRESULT hr;
	      IADsAccessControlEntry *pAce;
	      hr = CoCreateInstance(CLSID_AccessControlEntry,
	                            NULL,
	                            CLSCTX_INPROC_SERVER,
	                            IID_IADsAccessControlEntry,
	                            (void**)&pAce);
	      if(FAILED(hr)) {
	          if(pAce) pAce->Release();
	          return NULL;
	      }
	
	      hr = pAce->put_AccessMask(mask); 
	      hr = pAce->put_AceType(type);
	      hr = pAce->put_AceFlags(flag);
	      hr = pAce->put_Trustee(trustee); 
	      return pAce;
	  }
	  // 
	  // Parse the command line for the sample.  Command line should look like this:
	  // 
	  // app new_machine_account_name Trustee
	  // 
	  // Trustee should have the form: Domain/[user|group]
	  // 
	  // Function returns the new machine name, the SamAccountname and the trustee
	  // to the caller or it forces termination of the application.
	  // 
	  void ParseCommandLine( int iCount, char *args[], BSTR *newmachine, BSTR *newmachine2, BSTR *newmachinepassword, WCHAR *trustee)
	  {
	      WCHAR *arg1, *arg2, *tmp;
	      if( iCount < 2 ) 
	      {
	          PrintUsage( args[0] );
	          exit(1);
	      }
	      // 
	      // We have the correct number of arguments,
	      // convert the args to WCHAR from char and add the CN=
	      // to create a valid common name property for the machine account.
	      // 
	      arg1 = new WCHAR[strlen(args[1])+1]; // Allocate space
	      tmp = new WCHAR[strlen(args[1])+4];  // Allocate the temp buffer with space for CN=
	      tmp[0] = (WCHAR)NULL;                // Terminate the temp buffer.
	      wcscat( tmp, L"CN=");                // Add the CN= to the temp buffer.
	      mbstowcs( arg1, args[1], strlen(args[1])); // Convert the machine name. to unicode
	      arg1[strlen(args[1])] = (WCHAR)NULL; // Terminate the machine name.
	      wcscat( tmp, arg1);                  // Add it to the temp buffer.
	      mbstowcs( trustee, args[2], strlen(args[2]));  // Convert the trustee. argument to UNICODE
	      trustee[strlen(args[2])] = (WCHAR)NULL; // Terminate it
	      // 
	      // Convert the machine name to lower case without the CN=
	      // 
	      WCHAR *str;
	      for( str = arg1; str < arg1 + wcslen(arg1); str++) *str = towlower( *str );
	      // 
	      // Create Sam Account Name. 
	      // 
	      arg2 = new WCHAR[strlen(args[1])+2];    // Allocate the sam account. name
	      mbstowcs( arg2, args[1], strlen(args[1])); // Convert the sam account. to UNICODE
	      arg2[strlen(args[1])] = (WCHAR)NULL;    // Terminate it.
	      wcscat( arg2, L"$");                    // Add the $ sign to the end to make it valid.
	      // 
	      // Allocate BSTRs.
	      // 
	      *newmachine = SysAllocString( tmp );  
	      *newmachine2 = SysAllocString( arg2 );
	      *newmachinepassword = SysAllocString( arg1);
	      // 
	      // Clean up.
	      // 
	      delete[] tmp;
	      delete[] arg1;
	      delete[] arg2;
	
	      return;
	
	  }
	  // 
	  // PrintUsage
	  // Prints command line help. 
	  // 
	  void PrintUsage( char *ProgName)
	  {
	  	printf("ERROR: Wrong number of arguments.\n\n");
	  	printf("Command line : %s New_Machine Trustee\n", ProgName );
	  	printf("Where:\nNew_Machine is the new machine account name\n");
	  	printf("Trustee is the Trustee of the account in the form of Domain\\[user|group]\n");
	  	printf("Halting Execution.\n");
	  }
	
	3. Replace the code in StdAdx.h with the following code:
	
	  // 
	  // Stdafx.h: include file for standard system include files,
	  //  or project specific include files that are used frequently, but
	  //      are changed infrequently.
	  // 
	
	  #if !defined(AFX_STDAFX_H__AAEF26DD_E0AA_11D2_BC85_00C04FD430AF__INCLUDED_)
	  #define AFX_STDAFX_H__AAEF26DD_E0AA_11D2_BC85_00C04FD430AF__INCLUDED_
	
	  #if _MSC_VER > 1000
	  #pragma once
	  #endif // _MSC_VER > 1000
	
	  #define _WIN32_WINNT 0x0500 // VC6 doesn't do this.
	  #define UNICODE
	  #define _UNICODE
	  #define WIN32_LEAN_AND_MEAN
	  #define SECURITY_WIN32
	  #include <tchar.h>
	  #include <windows.h>
	  #include <objbase.h>
	  #include <stdio.h>
	  #include <security.h>
	  #include <activeds.h>	/* adsi */ 
	
	  // TODO: reference additional headers your program requires here.
	
	  //{{AFX_INSERT_LOCATION}}
	  // Microsoft Visual C++ inserts additional declarations immediately before the previous line.
	
	  #endif // !defined(AFX_STDAFX_H__AAEF26DD_E0AA_11D2_BC85_00C04FD430AF__INCLUDED_)
	
	4. On the Project menu, select Settings. On the Link tab, add Activeds.lib and
	  Adsiid.lib to the Object/Libraries module.
	
	5. Build the project.
	
	6. To run the application, supply two command line parameters in this format
	
	  NewComputerAccountName NTDomainName\NTName
	
	  where NewComputerName is the name of the new computer object. NTDomain\NTName
	  is the user or group that has the right to add the machine to the domain.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q222525 Automating the Creation of Computer Accounts in Windows 2000
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADSI kbMsg kbOSWin2000 kbVC kbGrpDSMsg kbAudDeveloper kbHOWTOmaster 
	Technology        : kbAudDeveloper kbADSISearch
	Version           : :2.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
