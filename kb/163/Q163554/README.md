---
layout: page
title: "Q163554: INFO: Determining NIC Parameters for Setup Using Unattend.txt"
permalink: /kb/163/Q163554/
---

## Q163554: INFO: Determining NIC Parameters for Setup Using Unattend.txt

{% raw %}

	Article: Q163554
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBKkbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When preparing to deploy Windows NT, you should test the network adapter to
	determine its functionality. During the testing phase, the network adapter
	settings will be determined and documented for use with a Windows NT answer
	file. The following information assumes that an installation of Windows NT with
	the adapter to be used is available. Just as, in most cases, manually installing
	Windows NT requires prior knowledge of the network adapter configuration, the
	answer file similarly requires this information for automation.
	
	MORE INFORMATION
	================
	
	WARNING: Modifications to .inf files incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from modifications of .inf files
	can be solved. Use this method at your own risk.
	
	Determining an adapter's parameters can be accomplished via the Regedt32.exe
	utility supplied with Windows NT 4.0. Every installed network adapter has two
	keys in:
	
	HKLM\SYSTEM\CurrentControlSet\Services\
	
	These keys are <ProductName> and <ServiceName>, and they specify the
	option name for the card and the instance of the card, respectively.
	
	To find out the values of <ProductName> and <ServiceName>, check the
	following registry values on an already installed computer using the same
	adapter that you will be using:
	
	HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkCards\1
	
	ProductName: REG_SZ:<adapter_string>
	ServiceName: REG_SZ:<adapter_string>
	
	The string assigned to ServiceName is what is needed to locate the parameters for
	the instance of the network adapter installed. These parameters can be located
	in the registry under:
	
	HKLM\SYSTEM\CurrentControlSet\Services\<ServiceName>\Parameters
	
	All non-string values found in the parameters key for the adapter have to
	converted from hexadecimal values to decimal values for the unattend file. The
	names of the parameters and non-numeric values can be directly translated to the
	unattend file.
	
	Examples
	--------
	
	NOTE: A semicolon is used to comment a particular line in Unattend.txt.
	
	  [NetWork]
	  InstallAdapters = AdaptersList
	
	  [AdaptersList]
	  ; DECETHERWORKSTURBO = DECETHERWORKSTURBOParams
	  ; EE16 = EE16Params
	  ; J2573A = J2573AParams
	  IEEPRO = IEEPROParams
	
	  ;[DECETHERWORKSTURBOParams]
	  ;InterruptNumber = 5
	  ;IOBaseAddress = 768
	  ;MemoryMappedBaseAddress = 851968
	  ;BusType = 1
	  ;BusNumber = 0
	
	  ;[EE16Params]
	  ;BusType = 1
	  ;Transceiver = 3
	  ;BusNumber = 0
	  ;IoChannelReady = 2
	  ;IoBaseAddress = 784
	  ;InterruptNumber = 10
	
	  ;[J2573AParams]
	  ;BusNumber = 0
	  ;BusType = 1
	  ;AdapterType = 0
	  ;BusType = 5
	  ;MediaType = 1
	  ;IoBaseAddress = 768
	  ;InterruptNumber = 5
	
	  [IEEPROParams]
	  BusNumber = 0
	  BustType = 1
	  AdapterType = 0
	  BusType = 5
	  MediaType = 0
	  IoBaseAddress = 768
	  InterruptNumber = 5
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q155197 Unattended Setup Parameters for Unattend.txt File
	
	  Q143134 Oemsetup.inf Modifications for Automated Windows NT Setup
	
	  Q155099 Creating Network Component .inf File for Unattended Setup
	
	  Q156876 Using UDF Files with Windows NT 4.0 Unattended Setup
	
	Additional query words: 4.00 Unattended Setup Install
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
