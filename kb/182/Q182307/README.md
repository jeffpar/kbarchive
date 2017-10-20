---
layout: page
title: "Q182307: XADM: Text Attachments Appear Corrupted"
permalink: /kb/182/Q182307/
---

## Q182307: XADM: Text Attachments Appear Corrupted

{% raw %}

	Article: Q182307
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Some messages with attachments sent by the Exchange Server Internet Mail Service
	may be encoded with Quoted-Printable encoding. If the message is received by an
	older MIME-compliant client, the attachment may be shown as corrupted text.
	
	CAUSE
	=====
	
	Exchange Server 4.0 uses Base64 encoding; Exchange Server 5.0 and 5.5 Internet
	Mail Service use Quoted-Printable encoding for text attachments. Because many
	older POP3 clients are still not Quoted-Printable aware, they may fail to decode
	the attachment properly.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Install the provided hotfix and add the registry key shown below.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe as appropriate for your
	  version of Windows NT).
	
	2. Go to the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Service\MSExchangeIS
	     \ParametersSystem\InternetContent
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	     Value Name: ForceBase64
	     Data Type:  REG_DWORD
	     Value:      0x1
	
	4. Exit Registry Editor.
	
	STATUS
	======
	
	Microsoft has made this fix module for Microsoft Exchange Server, version 5.0.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This fix allows you to add a new registry key so you can choose Base64 encoding.
	The new registry entry is called "ForceBase64."
	
	
	Additional query words: IMS QP pop pdf adobe
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
