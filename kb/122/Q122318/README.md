---
layout: page
title: "Q122318: Using Null Modem for RAS with Third-Party PPP Clients"
permalink: /kb/122/Q122318/
---

## Q122318: Using Null Modem for RAS with Third-Party PPP Clients

{% raw %}

	Article: Q122318
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attach a third-party Point-to-Point Protocol (PPP) client to a Remote
	Access Service (RAS) server via a null modem cable, the RAS server port status
	reports a hardware failure and no connection is made.
	
	CAUSE
	=====
	
	This problem occurs due to the null modem scripts in the MODEM.INF file being
	specifically written for Windows NT computers only.
	
	RESOLUTION
	==========
	
	To correct this problem, you can modify the Null Modem entry in the MODEM.INF
	file for the Windows NT RAS server and the INI extension file for the
	third-party PPP client.
	
	NOTE: If you are using Modem.inf with Microsoft Windows NT version 4.0, see the
	following article in the Microsoft knowledge base:
	
	  ARTICLE-ID: Q150808
	  TITLE : Disabling Support for Unimodem Modems in Remote Access
	
	Server Side
	-----------
	
	Change the Null Modem entry in the MODEM.INF file to the following:
	
	  CALLBACK_TIME=10
	  DEFAULTOFF=compression
	  MAXCARRIERBPS=19200
	  MAXCONNECTBPS=19200
	
	  COMMAND_INIT=
	  NoResponse
	
	  COMMAND_LISTEN=
	  CONNECT=$
	  CONNECT=<h00>CLIENT
	  COMMAND_LISTEN=
	  NoResponse
	
	  COMMAND_DIAL=CLIENT
	  CONNECT=SERVER
	
	Client Side
	-----------
	
	For the client side, you want to send a "$" (without quotation marks) to signify
	a CONNECT. For example, the Chameleon product from NetManage, Inc., uses a
	SLIP.INI file to send scripts. In the section for Windows NT, change the
	following lines:
	
	  "script=-n" to "script=-n $$ -n" (without quotes)
	
	The Chameleon product discussed here is manufactured by NetManage, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt serial 3rdparty
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	

{% endraw %}
