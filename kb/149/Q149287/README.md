---
layout: page
title: "Q149287: Upgrading Site Server Recreates Program Group"
permalink: /kb/149/Q149287/
---

## Q149287: Upgrading Site Server Recreates Program Group

{% raw %}

	Article: Q149287
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you upgrade an existing Systems Management Server site server by running
	setup from the Systems Management Server compact disc, the "Systems Management
	Server" program group will be deleted and recreated by the Setup program.
	
	MORE INFORMATION
	================
	
	In order to upgrade a primary site server, Setup.bat must be executed from the
	SMSSETUP directory on the Systems Management Server compact disc. Next choose
	"Upgrade Site" from the setup menu that is presented.
	
	At the end of the upgrade process, the existing "Systems Management Server"
	common program group will be deleted and then recreated with all of the standard
	icons. Any additional icons, like the Crystal Reports icons or other custom
	icons, will be deleted.
	
	To avoid losing custom icons and those created by installing Crystal Reports,
	rename the "Systems Management Server" group prior to performing the upgrade.
	
	NOTE: Applying a Systems Management Server service pack does not affect the
	program group in any way.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
