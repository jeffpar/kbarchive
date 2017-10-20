---
layout: page
title: "Q149314: XCLN: Send Mail Option in NT File Manager Won't Work"
permalink: /kb/149/Q149314/
---

## Q149314: XCLN: Send Mail Option in NT File Manager Won't Work

{% raw %}

	Article: Q149314
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose the Send Mail item from the Mail menu under the Microsoft
	Windows NT File Manager, you may receive the following error:
	
	  Mail could not connect to your Mail server.
	  The configuration for the Mail server path is missing or invalid.
	
	STATUS
	======
	
	Microsoft Exchange does not support the File Manager?s Send Mail option 4.0.
	This is by design.
	
	MORE INFORMATION
	================
	
	On a Windows NT computer that has never had a MSMail 3.x client installed, the
	Microsoft Exchange Client Setup doesn't add a Send Mail option to File Manager.
	
	On a Windows NT computer that has previously had a MSMail 3.x client installed,
	the Send Mail option may already exist. If it is run, it may attempt to start
	and sign into a MSMail 3.x server.
	
	RESOLUTION
	==========
	
	To remove the Send Mail menu item, remove the following entry from the
	registry:
	
	 HKey_LocalMachine_LocalMachine
	  Software
	   Microsoft
	    WinNT
	     CurrentVer
	      Filemanager
	       AddOns
	        Mail File Manager Extension:
	         REG_SZ:SendFl32.dll
	
	Next log off, and then log back on, to Windows NT for the change to take effect.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : :4.0,5.0
	
	=============================================================================
	

{% endraw %}
