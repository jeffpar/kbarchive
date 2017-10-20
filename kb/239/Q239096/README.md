---
layout: page
title: "Q239096: PRB: Problems with CoInitializeEx and CDO"
permalink: /kb/239/Q239096/
---

## Q239096: PRB: Problems with CoInitializeEx and CDO

{% raw %}

	Article: Q239096
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbCDO kbDSupport exc55
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Collaboration Data Objects (CDOs) are not multi-threaded apartment safe. The COM
	library has to be initialized as a multi-threaded apartment to make CDO a
	multi-threaded apartment. From CDO, the MAPIInitialize function is called, which
	in turn calls the CoInitialize(NULL) function. This causes a conflict and the
	code fails.
	
	MORE INFORMATION
	================
	
	The following sample code fails with error code 0x80040154
	(REGDB_E_CLASSNOTREG):
	
	  #define _WIN32_DCOM
	
	  #import <cdo.dll> no_namespace
	
	  #include <stdio.h>
	  #include <assert.h>
	  #include <tchar.h>
	  #include <objbase.h>
	
	  #pragma message ("TO DO: change RECIPIENT_NAME to your emailid")
	  #define RECIPIENT_NAME "jack@microsoft.com"
	
	  void dump_com_error(_com_error &e)
	  {
	      _tprintf(_T("Oops - hit an error!\n"));
	      _tprintf(_T("\a\tCode = %08lx\n"), e.Error());
	      _tprintf(_T("\a\tCode meaning = %s\n"), e.ErrorMessage());
	      _bstr_t bstrSource(e.Source());
	      _bstr_t bstrDescription(e.Description());
	      _tprintf(_T("\a\tSource = %s\n"), (LPCTSTR) bstrSource);
	      _tprintf(_T("\a\tDescription = %s\n"), (LPCTSTR) bstrDescription);
	  }
	
	  struct StartOle {
	      StartOle()  {
	           CoInitializeEx(NULL,COINIT_MULTITHREADED) ;	
	      }
	
	      ~StartOle() {
	           CoUninitialize();
	      }
	  } _inst_StartOle;
	
	  void main()
	  {
	      try {
	  	
	          SessionPtr pSession("Mapi.Session");
	          pSession->Logon("Microsoft Outlook");
	
	          FolderPtr   pFolder = pSession->Outbox;
	          MessagesPtr pMessages = pFolder->Messages;
	          MessagePtr  pMessage = pMessages->Add();
	          pMessage->Subject = "VCCOM: MAPI Example";
	           
	          RecipientsPtr pRecipients = pMessage->Recipients;
	          RecipientPtr pRecipient = pRecipients->Add();
	          pRecipient->Name = RECIPIENT_NAME;
	          pRecipient->Type = (long) mapiTo;
	          pRecipient->Resolve();
	
	          pMessage->Send(false, false);
	          pSession->Logoff();
	
	          } 
	
	  catch (_com_error &e) {
	          dump_com_error(e);
	      }
	  }
	
	Workaround
	----------
	
	To solve the problem, change the following registry key from Both to Apartment:
	
	  
	
	  HKEY_CLASSES_ROOT\CLSID\{3FA7DEB3-6438-101B-ACC1-00AA00423326}\InprocServer32\ThreadingModel
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q239853 MAPI_NO_COINIT Flag To Make MAPIInitialize Not Call CoInit
	
	Additional query words: CDO CoInitializeEx 0x80040154 multithreaded
	
	======================================================================
	Keywords          : kbCDO kbDSupport exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
