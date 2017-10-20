---
layout: page
title: "Q175704: XFOR: IMS Failing to Decode Uuencoded Attachments"
permalink: /kb/175/Q175704/
---

## Q175704: XFOR: IMS Failing to Decode Uuencoded Attachments

{% raw %}

	Article: Q175704
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	UUEncoded body parts within a message received via the Microsoft Exchange Server
	Internet Mail Service (IMS) are not decoded into an attachment. Instead, they
	are left as UUEncoded text within the message.
	
	CAUSE
	=====
	
	If a message includes a valid MIME header stating that the contents should be
	text, then the above behavior is by design. However some messages will contain
	partial MIME headers with UUEncoded bodyparts. In the case of a CONTENT-TYPE
	header being present (without a full MIME version header), the Microsoft
	Exchange Server will assume the message to be MIME and will not decode the
	UUEncoded body parts. The information in the rest of this article describes how
	this behavior can be modified so only valid MIME messages are treated this way.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	A new registry key value has been created for the Information Store to control
	this behavior.
	
	1. Start Windows NT Registry Editor. Use Regedt32.exe if you are running Windows
	  NT 3.51 and either Regedit.exe or Regedt32.exe for Windows NT 4.0.
	
	2. Create the following registry value:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ 
	  ParametersSystem\InternetContent
	
	  Value Name: ContentTypeEQMimeVer
	  Data Type: REG_DWORD
	  Value: 0 or 1 (default is 1)
	
	3. Exit Registry Editor. Stop and restart the Microsoft Exchange Information
	  Store for the change to take effect.
	
	Setting this value to "1" means that if a top-level "Content-Type" header is
	found in an inbound Internet Message, the message is treated as a MIME message
	even if a "MIME Version" header is missing. Setting this value to "0" means that
	an Internet message is treated as a MIME message ONLY if a "MIME Version" header
	is found.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
