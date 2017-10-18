---
layout: page
title: "Q121383: Shared Packages Not Distributed to NetWare Volumes"
permalink: kb/121/Q121383/
---

## Q121383: Shared Packages Not Distributed to NetWare Volumes

	Article: Q121383
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Shared packages of applications are not distributed to specified volumes on the
	NetWare servers.
	
	CAUSE
	=====
	
	If the NetWare volume specified for the distribution of shared packages does not
	exist, the de-spooler tries the volume on which Systems Management Server is
	installed. The de-spooler will not use the NetWare SYS volume if the NetWare
	package server is not a Systems Management Server logon server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	More information regarding this issue is available in the Package Distribution
	section of the Release Notes.
	
	NetWare is manufactured by Novell Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
