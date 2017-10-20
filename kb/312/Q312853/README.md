---
layout: page
title: "Q312853: FMH-5 Attach Message Routed to TP Even if Local LU Doesn't Match"
permalink: /kb/312/Q312853/
---

## Q312853: FMH-5 Attach Message Routed to TP Even if Local LU Doesn't Match

{% raw %}

	Article: Q312853
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp3 kbsna400sp4
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Microsoft SNA Server may route an incoming FMH-5 Attach message to a Transaction
	Program (TP) even though the invokable TP is registered with a Local Logical
	Unit (LU) that does not match the Local LU specified in the FMH-5 Attach
	message.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft SNA Server version 4.0 service pack that contains this
	fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+---------------------------------+
	| File name   | Date      | Time  | 
	+---------------------------------+
	| snadmod.dll | 8/10/2001 | 12:09 | 
	+---------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0 SP3, 4.0
	SP4.
	
	NOTE: This problem does not exist in Microsoft Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	The following is an example of the problem described in the "Symptoms" section
	of this article.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	+-------------------------------------------+
	| SNA Client | Invokable TP Name | Local LU | 
	+-------------------------------------------+
	| Client1    | APINGD            | LUPINGD  | 
	+-------------------------------------------+
	| Client2    | APINGD            | LUPINGD2 | 
	+-------------------------------------------+
	
	If Client2 becomes unavailable after successfully registering TP APINGD, an SNA
	Server 4.0 SP3 or 4.0 SP4 system will route an incoming FMH-5 Attach message for
	APINGD to Client1, even though the request specifies LUPINGD2 as the Local LU
	alias.
	
	The correct behavior for the example described here is for the SNA Server to
	reject the FMH-5 Attach unless an invokable TP is registered with a TP Name of
	APINGD that does not have an associated Local LU alias.
	
	The following information provides an overview of how SNA Server and Host
	Integration Server (HIS) 2000 handle the FMH-5 Attach messages intended for
	invokable TPs. This information can also be found in the APPC Programmer's Guide
	included with the SNA Server and HIS 2000 software developer kits (SDKs).
	
	When SNA Server receives an FMH-5 Attach message in an SNA subdomain in which
	multiple invokable TPs are running, SNA Server must decide where to route the
	FMH-5 Attach message for eventual execution of the TP. Specific control over the
	routing of FMH-5 Attach messages can be controlled in a number of ways. The
	following are the three ways that invokable TPs can be arranged in an SNA
	subdomain:
	
	- Unique TP name for each TP:
	
	  In this case, each invokable TP running on an SNA client or SNA Server
	  computer will have a unique TP name. The FMH-5 Attach message includes the
	  name of the TP that it is intended for; therefore, SNA Server will be able to
	  route the Attach message to the system that has registered that specific TP
	  name.
	
	- TP name not unique; Local LU alias unique:
	
	  In this case, each invokable TP has the same name, but each is associated with
	  a unique Local LU alias. SNA Server knows which LU 6.2 session that the FMH-5
	  Attach message is using; therefore, it knows which local and remote LUs are
	  being used. SNA Server will route the request to not only the correct TP name
	  but also to the correct Local LU alias for the intended invokable TP.
	
	- TP name not unique; Local LU alias unspecified:
	
	  In this case, each TP is registered with the same TP name, and none are
	  associated with specific Local LU aliases. This is the arrangement that is
	  used when it does not matter which system executes the TP request.
	
	In addition, you can use the following registry entries in conjunction with the
	preceding scenarios to further control the routing of FMH-5 Attach messages:
	
	- DloadMatchTPOnly:REG_SZ:{ YES | NO }
	
	  When this variable is set to YES, the comparison between a FMH-5 Attach
	  message for a TP and the list of invokable TPs is based only on the TP name.
	  Otherwise, the comparison is based on both the requested TP name and the
	  requested LU alias. This variable affects the SNA servers on which it is set,
	  but does not affect other SNA servers.
	
	  To use a specific LU alias, you can configure invokable TPs through a registry
	  or environment variable on the system in which the TP is located. If you
	  configure the invokable TP in this way, the setting of DloadMatchTPOnly will
	  control whether the LU alias is used in comparisons against incoming
	  requests. If the invokable TP is not configured to use a specific LU alias,
	  there cannot be a mismatch (regardless of the setting of DloadMatchTPOnly),
	  no matter which LU alias an incoming request is using. With such TPs,
	  matching is affected only by the TP name.
	
	  The default value is NO, meaning that the comparison uses both the TP name and
	  LU alias (when the LU alias has been configured for the invokable TP).
	
	- DloadMatchLocalFirst:REG_SZ:{ YES | NO }
	
	  When this variable is set to NO, the comparison between a request for a TP and
	  the list of available invokable TPs is performed without regard for the
	  location of the TP. Otherwise, invokable TPs on the local SNA server are
	  considered first for a potential match. This variable affects the SNA server
	  on which it is set, but not other SNA servers in the subdomain.
	
	  The default value is YES, meaning that invokable TPs on the local SNA server
	  are considered first for a potential match.
	
	These registry parameters are not defined by default, so they need to be added
	under the following location if the default values need to be changed:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaServr\Parameters
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp3 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
