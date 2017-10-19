---
layout: page
title: "Q151223: Network Applications Database (NAD) Share Point Corruption"
permalink: /kb/151/Q151223/
---

## Q151223: Network Applications Database (NAD) Share Point Corruption

	Article: Q151223
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbPGC smsdatabase smspgc
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	After running RSAPPCTL, Program Group Controller (PGC) icons point to an
	incorrect share. Clicking on those icons results either in an incorrect shared
	application being launched from the server, or in an error.
	
	CAUSE
	=====
	
	Applications Manager is responsible for building and maintaining the Network
	Applications Database (NAD), on each site server (see Appendix C, SMS System
	Flow of the "SMS Administrators Guide" for further information). When RSAPPCTL
	is run, it sends a 'RESET ALL' command to the Applications Manager component of
	the site(s) you specified when running RSAPPCTL. In SMS 1.0 and 1.1, the reset
	may be processed incorrectly, causing the NAD to contain incorrect share points
	for some shared packages.
	
	
	WORKAROUND
	==========
	
	Be sure to back up your SMS site before attempting the following workaround.
	(See Appendix K of the "SMS Administrators Guide" for correct backup
	procedures)
	
	NOTE: Clients updating PGC information by polling during the following procedure
	may have their registry updated with incomplete shared packages information. Be
	sure that clients poll the server for new PGC information after the following
	procedure is completed.
	
	For any sites that demonstrate the NAD share point corruption, perform the
	following:
	
	1. Stop the Applications Manager and Maintenance Manager services on the site
	  server..
	
	2. Delete the NAD files on the site server. These are located in <SMS
	  Root>\SITE.SRV\MAINCFG.BOX\APPCTL.SRC\DATABASE
	
	3. Delete the NAD files on the logon server(s) for that site: These are located
	  in <SMS Root>\LOGON.SRV\APPCTL.BOX\DATABASE
	
	4. Restart the Applications Manager and Maintenance Manager services.
	
	5. Ensure that the NAD files are re-created on the site and logon servers. Note
	  that the time it takes for this last step to occur depends on the frequency
	  of the services for that site. Applications and Maintenance Manager logs will
	  record the re-creation of the NAD files.
	
	6. Ensure that clients poll the server for updated PGC information. You may see
	  a dialog box indicating that the client is deconfiguring and reconfiguring
	  shared package information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbPGC smsdatabase smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
