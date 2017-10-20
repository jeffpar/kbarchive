---
layout: page
title: "Q265438: XADM: Exmerge Error Message: CMapiSession::CreateEMSPSTProfile"
permalink: /kb/265/Q265438/
---

## Q265438: XADM: Exmerge Error Message: CMapiSession::CreateEMSPSTProfile

{% raw %}

	Article: Q265438
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Mailbox Merge program (Exmerge) to move data
	from a mailbox to a personal folder file (.pst file) on an Exchange Server
	computer that is a recovery server, Exmerge may generate the following error
	message several times for a variety of users:
	
	  [07:00:21] Copying data from mailbox 'Smith, John' ('JSmith') on Server
	  'EXCH1' to file 'D:\EXMERGE\EXMERGEDATA\JSMITH.PST'.
	  [07:00:21] Error configuring message service (MSEMS) (UNKNOWN ERROR)
	  (CMapiSession::CreateEMSPSTProfile) [07:00:21] Errors encountered. Copy
	  process aborted.
	
	In the Exchange Server Administrator program, the restored mailboxes are
	displayed on the Mailbox Resources tab, but not in the Recipients container.
	
	CAUSE
	=====
	
	This issue can occur if the directory has not been synchronized with the
	information store on the recovery server. If the recovered mailboxes are not
	displayed in the Recipients container, you are experiencing the issue that is
	described in this article.
	
	This issue only occurs when you are restoring an information store.
	
	RESOLUTION
	==========
	
	To resolve this issue, run the DS/IS consistency adjuster (on the Advanced tab
	of the server properties). After you run the DS/IS consistency adjuster, Exmerge
	runs successfully. Be aware that the DS/IS consistency adjuster may rehome
	public folders if there are other servers in the site or other sites in the
	organization. For additional information about the DS/IS consistency adjuster,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q182979 XADM: Function and Effects of the DS/IS Consistency Adjuster
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
