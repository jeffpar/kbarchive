---
layout: page
title: "Q165153: SNA Server Name Cannot Be Changed in Manager"
permalink: /kb/165/Q165153/
---

## Q165153: SNA Server Name Cannot Be Changed in Manager

{% raw %}

	Article: Q165153
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server name cannot be changed within SNA Server Manager after the
	Windows NT Server name is changed.
	
	CAUSE
	=====
	
	SNA Server Manager was not originally designed to allow the SNA Server name to
	be changed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. With the hotfix, SNA
	Server Manager has been updated to allow a SNA Server name to be changed. A
	Change button that allows the SNA Server name to be changed has been added to
	the Server Properties dialog box. The Server properties dialog box is available
	by right-clicking on a SNA Server listed in SNA Server Manager, and then
	clicking Properties on the resulting menu.
	
	The SNA Server whose name is to be changed must be in an Offline status before
	the name can be changed. Therefore, the name can be changed when viewing SNA
	Server configurations by means of Offline mode or by means of online
	configurations when the server to be changed is Offline. The SNA Server name
	cannot be changed if the server status is Inactive or Active.
	
	The updated modules are:
	
	  <Snaroot>\System\Snapage.dll
	  <Snaroot>\System\Snaole.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
