---
layout: page
title: "Q123779: Changing the Windows NT Computer Name on an SNA Server"
permalink: /kb/123/Q123779/
---

## Q123779: Changing the Windows NT Computer Name on an SNA Server

{% raw %}

	Article: Q123779
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1,3.0,3.0 SP1,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna300sp1 sna4 kbsna400sp1
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, 3.0, 3.0 SP1, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the Windows NT computer name is changed on a machine running SNA Server or
	SNA Workstation, the SNA Server configuration file continues to reflect the old
	computer name. As a result, the SNA Server fails to start.
	
	You can run the SNA Admin program to update the SNA Server service name to the
	new computer name. To do so, you must login with local administrator authority.
	
	NOTE: You may introduce additional problems with any AS/400 connections if the
	local control point name is also changed.
	
	MORE INFORMATION
	================
	
	SNA Server 2.1, 2.11, and 2.11 SP1
	----------------------------------
	
	To update the SNA Server configuration file with the new server name, run the SNA
	Admin program as follows
	
	  "snaadmin <config file>" (without the quotation marks)
	
	where <Config File> is the fully qualified path to the SNA Server
	configuration file. For example:
	
	  "snaadmin c:\sna\system\config\com.cfg" (without the quotation marks)
	
	When you open the configuration file you can change the SNA Server service name
	through the server properties dialog box. After you change the server name,
	choose Save from the File menu to save the configuration.
	
	If the SNA Server machine is supporting connections to one or more AS/400
	computers, and the Local Control Point Name is changed to reflect the new server
	name, the AS/400 connections fail to activate. This problem occurs because the
	SNA Server local control point name corresponds to the APPC controller
	description name on the AS/400, and the old entry still points to the SNA
	Server's adapter address (for 802.2 Token Ring or Ethernet connections) or to
	the poll address (for SDLC connections).
	
	To correct this problem, create a new APPC controller on the AS/400 associated
	with the new SNA Server control point name. To do so, delete the old entry and
	add a new entry. The new entry is added automatically on Token Ring or Ethernet
	if the auto-create controller option is enabled. For SDLC you have to add the
	new entry manually.
	
	SNA Server 3.0 and 4.0
	----------------------
	
	SNA Server 3.0 Service Pack 1 (Service Pack 1 and later) and 4.0 allow the
	administrator to change the server name in the SNA Server configuration file.
	For more information about this, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q165153 SNA Server Name Cannot Be Changed in Manager
	
	If the original version of SNA Server 3.0 is being used (with no service packs)
	there is no way to change the server name within the SNA Server configuration.
	
	Additional query words: prodsna computername servername
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna300sp1 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ300SP1 kbSNAServ400SP1
	Version           : WINDOWS:2.1,2.11,2.11 SP1,3.0,3.0 SP1,4.0,4.0 SP1
	
	=============================================================================
	

{% endraw %}
