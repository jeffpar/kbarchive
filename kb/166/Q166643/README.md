---
layout: page
title: "Q166643: XFOR: Inbody addressing"
permalink: /kb/166/Q166643/
---

## Q166643: XFOR: Inbody addressing

	Article: Q166643
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The inbody (or ad hoc) addressing feature allows host senders to address users
	that are not registered in the host or Microsoft Exchange Server directory. The
	system administrator can disable this feature.
	
	MORE INFORMATION
	================
	
	This inbody addressing feature is available on the host connector because its
	8x8 character address space, consisting of the DGN.DEN, limits the addressing
	options from the host to other mail systems. For example, in Lotus cc:Mail or
	Lotus Notes, a user can explicitly address using @smtp or @notes or @ccmail.
	
	Distribution Group Name (DGN) and Distribution Element Name (DEN) are addressing
	components of a SNADS address. OV/VM addresses have the same restrictions but
	are called nodeid(userid). DGN is similar to a postoffice (or just a grouping of
	users); DEN is similar to a username.
	
	In SNADS or OV/VM, the sender is limited to specifying the DGN (or nodeid) and
	DEN (or userid) of the user. This DGN.DEN (or nodeid[userid]) combination
	uniquely identifies a user defined in the host address directory. Because a
	fully qualified Lotus Notes, Lotus cc:Mail, or SMTP address does not fit in the
	8x8 character field, the sender can specify the recipients in the body of the
	message. A keyword tells the connector where the addresses begin and the blanks
	identify the end of recipient's addresses. The default keyword is "subject:"
	(without the quotes). However, this can be changed by assigning a value to the
	LASTMSGHEADER parameter in the LME-SNADS section of the .ini file.
	
	In the To field, the host user sends the message to DGN.DEN (or nodeid[userid])
	where DGN represents the Exchange Server computer and DEN is the adhoc ID as
	specified in the .ini file in the LME section. In LinkAge Message Exchange, the
	default adhoc ID is "linkage" (without the quotes). In Exchange Server 5.5, an
	administrator has to enter an adhoc ID because the default value is blank
	(hence, disabled).
	
	To Disable Inbody Addressing
	----------------------------
	
	In Exchange Server 5.5:
	
	  Set the value of the ADHOCID parameter in the Exchconn.ini file to a null
	  string. Add the following line to the file:
	
	        ADHOCID =
	
	In Exchange Server versions 4.0 and 5.0:
	
	  Set the value of the ADHOCID parameter in the Linkage.ini file to a null
	  string. Add the following line to the file:
	
	        ADHOCID =
	
	To Enable Inbody Addressing
	---------------------------
	
	By default, inbody addressing is enabled in Exchange Server 4.0 and 5.0. However,
	by default, it is not enabled in Exchange Server 5.5. To use this feature in
	version 5.5, you must enable it.
	
	  Set the value of the ADHOCID parameter in the Exchconn.ini file to the
	  preferred value. For example, add one of the following lines to the file:
	
	        ADHOCID = INTERNET
	
	  -or-
	
	        ADHOCID = INBODY
	
	This behavior is by product design.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
