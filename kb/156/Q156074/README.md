---
layout: page
title: "Q156074: XCON: &quot;Ordinal 136&quot; Error Occurs When Starting the MTA"
permalink: /kb/156/Q156074/
---

## Q156074: XCON: &quot;Ordinal 136&quot; Error Occurs When Starting the MTA

{% raw %}

	Article: Q156074
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:97; winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when starting the Microsoft Exchange
	Message Transfer Agent (MTA) service:
	
	  Ordinal 136 could not be located in the dynamic link library Mapi32.dll.
	
	You may also receive the following error message:
	
	  Emsmta.exe failed to initialize properly.
	
	CAUSE
	=====
	
	This error may occur if the installed Mapi32.dll on the System32 NT subdirectory
	is not a compatible version for Microsoft Exchange Server. To correct this
	problem, copy the Mapi32.dll located in the Setup\<platform> directory on
	the Microsoft Exchange Server compact disc.
	
	MORE INFORMATION
	================
	
	This error may occur if you have installed ARCserve 2.01 for Windows NT. This
	tape backup product installs a version of Mapi32.dll that is incompatible with
	Microsoft Exchange Server.
	
	Another possible cause for this error message is if Eudora is installed and it is
	replacing the .DLL. The resolution is to enable the 'Never' option in Eudora
	
	If MAPI is not set to 'Never' in Eudora, Eudora backs up the Mapi32.dll, then
	replaces/edits the file. This causes Outlook to be unable to read this dll
	causing the error message. Removing Outlook and reinstalling as well as renaming
	and copying a new version of Mapi32.dll will fix the problem temporarily.
	
	To verify that this MAPI is set to 'Never' do the following in Eudora:
	
	Choose Tools-Options, then set MAPI to 'Never'
	
	This will stop Eudora from editing the Mapi32.dll
	
	ARCserve and Eudora are manufactured by vendors independent of Microsoft; we make
	no warranty, implied or otherwise, regarding these product's performance or
	reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange400 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:97; winnt:4.0
	
	=============================================================================
	

{% endraw %}
