---
layout: page
title: "Q164124: Exchange MTA: Page File Bytes Grows Indefinitely in Perfmon"
permalink: /kb/164/Q164124/
---

## Q164124: Exchange MTA: Page File Bytes Grows Indefinitely in Perfmon

	Article: Q164124
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You are sending e-mail from Microsoft Exchange Server running on Windows NT
	Server 4.0 or Windows NT Workstation 4.0 over an X.400 Connector with conversion
	turned on. When you run Performance Monitor on the Message Transfer Agent (MTA),
	it shows that Page File bytes continue to grow as messages flow across the
	link.
	
	NOTE: This symptom does not occur with Windows NT Server 3.51 SP5 or Windows NT
	Workstation 3.51 SP5.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on The following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	This is a hotfix, and distribution requires manager approval. To receive the
	hotfix, customers must be encountering the bug as described above. You must
	track the customers you send this to and supply them with the next Service Pack
	when it becomes available. The new files are ntkrnlmp.exe and ntoskrnl.exe on
	http://hotfix.
	
	MORE INFORMATION
	================
	
	To send message content formatted in the Microsoft Exchange Server internal
	format (MDBEF):
	
	1. In the Microsoft Exchange Server Administrator program, click Connections.
	
	2. Double-click the X.400 Connector you want to modify.
	
	3. On the Advanced tab, under X.400 link options, click "Allow MS Exchange
	  contents."
	
	This will allow you to send message content formatted in the Microsoft Exchange
	Server internal format (MDBEF) when possible. Clear this check box to convert
	the message format to the standard P2/P22 X.400 format.
	
	REFERENCES
	==========
	
	For more information on conversion, see the "Microsoft Exchange Administrators
	Guide," Chapter 8.
	
	
	For more information about X.400 address types, see the "Microsoft Exchange
	Administrators Guide," Appendix A, "Addressing."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
