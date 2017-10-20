---
layout: page
title: "Q151690: XCLN: What is the 'Custom' Rule Action For?"
permalink: /kb/151/Q151690/
---

## Q151690: XCLN: What is the 'Custom' Rule Action For?

{% raw %}

	Article: Q151690
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	- Microsoft Outlook 2002 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Custom Rule Action is a DLL which contains code which may be called as a
	consequence of a rule firing. This article explains how to register a Custom
	Rule Action DLL so it is available as an option.
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange client for Windows has an option under Tools, Inbox
	Assistant, Add (or Edit) rule, called Custom. In Outlook, this dialog can be
	reached through the Rules Wizard, by selecting 'perform a custom action'. This
	dropdown box is typically blank unless custom rule dll's have been registered. A
	custom rule action can be created using the Microsoft Exchange Software
	Development Kit (SDK).
	
	The custom dropdown option will use an entry in the registry under
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Client. Specifically, the
	Microsoft Exchange client is looking for a Custom Actions key that is not
	available by default. Under this key, corresponding values for a rule processing
	.DLL file are included (this .DLL is created using the SDK). The following
	example illustrates this using an example found in the SDK under the registry
	value used for the above key called Launch:
	
	  4.0;c:\windows\system32\crarun.dll;1;00000101001100
	
	With the registry entry and rule processing .DLL correctly configured, the user
	can then check the custom option and select the name displayed (in this case,
	Launch) from dropdown list to customize Inbox rule processing for the Microsoft
	Exchange client.
	
	A sample Custom Action agent, called CRARUN is available as part of the Exchange
	5.5 SDK. See http:\\www.microsoft.com\downloads to obtain the SDK samples.
	Documentation is provided in the Platform SDK. See
	
	http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/exchserv/compnent_9wxf.htm
	
	and
	
	http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/exchserv/samples1_04vi.htm
	
	Also, for a sample Custom Action that invokes Visual Basic based code, see
	
	  Q173915 A Visual Basic-Based Active Messaging Inbox Agent
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook2000Search kbOutlook2002Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
