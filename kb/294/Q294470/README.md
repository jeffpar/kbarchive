---
layout: page
title: "Q294470: HOWTO: Add Entries For Exchange Services to Mapisvc.inf"
permalink: /kb/294/Q294470/
---

## Q294470: HOWTO: Add Entries For Exchange Services to Mapisvc.inf

{% raw %}

	Article: Q294470
	Product(s): Microsoft Exchange
	Version(s): 1.0,5.5
	Operating System(s): 
	Keyword(s): kbEDK kbExchange kbMsg kbGrpDSMsg kbDSupport
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Extended Messaging Application Programming Interface (MAPI), version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Certain MAPI configurations may not include entries in the Mapisvc.inf file for
	Exchange services, even though the appropriate MAPI providers for Exchange have
	been installed. For example, you may install Exchange Administrator on a server
	to get a MAPI implementation.
	
	MORE INFORMATION
	================
	
	Mapisvc.inf holds entries for the available MAPI services on a particular
	computer. Installing Exchange Administrator installs a fully functional version
	of the MAPI subsystem, but does not update Mapisvc.inf. If you want to develop
	server applications that need to log on to the Exchange message store,
	Mapisvc.inf must contain the appropriate entries.
	
	To add entries to Mapisvc.inf for the Exchange Message Store service, follow
	these steps:
	
	1. In Notepad, create a new text file. Paste the following text in the file, and
	  save the file as Msems.inf:
	
	[Services]
	MSEMS=Microsoft Exchange Server
	[Default Services]
	MSEMS=Microsoft Exchange Server
	[MSEMS]
	PR_DISPLAY_NAME=Microsoft Exchange Server
	Sections=MSEMS_MSMail_Section
	PR_SERVICE_DLL_NAME=emsui.dll
	PR_SERVICE_INSTALL_ID={6485D26A-C2AC-11D1-AD3E-10A0C911C9C0}
	PR_SERVICE_ENTRY_NAME=EMSCfg
	PR_RESOURCE_FLAGS=SERVICE_SINGLE_COPY
	WIZARD_ENTRY_NAME=EMSWizardEntry
	Providers=EMS_DSA, EMS_MDB_public, EMS_MDB_private, EMS_RXP, EMS_MSX, EMS_Hook
	PR_SERVICE_SUPPORT_FILES=emsui.dll,emsabp.dll,emsmdb.dll
	[EMS_MDB_public]
	PR_RESOURCE_TYPE=MAPI_STORE_PROVIDER
	PR_PROVIDER_DLL_NAME=EMSMDB.DLL
	PR_SERVICE_INSTALL_ID={6485D26A-C2AC-11D1-AD3E-10A0C911C9C0}
	PR_RESOURCE_FLAGS=STATUS_NO_DEFAULT_STORE
	66090003=06000000
	660A0003=03000000
	34140102=78b2fa70aff711cd9bc800aa002fc45a
	PR_DISPLAY_NAME=Public Folders
	PR_PROVIDER_DISPLAY=Microsoft Exchange Message Store
	[EMS_MDB_private]
	PR_PROVIDER_DLL_NAME=EMSMDB.DLL
	PR_SERVICE_INSTALL_ID={6485D26A-C2AC-11D1-AD3E-10A0C911C9C0}
	PR_RESOURCE_TYPE=MAPI_STORE_PROVIDER
	PR_RESOURCE_FLAGS=STATUS_PRIMARY_IDENTITY|STATUS_DEFAULT_STORE|STATUS_PRIMARY_STORE
	66090003=0C000000
	660A0003=01000000
	34140102=5494A1C0297F101BA58708002B2A2517
	PR_DISPLAY_NAME=Private Folders
	PR_PROVIDER_DISPLAY=Microsoft Exchange Message Store
	[EMS_DSA]
	PR_DISPLAY_NAME=Microsoft Exchange Directory Service
	PR_PROVIDER_DISPLAY=Microsoft Exchange Directory Service
	PR_PROVIDER_DLL_NAME=EMSABP.DLL
	PR_SERVICE_INSTALL_ID={6485D26A-C2AC-11D1-AD3E-10A0C911C9C0}
	PR_RESOURCE_TYPE=MAPI_AB_PROVIDER
	[MSEMS_MSMail_Section]
	UID=13DBB0C8AA05101A9BB000AA002FC45A
	66000003=01050000
	66010003=04000000
	66050003=03000000
	66040003=02000000
	[EMS_RXP]
	PR_DISPLAY_NAME=Microsoft Exchange Remote Transport
	PR_PROVIDER_DISPLAY=Microsoft Exchange Remote Transport
	PR_PROVIDER_DLL_NAME=EMSUI.DLL
	PR_SERVICE_INSTALL_ID={6485D26A-C2AC-11D1-AD3E-10A0C911C9C0}
	PR_RESOURCE_TYPE=MAPI_TRANSPORT_PROVIDER
	66090003=40000000
	660A0003=0A000000
	[EMS_MSX]
	PR_DISPLAY_NAME=Microsoft Exchange Transport
	PR_PROVIDER_DISPLAY=Microsoft Exchange Transport
	PR_PROVIDER_DLL_NAME=EMSMDB.DLL
	PR_SERVICE_INSTALL_ID={6485D26A-C2AC-11D1-AD3E-10A0C911C9C0}
	PR_RESOURCE_TYPE=MAPI_TRANSPORT_PROVIDER
	66090003=00000000
	[EMS_Hook]
	PR_DISPLAY_NAME=MS Exchange Hook
	PR_PROVIDER_DISPLAY=MS Exchange Hook
	PR_PROVIDER_DLL_NAME=EMSMDB.DLL
	PR_SERVICE_INSTALL_ID={6485D26A-C2AC-11D1-AD3E-10A0C911C9C0}
	PR_RESOURCE_TYPE=MAPI_HOOK_PROVIDER
	PR_RESOURCE_FLAGS=HOOK_INBOUND
	
	2. Use Mergeini.exe to merge the Msems.inf file into Mapisvc.inf. Mergeini.exe
	  is a utility that comes with the Microsoft Platform Software Development Kit
	  (SDK). The syntax is as follows:
	
	mergeini <full path to msems.inf> -m
	
	It is possible to leave out the transport sections from above when modifying your
	MAPISVC.INF file. This would not affect clients that log in with the
	MAPI_NO_MAIL flag set, such as NT services. However, transport-related functions
	(such as EnumAdrTypes and IMAPISession::MessageOptions) will not work properly.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q158826 XCLN: Location of Mapisvc.inf File Not Configurable
	
	  Q229700 HOWTO: Find the Correct Path to MAPISVC.INF Under Outlook 2000
	
	Additional query words:
	
	======================================================================
	Keywords          : kbEDK kbExchange kbMsg kbGrpDSMsg kbDSupport 
	Technology        : kbAudDeveloper kbMAPISearch kbExchangeSearch kbExchange550 kbZNotKeyword kbZNotKeyword2 kbMAPIExt
	Version           : :1.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
