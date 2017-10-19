---
layout: page
title: "Q293150: FIX: Leak in Repeated Calls to MAPILogonEx"
permalink: /kb/293/Q293150/
---

## Q293150: FIX: Leak in Repeated Calls to MAPILogonEx

	Article: Q293150
	Product(s): Microsoft Exchange
	Version(s): 1.0,1.2,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): kbCDO kbExchange kbMAPI kbMsg kbOutlook kbMAPI100 kbGrpDSMsg kbDSupport
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	- Microsoft Outlook 98 
	- Extended Messaging Application Programming Interface (MAPI), version 1.0 
	- Collaboration Data Objects (CDO), version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications that repetitively log on to MAPI or Collaboration Data Objects
	(CDO) to process very large message volumes can exhibit problems after they run
	normally for long periods of time. The following problems might be seen:
	
	- Corrupt message properties
	
	- System resource depeletion
	
	- Unexpected termination
	
	CAUSE
	=====
	
	A memory heap that is created at the start of a MAPI session is not destroyed
	when the session is released.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug was corrected in Exchange version 5.5 Service Pack 4 and Outlook 2000.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce the behavior, place the MAPILogonEx function in a loop construct and
	run the program so that the loop runs at least 6000 times. To do this, you can
	use the following code:
	
	  while (1)
	  {
	    LPMAPISESSION  lpSession = NULL;
	    HRESULT hr;
	    int iLoopCount;
	    hr = MAPILogonEx(
	           0,
	           szLogonProfile, 
	           NULL, 
	           MAPI_NEW_SESSION | MAPI_LOGON_UI | 
	           MAPI_NO_MAIL | MAPI_USE_DEFAULT, 
	           &lpSession);
	    if (hr !=  S_OK)
	    {
	      printf ("ERROR at MAPILogonEx: %x\n",hr);
	      break;
	    };
	
	    iLoopCount++;
	    printf("LOGON %d\n",iLoopCount);
	
	    hr = lpSession->Logoff (NULL,NULL,0);
	    if (hr != S_OK)
	    {
	      printf ("ERROR at Logoff: %x\n",hr);
	      break;
	    };
	
	    if (lpSession) lpSession->Release();  
	  }
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCDO kbExchange kbMAPI kbMsg kbOutlook kbMAPI100 kbGrpDSMsg kbDSupport 
	Technology        : kbOutlookSearch kbAudDeveloper kbCDOsearch kbMAPISearch kbExchangeSearch kbExchange550 kbZNotKeyword kbZNotKeyword2 kbOutlook98Search kbZNotKeyword3 kbCDO120 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbMAPIExt
	Version           : :1.0,1.2,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
