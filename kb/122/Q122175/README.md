---
layout: page
title: "Q122175: SMS Network Applications Database Synchronization"
permalink: kb/122/Q122175/
---

## Q122175: SMS Network Applications Database Synchronization

	Article: Q122175
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a program group or package is defined for a site in a hierarchy, it is
	replicated to all child sites of the site for which it was defined. The process
	of replicating the network applications database (NAD) involves many
	subprocesses. It is possible that various combinations of parent site
	attachments and detachments may make the NAD go out of synch between originating
	and current sites.
	
	The RSAPPCTL utility can be used to manage the NAD replication and reset process
	when it goes out of synch. You can run RSAPPCTL from the
	SITE.SRV\<architecture> directory.
	
	Command Syntax:
	
	     rsappctl {/SELF} {/ALL} {/SITE:sitecode} {/SITESERVER:servername}
	
	  /SELF                   Reset NAD for this site (but not children).
	  /ALL                    Reset NAD for all child sites (not self).
	  /SITE:sitecode          Reset NAD for the specified child site.
	  /SITESERVER:server      This site's site server. Only needed
	                          if NADRESET is not being run on the site server.
	
	You can combine /SELF with /ALL to do a total reset of the current site and any
	children of the current site.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
