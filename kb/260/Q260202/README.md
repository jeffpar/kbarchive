---
layout: page
title: "Q260202: XADM: BlackBerry Pager Software Changes Auto Naming Generation"
permalink: /kb/260/Q260202/
---

## Q260202: XADM: BlackBerry Pager Software Changes Auto Naming Generation

{% raw %}

	Article: Q260202
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Research In Motion Limited (RIM) BlackBerry Enterprise Server,
	a two-way text paging software, on an Exchange Server-based computer, the Auto
	Naming generation rules (on the Tools menu, click Options, and then click Auto
	Naming) in the Exchange Administration program are changed and any new
	recipients are created with the display name and alias name in the wrong
	format.
	
	For example, the Auto Naming feature for display name generation may have
	originally been set to "Last, First (Smith, John)" which shows as "%Last,
	%First" in the "Custom" section. After you install the BlackBerry Enterprise
	Server, the same generation type, "Last, First (Smith, John), is selected in the
	Administration program, but the "Custom" section defaults to "%First %Last" for
	display name, and "%First%1Last" for the alias name. All new recipients use this
	"custom" format to generate display and alias names.
	
	CAUSE
	=====
	
	The Auto Naming generation information is not server-specific. This information
	is set in a user's Microsoft Windows NT profile, the Ntuser.dat file. The
	Ntuser.dat file is started as a registry hive called HKEY_CURRENT_USER every
	time that a user logs on to a Windows NT computer.
	
	After you install the BlackBerry Enterprise Server and you start the Exchange
	Administration program against a server in the site where BlackBerry Enterprise
	Server is installed, the following registry values are modified in the user's
	profile or registry:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Exchange
	
	  Values:
	  ANGAutotextFormat
	  DNGAutotextFormat
	
	The "ANG" acronym stands for Alias Name Generation and the "DNG" acronym stands
	for Display Name Generation. This change only occurs the first time that you
	start the Exchange Administration program against the server after you install
	BlackBerry Enterprise Server. Also, if you start the Administration program
	against another server in the site other than the server where you installed
	BlackBerry Enterprise Server, you must replicate the BlackBerry Enterprise
	Server extensions to the Site\Configuration\Add-Ins container on that server
	before the problem occurs. The names of these extensions are BBMailboxExt and
	BBServerExt.
	
	RESOLUTION
	==========
	
	To resolve this problem, change the Auto Naming generation feature back to the
	previous setting. This must be performed on each computer on which you have
	started the Exchange Administrator program against one of the servers in the
	site.
	
	WORKAROUND
	==========
	
	The owner of this product, RIM, is aware of this issue. For more information
	about this problem, please contact RIM at the following RIM Web site:
	
	  http://www.blackberry.net/home/main.shtml
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q259577 XADM: Exchange Administrator Settings Are Windows NT Profile-Specific
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
