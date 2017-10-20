---
layout: page
title: "Q265199: SNA LU6.2 Session May Incorrectly Display &#91;Not In Use&#93;"
permalink: /kb/265/Q265199/
---

## Q265199: SNA LU6.2 Session May Incorrectly Display &#91;Not In Use&#93;

{% raw %}

	Article: Q265199
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server and Host Integration Server 2000 both support the ability to run
	LU6.2 applications locally against a single server over two local APPC LUs. This
	configuration allows an APPC or CPIC application developer to test two Win32
	LU6.2 applications on a single server without the need for an SNA connection.
	However, when you run a pair of APPC or CPIC applications in this configuration,
	SNA Manager or the Microsoft Management Console (MMC) snap-in display one of the
	local APPC LUs as [Not In Use] when the LU is actually in conversation with
	another local APPC LU.
	
	For example, when you run APING and APINGD sample applications on the same server
	by using local APPC LU LUPING and LUPINGD, the LUPING correctly displays the
	User Name of the APING application when it has an active LU6.2 conversation;
	however, when LUPINGD displays a session to LUPING, the User Name appears as
	[Not In Use].
	
	NOTE: This problem does not occur when you use local APPC LUs against remote APPC
	LUs. However, if the LU6.2 conversation is very short, SNA Manager or the MMC
	snap-in displays the LU6.2 session status as [Not In Use]. The LU6.2
	conversation must exist for several seconds in order for the conversation status
	to be refreshed.
	
	CAUSE
	=====
	
	The problem displaying the local APPC LU conversation status for a single,
	locally partnered session is a known problem in SNA Manager and the MMC snap-in.
	
	WORKAROUND
	==========
	
	Find the local APPC LU that is displaying the LU6.2 conversation usage, and view
	its status to monitor session state.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 (all SPs), 4.0
	(all SPs) and Host Integration Server 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3; :
	
	=============================================================================
	

{% endraw %}
