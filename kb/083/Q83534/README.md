---
layout: page
title: "Q83534: Mac Fax: Sealing Wax and Fax Gateway 3.00a-ms"
permalink: kb/083/Q83534/
---

## Q83534: Mac Fax: Sealing Wax and Fax Gateway 3.00a-ms

	Article: Q83534
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.x, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sealing Wax is a feature used by all versions of Microsoft Mail for AppleTalk
	Networks Gateway to Fax for incoming fax documents that are more than one page
	long. Sealing Wax is actually a feature of the MailMaker form- -the Fax gateway
	uses the MailMaker form for all incoming faxes. The form is included as a part
	of the Fax gateway and is automatically installed on your server when the Fax
	gateway is installed.
	
	How Sealing Wax Works
	---------------------
	
	If you receive an incoming multi-page fax document, you can view the first page
	(usually the cover page) by choosing the View Cover Page button in the MailMaker
	read window. This usually allows you to forward the fax to the person specified
	in the delivery instructions of the fax. However, you are not allowed to turn
	the cover page to see the other pages of the document unless you break the
	sealing wax. The only way you can break the sealing wax is to choose the View
	Image File or Save Image File button.
	
	Sealing Wax and Fax Gateway 1.1.2 (for Mail for AppleTalk Networks 2.0)
	-----------------------------------------------------------------------
	
	In Mail for AppleTalk Networks 2.0, a sealed incoming fax document can only be
	forwarded to a single recipient. It cannot be forwarded to multiple recipients
	or a group recipient. When the document is forwarded, the forwarder's copy is
	automatically deleted. This means that only a single user can have access to a
	copy of a sealed fax document, no matter how many times it is forwarded. If you
	have a sealed MailMaker document in your mailbox in Mail for AppleTalk Networks
	2.0, you can be sure that you are the only user that has it (unless it was
	forwarded through a Mail for AppleTalk Networks 3.0 server - see below).
	
	Sealing Wax and Fax Gateway 3.00a-ms (for Mail for AppleTalk Networks 3.0)
	--------------------------------------------------------------------------
	
	In Mail for AppleTalk Networks 3.0, a sealed document may be forwarded to
	multiple recipients, group recipients, and copied or stored in any folder in a
	user's Mail window. This means that many users may have a copy of the same
	sealed document. The only security of a sealed document on Mail for AppleTalk
	Networks 3.0 is that if any one user breaks the seal, it is broken for every
	user on the same mail server. The seal will still be intact if a user on another
	mail server received a copy of the sealed document. In other words, if you break
	the seal on a fax document, you can be assured that you are the first user on
	your mail server that has read the fax document. After the seal has been broken,
	any user that has a copy of the fax document may read it.
	
	If you are using Mail for AppleTalk Networks 3.0 and are concerned about the
	security of incoming faxes, it is important for your incoming fax recipient to
	control the distribution of faxes. Make sure they forward the fax document only
	to those users who should see it. Also make sure they delete all copies of the
	message from their mail folders after any required administrative mail archiving
	has been done so that the fax documents are not available to unauthorized
	personnel on an unattended workstation.
	
	Additional query words: 2.0a 2.0b 2.00 2.00a 2.00b 3.00 faxgate
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN2xSearch
	Version           : WINDOWS:2.x,3.0
	
	=============================================================================
	
