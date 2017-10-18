---
layout: page
title: "Q236983: XADM: Using Directory Import to Modify the Internet Protocol"
permalink: kb/236/Q236983/
---

## Q236983: XADM: Using Directory Import to Modify the Internet Protocol

	Article: Q236983
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use directory export and import to enable or
	disable all of the mailboxes from using Hypertext Transfer Protocol (HTTP) when
	HTTP is enabled for the site and server.
	
	MORE INFORMATION
	================
	
	NOTE: The <A7> symbol is the ALT+0167 ASCII character.
	
	To use directory export and import to enable or disable all of the mailboxes from
	using HTTP:
	
	1. Perform a directory export, and then add the following heading (column) to
	  the .csv file that you created:
	
	  Protocol-Settings
	
	2. Populate this column with one of the following settings to either turn on the
	  HTTP protocol for the mailboxes or turn off the HTTP protocol for the
	  mailboxes, as applicable:
	
	   - HTTP on:
	
	  HTTP<A7>1<A7>1<A7><A7><A7><A7><A7><A7>%IMAP4<A7>1<A7>1<A7>1<A7>ISO-8859-1<A7>0<A7>1<A7>1<A7>0%LDAP<A7>1<A7>1<A7><A7><A7><A7><A7><A7>%NNTP<A7>1<A7>1<A7>3<A7><A7><A7><A7><A7>%POP3<A7>1<A7>1<A7>1<A7>ISO-8859-1<A7>0<A7><A7><A7>
	
	   - HTTP off:
	
	  HTTP<A7>0<A7>1<A7><A7><A7><A7><A7><A7>%IMAP4<A7>1<A7>1<A7>1<A7>ISO-8859-1<A7>0<A7>1<A7>1<A7>0%LDAP<A7>1<A7>1<A7><A7><A7><A7><A7><A7>%NNTP<A7>1<A7>1<A7>3<A7><A7><A7><A7><A7>%POP3<A7>1<A7>1<A7>1<A7>ISO-8859-1<A7>0<A7><A7><A7>
	
	3. Save the .csv file. Make sure that you do not change the format to an .xls
	  file format.
	
	4. Perform a directory import with the modified .csv file. Microsoft recommends
	  that you remove all of the columns except the following columns from the .csv
	  file before you import it:
	
	   - Obj-Class
	
	   - Alias Name
	
	   - Directory Name
	
	   - Home-Server
	
	   - Obj-Container
	
	   - Protocol-Settings
	
	  When you click Directory Import on the Tools menu, make sure that you click
	  Multivalued Properties Overwrite, instead of clicking Append, or the change
	  to the .csv file is not made.
	
	Each mailbox that is listed in the .csv file is modified according to the HTTP
	setting that you added to the .csv file.
	
	You can also use this method to enable or disable Internet Message Access
	Protocol Version 4rev1 (IMAP4), Lightweight Directory Access Protocol (LDAP),
	Network News Transfer Protocol (NNTP), and Post Office Protocol version 3
	(POP3).
	
	The string is comprised of each protocol setting and the percent symbol (%)
	separating the protocols, as applicable:
	
	  HTTP<A7>0<A7>1<A7><A7><A7><A7><A7><A7>%
	  IMAP4<A7>1<A7>1<A7>1<A7>ISO-8859-1<A7>0<A7>1<A7>0<A7>0%
	  LDAP<A7>1<A7>1<A7><A7><A7><A7><A7><A7>%
	  NNTP<A7>1<A7>1<A7>3<A7><A7><A7><A7><A7>%
	  POP3<A7>1<A7>1<A7>1<A7>ISO-8859-1<A7>0<A7><A7><A7>
	
	The number that follows the first <A7> symbol disables or enables that protocol for
	the mailbox, as follows:
	
	- 1=on
	
	- 0=off
	
	The number that follows the second <A7> symbol disables or enables that protocol for
	the server.
	
	For example, if you wanted to disable POP3 and leave all of the other protocols
	enabled, use the following entry in your .csv file under the Protocol-Settings
	heading:
	
	  HTTP<A7>1<A7>1<A7><A7><A7><A7><A7><A7>%IMAP4<A7>1<A7>1<A7>1<A7>ISO-8859-1<A7>0<A7>1<A7>1<A7>0%LDAP<A7>1<A7>1<A7><A7><A7><A7><A7><A7>%NNTP<A7>1<A7>1<A7>3<A7><A7><A7><A7><A7>%POP3<A7>0<A7>1<A7>1<A7>ISO-8859-1<A7>0<A7><A7><A7>
	
	NOTE: If you disable NNTP, HTTP, POP3, and IMAP4 on the server, support for these
	protocols is also disabled for individual mailboxes or custom recipients. The
	protocol may be displayed as enabled on the Protocol tab of the mailbox
	properties even though the protocol is disabled on the server, but an error
	message is displayed when the user tries to use this protocol.
	
	For example, if you disable HTTP on the server, the HTTP protocol is displayed as
	enabled on the user's mailbox. If this user attempts to open Outlook Web Access
	(OWA), the following error message is displayed:
	
	  HTTP access for this account has been disabled by an administrator.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
