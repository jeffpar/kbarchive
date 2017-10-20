---
layout: page
title: "Q190146: XCLN: Creating a MAPI Profile for Lotus Notes"
permalink: /kb/190/Q190146/
---

## Q190146: XCLN: Creating a MAPI Profile for Lotus Notes

{% raw %}

	Article: Q190146
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,95,98; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Outlook 98, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Lotus Notes has a Messaging Application Programming Interface (MAPI) service
	provider that makes it possible for you to use Microsoft Outlook versions 8.0,
	8.01, 8.02, 8.03, and 8.5 as your e-mail client with a Lotus Notes server.
	
	When you install Lotus Notes on your desktop computer, you can then add the
	information service to your user profile, and exchange mail with all other
	users.
	
	However, when you try to add the information service for Lotus Notes to your
	profile, it doesn't appear as an available provider.
	
	MORE INFORMATION
	================
	
	This article applies to Lotus Notes versions 4.5.1 and 4.5.2 only.
	
	The .dll file for the Lotus Notes MAPI service provider is Nwnsp.dll. Typically,
	the path to Nwnsp.dll that is designated in the Mapisvc.inf file should point to
	where the Nwnsp.dll resides. The Mapisvc.inf file is used by Outlook when
	setting up a profile.
	
	When Lotus Notes is installed, it is supposed to update the Mapisvc.inf file with
	the path where it (Notes) installs the service provider .dll (Nwnsp.dll). If you
	are using Lotus Notes 4.5.1 or 4.5.2, copy the file from the Lotus Notes program
	directory to the Windows directory or add the Notes directory to your path.
	
	If everything is installed correctly you will see:
	
	- In the Microsoft Outlook Profile Setup Wizard, in the Setup Information
	  Service window:
	
	  Lotus Notes Mail
	
	- And in Mapisvc.inf the following updated entries:
	
	     [Services]
	     NOTES=Lotus Notes Mail
	
	     [NOTES]
	     PR_SERVICE_DLL_NAME=nwnsp.dll
	     PR_SERVICE_SUPPORT_FILES=nwnsp.dll
	     PR_SERVICE_DELETE_FILES=nwnsp.dll
	     PR_SERVICE_ENTRY_NAME=ServiceEntry
	     Providers=NAB,NMS,NXP
	     WIZARD_ENTRY_NAME=ServiceWizard
	     PR_RESOURCE_FLAGS=SERVICE_SINGLE_COPY|SERVICE_PRIMARY
	        _IDENTITY
	
	     [NAB]
	     PR_PROVIDER_DLL_NAME=nwnsp.dll
	     PR_RESOURCE_TYPE=MAPI_AB_PROVIDER
	     PR_DISPLAY_NAME=Lotus Notes Address Book
	     PR_PROVIDER_DISPLAY=Lotus Notes Address Book
	     PR_RESOURCE_FLAGS=STATUS_PRIMARY_IDENTITY
	
	     [NMS]
	     PR_PROVIDER_DLL_NAME=nwnsp.dll
	     PR_RESOURCE_TYPE=MAPI_STORE_PROVIDER
	     PR_RESOURCE_FLAGS=STATUS_PRIMARY_IDENTITY|STATUS_DEFAULT
	     _STORE
	     PR_PROVIDER_DISPLAY=Lotus Notes Message Store
	     PR_DISPLAY_NAME=Lotus Notes Message Store
	     PR_MDB_PROVIDER=395d475fecf1cd1193dc5aab3C478538
	
	     [NXP]
	     PR_PROVIDER_DLL_NAME=nwnsp.dll
	     PR_RESOURCE_TYPE=MAPI_TRANSPORT_PROVIDER
	     PR_RESOURCE_FLAGS=STATUS_PRIMARY_IDENTITY
	     PR_PROVIDER_DISPLAY=Lotus Notes Transport
	     PR_DISPLAY_NAME=Lotus Notes Transport
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,95,98; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
