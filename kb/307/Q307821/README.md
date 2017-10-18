---
layout: page
title: "Q307821: Permissions Lost When Shared Folders Service Is Restarted"
permalink: kb/307/Q307821/
---

## Q307821: Permissions Lost When Shared Folders Service Is Restarted

	Article: Q307821
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 27-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Any share permissions set through Windows Explorer on a drive that is mapped to
	an AS/400 shared folder by using the Microsoft Host Integration Server 2000
	(HIS) Shared Folders Service are lost when the Shared Folders Service is
	restarted.
	
	CAUSE
	=====
	
	The Shared Folders Service deletes all AS/400 shared folder drive mappings when
	the Service is stopped and recreates the AS/400 shared folder drive mappings
	when the service is started. When the drive mappings are recreated, the Shared
	Folders Service sets the permissions from information that it previously
	stored.
	
	When share permissions are set through the Folder Definition dialog box in SNA
	Manager, the Shared Folders Service stores these permissions for future use.
	
	When share permissions are set through Windows Explorer, Shared Folders is unable
	to detect those changes and does not store the new permissions for future use.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
