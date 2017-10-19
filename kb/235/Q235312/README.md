---
layout: page
title: "Q235312: XWEB: OWA Installations and the IIS Default Web Site"
permalink: /kb/235/Q235312/
---

## Q235312: XWEB: OWA Installations and the IIS Default Web Site

	Article: Q235312
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Internet Information Server 4.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Outlook Web Access (OWA) on a Microsoft Internet
	Information Server (IIS) 4.0 computer, by default, it is installed on the
	"Default Web Site" created by IIS. Situations may arise in which the Default Web
	Site no longer exists; either it has been deleted or renamed to something other
	than Default Web Site. As a result, OWA will be installed on the first Web site
	listed in the IIS Management Console. This may present a problem because the
	first Web site listed in the Management Console might not be the intended
	location for OWA.
	
	When you install OWA on to any Web site under IIS 4.0 other than the "Default Web
	Site," you may receive the following error message when trying to access OWA:
	
	  Directory Listing Denied
	  This Virtual Directory does not allow contents to be listed.
	
	CAUSE
	=====
	
	The versions of Outlook Web Access listed in this article have been designed to
	create the Exchange Server virtual directory under the Default Web Site. It may
	not function correctly under any other Web sites.
	
	RESOLUTION
	==========
	
	Use the Default Web Site created by the IIS 4.0 installation for your OWA
	virtual directory. Do not attempt to copy the Exchange Server virtual directory
	from another Web site. Only a proper installation of OWA from the Exchange
	Server CD ensures proper operation. Be sure to reapply any Exchange Server
	service packs after the initial OWA installation.
	
	WORKAROUND
	==========
	
	If it is necessary to change the Default Web Site, DO NOT delete it. Install
	OWA, and verify its operation before doing anything else. At this point, you may
	rename the Default Web Site. OWA (and any other virtual directories) should
	continue to function normally.
	
	MORE INFORMATION
	================
	
	IIS 4.0 provides the means for hosting multiple Web sites under a single server.
	This is most commonly used for either multiple corporate identities or
	Intranet/Internet solutions. It is important to understand that no two Web sites
	on a single IIS server may occupy the same port and IP address. The individual
	sites will fail when you try to start them. However, by associating one multiple
	site with either a different port number or IP addresses, you may host more than
	one Web site on a single IIS server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbiisSearch kbiis400 kbOWASearch kbOWA550 kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
