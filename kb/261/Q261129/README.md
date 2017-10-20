---
layout: page
title: "Q261129: DLC Connection Stays Pending Due to Bit-Flipped TEST Poll"
permalink: /kb/261/Q261129/
---

## Q261129: DLC Connection Stays Pending Due to Bit-Flipped TEST Poll

{% raw %}

	Article: Q261129
	Product(s): Microsoft SNA Server
	Version(s): 2.11 SP1,2.11 SP2,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	By default, during 802.2 connection startup, a computer running SNA Server on an
	Ethernet network tests link station-to-link station connectivity by sending four
	LLC test commands (both 802.3 and DIX frame types to both the configured and
	bit-flipped Media Access Control [MAC] addresses). For additional information on
	this process , click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q123791 SNA Server Remote Station Discovery Process
	
	In some environments, it may be necessary to force test commands to only be sent
	to one of these two addresses. A registry entry is available for controlling
	this process. For information on how to do this, see the "More Information"
	section.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SNADLC?\Parameters\ExtraParameters
	
	  NOTE: SNADLC? is the link service used by the connection, and needs
	  bit-flipped TEST polls disabled.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: DisableFlipping
	  Data Type: REG_DWORD
	  Value: 1 (valid values are 0=enable both configured and bit-flipped addresses
	  to be sent; or 1=send only bit-flipped address)
	
	4. Quit Registry Editor.
	
	After a test response is received, the next step in the connection process is for
	SNA Server to send an XID request. SNA Server sends the XID request to the
	address in the first test response that it receives. In some environments,
	responses are received on both the configured and bit-flipped addresses. If the
	first response received is not from the intended mainframe device or AS/400
	computer, SNA Server cannot establish a connection with that device, and the
	connection status stays pending.
	
	REFERENCES
	==========
	
	  Q123791 SNA Server Remote Station Discovery Process
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :2.11 SP1,2.11 SP2,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
