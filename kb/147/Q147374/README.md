---
layout: page
title: "Q147374: XADM: Registry Key Modifications Made During Setup"
permalink: kb/147/Q147374/
---

## Q147374: XADM: Registry Key Modifications Made During Setup

	Article: Q147374
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv exc4 exc5 exc55
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the registry modifications made during a normal setup of
	Microsoft Exchange Server on a Windows NT Server computer. These registry
	entries are added when you set up a new Exchange Server computer in a new
	Exchange Site.
	
	MORE INFORMATION
	================
	
	Exchange Services
	-----------------
	
	HKEY_LOCAL_MACHINE
	  \SYSTEM
	    \CurrentControlSet
	      \Services
	        \<Exchange Service>
	
	Where <Exchange Service> is MSExchangeDS, MSExchangeDX, MSExchangeIS,
	MSExchangeMTA, MSExchangeMSMI, and MSExchangeSA. These are used to record the
	settings used by the individual Exchange services.
	
	Event Log Settings
	------------------
	
	HKEY_LOCAL_MACHINE
	  \SYSTEM
	    \CurrentControlSet
	      \Services
	        \EventLog
	          \Application
	            \<Exchange Service>
	
	Where <Exchange Service> is MSExchangeDS, MSExchangeIS, MSExchangeMTA,
	MSExchangePrivateIS, MSExchangePublicIS, and MSExchangeSA. These are used to
	record the settings used by Event Log for the various Exchange services.
	
	Licensing Settings
	------------------
	
	HKEY_LOCAL_MACHINE
	  \SYSTEM
	    \CurrentControlSet
	      \Services
	        \LicenseInfo
	          \MSExchangeIS
	
	This is used for the license settings of Exchange.
	
	Detect Previous Installations
	-----------------------------
	
	HKEY_LOCAL_MACHINE
	  \SOFTWARE
	    \Microsoft
	      \Exchange
	        \Setup
	
	This is used by the Exchange setup program to detect that Exchange is already
	installed and where it is installed.
	
	Exchange Admin Settings
	-----------------------
	
	HKEY_CURRENT_USER
	  \Software
	    \Microsoft
	      \Exchange
	        \MSExchangeAdmin
	
	For a full list of the values that are set during Exchange Server setup, see the
	following files: ADMIN.INS, MSMCON.INS, SERVER.INS, SHARED.INS, SMTP.INS.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
