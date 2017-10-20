---
layout: page
title: "Q176125: XADM: Outbound Unicode 2.0 Messages Not Decoded Properly"
permalink: /kb/176/Q176125/
---

## Q176125: XADM: Outbound Unicode 2.0 Messages Not Decoded Properly

{% raw %}

	Article: Q176125
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send a message that contains Unicode 2.0 characters, the
	Internet Mail Service may generate an event in the event log that indicates that
	it was unable to decode the message.
	
	CAUSE
	=====
	
	When you install Microsoft Exchange Server, the Multipurpose Internet Mail
	Extensions (MIME) database entries needed to properly decode Unicode 2.0
	messages are not added to the database automatically.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The fix causes the Microsoft Exchange Server installation program to add the
	following keys and values to the registry:
	
	  Key: HKEY_CLASSES_ROOT\MIME\Database\Charset\unicode-2-0-utf-7
	  Value name: AliasForCharSet
	  Value data: utf-7
	
	  Key: HKEY_CLASSES_ROOT\MIME\Database\Charset\unicode-2-0-utf-8
	  Value name: AliasForCharSet
	  Value data: utf-8
	
	  Key: HKEY_CLASSES_ROOT\MIME\Database\Charset\x-unicode-2-0-utf-7
	  Value name: AliasForCharSet
	  Value data: utf-7
	
	  Key: HKEY_CLASSES_ROOT\MIME\Database\Charset\x-unicode-2-0-utf-8
	  Value name: AliasForCharSet
	  Value data: utf-8
	
	  Key: HKEY_CLASSES_ROOT\MIME\Database\Charset\x-unicode-1-1-utf-7
	  Value name: AliasForCharSet
	  Value data: utf-7
	
	  Key: HKEY_CLASSES_ROOT\MIME\Database\Charset\x-unicode-1-1-utf-8
	  Value name: AliasForCharSet
	  Value data: utf-8
	
	After you obtain this fix or a Service Pack that contains this fix, you should
	reinstall Microsoft Exchange Server. If you do not want to reinstall Microsoft
	Exchange Server, you can modify the registry as described above manually, but
	this is not recommended or supported. If you modify the registry, be aware of
	the following:
	
	IMPORTANT: Before you edit the registry, make sure you understand how to restore
	it if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry Key"
	online Help topic in Regedt32.exe.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Additional query words: dbcs double-byte character set ims internet mail connector imc
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
