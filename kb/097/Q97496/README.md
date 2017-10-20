---
layout: page
title: "Q97496: Use MSnull/IBMnull Driver with HP IIIsi Printer"
permalink: /kb/097/Q97496/
---

## Q97496: Use MSnull/IBMnull Driver with HP IIIsi Printer

{% raw %}

	Article: Q97496
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	For reasons that are discussed below, the MSnull or IBMnull drivers are the best
	to use on a server to run Hewlett-Packard (HP) IIIsi printers on LAN Manager.
	
	Any print job you send from an application already has the required print
	information embedded, so you don't need a specific driver such as the IIIsi on
	the server. As a rule, you want a driver on the server to be as generic as
	possible so that jobs--which applications have already formatted with necessary
	code--print without being processed by anything else. Set applicable null driver
	switches such as Default Spool Type to RAW, and set the Form Feed control to
	NONE.
	
	This is the cleanest way to set up a print server for all workstation
	environments except OS/2 workstations.
	
	Additional query words: 2.00 2.0 2.1 2.10 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	

{% endraw %}
