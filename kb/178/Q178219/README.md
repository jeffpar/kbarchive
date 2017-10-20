---
layout: page
title: "Q178219: XADM: Administrator Cannot Specify a Font Size in IMC"
permalink: /kb/178/Q178219/
---

## Q178219: XADM: Administrator Cannot Specify a Font Size in IMC

{% raw %}

	Article: Q178219
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The Internet Mail Service allows administrators to configure the use of a fixed
	width font, but not the font size.
	
	CAUSE
	=====
	
	This is by design.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.0. This
	problem was first corrected in Exchange Server 5.0 Service Pack 2. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5. This problem
	was first corrected in Exchange Server 5.5 Service Pack 1.For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	After the service pack has been applied, you will now be able to specify the font
	size by setting the following registry value:
	
	  <B>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \MSExchangeIS\Parameters\System\InternetConent</B>
	
	  Name: FontSize
	  Type: REG_DWORD
	  Range: 1 - 7
	  Default: 2
	
	The value specifies an index into a table. The current values of the table are:
	
	  1 = 8 pt
	  2 = 10 pt
	  3 = 12 pt
	  4 = 14 pt
	  5 = 16 pt
	  6 = 20 pt
	  7 = 24 pt
	
	Additional query words: IMC IMS
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
