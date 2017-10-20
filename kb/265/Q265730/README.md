---
layout: page
title: "Q265730: XCLN: Cannot Install OWA From an Exchange Server 5.5 Upgrade CD"
permalink: /kb/265/Q265730/
---

## Q265730: XCLN: Cannot Install OWA From an Exchange Server 5.5 Upgrade CD

{% raw %}

	Article: Q265730
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Outlook Web Access (OWA) from an Exchange Server 5.5
	Upgrade CD on a computer running Internet Information Service (IIS) but with no
	existing Exchange Server 5.5 components, Setup may stop.
	
	CAUSE
	=====
	
	The Exchange Server 5.5 Upgrade CD upgrades only components that are already
	installed. Since no prior Exchange Server components exist on a new IIS server,
	Setup has nothing to upgrade.
	
	WORKAROUND
	==========
	
	To work around this issue, on the IIS computer, use an Exchange Server CD of an
	earlier version to install an Exchange component, and then install the OWA
	component.
	
	Follow these steps:
	
	1. On the computer running IIS, run an Exchange Server 4.x or 5.O CD, and in the
	  Microsoft Exchange Server Setup dialog box, click Complete/Custom.
	
	2. In the Exchange Server Setup Complete/Custom dialog box, click to select
	  Books Online in the Options box.
	
	3. Restart the computer.
	
	4. Run the Exchange Server 5.5 Upgrade CD, and in the Microsoft Exchange Server
	  Setup dialog box, click Complete/Custom.
	
	5. In the Exchange Server Setup Complete/Custom dialog box, click to select
	  Books Online in the Options box.
	
	6. Restart the computer.
	
	7. Run the Exchange Server 5.5 Upgrade CD, and in the Microsoft Exchange Server
	  Setup dialog box, click Add/Remove.
	
	8. In the Exchange Server Setup Complete/Custom dialog box, click to select
	  Outlook Web Access in the Options box.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q234033 XCLN: Exchange 5.5 Upgrade CD Installation Problems
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
