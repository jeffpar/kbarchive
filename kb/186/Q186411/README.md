---
layout: page
title: "Q186411: SMS: Secondary Sites Do Not Get WinNT 4.0 Video Drivers"
permalink: /kb/186/Q186411/
---

## Q186411: SMS: Secondary Sites Do Not Get WinNT 4.0 Video Drivers

	Article: Q186411
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server primary site servers which have Service Pack 3 (SP3)
	installed do not transmit the new Microsoft Windows NT 4.0 ONLY video drivers
	for "Accelerated Screen Transfer on Windows NT Clients" to their secondary site
	servers.
	
	WORKAROUND
	==========
	
	Add the additional video drivers by editing the Secondary Site Properties using
	the Systems Management Server Administrator User Interface:
	
	  Clients\Proposed Properties\Options\Compatible Video Drivers.
	
	  <ART (NT 4.0 only)>
	  <FRAMEBUF (NT 4.0 only)>
	  <MGA (NT 4.0 only)>
	  <QV (NT 4.0 only)>
	  <S3 (NT 4.0 only)>
	  <TGA (NT 4.0 only)>
	  <VGA (NT 4.0 only)>
	  <VGA256 (NT 4.0 only)>
	  <VGA64K (NT 4.0 only)>
	  <W32 (NT 4.0 only)>
	  <WEITEKP9 (NT 4.0 only)>
	  <XGA (NT 4.0 only)>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms video remote control
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
