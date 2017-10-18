---
layout: page
title: "Q146293: XADM: Auto-naming Feature Doesn't Work with Directory Import"
permalink: kb/146/Q146293/
---

## Q146293: XADM: Auto-naming Feature Doesn't Work with Directory Import

	Article: Q146293
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Auto Naming screen of the Microsoft Exchange Administrator program states:
	
	  Auto naming rules lets you customize the display name. . . for new
	  mailboxes.
	
	The online help for this topic states:
	
	  Use Auto Naming Options to control the way display and alias names
	  for mailboxes and custom recipients are automatically generated.
	
	However, when you migrate users from ccMail to Microsoft Exchange and specify a
	template for the format of user accounts, the template will not be used.
	
	CAUSE
	=====
	
	A fixed rule for building default values for Display-Name and Mail-Nickname was
	being used, instead of using the Administrator program autotext format strings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Default generation of Display-Name and Alias-Name when not specified has been
	changed to be as much like the Administrator program as possible. When the
	import occurs, the Admin options value is read from the registry at:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Exchange\ 
	  MSExchangeAdminCommon:Options
	
	and the AutoText format strings for generating Display-Name and Alias-Names are
	extracted from it. If these values are not specified, are not readable, or are
	specified as constant strings, the default format strings are used.
	
	The default strings are: Display Name = "%First %Last" and Alias Name =
	"%First%1Last". For each entry created, if there is no value specified for
	Display-Name or Mail-Nickname, a default value is constructed according to the
	rule obtained above. If the registry parameter holds a constant literal string,
	the Common-Name is used.
	
	NOTE: This does NOT apply to modifications, only creating new entries. Also, to
	fall inline with the Microsoft Exchange Administrator program, the method used
	to get a default value for Assoc-NT-Account has been slightly modified: if no
	value is specified for either Assoc-NT-Account or Obj-User, the Mail-Nickname is
	used (either as specified or as constructed). The former behaviour was to use
	the value specified for the Common-Name.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	
