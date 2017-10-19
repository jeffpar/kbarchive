---
layout: page
title: "Q174693: XADM: Exchange Organization Name Is Case Sensitive"
permalink: /kb/174/Q174693/
---

## Q174693: XADM: Exchange Organization Name Is Case Sensitive

	Article: Q174693
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Exchange organization name is case sensitive when you reinstall Exchange
	Server during disaster recovery, but is not case sensitive with regard to
	directory replication addressing.
	
	MORE INFORMATION
	================
	
	When viewing information about the organization name and directory replication,
	case sensitivity of the organization name is unimportant.
	
	If the only difference between the organization names is the case- sensitivity,
	all parts of directory service replication will work correctly. If a replication
	problem occurs because the case of the organization or site name differs, it is
	a bug and should be treated as such. Case sensitivity of the organization name,
	regarding directory service replication, is not an issue. However, it is an
	issue regarding disaster recovery or restoring. For example, a server in an
	organization named Dynasty fails and must be restored, if Microsoft Exchange
	Server is reinstalled and the organization is named DYNASTY (uppercase), the
	store does start because of the mismatch (Dynasty versus DYNASTY).
	
	This is a constraint of the X.500 nomenclature in the information store. This can
	be avoided by reinstalling Exchange Server with the original organization name,
	Dynasty, for that restoration of that server. More information regarding
	disaster recovery can be found at the Microsoft World Wide Web site at
	http://www.microsoft.com/exchange/evalgd.htm.
	
	Additional query words: Organization case-sensitivity replication crash
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
