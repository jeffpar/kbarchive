---
layout: page
title: "Q150810: Cannot print to Cyclone Print Station"
permalink: /kb/150/Q150810/
---

## Q150810: Cannot print to Cyclone Print Station

{% raw %}

	Article: Q150810
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print to a Cyclone Print Station from Windows NT, the following
	errors may occur. When you print using Line Printer Remote (LPR), the following
	error message appears:
	
	  Error: print server did not accept print request. Job aborted
	
	Or, when you print a document from an application connected to the print share in
	Printer Manager, a Messenger Service dialog box displays the following error
	message:
	
	  Printing on <Printer Share> [lpr printer address:printer name] printing
	  errors occured
	
	RESOLUTION
	==========
	
	If you cannot print to a Cyclone Print Station print server from Windows NT, you
	must add the Windows NT hostname and IP address of the Windows NT server to the
	Hosts.lpd file found on the Cyclone Print Station in the etc directory of the
	UNIX workstation. Adding the Windows NT hostname and IP address to the Hosts.lpd
	file gives permission for the client to print to the Cyclone Print Station print
	server.
	
	MORE INFORMATION
	================
	
	Cyclone Print Station is made by Colorbus. Cyclone is a UNIX print server and
	Postscript RIP for color output device. It supports IPX, Ethertalk and TCP/IP
	Print Queues and can print to HP DesignJet 650/750 printers, ENCAD Novajet II,
	III or Pro Plotters. For more information, see the Colorbus web site at
	http://www.colorbus.com.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
