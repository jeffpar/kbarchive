---
layout: page
title: "Q151184: SMS: Disabling Inventory Collection over Slow Connections"
permalink: kb/151/Q151184/
---

## Q151184: SMS: Disabling Inventory Collection over Slow Connections

	Article: Q151184
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory kbMaintMan smsinv smshowto smsmaintmankbfaq
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install Systems Management Server in your network, you may find that
	you don't want your remote clients to be inventoried when they log on remotely
	over a slow speed dial-up connection because of the additional time it will
	take.
	
	Listed below is a checklist and discussion of the utilities involved in
	customizing the Systems Management Server environment so that Smsls.bat/.cmd
	will not be executed over a slow network link such as a dial-up line.
	
	MORE INFORMATION
	================
	
	Configuring the Site Server Properties
	--------------------------------------
	
	To configure your SMS site server not to collect inventory over a slow link, do
	the following:
	
	1. In the Site Properties window in the SMS Administrator utility, click the
	  Inventory button.
	
	2. Select Proposed Properties, and select either "Prompt Workstation Users" or
	  "Don't Take Inventory."
	
	3. Keep choosing OK until you are back to the Sites window. Remember, site
	  property changes take a few minutes to be processed, and longer in cases
	  where a child site's properties are being changed.
	
	  As a result of this change in the site properties, the SMS Maintenance Manager
	  service will generate a new Netspeed.com. If SMS is configured so that your
	  login scripts are automatically configured, the new Netspeed.com will
	  eventually be copied or replicated to your logon servers.
	
	  However, if SMS is not configured to modify your login scripts, you will need
	  to copy the updated Netspeed.com to your logon server(s). The new version of
	  Netspeed.com is located on your site server in the
	  \Sms\Site.Srv\Maincfg.Box\Client.src directory.
	
	  If you use the Directory Replicator service to copy your login scripts between
	  your logon servers, copy the new Netspeed.com to the source directory of your
	  export server, normally the primary domain controller of the logon domain. If
	  this service is not used, copy the file to the Netlogon share of all your
	  logon servers, the same directory where Smsls.bat/.cmd is being executed
	  from.
	
	For additional information, click the article number on configuring SMS to
	automatically update your login scripts below to view the article on configuring
	SMS to automatically update your login scripts in the Microsoft Knowledge Base:
	
	  Q123318 Checklist for Enabling SMS in Logon Scripts
	
	Adjusting the Threshold Speed
	-----------------------------
	
	Depending on the actual speed of the remote connection, you may find it necessary
	to adjust the cutoff value where Netspeed.com determines that the connection is
	slow.
	
	For additional information, click the article number on adjusting this threshold
	value or how Netspeed.com functions below to view the article on adjusting this
	threshold value or how Netspeed.com functions in the Microsoft Knowledge Base:
	
	  Q142267 NETSPEED Returns False Speed Over Compression Capable Link
	
	  Q131011 SMS: Netspeed.com Internals
	
	Additional query words: inventory slow network disable prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory kbMaintMan smsinv smshowto smsmaintman kbfaq
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : :1.0,1.1,1.2
	
	=============================================================================
	
