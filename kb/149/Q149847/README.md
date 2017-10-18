---
layout: page
title: "Q149847: XADM: Isinteg Reports IPM Subtree Missing From IMC Mailbox"
permalink: kb/149/Q149847/
---

## Q149847: XADM: Isinteg Reports IPM Subtree Missing From IMC Mailbox

	Article: Q149847
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You might receive the following error when running Isinteg, a utility that ships
	with Microsoft Exchange Server:
	
	  Error: <Mailbox & ID> "Mailbox - <X.500 path to the IMC>":
	  IPM subtree missing.
	
	MORE INFORMATION
	================
	
	When you run Isinteg -pri, an error will be logged in the summary and you will
	see the above error in the Isinteg.pri log. This error will be accompanied by 8
	warnings when you run Isinteg -pri -verbose.
	
	These errors are normal. By design Isinteg runs a check against each mailbox in
	the private information store. When it checks the mailbox for the Microsoft
	Exchange Internet Mail Connector (IMC) it finds several structures missing.
	These structures (Sent Mail, Deleted Items, and others) are not used by the IMC
	and are therefore not created. These errors present no problem for the IMC.
	
	The warnings that are logged when Isinteg -pri -verbose is run are listed below:
	
	  Warning: <Mailbox & ID> "Mailbox - <X.500 path to the IMC>":
	  IPM Subtree not in count database
	
	  Warning: <Mailbox & ID> "Mailbox - <X.500 path to the IMC>":
	  Sentmail not in count database
	
	  Warning: <Mailbox & ID> "Mailbox - <X.500 path to the IMC>":
	  Wastebasket not in count database
	
	  Warning: <Mailbox & ID> "Mailbox - <X.500 path to the IMC>":
	  Finder not in count database
	
	  Warning: <Mailbox & ID> "Mailbox - <X.500 path to the IMC>":
	  Views not in count database
	
	  Warning: <Mailbox & ID> "Mailbox - <X.500 path to the IMC>":
	  Common Views not in count database
	
	  Warning: <Mailbox & ID> "Mailbox - <X.500 path to the IMC>":
	  Schedule not in count database
	
	  Warning: <Mailbox & ID> "Mailbox - <X.500 path to the IMC>":
	  Shortcuts not in count database
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
