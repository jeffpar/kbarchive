---
layout: page
title: "Q166616: XFOR: IMS Can Accept RFC821 Addresses Containing an Equal Sign"
permalink: kb/166/Q166616/
---

## Q166616: XFOR: IMS Can Accept RFC821 Addresses Containing an Equal Sign

	Article: Q166616
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	With the release of Microsoft Exchange Server 5.0 Service Pack 1 (SP1), the
	Internet Mail Service (IMS) can accept a message from an address containing an
	equal sign, if you add a registry entry.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe, depending on your version
	  of Windows NT).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     System/CurrentControlSet/Services/MSExchangeIMC/Parameters
	
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	     Value Name: AcceptMalformed821Adrs
	     Data Type:  REG_DWORD
	     Value:      1
	
	
	4. Quit Registry Editor.
	
	The Internet Mail Service (IMS) is stricter with regard to RFC 821 compliance
	than the Internet Mail Connector (IMC) that shipped with Microsoft Exchange
	Server version 4.0.
	
	There is a still a need for the IMS to interoperate with older legacy mail
	systems owned by large organizations. For example, this registry setting will be
	useful for companies that use systems such as the DEC Ultrix.
	
	DEC Ultrix is manufactured by DEC, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: malformed address smtp
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbhowto
	
	=============================================================================
	
