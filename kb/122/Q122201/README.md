---
layout: page
title: "Q122201: Foreign NAD Items Remain After Child Detaches"
permalink: kb/122/Q122201/
---

## Q122201: Foreign NAD Items Remain After Child Detaches

	Article: Q122201
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a child site detaches from a parent site, any packages or program groups
	defined at the parent site exist and are preserved on the child site.
	
	WORKAROUND
	==========
	
	After a child site detaches from a parent, you may want to remove the previous
	parent site's network applications database (NAD) from the child. Removal of the
	parent's NAD does not automatically occur because of the potentially dramatic
	effect it could have on client machines (program groups and program items being
	removed) even though access to these items may still exist.
	
	To initiate a transaction in the Systems Management Server Applications Manager,
	use the following procedure, run the NADRESET.BAT file in the PSSTOOLS directory
	on the CD. This file performs the following steps:
	
	- Creates a 10000000.NAD directory in <SMSROOT>\SITE.SRV\SITECFG.BOX.
	
	- Creates a TRANSLOG.CLR file in the 10000000.NAD directory.
	
	- Creates an ALL.RST file in the 10000000.NAD directory.
	
	NOTE: 10000000.NAD is used only because it is unlikely that a directory with the
	same name exists. Any name can be used with the NAD extension.
	
	The next polling interval for the Applications Manager removes foreign NAD items.
	There will be a period of time before the changes are propagated to the
	MAINCFG.BOX\APPCTL.SRC\DATABASE directory. Following this processing, the files
	created in the list above are automatically removed by the Applications Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
