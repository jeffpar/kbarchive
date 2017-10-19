---
layout: page
title: "Q284199: PRB: Exchange 5.5 Mailbox Resources Orphaned with ADSI/LDAP"
permalink: /kb/284/Q284199/
---

## Q284199: PRB: Exchange 5.5 Mailbox Resources Orphaned with ADSI/LDAP

	Article: Q284199
	Product(s): Microsoft Exchange
	Version(s): 2.5,4.0,5.5
	Operating System(s): 
	Keyword(s): kbADSI kbEDK kbDSupport
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Active Directory Service Interfaces, version 2.5 
	- Microsoft Active Directory Services Interface, System Component 
	- Microsoft Active Directory Client Extension, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows NT 4.0 
	- Microsoft Lightweight Directory Access Protocol (LDAP) API 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Active Directory Services Interface (ADSI) or Lightweight Directory
	Access Protocol (LDAP) API to delete Microsoft Exchange Server 5.5 mailboxes,
	information store resources will be orphaned. While the directory object will be
	deleted, the store resources are not deleted and become orphaned.
	
	RESOLUTION
	==========
	
	Microsoft does not recommend or support the deletion of Exchange 5.5 mailboxes
	through the use of ADSI or LDAP. The supported method of deleting the mailbox is
	to use the Exchange Administrator program or by writing an application that uses
	the Directory API (DAPI). An example of using DAPI is shown later in this
	article under "Deleting the Exchange 5.5 Mailbox."
	
	If, however, you have already deleted the Exchange 5.5 mailbox by using ADSI or
	LDAP, the only way to delete the orphaned store resources is to recreate the
	directory object and then again delete the mailbox.
	
	Recreating the Exchange 5.5 Mailbox Directory Object
	----------------------------------------------------
	
	The easiest way to recreate the Exchange mailbox directory object is to run the
	DS/IS Consistency Checker. If you choose not to use the DS/IS Consistency
	Checker, you can also recreate the exchange mailbox directory object by using
	Directory Import from the Tools menu in the Exchange Administrator program or
	programmatically by using ADSI, LDAP, or DAPI. For additional information, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q182979 XADM: Function and Effects of Running the DS/IS Consistency Adjuster
	
	  Q244595 How to Create Mailboxes by Means of a .csv File
	
	  Q194954 HOWTO: Create a Mailbox Using DAPI
	
	
	Also see the following Microsoft Web site:
	
	  ADSI Exchange, Creating an Exchange Mailbox
	  http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/adsi/ds2exchgd_0it4.htm
	
	When you recreate the directory object, it must have the exact directory name and
	be made in the same container that the deleted one was in. It also must have the
	HomeMDB attribute set to be the same value that the original object had. The
	directory name is often, but not always, the same as the alias name. In most
	circumstances, you view the directory name of a mailbox from the mailbox
	object's Advanced Properties page. In this case, the mailbox no longer exists in
	the directory, but its resources are orphaned inside the information store
	database. You may still be able to view the information about the mailbox
	through the Mailbox Resources page that is found under the server's Private
	Information Store object. The directory name for the mailbox is not displayed by
	default in Mailbox Resources. You can add the directory name to the display
	through the View menu's Column dialog box. The full directory name displayed
	will be similar to:
	
	  /O=ORGANIZATION/OU=SITE/CN=RECIPIENTS CONTAINER/CN=DIRECTORY NAME
	
	The final CN= value is the directory name that must be entered for the mailbox.
	You must also create the mailbox in the same container where it previously
	existed. The container where the mailbox object used to reside in can also be
	verified by viewing the full directory name.
	
	The HomeMDB attribute must be set to the full directory name of the information
	store where the orphaned resources are located. To determine what this value
	should be, look at the Obj-Dist-Name attribute on the private information store
	object that contains the orphaned store resources. For additional information on
	how to do this, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q237682 HOWTO: Determine LDAP Name For Exchange Server Objects
	
	The HomeMDB attribute will look similar to this:
	
	  /O=ORGANIZATION/OU=SITE/CN=SERVERS/CN=SERVER NAME/CN=Microsoft Private MDB
	
	The following sample code recreates a mailbox by using ADSI so that later it can
	be properly deleted:
	
	  'The mailbox was in the container o=MyOrganization,ou=Mysite,cn=Recipients
	  Set obj = GetObject("LDAP://MyServer/cn=Recipients,ou=MySite,o=MyOrganization")
	
	  'The mailbox had a cn=MyMailbox
	  Set objNewUser = obj.Create("organizationalPerson", "cn=MyMailbox")
	  objNewUser.Put "cn", "MyMailbox"
	  objNewUser.Put "uid", "MyMailbox"
	  objNewUser.Put "mailPreferenceOption", 0
	
	  'The mailbox has resources in the Private MDB on the server MyServer in the site MySite
	  objNewUser.Put "Home-MDB", "cn=Microsoft MTA,cn=MyServer,cn=Servers,cn=Configuration," & _
	                 "ou=MySite,o=MyOrganization"
	  objNewUser.SetInfo
	
	Deleting the Exchange 5.5 Mailbox
	---------------------------------
	
	Once you have recreated the mailbox directory object, you can delete the mailbox
	directory object and the associated store resources through the Microsoft
	Exchange Administrator program by using Directory Import from the Tools menu to
	import a .csv file (see "References") or by using DAPI to delete the mailbox
	directory object and its associated store properly.
	
	The following is an example of how to delete a mailbox by using DAPI:
	
	   // 
	   // DAPIDel.cpp : Defines the entry point for the console application.
	   // Dapi.lib is the only additional library required to compile the code.
	   // 
	   
	   #include <windows.h>
	   #include <stdio.h>
	   #include <string.h>
	   #include <lmcons.h>
	   #include <tchar.h>
	   
	   #include <dapi.h>
	   
	   #include <dapimsg.h> // error codes 
	   
	   void DAPIDelObj(DAPI_HANDLE hDAPISession, char * szCN, char * szObjectClass);
	   void ReportDAPIEvent(DAPI_EVENT* pDAPIEvent);
	   
	   
	   void main(int argc, char* argv[])
	   {
	      DAPI_HANDLE hDAPISession;
	      DAPI_EVENT* pDAPIEvent = NULL;
	      DAPI_PARMS DAPIParms = {0};
	   
	      if (5 > argc) 
	      {
	          printf("\nDAPIDel ExchangeServerName ContainerDN CN ObjectClass");
	          printf("\n\nExample:");
	          printf("\nDAPIDel myserver /O=org/OU=site/CN=recipients commonname mailbox");
	          return;
	      }
	      else
	      {
	          printf("\nExchange Server: %s", argv[1]);
	          printf("\nBasePoint Container DN: %s", argv[2]);
	          printf("\nCommon Name: %s", argv[3]);
	          printf("\nObjectClass: %s", argv[4]);
	      }
	   
	      // start DAPI for this session
	      //initialize the the DAPI Parms structure and the DAPI operation session
	      DAPIParms.dwDAPISignature = DAPI_SIGNATURE;
	      DAPIParms.dwFlags = DAPI_EVENT_ALL|DAPI_MODIFY_REPLACE_PROPERTIES|DAPI_RAW_MODE ;
	      DAPIParms.pszDSAName = argv[1];
	      DAPIParms.pszBasePoint = argv[2];
	      DAPIParms.pszContainer = NULL;
	      DAPIParms.pszNTDomain = NULL;
	      DAPIParms.pszCreateTemplate = NULL;
	      DAPIParms.pAttributes = NULL;
	   
	      pDAPIEvent = DAPIStart(&hDAPISession, &DAPIParms);  //struct with DAPI params
	   
	      if(pDAPIEvent) 
	      {
	          printf("\nDAPIStart() returned %08x - check app eventlog", pDAPIEvent->dwDAPIError);
	          ReportDAPIEvent(pDAPIEvent);
	          // Note: dwDAPIError < 0 does NOT necessarily mean DAPIStart failed
	          if (0==hDAPISession || INVALID_HANDLE_VALUE == hDAPISession) return;
	      } 
	      else 
	          printf("\nDAPIStart() was successful");    
	      DAPIDelObj(hDAPISession, argv[3], argv[4]);     
	      DAPIEnd(&hDAPISession);
	      printf("\nEND PROGRAM");
	   }
	   
	   ATT_VALUE * AddStrAttr(_TINT i, LPCTSTR szClass, LPCTSTR szValue,
	                          DAPI_ENTRY * dapiAttr, DAPI_ENTRY * dapiValues) 
	   {
	      ATT_VALUE * AttName = &(dapiAttr->rgEntryValues[i]);
	      AttName->DapiType = DAPI_STRING8;
	      AttName->Value.pszValue = const_cast <LPTSTR> (szClass);
	      AttName->size = _tcslen(AttName->Value.pszValue);
	      AttName->pNextValue = NULL;
	   
	      ATT_VALUE * AttValue = &(dapiValues->rgEntryValues[i]);
	      AttValue->DapiType = DAPI_STRING8;
	      AttValue->Value.pszValue = const_cast <LPTSTR> (szValue);
	      AttValue->size = _tcslen(AttValue->Value.pszValue);
	      AttValue->pNextValue = NULL;        
	       
	      return AttValue;
	   }
	   
	   
	   void DAPIDelObj(DAPI_HANDLE hDAPISession, char * szCN, 
	                   char * szObjectClass)
	   {
	      DAPI_EVENT* pDAPIEvent = NULL;
	      DAPI_ENTRY Attributes;
	      DAPI_ENTRY Values;
	      ATT_VALUE AttName[3];
	      ATT_VALUE AttValue[3];
	      int i=0;
	   
	      printf("\nIN DAPIDelObj()");
	   
	      //set up the account information
	   
	      Attributes.unAttributes = 2;                        //# of attributes
	      Attributes.ulEvalTag = TEXT_VALUE_ARRAY;            //Value Type
	      Attributes.rgEntryValues = &AttName[0];
	   
	      Values.unAttributes = 2;                            //# of attributes
	      Values.ulEvalTag = VALUE_ARRAY;                     //Value Type
	   
	      Values.rgEntryValues = (ATT_VALUE*)&AttValue;
	      
	      AddStrAttr( i++, "Obj-Class", szObjectClass, &Attributes, &Values);
	      AddStrAttr( i, "Directory Name", szCN, &Attributes, &Values);
	       
	       // delete the mailbox
	      printf("\nDeleting %s object /cn=\"%s\"", szObjectClass, szCN);
	      pDAPIEvent = DAPIWrite(hDAPISession,    
	                             DAPI_WRITE_DELETE,
	                             &Attributes,      
	                             &Values,          
	                             NULL,            
	                             NULL,           
	                             NULL);            
	   
	      if(pDAPIEvent) 
	      {
	          // write FAILED
	          printf("\nDAPIWrite ERROR %08x check app eventlog", pDAPIEvent->dwDAPIError);
	          ReportDAPIEvent(pDAPIEvent);
	      } 
	      else 
	          printf("\nDAPIWrite() was successful");
	   
	   }
	   
	   void ReportDAPIEvent(DAPI_EVENT* pDAPIEvent)
	   {
	      HANDLE hDAPIEventSource = RegisterEventSource(NULL, TEXT("MSExchangeDSImp"));
	      
	      ReportEvent(hDAPIEventSource, 
	                  (WORD)EVENTLOG_ERROR_TYPE, 
	                  0xFFFF, 
	                  pDAPIEvent->dwDAPIError, 
	                  NULL, 
	                  (WORD)pDAPIEvent->unSubst, 
	                  0, 
	                  (const char**) pDAPIEvent->rgpszSubst, 
	                  NULL);
	   
	      DAPIFreeMemory(pDAPIEvent);
	   
	      DeregisterEventSource(hDAPIEventSource);
	   }
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q182508 XADM: How to Delete a User Using a .csv File Import
	
	  Q184160 XADM: Messages Left After Deleting Mailbox w/ Directory Import
	
	  Q242221 XGEN: List of Bugs Fixed in Exchange Server 5.5 Service Pack 1
	
	  Q169551 INFO: Items Required to Use DAPI
	
	  Q252988 Bug: Deleting Exchange 5.5 Mailbox with LDAP Poses Security Risk
	
	  Q179573 XADM: Orphaned Objects and Exchange Server Directory
	
	  Q183739 XADM: Identifying and Removing Large Numbers of Orphaned Objects
	
	  Q237682 HOWTO: Determine LDAP Name for Exchange Server Objects
	
	DAPIWrite
	
	  http://msdn.microsoft.com/library/psdk/exchserv/function_1q79.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADSI kbEDK kbDSupport 
	Technology        : kbAudDeveloper kbExchangeSearch kbActiveDirectory kbADSISearch kbZNotKeyword2 kbADSISysComp
	Version           : :2.5,4.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
