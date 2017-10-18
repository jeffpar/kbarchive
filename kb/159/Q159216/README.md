---
layout: page
title: "Q159216: XCLN: How to Create One-off Address in Korean Exchange Client"
permalink: kb/159/Q159216/
---

## Q159216: XCLN: How to Create One-off Address in Korean Exchange Client

	Article: Q159216
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0 
	- Microsoft Exchange Korean Client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the administrative steps necessary to allow the Korean
	Microsoft Exchange client to create one-off addresses such as addresses for
	Microsoft Mail, Microsoft Mail for AppleTalk Networks, Internet, and X.400.
	
	MORE INFORMATION
	================
	
	When a user attempts to create a one-off address for an X.400 address in the
	Korean Microsoft Exchange client, he or she may not be able to do so because
	"X.400 Address" is not listed in the "New Entry" dialog box. The user may see
	only "Other Address" and "Personal Distribution List" in the listbox.
	
	In order for the Korean Microsoft Exchange client to display complete set of
	address types in "New Entry" dialog box, the Microsoft Exchange Server
	administrator needs to install the Korean template on the computer running
	Microsoft Exchange Server. To install the Korean template:
	
	1. In the Microsoft Exchange Server Administrator program, on the Tools menu,
	  click Directory Import.
	
	2. Click Import File.
	
	3. Select \\Kor\Tpl\Template.csv in the Korean Microsoft Exchange client compact
	  disc.
	
	4. Click Import button.
	
	Additional query words: DBCS kbkorea
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbHLangKorean kbExchangeSearch kbExchange550 kbExchange400 kbExchangeClientSearch kbZNotKeyword2
	Version           : :4.0,5.5
	
	=============================================================================
	
