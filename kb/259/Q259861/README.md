---
layout: page
title: "Q259861: SMS: Queries Do Not Show Results without Class Rights"
permalink: /kb/259/Q259861/
---

## Q259861: SMS: Queries Do Not Show Results without Class Rights

{% raw %}

	Article: Q259861
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbMMC kbSecurity kbWBEM kbsms200 kbsms200bug kbCollections kbQuery kbReport kbsmsAdmin
	Last Modified: 02-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the following queries in Microsoft Systems Management Server (SMS)
	Administrator Console, you may not receive any results:
	
	- All Systems with Hardware Inventory Collected
	
	- All Systems with Microsoft Word 97
	
	- All Systems with Specified Software File Name and File Size
	
	- All Systems with Specified Software Product Name and Version
	
	- All User Groups
	
	- All Users
	
	CAUSE
	=====
	
	This problem can occur because of the way security is implemented in Windows
	Management Instrumentation (WMI) and Web-Based Enterprise Management (WBEM).
	
	Some of the queries that are included with SMS 2.0 do not return results unless
	class rights to collections are granted. Other queries may work regardless of
	collection rights.
	
	The queries return results for users that have Read and Read Resource class
	security rights to Collections\All Instances. However, if instance security
	rights have been granted to some or all collections, the queries do not return
	any results. Other queries can display results regardless of collection rights,
	even if users have no rights to any collections (class or instance).
	
	WORKAROUND
	==========
	
	To work around this problem, limit the query to a collection, and then give
	users Read and Read Resource instance security rights on that collection.
	
	NOTE: If you do not want to limit the query to a specific collection, another
	option is to grant users Read and Read Resource class security rights to the
	entire collection class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 Service Pack 1 and SMS 2.0 Service Pack 2.
	
	
	MORE INFORMATION
	================
	
	Computers that have been upgraded to Windows Management Instrumentation (WMI)
	1.5 or Microsoft Windows 2000-based computers do not have the WMI 1.1 tool
	(Wbemperm.exe).
	
	NOTE: Windows NT 4.0 users which have WMI 1.5 installed, also need to install the
	Microsoft Security Configuration Editor (SCE), included on the Windows NT 4.0
	Service Pack 4 (SP4) (and later) CD-ROM. On Windows NT-based computers, the tool
	is Wbemcntl.exe. The Microsoft SCE is required to edit the Access Control Lists
	(ACLs) on the Windows Installer (WI) namespaces.
	
	
	Additional query words: prodsms blank empty
	
	======================================================================
	Keywords          : kbMMC kbSecurity kbWBEM kbsms200 kbsms200bug kbCollections kbQuery kbReport kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
