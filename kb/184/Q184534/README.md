---
layout: page
title: "Q184534: XADM: MIME Type Extension Mapping Not Used for Attachments"
permalink: /kb/184/Q184534/
---

## Q184534: XADM: MIME Type Extension Mapping Not Used for Attachments

{% raw %}

	Article: Q184534
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0SP2,5.5
	Operating System(s): 
	Keyword(s): kbusage exc55sp2fix
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange, version 5.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	With Exchange Server versions 4.0, 5.0, and 5.0 Service Pack 1 (SP1), the
	attachment file names received and sent through the Internet Mail Connector in
	4.0 and the Internet Mail Service in 5.0 may be altered. For more information
	regarding this behavior, consult the following Microsoft Knowledge Base
	article:
	
	  Q147299 XFOR: Attachment Names Changed in Messages To & From Internet
	
	With Exchange Server versions 5.0 SP2 and 5.5, the attachment file names received
	and sent through the Internet Mail Service are preserved, unless the
	"RemapExtension" registry value is set to 0x1 as specified in the following
	Microsoft Knowledge Base article:
	
	  Q182083 XFOR: Attachment Extensions Handled Differently in Exchange 5.5
	
	There is currently no configuration for Microsoft Exchange 5.0 SP2 and 5.5 that
	will preserve file name extensions for attachments with extensions, but use MIME
	Type mapping for attachments without extensions.
	
	CAUSE
	=====
	
	The RemapExtension registry value (as mentioned in Q182083) forces a MIME
	Content-Type extension remapping for all inbound attachments.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Exchange Server 5.0 SP2
	-----------------------
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0 SP2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem was first corrected in Exchange Server 5.5 Service Pack 2.
	
	
	
	
	MORE INFORMATION
	================
	
	A new value has been defined for RemapExtension (0x2). After applying the fix
	mentioned above, a new registry value must be set as described below.
	
	If you still want to enable this mechanism, here are the instructions for adding
	the required registry value:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS
	  \ParametersSystem\InternetContent
	 
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	     Value Name: RemapExtension
	     Data Type:  REG_DWORD
	     Value:      2
	
	4. Exit the Registry Editor and restart the information store service for the
	  change to take effect.
	
	Setting the RemapExtension to 2 causes the information store to remap the
	extensions based on MIME Content-Type for attachments that do not have an
	extension already.
	
	Setting the RemapExtension to 1 causes the information store to restore the
	Exchange 4.0 or 5.0 behavior as described in Q147299.
	
	To restore Exchange 5.5 behavior default behavior, either delete the registry
	value or set it to a value of 0 and restart the information store.
	
	Here are the combinations:
	
	RemapExtension REG_DWORD 0x0 (or missing)
	(Default Exchange 5.0SP2 and 5.5 behavior; don't remap anything regardless of
	extension)
	
	RemapExtension REG_DWORD 0x1
	(Old Exchange 4.0, 5.0, and 5.0 SP1 behavior, documented in Q147299; remap
	everything based MIME type)
	
	RemapExtension REG_DWORD 0x2
	(New behavior; remaps only those attachments with no extension.)
	
	Additional query words: Missing Wrong Changed Altered Filename Behavior extension
	
	======================================================================
	Keywords          : kbusage exc55sp2fix 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : WINDOWS:5.0SP2,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
