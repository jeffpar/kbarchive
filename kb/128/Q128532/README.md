---
layout: page
title: "Q128532: FPNW: The Bindery Library Could Not Access the PDC for Write"
permalink: /kb/128/Q128532/
---

## Q128532: FPNW: The Bindery Library Could Not Access the PDC for Write

	Article: Q128532
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you promote different backup domain controllers (BDCs) to the role of
	primary domain controller (PDC) several times, the File and Print Services for
	NetWare (FPNW) server is not able to access the PDC and one or more of the
	following symptoms occur:
	
	- The following message appears in the system log:
	
	  Event ID #2625 - (EVENT_BINDLIB_PDC_SERVER_IS_DOWN)
	  Description: The BINDERY library could not access the PDC for write.
	
	- JetAdmin and PConsole can set up a PServer but JetAdmin and PConsole do not
	  successfully set a password. This leads to an invalid password response from
	  the server.
	
	- When you attempt to manipulate PServers, the following error messages appear
	  in Server Manager:
	
	  - Invalid File Name
	
	  - File Not Found
	
	NOTE: JetDirect is no longer supported by HP. SDI (Simple Device Installation) is
	now used to install network printers. For more information on this, see:
	
	  http://www.hp.com/cgi-bin/cposupport /ccsearch/getdoc?doc=bpj05973
	
	  or
	
	  http://www.hp.com/cposupport/network ing/support_doc/bpj06765.html
	
	HP recommends a new software admin package (TCP/IP / IPX/SPX based). For further
	information see:
	
	  http://www.hp.com/cgi-bin/cposupport /ccsearch/getdoc?doc=bpj06723
	
	  or
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc? doc=bpj06724
	
	CAUSE
	=====
	
	FPNW does not attempt to get the new PDC location. It fails the call and
	postpones obtaining a new PDC location until the next call. Consequently, the
	write handle on the PDC is lost.
	
	WORKAROUND
	==========
	
	To work around this problem, stop and restart FPNW service in Control Panel
	Services.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the service pack release containing this fix. Contact Microsoft Product
	Support Services for more information. Microsoft does not recommend implementing
	this fix at this time. Contact Microsoft Product Support Services for more
	information on the availability of this fix.
	
	
	Additional query words: prodnt novell build fpnw 192
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : :3.51
	
	=============================================================================
	
