---
layout: page
title: "Q246590: COMTI Cannot Use All Available LU6.2 Sessions"
permalink: kb/246/Q246590/
---

## Q246590: COMTI Cannot Use All Available LU6.2 Sessions

	Article: Q246590
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0 SP1,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	- Microsoft COM Transaction Integrator for CICS and IMS, versions 1.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a COM Transaction Integrator for CICS and IMS (COMTI) component attempts to
	establish multiple APPC conversations to a host transaction program (TP) over a
	given APPC triplet (Local LU, Remote LU, and Mode), COMTI may be unable to use
	all of the available sessions that were negotiated during the Change Number of
	Sessions (CNOS) exchange. For example, if a maximum parallel session limit of 6
	is negotiated for a particular LU triplet, COMTI may only see 3 of the sessions.
	It will never attempt to use the remaining available sessions, regardless of the
	load or volume of data that may be arriving from upper-layer applications.
	
	CAUSE
	=====
	
	By design, COMTI APPC conversations can only be established over LU6.2
	contention winner (conwinner) sessions. In many cases, the conwinner-session
	limit negotiated during the CNOS exchange is less than the total parallel
	sessions supported for the mode. Only conwinner sessions are visible to COMTI.
	
	RESOLUTION
	==========
	
	A supported feature that modifies the product's default behavior is now
	available from Microsoft, but it is only intended to modify the behavior
	described in this article and should be applied only to systems having a
	specific need for it. This feature may receive additional testing at a later
	time, to further ensure product quality. Therefore, if you are not severely
	affected by the lack of this feature, Microsoft recommends that you wait for the
	next Microsoft SNA Server version 4.0 service pack 3 that contains this
	feature.
	
	To obtain this feature immediately, contact Microsoft Product Support Services.
	For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this feature should have the following file attributes or
	later:
	
	+---------------------------------+
	| File name    | Date     | Time  | 
	+---------------------------------+
	| xxxxxxxx.xxx | xx/xx/xx | xx:xx | 
	+---------------------------------+
	
	NOTE: Date and time information will be provided as soon as it becomes
	available.
	
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When COMTI formulates an MC_ALLOCATE request to initiate a conversation to the
	remote TP, it sets the return control (rtn_ctl) attribute to
	AP_WHEN_CONWINNER_ALLOC to specifically ask for a conwinner session. Considering
	that COMTI is the initiator of all transactions, making use of conwinner
	sessions is the most optimal choice when performance is a concern. There is no
	bidding overhead incurred for conversation startup. When all conwinner sessions
	are in use, available contention loser (conloser) sessions will not be useable
	by COMTI. Contention loser sessions are also known as partner contention winner
	sessions.
	
	The feature update mentioned in this article simply allows COMTI to make use of
	all available sessions regardless of whether they are conwinners or conlosers.
	This has been achieved by setting the MC_ALLOCATE rtn_ctl attribute to
	AP_WHEN_SESSION_ALLOCATED. By default, SNA Server exhausts all cowinner sessions
	first before resorting to the contention losers.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q196391 Factors Affecting COMTI Performance
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI100SP1 kbCOMTI400SP2 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbComSearch
	Version           : WINDOWS:1.0 SP1,4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	
