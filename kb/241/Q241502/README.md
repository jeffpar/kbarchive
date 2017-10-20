---
layout: page
title: "Q241502: XFOR: Misdirection of E-mail May Occur Under High Load"
permalink: /kb/241/Q241502/
---

## Q241502: XFOR: Misdirection of E-mail May Occur Under High Load

{% raw %}

	Article: Q241502
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 15-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	E-mail sent to the Internet (SMTP mail) is accidentally sent to the wrong
	recipient.
	
	CAUSE
	=====
	
	Under certain high-load situations VirusWall may mishandle an SMTP "reset"
	command resulting in a misdirected e-mail message.
	
	RESOLUTION
	==========
	
	To resolve this problem, update to the Trend Micro InterScan patch version 3.23.
	The latest InterScan patches can be obtained from the Trend Micro Web site:
	
	  http://www.antivirus.com/products/isvw/updates_patches.htm
	
	STATUS
	======
	
	Trend Micro has confirmed this to be a problem in the InterScan VirusWall
	product. Trend Micro has proactively placed an update patch that corrects this
	problem on its Web site for customers to download.
	
	
	MORE INFORMATION
	================
	
	For more information on how you can guard yourself from viruses by using the
	Trend Micro InterScan VirusWall, please visit the following site:
	
	  http://www.antivirus.com/products/isvw/default.htm
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
