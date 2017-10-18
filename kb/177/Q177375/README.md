---
layout: page
title: "Q177375: XFOR: Exchange SP1 Embedded Messages Appear as Raw MIME"
permalink: kb/177/Q177375/
---

## Q177375: XFOR: Exchange SP1 Embedded Messages Appear as Raw MIME

	Article: Q177375
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Some messages contain partial MIME headers with UUEncoded bodyparts. In the case
	of a CONTENT-TYPE header being present (without a full MIME version header), the
	Microsoft Exchange Server will assume the message to be MIME and will not decode
	the UUEncoded bodyparts.
	
	CAUSE
	=====
	
	This is because the registry fix detailed in the following Microsoft Knowledge
	Base article applied to partial headers in top-level messages only and not
	within embedded messages:
	
	  Q175704 XFOR: IMS Failing to Decode Uuencoded Attachments
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	This issue is an extension of the issue detailed in the following Microsoft
	Knowledge Base article:
	
	  Q175704 XFOR: IMS Failing to Decode Uuencoded Attachments
	
	where UUEncoded bodyparts within a message received via the Microsoft Exchange
	Internet Mail Service are not decoded into an attachment. Instead, they are left
	as UUEncoded text within the message.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To correct this problem, apply the fix described above and follow these steps:
	
	1. Start the Windows NT Registry Editor. Use Regedt32.exe if you are running
	  Windows NT 3.51 and either Regedit.exe or Regedt32.exe for Windows NT 4.0.
	
	2. Create the following registry value:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ 
	  ParametersSystem\InternetContent
	
	  Value Name: ContentTypeEQMimeVer
	  Data Type: REG_DWORD
	  Value: 0 or 1 (default is 1)
	
	3. Exit Registry Editor. Stop and restart the Microsoft Exchange Information
	  Store for the change to take effect.
	
	Setting this value to 1 means that if a top-level Content-Type header is found in
	an inbound Internet Message, the message is treated as a MIME message even if a
	MIME Version header is missing.
	
	The problem occurs when embedded messages contain MIME headers without the MIME
	version header being present.
	
	Additional query words: crash hang GPF general protection fault body parts
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
