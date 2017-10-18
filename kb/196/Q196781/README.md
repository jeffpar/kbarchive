---
layout: page
title: "Q196781: XCON: Multiple SMTP and NNTP Entries within Key Manager"
permalink: kb/196/Q196781/
---

## Q196781: XCON: Multiple SMTP and NNTP Entries within Key Manager

	Article: Q196781
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may find that there is more than one instance of either SMTP or NNTP
	protocols within the Internet Information Service (IIS) Key Manager applet. The
	existence of more than one of the same protocols suggests that the Windows NT
	Option Pack has been installed on this computer. These multiple instances will
	cause confusion as to which protocol to install a certificate against.
	
	MORE INFORMATION
	================
	
	To determine which protocol to apply the certificate against, look at the icon
	associated with it. If there are two SMTP protocols, the protocol that is
	related to the Windows NT Option Pack will have an icon that resembles a mail
	message. The protocol that is linked to Exchange Server will have an icon that
	resembles a newspaper.
	
	If there are two NNTP protocols, it isn't as easy to identify which protocol is
	associated with which program because both are represented with a newspaper
	icon. To determine which is which, in the Key Manager, select one of the NNTP
	protocols, and on the Key menu, select Properties.
	
	- If the "Server Connection" dialog box is displayed, then this protocol is
	  associated with Exchange Server.
	
	- If "Server Bindings" is displayed, this protocol is associated with the
	  Windows NT Option Pack.
	
	Even though there are multiple entries within the Key Manager, it doesn't mean
	that both services are running. By default, only one instance of these services
	can run at a time.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.0,5.5
	
	=============================================================================
	
