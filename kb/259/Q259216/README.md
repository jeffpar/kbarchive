---
layout: page
title: "Q259216: Behavior of DOMAINNAME&#91;1Bh&#93; Entries in WINS Manager"
permalink: /kb/259/Q259216/
---

## Q259216: Behavior of DOMAINNAME&#91;1Bh&#93; Entries in WINS Manager

	Article: Q259216
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DOMAINNAME[1Bh] entries sometimes are displayed differently in WINS Manager than
	other entries. This article describes these differences and how to view [1Bh]
	entries reliably.
	
	MORE INFORMATION
	================
	
	When a Windows NT 4.0 primary domain controller (PDC) registers with WINS, it
	registers domain name record with a [1Bh} suffix. This is used for three main
	functions in a Windows environment:
	
	- For client password changes.
	
	- For domain administration using tools like User Manager and Server Manager.
	
	- To indicate the PDC as the Domain Master Browser for the domain that it
	  belongs to.
	
	Because Domain Master Browser must query WINS for a list of domains, [1Bh]
	records are stored internally with the suffix at the front of the record instead
	of the end to enable the WINS service to query the internal database faster.
	Because of this, the [1Bh] entry is not displayed in WINS Manager when filtering
	on the domain name using the Set Filter dialog box. It also will initially sort
	near the top of the list shown under Mappings-Show Database and not be displayed
	along with other entries for the domain.
	
	It is often important to confirm that there is a correct [1Bh] entry in WINS. To
	do this, use one or both of the following methods:
	
	METHOD 1
	--------
	
	When you view the database under Mappings-Show Database, click the "Sort by IP
	Address" option, and then click "Sort by Name" in the Show Database window. WINS
	Manager will do a complete sort of the database, and [1Bh] entries will be
	displayed along with other entries for the same domain name. Find the domain
	name under Mappings and the DOMAINNAME[1Bh] should be listed along with the
	other domain registrations.
	
	METHOD 2
	--------
	
	Use the "Set Filter" option when you view the database, enter the IP address of
	the PDC, and then leave the "Computer Name" blank. If this fails to show the
	DOMAINNAME[1B] registration, then the method above should be used to verify
	whether another IP address is registered for the [1Bh] entry.
	
	Windows 2000 has an all new WINS Manager that sorts and displays [1Bh] entries
	consistently without the exceptions listed above.
	
	For additional information about sorting registrations in Windows 2000, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q225130 Verifying Name Records in WINS in Windows 2000
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
