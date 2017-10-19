---
layout: page
title: "Q124075: TAPI Apps Can't Dial Unless UniModem Is First Listed Provider"
permalink: /kb/124/Q124075/
---

## Q124075: TAPI Apps Can't Dial Unless UniModem Is First Listed Provider

	Article: Q124075
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	HyperTerminal, the Microsoft Network, or another TAPI-enabled application does
	not dial.
	
	CAUSE
	=====
	
	This problem occurs when a pre-Windows 95 service provider appears in the
	TELEPHON.INI file and precedes the Windows 95 Universal Modem Driver (UNIMDM). A
	pre-Windows 95 service provider is one that was built to the Windows 3.1 TAPI,
	rather than the Windows 95 TAPI.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Open the TELEPHON.INI file that is in your Windows directory with a text
	  editor (such as WordPad).
	
	2. The Providers section may appear as follows:
	
	     [Providers]
	     NumProviders=2
	     NextProviderID=3
	     ProviderID0=1
	     ProviderFilename0=ATSP.TSP
	     ProviderID1=2
	     ProviderFilename1=UNIMDM.TSP
	
	  Change the above to:
	
	     [Providers]
	     NumProviders=2
	     NextProviderID=3
	     ProviderID1=1
	     ProviderFileName1=ATSP.TSP
	     ProviderID0=2
	     ProviderFileName0=UNIMDM.TSP
	
	The above changes inform the TAPI.DLL file that UniModem is the first provider.
	
	MORE INFORMATION
	================
	
	Windows Telephony application programming interface (TAPI) is the API that
	allows your computer to manage your telephone system (data, fax, and voice).
	
	Additional query words: msnetwork hyperterm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
