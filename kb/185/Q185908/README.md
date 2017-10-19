---
layout: page
title: "Q185908: SMS: How to Integrate Apple Macintosh Clients"
permalink: /kb/185/Q185908/
---

## Q185908: SMS: How to Integrate Apple Macintosh Clients

	Article: Q185908
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 03-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server can include Macintosh clients in inventory. However,
	to enable support for Macintosh clients, you must first install the following:
	
	- Windows NT Services for Macintosh
	- Systems Management Server components for Macintosh
	- Apple Installer program (not supplied with Systems Management Server)
	
	MORE INFORMATION
	================
	
	Windows NT Services for Macintosh
	---------------------------------
	
	By installing Windows NT Services for Macintosh on other Windows NT Server
	computers in a Systems Management Server domain, you enable those servers to
	provide logon server support to Macintosh clients. At every Systems Management
	Server domain, Systems Management Server automatically installs a logon server
	volume on all Windows NT Server computers that have Services for Macintosh
	installed and running.
	
	On the Windows NT Server computer that is running Services for Macintosh, create
	user accounts for the Macintosh clients that you want to include in the Systems
	Management Server inventory.
	
	Systems Management Server Components for Macintosh
	--------------------------------------------------
	
	You must use the Systems Management Server Setup program to install the Macintosh
	components on the site server of the site where you want Macintosh support. By
	default, the Macintosh components are not installed during the initial setup.
	
	For a list of all components installed to Macintosh clients, see "Appendix B" of
	the "System Management Server Administrator's Guide."
	
	Apple Installer Program
	-----------------------
	
	The Apple Installer, which is not supplied with Systems Management Server, is
	required to install the appropriate Systems Management Server files to a
	Macintosh client. You must add this file to each primary site server that will
	be administering Macintosh clients before adding these clients. Note that you
	must also add the file to the parent of any secondary site that will be
	supporting Macintosh clients.
	
	REFERENCES
	==========
	
	"Systems Management Server Administrator's Guide," pages 56-57 and 96-98
	
	Additional query words: prodsms mac
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	Issue type        : kbinfo
	
	=============================================================================
	
