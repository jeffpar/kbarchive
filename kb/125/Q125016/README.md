---
layout: page
title: "Q125016: Why SMS Creates Macintosh Volumes for Shared Applications"
permalink: /kb/125/Q125016/
---

## Q125016: Why SMS Creates Macintosh Volumes for Shared Applications

	Article: Q125016
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When distributing a Systems Management Server shared application package to an
	SMS Windows NT distribution server that is also running Services for Macintosh,
	a Macintosh volume is created for the new share with the same name as the
	Windows NT share. This occurs even though SMS has no attributes for the shared
	package designating that the package supports Macintoshes.
	
	MORE INFORMATION
	================
	
	SMS can be used to distribute anything to a shared network directory, not just
	shared applications for PC platforms. Because Macintoshes are a supported
	platform, SMS creates a Macintosh Volume on any SMS Windows NT distribution
	server that is also running Services for Macintosh.
	
	This was designed so SMS can be used to distribute applications and data files
	for Macintoshes even though SMS itself has no Program Group Control application
	for the Macintosh platform. This allows SMS administrators to support multiple
	platforms with one distribution point without creating multiple packages and
	jobs.
	
	Additional query words: sms prodsms SFM Mac Apple
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
