---
layout: page
title: "Q185097: SNA Server Does not Support Compression across 3270/FMI"
permalink: /kb/185/Q185097/
---

## Q185097: SNA Server Does not Support Compression across 3270/FMI

{% raw %}

	Article: Q185097
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some 3270 emulators, such as IBM's Personal Communications/3270, support SNA
	session-level compression that allows the 3270 data sent between the 3270
	emulator and the host to be compressed. This compression is also known as
	Length-Checked Compression (LCC).
	
	SNA Server 4.0 (and later) supports SNA session-level compression between the SNA
	Server and a Host (Mainframe or AS/400).
	
	This feature allows the same type of data compression that is offered by those
	3270 emulators that support SNA session-level compression, so it can be used in
	those instances where SNA session-level is needed.
	
	MORE INFORMATION
	================
	
	SNA Server does not support SNA session-level compression (that is, LCC) for
	3270 sessions across its native Function Management Interface ([FMI], also known
	as Emulator Interface Specification [EIS]). Compression is not supported across
	the FMI interface because the SNA Server service often has to segment the FMI
	data it receives from the 3270 emulator into smaller RUs to be sent to the host.
	If the data were compressed, SNA Server would not be able to properly segment
	the data.
	
	In addition, SNA Server's LUA interfaces (RUI and SLI) do not support the ability
	to negotiate the use of SNA session-level compression.
	
	The use of SNA session-level compression only needs to be used in certain
	instances. These may include the following:
	
	- Slow link speeds between the SNA Server and the host.
	
	- Links whose costs are based on traffic volume.
	
	In most cases, the link speed (that is, bandwidth) between the 3270 clients and
	the SNA Server is not slow enough to warrant the compression of the data between
	the client and the SNA Server.
	
	REFERENCES
	==========
	
	IBM Personal Communications/3270 is manufactured by International Business
	Machines Corporation, a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
