---
layout: page
title: "Q169459: XFOR: NNTP Users Cannot Use Exchange Server Newsgroups"
permalink: kb/169/Q169459/
---

## Q169459: XFOR: NNTP Users Cannot Use Exchange Server Newsgroups

	Article: Q169459
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Network News Transfer Protocol (NNTP) newsreader users cannot use Exchange
	Server newsgroups. Attempts to log on to Exchange Server return an error message
	of "no permission".
	
	CAUSE
	=====
	
	Exchange Server newsgroups can be configured to require authenticated access. If
	the Exchange Server computer is configured to require authenticated access, NNTP
	readers who connect to the Exchange Server computer must use clear text or NTLM
	authentication before access to any newsgroup will be allowed. An easy way to
	find out whether the Exchange Server computer has been configured to require
	authenticated access is to use Telnet.
	
	Before proceeding with the workaround, you must test whether this is the cause of
	the problem.
	
	To test with Telnet to see whether the Exchange Server computer has been
	configured to require authenticated access, do the following:
	
	1. On Windows NT or Windows 95, open a command prompt.
	
	2. At the command prompt, type "telnet <machine name> 119" where machine
	  name is the machine name of the Exchange Server computer. You should get a
	  connection to the Exchange Server computer. The server will issue a greeting
	  banner. If the first number in the banner is 201, then the server requires
	  authenticated access. If the first number is 200, anonymous access is
	  allowed. The banner for an Exchange Server computer looks like this:
	
	     201 Microsoft Exchange Internet News Service Version 5.0.1457.10 (no
	     posting)
	
	After you have determined that the Exchange Server computer requires
	authenticated access, find out whether the user ID and password that the NNTP
	newsreader is using will be accepted by the Exchange Server computer.
	
	Again, an easy way to test this is to use Telnet. The section below outlines how
	a sample Telnet session looks. In this sample, lines starting with "S>" are
	sent by the server, and lines starting with "C>" are sent by the client
	(Telnet):
	
	  S> 201 Microsoft Exchange Internet News Service Version 5.0.1457.10
	  C> authinfo user ALIAS
	  S> 381 more authentication required
	  C> authinfo pass PASSWORD
	  S> 502 no permission
	
	The 502 error occurs because the user's Exchange Server mailbox alias and Windows
	NT domain account ID do not match. For example, this happens if a user's
	Exchange Server alias is "TESTUSER" and the primary Windows NT account is
	"TUSER".
	
	WORKAROUND
	==========
	
	There are two ways to work around this problem:
	
	- Enter the primary Windows NT domain account ID as the parameter to the
	  "authinfo user" command. An example of this approach is:
	
	     S> 201 Microsoft Exchange Internet News Service Version 5.0.1457.10
	     C> authinfo user TUSER
	     S> 381 more authentication required
	     C> authinfo pass PASSWORD
	     S> 281 authentication accepted
	
	- Specify the complete Windows NT domain, the Windows NT account ID, and the
	  Exchange Server mailbox alias, separated by a slash (for example,
	  DOMAIN\TUSER\TESTUSER). You can use a forward slash or a backslash as the
	  separator.
	
	    S> 201 Microsoft Exchange Internet News Service Version 5.0.1457.10
	    C> authinfo user DOMAIN\TUSER\TESTUSER
	    S> 381 more authentication required
	    C> authinfo pass PASSWORD
	    S> 281 authentication accepted \
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
