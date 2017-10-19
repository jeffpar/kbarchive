---
layout: page
title: "Q122210: Communication Fails with NWLink and Even Length Packets"
permalink: /kb/122/Q122210/
---

## Q122210: Communication Fails with NWLink and Even Length Packets

	Article: Q122210
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): ; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NWLINK and NWNBLINK 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a workstation is configured to use the NWLink and NWNBLink, IPX/SPX
	compatible transport with NetBIOS, communication may fail with a remote site
	when IPX even length packets usage is forced.
	
	When you attempt to logon to a Microsoft network domain, the following error may
	appear:
	
	  The password you specified is incorrect or your account is inactive. See your
	  network administrator for the password or to activate your account.
	
	Another error message may also appear indicating this problem:
	
	  Error 55: The resource does not exist on the network
	
	CAUSE
	=====
	
	By using the optional parameter, EVEN_PACKETS=YES, in the [NWLINK] section of
	PROTOCOL.INI, you can force the protocol stack to always send even length
	packets. Basically this parameter is never needed, because nearly all IPX
	environments can cooperate with the default setting used by the NWLink transport
	stack. Only in older environments, where the remote site still needs
	communication via IPX packets of even length, is this enforcement necessary.
	Enabling this parameter also forces the transport stack to use 802.3 packets,
	instead of a selectable packet type.
	
	
	WORKAROUND
	==========
	
	Disable the enforcement of even length packets by removing the EVEN_PACKETS=YES
	parameter from PROTOCOL.INI. All transport parameters can be modified using the
	Network portion of Control Panel. Select the "IPX/SPX Compatible Transport with
	NetBIOS" and then choose Setup. Change the value of Force Even Length IPX
	Packets to no in the Advanced Protocol Settings dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups 3.11. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: 3.11 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbZNotKeyword3 kbWFW311 kbNWLINKSearch
	Version           : :; WINDOWS:3.11
	
	=============================================================================
	
