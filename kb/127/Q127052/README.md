---
layout: page
title: "Q127052: SMS Unique ID (SMSID) Allocation"
permalink: kb/127/Q127052/
---

## Q127052: SMS Unique ID (SMSID) Allocation

	Article: Q127052
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbMaintMan smsdatabase smsmaintman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Every client in a Microsoft Systems Management Server site has a unique
	identification called an SMSID. This is derived from the Unique ID (UID) file on
	a logon server. Systems Management Server performs several functions to ensure
	uniqueness within the site as well as across sites. This article discusses these
	functions in detail.
	
	MORE INFORMATION
	================
	
	Systems Management Server performs the following functions to ensure uniqueness
	within the site and across sites:
	
	- To ensure uniqueness (in the event a site is uninstalled), the last UID range
	  is saved from the Registry by Systems Management Server Setup and placed into
	  the site server's Sms.ini file. If a site is reinstalled later, this range is
	  restored to the Registry, thus the site does not allocate any duplicate
	  SMSIDs. If the Sms.ini is removed from the site server following an
	  uninstall, each client should be uninstalled and reinstalled.
	
	- It is possible to reinstall the site and ensure that no duplicate SMSIDs are
	  allocated. As the last allocated UID range is stored in the registry, the
	  Administrator, in lieu of uninstalling and reinstalling client computers, can
	  place a sufficiently high value in the registry to ensure that duplicate
	  SMSIDs are not issued. The registry entry is stored as a REG_SZ type in the
	  following key:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Components
	     \SMS_MAINTENANCE_MANAGER\Next SMS Unique ID
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	- Assuming that the site is installed, normal processing begins. In creating
	  the actual UID file, the SMSID is managed in several parts. The first three
	  characters are always the site code of the creating site. The next two
	  characters represent the UID range and allows each logon server to own a
	  range of SMSIDs to allocate to clients. No two logon servers will have the
	  same range. The last three characters are sequentially incremented each time
	  an SMSID is allocated by a client. The numeric range of the SMSID is expanded
	  by including the A to Z characters as extensions of 0 to 9 range. This
	  provides 36 values instead of just 10, and allows for the following maximum
	  capacities:
	
	   - Unique site codes: 36^3 = 46,656
	
	   - Unique logon server ranges:
	
	      - Assuming not more than 44,065 clients per logon server:
	
	  36^2 = 1,296
	
	      - Assuming more than 44,065 clients per logon server is more complicated
	        because each doubling of 44,065 SMSIDs per server reduces the available
	        ranges by half.
	
	     Unique SMSIDs per logon server (depends on number of logon servers because
	     values between the two bounds of 1 and 1,296 vary the number of available
	     ranges which can be allocated upon the expiration of a prior range):
	
	      - Assuming a single logon server: 36^5 = 60,466,176
	
	      - Assuming 1,296 logon servers: 36^4 = 1,679,616
	
	   - Unique SMSIDs (per site): 36^5 = 60,466,176
	
	   - Unique SMSIDs (total): 36^8 = 78,364,164,096
	
	- When each new client attempts to allocate an SMSID, it takes the current name
	  of the UID file as its own SMSID and attempts to increment the name of the
	  UID file to the next value. The time stamp for the UID does not change when a
	  client is installed. Each client does this in turn (it is not controlled by
	  the site server). Only the allocation of new ranges is managed by the site
	  server. When a sharing violation or other errors occur, the client will retry
	  30 times, and indicate a # character on the screen for each retry. The UID
	  file is maintained in a single location,
	  SMS_SHR\SMSID\<next_smsid>.UID.
	
	- The Maintenance Manager compares each logon server's UID range to evaluate if
	  a new range needs to be issued. If the current value of the SMSID exceeds
	  "*****Y00" (44,065 SMSIDs), a new range is allocated to the logon server.
	  This is a rather proactive threshold (2,591 SMSIDs early), intended to make
	  sure the range never actually expires even when Maintenance Manager is set
	  for the slow response setting in site properties. This provides room for
	  44,065 computers per range, and will have a minor effect on the architectural
	  limitations described above.
	
	- If a computer moves from one site to another by virtue of three successive
	  logons to a new site's domain, then the original SMSID for the client is used
	  by the new site database. This is by design. The SMSID should not be altered
	  after it is allocated. The uninstall and/or reinstall procedures should be
	  used when a SMSID change is required on a client.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbMaintMan smsdatabase smsmaintman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbinfo
	
	=============================================================================
	
