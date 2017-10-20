---
layout: page
title: "Q171984: Using DLC Protocol Instead of JetAdmin Utility"
permalink: /kb/171/Q171984/
---

## Q171984: Using DLC Protocol Instead of JetAdmin Utility

{% raw %}

	Article: Q171984
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbhowto
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Any printer configured for use with Windows NT Server will be available for both
	Microsoft clients and NetWare clients (through File and Print Services for
	NetWare [FPNW]) when the printer is shared.
	
	Configuring a printer as a normal Windows NT printer and sharing it is much
	simpler than using the Jetadmin utility to configure it.
	
	MORE INFORMATION
	================
	
	To use a printer with a JetDirect card as a network printer,perform the
	following steps:
	
	1. Get the media access control address of the JetDirect card. (You may want to
	  use JetAdmin to get the media access control address in some instances.)
	
	2. Install the DLC protocol by clicking the Protocol tab in the Control Panel
	  Network tool. Restart your computer.
	
	3. Click the Start button, point to Settings, and then click Printers.
	
	4. Double-click the Add Printer icon. Accept the default setting which is "My
	  Computer" by clicking Next. You are now in the Add Printer wizard box.
	
	5. Click Add Port.
	
	6. In the Available Printer Ports list, select the Hewlett-Packard Network Port,
	  and then click New Port.
	
	7. In the Name box, type in the print queue name. Under the Name, type in the
	  card address if it does not appear in the list.
	
	8. Click OK, then close. You are now at the printer Wizard box again.
	
	9. Select the printer type, and then click next. Type in the name of the
	  printer, and then share the printer.
	
	10. Print a test page to verify the new drivers' status.
	
	NOTE: JetDirect is no longer supported by HP. They now use SDI (Simple Device
	Installation) to install network printers. For more information on this, see:
	
	http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj05973
	or
	http://www.hp.com/cposupport/networking/support_doc/bpj06765.html
	
	HP recommends a new software admin package (TCP/IP / IPX/SPX Based). For further
	information see:
	
	http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06723
	or
	http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06724
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhowto 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbServicesNetwareSearch kbFPNW351
	Version           : :3.5,3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
