---
layout: page
title: "Q154053: XFOR: How To Change cc:Mail Address Format To &quot;Last, First&quot;"
permalink: /kb/154/Q154053/
---

## Q154053: XFOR: How To Change cc:Mail Address Format To &quot;Last, First&quot;

	Article: Q154053
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Custom Recipients created in Microsoft Exchange Server through cc:Mail connector
	directory synchronization have an e-mail address format of "First Last at
	ccpostoffice;" however, an administrator may prefer they be addressed as "Last,
	First at ccpostoffice."
	
	This article discusses changing the e-mail address for cc:Mail custom recipients;
	it does not discuss changing the display name or alias. To change the default
	behavior for those fields, please see the following Microsoft Knowledge Base
	article:
	
	  Q183058 XFOR: Modifying the Display Name and Alias for cc:Mail Migration
	
	CAUSE
	=====
	
	When directory synchronization is configured between Exchange Server and
	cc:Mail, custom recipients matched to cc:Mail users are created in the Exchange
	address list. The default e-mail address for a cc:Mail recipient created in
	Exchange Server through directory synchronization will be in the following
	format:
	
	  First Last at ccpostoffice
	
	However, it is common practice among cc:Mail administrators to define users in
	the following format:
	
	  Last, First at ccpostoffice
	
	Even though the e-mail address in Exchange is "First Last at ccpostoffice," mail
	will still be delivered correctly to cc:Mail recipients defined as "Last, First
	at ccpostoffice."
	
	However, the "First Last" naming style in Exchange may cause other problems if
	there is more than one cc:Mail connector in the Exchange Server organization or
	if synchronization-generated cc:Mail custom recipients are replicated out of
	Exchange Server back to cc:Mail.
	
	In these cases, the Exchange-style name formatting may overwrite the cc:Mail
	formatting as seen in the cc:Mail Administrator program. This can be annoying to
	cc:Mail administrators who are used to searching for users and sorting lists by
	Last names.
	
	If you are backboning cc:Mail through Exchange Server, and using the Exchange
	Server Administrator program rather than cc:Mail Administrator to create cc:Mail
	recipients, the First Last style may pose similar problems.
	
	WORKAROUND
	==========
	
	To work around this problem, you may enable a registry value that causes the
	generation of cc:Mail custom recipient addresses in the format "Last, First at
	ccpostoffice." This registry setting will also create a secondary proxy address
	in the form "First Last at ccpostoffice." Thus, each cc:Mail custom recipient
	will be associated with both addressing forms.
	
	Note that this registry change will cause this effect only for imported cc:Mail
	recipients whose names are in "Last, First" format. If a cc:Mail entry
	synchronized with Exchange is not a BBS or ML entry, or is not in "Last, First"
	format, then this registry change will have no effect for that entry
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To enable the fix, after installing the latest Microsoft Exchange Server 5.0 U.S.
	Service Pack, start the Microsoft Windows NT Registry Editor and locate the
	following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \MSExchangeCCMC\Parameters\Generate secondary proxy
	
	Set this key to 0x1 (hexadecimal 1) for "Last, First" name format address
	generation. (By default, the key is set to 0x0.)
	
	If this key does not exist, create it as a DWORD and set it to 0x1 for the new
	behavior or 0x00 for the old behavior. If this key does not exist, it is
	possible you have not installed the correct service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange 5.0
	Server U.S. Service Pack. For information on obtaining the service pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
