---
layout: page
title: "Q159308: XFOR: DirSync Names Disappearing"
permalink: kb/159/Q159308/
---

## Q159308: XFOR: DirSync Names Disappearing

	Article: Q159308
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Directory synchronized names either never seem to get to Microsoft Exchange
	Server, or names disappear after you perform a modify. This is most commonly
	seen when a new user is added to the directory synchronization (dir-sync) stream
	and then there is a modify transaction containing template information.
	
	If directory synchronized Custom Recipients were once in the Microsoft Exchange
	Directory and have disappeared or some names are received by Microsoft Exchange
	and seem to be discarded, you may be experiencing this problem.
	
	CAUSE
	=====
	
	In the Microsoft Mail dir-sync process, it is possible to send a (M)odify
	transaction followed only by the new template information as follows:
	
	  A Leopard, Lady                  SNADS:NET/PO/LEOPARD
	  M Leopard, Lady                  SNADS:NET/PO/LEOPARD
	  Leopard, Lady                  SNADS:NET/PO/LEOPARD<----Notice this is
	  duplicate of line 1
	   - Internal Mail Code:/1 and is not necessary on MSMail DirSync.
	   - Department:/2
	   - Division:/Testing
	  A Lion, Leo                      SNADS:NET/PO/LIONLEO
	  M Lion, Leo                      SNADS:NET/PO/LIONLEO
	   - Internal Mail Code:/1
	   - Department:/2
	   - Division:/Testing
	
	Notice Leo Lion's (M)odify is not followed by a second line repeating his
	friendly name/address information as Lady Leopard's (M)odify does. His (M)odify
	transaction goes directly into the Template information changes.
	
	Both of these (M)odify transactions are valid according to the Microsoft Mail
	Dir-Sync Protocol but the (M)odify transaction is not being handled properly by
	Exchange if it does not contain the friendly name/address information repeated
	on the second line of the (M)odify transaction. Note: this replication is not
	necessary, according to the Microsoft Mail Dir- Sync Protocol, if the friendly
	name or address has not changed.
	
	All Microsoft Mail postoffices and computers running Microsoft Exchange Server
	will duplicate the friendly name/address information line as Lady Leopard's
	(M)odify illustrates above. This problem is only seen when manual Import.txt
	files are created and added to the dir-sync stream manually or by an automated
	process written by you.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	Ensure that all (M)odify transactions destined for Exchange has the friendly
	name/address information line repeated on line two of the (M)odify transaction.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
