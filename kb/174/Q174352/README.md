---
layout: page
title: "Q174352: XWEB: How to Improve Error Messages for T'shooting Web Access"
permalink: /kb/174/Q174352/
---

## Q174352: XWEB: How to Improve Error Messages for T'shooting Web Access

{% raw %}

	Article: Q174352
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Active Server Components, version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	When troubleshooting the Web Access components, it is sometimes helpful to
	receive a more detailed error message from the server. For example, the error
	message, "Failed to get Inbox," does not help you understand why you failed to
	get the Inbox.
	
	MORE INFORMATION
	================
	
	Adding the following registry entry to the Exchange Server computer will return
	a more detailed error to the browser.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Find the following registry key
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeWEB
	  \Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value. In the Value Name box, enter "Debug".
	
	4. Set the Data Type to DWORD and click OK.
	
	5. In the Data box, enter "1". Click the Hex radio button, and click OK.
	
	This will enable the Exchange Server computer to return a more detailed error
	message to the browser such as:
	
	  Failed to get Inbox
	  The information store could not be opened. [MAPI 1.0 -
	  [MAPI_E_LOGON_FAILED(80040111)]]
	  /exchange/USA/LogonFrm.asp
	
	You can then research the MAPI error indicated by the error number returned in
	the error message, in this example, 80040111:
	
	  Constant: MAPI_E_LOGON_FAILED
	  Description: This error code results when the EMS server refuses to
	  let a MAPI client log on.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q165661 XWEB: Error Message: Failed to Get Inbox
	
	  Q165987 XWEB: Error Message: Failed to Get Inbox
	
	  Q166994 XWEB: Spaces in Alias Name Cause "Failed to get Inbox"
	
	  Q167003 XWEB: Troubleshooting Active Server Components
	
	  Q173470 XCLN: Troubleshooting "Failed to get Inbox" Error Message
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : WinNT:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
