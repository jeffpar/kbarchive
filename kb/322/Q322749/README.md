---
layout: page
title: "Q322749: Alerts Sender Error When You Connect to Alerts Database"
permalink: /kb/322/Q322749/
---

## Q322749: Alerts Sender Error When You Connect to Alerts Database

	Article: Q322749
	Product(s): Microsoft Developer Network
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft.NET Alerts 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the alerts sender to connect to the Alerts database, you may
	receive the following error message:
	
	  The requested name is valid and was found in the database, but it does not
	  have the correct associated data being resolved for.
	
	CAUSE
	=====
	
	An incorrect setting in the NotificationTransport.Proxy variable causes this
	error.
	
	RESOLUTION
	==========
	
	To resolve this issue, set the NotificationTransport.Proxy variable to your
	Proxy system (NotificationTransport.Proxy = "proxysystem").
	
	NOTE: In some cases the reverse is true. A computer may generate this error if
	the NotificationTransport.Proxy variable has been set and if there is no proxy
	for the system to run through.
	
	MORE INFORMATION
	================
	
	For technical questions, including SDK, component installation, and component
	deployment, contact .NET Services Developer Support by e-mail at
	nfssup@microsoft.com or by telephone at 425-707-5798. Telephone support is
	available between 7:00 A.M. and 6:00 P.M. PST, Monday through Friday.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbNETAlerts
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
