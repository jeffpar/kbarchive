---
layout: page
title: "Q246575: ADSI Scripts Do Not Work Between Windows 2000 and Windows NT 4.0"
permalink: kb/246/Q246575/
---

## Q246575: ADSI Scripts Do Not Work Between Windows 2000 and Windows NT 4.0

	Article: Q246575
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use ADSI scripts on a computer running Windows 2000 to
	manage IIS on a computer running Windows NT 4.0, or if try to manage IIS on a
	Windows 2000 computer from a Windows NT 4.0 computer, the following error
	messages may occur:
	
	- From a Windows 2000 computer to a Windows NT 4.0 computer:
	
	  0x800CC810 (MD_ERROR_IISAO_INVALID_SCHEMA)
	
	- From a Windows NT 4.0 computer to a Windows 2000 computer:
	
	  0x80070003 (ERROR_PATH_NOT_FOUND)
	
	CAUSE
	=====
	
	Full ADSI management of IIS between different versions of Windows is not fully
	implemented. The errors are primarily caused by metabase-schema differences
	between Windows NT 4.0 and Windows 2000.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	A fix has been generated to allow backward compatibility, thus allowing a
	computer running IIS 5.0 to remotely administer the metabase on a computer
	running IIS 4.0 via the IIS Administration Objects (IISAO), the ADSI provider
	for IIS. For additional information about this fix, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q262739 Can't Administer IIS by Using ADSI on Window NT 4.0 IIS 4.0 from
	  Windows 2000 IIS 5.0 and Vice Versa
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
