---
layout: page
title: "Q271356: Require Secure Channel Incorrectly Checked Changing Certificate"
permalink: /kb/271/Q271356/
---

## Q271356: Require Secure Channel Incorrectly Checked Changing Certificate

	Article: Q271356
	Product(s): Internet Information Server
	Version(s): winnt:4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have the Require Secure Channel option enabled for a Web site, and then
	change the IP or Port bindings of the associated Certificate in Key Manager,
	when you exit Key Manager, the Secure Communications dialog box still shows that
	SSL is required to access the resource, even though it is not.
	
	CAUSE
	=====
	
	There is no refresh of the Microsoft Management Console (MMC) snap-in when you
	exit Key Manager.
	
	RESOLUTION
	==========
	
	To display the status correctly, close and re-open the Web Site Properties
	dialog box. The Require Secure Channel check box will then show the correct
	status.
	
	After you change the bindings of a Certificate, Microsoft recommends that you
	check and configure SSL, and then browse to your site to ensure that SSL is
	working correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400 kbiisSearch kbiis400
	Version           : winnt:4.0,4.0 SP6a
	
	=============================================================================
	
