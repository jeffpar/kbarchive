---
layout: page
title: "Q155883: NT 4.0 Breaks SNA Server 2.x Server Communication Over IP"
permalink: /kb/155/Q155883/
---

## Q155883: NT 4.0 Breaks SNA Server 2.x Server Communication Over IP

{% raw %}

	Article: Q155883
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade from Windows NT 3.51 to Windows NT 4.0, SNA Server Admin is no
	longer able to locate the primary SNA Server 2.1/2.11 configuration server. This
	problem will occur if the SNA Server "server" computers are separated by TCP/IP
	routers and no LMHOSTS files are being used to define the Windows NT domain
	controllers where the SNA Servers are running.
	
	When you start SNA Server Admin on a Backup SNA Server, the following error will
	be displayed:
	
	  The Primary SNA Server for the domain is not active.
	  OK to attempt to open to a Backup SNA Server in read only mode?
	
	For more information on troubleshooting SNA Server 2.1 or 2.11 communication
	across TCP/IP routers, see the following Microsoft Knowledge Base article:
	
	  ARTICLE-ID: Q148969
	  TITLE: Troubleshooting SNA Server Communication Over an IP Router
	
	NOTE: Microsoft SNA Server 3.0 (to be released Fall 1996) does not rely on this
	Windows NT mechanism for server-to-server communication across TCP/IP routers.
	So, this issue is not relevant if SNA Server 3.0 is being used.
	
	CAUSE
	=====
	
	Optimizations made to Netbt.sys under Windows NT 4.0 have introduced a problem
	with SNA Server 2.x inter-server communication over TCP/IP routers.
	
	RESOLUTION
	==========
	
	Customers can work around the problem by adding an LMHOSTS file on the Windows
	NT 4.0 domain controllers where SNA Server is running and adding an entry for
	each SNA Server as follows:
	
	  <ipaddress>   <computername>  #PRE #DOM:<winntdomainname>
	
	For example:
	
	  123.123.10.10   SNASERVER1  #PRE  #DOM:NTDOMAIN
	  123.105.15.149  SNASERVER2  #PRE  #DOM:NTDOMAIN
	  199.199.20.5    SNASALES    #PRE  #DOM:NTDOMAIN
	
	An entry for each domain controller where SNA Server is running is required.
	
	A Windows NT 4.0 fix to this problem is also available from Microsoft which does
	not require the above LMHOSTS entries (in other words, in WINS-only
	configurations).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the service pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : winnt:
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
