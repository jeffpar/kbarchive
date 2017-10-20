---
layout: page
title: "Q140912: How to Install Printer Drivers for Different Processor Types"
permalink: /kb/140/Q140912/
---

## Q140912: How to Install Printer Drivers for Different Processor Types

{% raw %}

	Article: Q140912
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because RISC and x86-based computers use different printer drivers, you may want
	to install printer drivers for both platforms on your print servers if your
	network contains a mixture of RISC and x86-based computers. For example, when a
	RISC-based Windows NT computer connects to an x86-based Windows NT print server,
	the RISC version of the printer driver must be available to the RISC-based
	computer. You can install the RISC printer driver on either the local computer
	or on the x86-based print server. If you install the driver on the server, it
	will be available to any other RISC-based Windows NT computer on your network.
	
	MORE INFORMATION
	================
	
	To install a printer for another processor type:
	
	1. Select the printer icon or window.
	
	2. From the Printer menu, choose Properties. Or choose the Properties button on
	  the toolbar.
	
	3. In the Printer Properties dialog box, select Other in the Driver box.
	
	4. In the Install Driver dialog box, specify the drive and path where the
	  printer driver is located and choose the OK button. You must specify the
	  location of the PRINTER.INF file for the RISC drivers, for example, the \MIPS
	  directory on the Windows NT Server compact disc.
	
	5. In the Select Driver dialog box, select the driver in the Printer Driver box.
	  Then choose OK.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
