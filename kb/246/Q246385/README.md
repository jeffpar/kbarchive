---
layout: page
title: "Q246385: XFOR: Directory Entries Not Imported From Novell GroupWise"
permalink: /kb/246/Q246385/
---

## Q246385: XFOR: Directory Entries Not Imported From Novell GroupWise

{% raw %}

	Article: Q246385
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use an import filter to specify that certain directory entries from a
	Novell GroupWise post office need to be imported during directory
	synchronization (dirsync), and then you perform a full reload, the entries are
	not imported. This issue occurs if you specify a domain, post office, or
	directory entry name that contains extended characters.
	
	CAUSE
	=====
	
	This issue occurs because the code pages used by the Exchange Server computer
	and the Novell GroupWise Application Programming Interface (API) Gateway are
	different. Exchange Server can convert code pages during dirsync, but it
	performs this conversion process after the import filter has been evaluated. If
	the code pages are different and the strings that are specified in the import
	filter contain extended characters, this may prevent the Exchange Server
	computer from properly evaluating the import filter to determine which directory
	entries to import.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	By default, the GroupWise API Gateway uses code page 437. The Exchange Server
	computer is typically configured to use code page 1252.
	
	For additional information about specifying an import filter, please see the
	Microsoft Exchange Connector for Novell GroupWise user's guide (the Gwconn.rtf
	file) that is available in the Exchconn\Setup\<platform>\Gwxconn folder on
	the Exchange Server version 5.5 Service Pack 3 CD-ROM, where <platform> is
	the appropriate folder on the CD-ROM (I386 or Alpha). Note that the latest
	service pack for Exchange Server 5.5 is also available on the Internet.
	
	For additional information about obtaining the latest service pack for Exchange
	Server 5.5, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q191014 How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
