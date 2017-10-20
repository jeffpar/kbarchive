---
layout: page
title: "Q97756: 3Server/Suppressing Extra Printed Page"
permalink: /kb/097/Q97756/
---

## Q97756: 3Server/Suppressing Extra Printed Page

{% raw %}

	Article: Q97756
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If you try to change printer properties on a 3Server by browsing from a remote
	workstation/server, the option for Printer Properties is dimmed. This usually
	does not present a problem, but to suppress an extra printed page using the
	MSNULL driver, you need to be able to change the Form Feed Control to none, and
	perhaps change the Default Spool File Type from PM_Q_STD to PM_Q_RAW.
	
	The article titled "How to Add a Printer Driver on a 3Server," Q94232, describes
	how to add additional printer drivers to a 3Server by editing the OS2SYS.INI on
	the remote workstation, then copying the updated file to the 3Server via a 3C
	Connection. Use that procedure here, with one enhancement: because the printers
	that are normally created on a PC Server include the printer properties, as well
	as port information, it will be necessary to create these on the viewing
	workstation/server also before transferring the resulting file to the 3Server.
	
	Note: Bear in mind that this makes a global change to the Printer Properties. If
	all applications print correctly, and only one causes an extra page to print,
	the application's printing setup should be checked for an extra form feed at
	EOJ.
	
	Additional query words: 2.10 gray grey
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
