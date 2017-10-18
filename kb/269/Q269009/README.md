---
layout: page
title: "Q269009: Red Stop Sign Appears in MMC on UNC-Mapped Content Directory"
permalink: kb/269/Q269009/
---

## Q269009: Red Stop Sign Appears in MMC on UNC-Mapped Content Directory

	Article: Q269009
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000kbfaq
	Last Modified: 10-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you map a home folder or virtual folder to a share that is located on
	another computer, a red stop sign icon may be displayed in the Internet Service
	Manager (ISM) next to the resource that is mapped to the universal naming
	convention (UNC) path.
	
	CAUSE
	=====
	
	When you map content to a UNC, Internet Information Server (IIS) requires
	connect as credentials that are used to impersonate all users that connect to
	the UNC resource from the Web or FTP site. Although the connect as credentials
	are used to establish a connection to the UNC path, IIS uses the credentials of
	the logged on user to enumerate, or list, the files in a given folder. When you
	reference resources that are not located on the IIS server, permissions problems
	can occur because the security resources (that is, groups and accounts) on the
	IIS server may not have a security context on the remote (UNC) server.
	
	WORKAROUND
	==========
	
	Although Microsoft does not recommended using UNC-mapped content on
	high-capacity Web sites, the following workarounds are available:
	
	- Specify a domain account for the impersonation, or connect as, credentials.
	
	- Create an account on the UNC server that has the same username and password
	  as the user account that is being used to access Web pages on the IIS server.
	  Both the connect as user and the authenticated user (the user that is
	  connecting from the Web browser) need to have the appropriate new technology
	  file system (NTFS) permissions on the UNC share to access the content.
	
	For additional information on NTFS permissions, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q187506 List of NTFS Permissions Required for IIS Site to Work
	
	Note that the files on the UNC server should be treated as content.
	
	NOTE: If you are using anonymous authentication, by default this is the
	IUSR_ServerName on the IIS server. However, if you are using Basic
	authentication, any user account that browses UNC-mapped content must have a
	security context on the remote computer (that is, either a domain account or
	each corresponding username and password must be created on the UNC server).
	
	
	
	- Promote both the IIS and UNC servers to be domain controllers in the same
	  Microsoft Windows NT 4.0 or Microsoft Windows 2000 domains. This works
	  because domain controllers share the same security accounts database.
	
	NOTE: Microsoft does not recommend installing IIS on a domain controller, due to
	the performance degradation that is caused by authentication and other domain
	functionality that is provided by a domain controller.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In addition to decreasing performance of Web applications by pulling content
	from the network rather than from a local disk, using UNC-mapped content makes
	managing security more difficult. Windows NT and Windows 2000 treat each server
	as its own security entity. Based on this implementation, each computer manages
	its own resources and controls access to the files for which it is responsible.
	Because each server is responsible for managing resources on itself, it is not
	possible to manage and control access to resources on another computer; the
	remote computer is responsible for these resources.
	
	NOTE: One exception to this implementation is domain controllers that are in the
	same domain, which all share the same security database and can manage resources
	on other domain controllers that are in the same domain.
	
	REFERENCES
	==========
	
	For more information on troubleshooting permissions between IIS and the UNC
	servers, see the following articles in the Microsoft Knowledge Base:
	
	  Q185874 How to Troubleshoot Permissions in Internet Information Server 4.0
	
	  Q271214 Unable to Access FoxPro Databases on Netware 5 Server from IIS 5.0
	
	For more information, see the following articles in the Microsoft Knowledge
	Base:
	
	  Q280383 IIS Security Recommendations When You Use a UNC Share and Username
	  and Password Credentials
	
	  Q282060 Resources for Securing Internet Information Services
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbfaq
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
