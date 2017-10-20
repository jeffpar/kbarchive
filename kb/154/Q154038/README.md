---
layout: page
title: "Q154038: FPNW Needs GSNW for RPC SAP Services"
permalink: /kb/154/Q154038/
---

## Q154038: FPNW Needs GSNW for RPC SAP Services

{% raw %}

	Article: Q154038
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you are trying to change your
	password on a File and Print Services for NetWare (FPNW) Server:
	
	  Unexpected Error (89F8)
	
	SUMMARY
	=======
	
	To change passwords in a master domain scenario, (Gateway Services for NetWare
	(GSNW) must be installed on the primary domain controller (PDC) of the master
	domain.
	
	MORE INFORMATION
	================
	
	To make password changes in the Master Domain-Resource Domain scenario, the
	client has to be able to directly contact the PDC of the Master Domain. The
	client uses RPC to do this. The client queries the server it is logged on to for
	the Net Address of the FPNW PDC. If the Server is not advertising itself by
	means of Service Advertising Protocols (SAPs), the server the client is logged
	on to will not be able to return an address to the client. Without GSNW
	installed on the PDC the server will not advertise the RPC service needed for
	the client to connect. For this reason GSNW must be installed on the PDC of the
	Master Domain so that the other computers in the Domain will be able to forward
	his address to the clients. GSNW is not required on any of the other computers
	in the domain, but you will not be able to browse NetWare servers if it is not
	installed.
	
	STATUS
	======
	
	This has been corrected in Windows NT 4.0. FPNW will advertise the RPC service
	itself.
	
	Additional query words: domain novell gateway services fpnw gsnw netware
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
