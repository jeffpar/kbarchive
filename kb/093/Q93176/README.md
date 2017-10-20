---
layout: page
title: "Q93176: PC MAPI: Err Msg: MAPI ERROR: Unknown Recipient"
permalink: /kb/093/Q93176/
---

## Q93176: PC MAPI: Err Msg: MAPI ERROR: Unknown Recipient

{% raw %}

	Article: Q93176
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you follow the directions on the MAPI technical reference disk (included with
	Microsoft Mail for Windows versions 3.0, 3.0b and 3.2) to create and use
	HELPREQ.EXE, you may receive the following error after you try to send a help
	request to yourself:
	
	  MAPI ERROR: Unknown Recipient
	
	CAUSE
	=====
	
	HELPREQ.EXE does not deliver the help request correctly because the code in the
	HELPREQ.C F ProcessHelpRequest section interchanges the recipient name and the
	recipient address values. It doesn't work when you send Mail to an address such
	as /network/postoffice/johndoe. It does work correctly when you send Mail to a
	resolved name (such as John Doe), contrary to what is listed on page 40 of the
	Microsoft Mail 3.0 "Technical Reference."
	
	The Microsoft Mail "Technical Reference" also shows incorrect syntax for the
	address, omitting "ms:". It should be "ms:network/postoffice/johndoe" instead of
	"/network/postoffice/johndoe".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for Windows
	versions 3.0, 3.0b, and 3.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	You can resolve this problem by interchanging the values for "recip.lpszName"
	and "recip.lpszAddress" in the following section of code in HELPREQ.C. The value
	assignments shown below are correct.
	
	Partial Section of Code for HELPREQ.C
	-------------------------------------
	
	    BOOL FProcessHelpRequest(HWND hDlg, BOOL fSend, BOOL fReadDialog)
	
	     // Now we need to create a message with this file as the attachment
	     recip.ulReserved = NULL;
	     recip.ulRecipClass = MAPI_TO;
	     GetDlgItemText(hDlg, IDD_TO, szValue, cbValue);
	  -> recip.lpszName = NULL;
	  -> recip.lpszAddress = szValue;
	
	Additional query words: 3.00 3.00b 3.20 ErrMsg DocErr
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
