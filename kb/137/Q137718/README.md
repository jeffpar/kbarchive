---
layout: page
title: "Q137718: APPCTL /Delete Command Line Option Does Not Work"
permalink: /kb/137/Q137718/
---

## Q137718: APPCTL /Delete Command Line Option Does Not Work

{% raw %}

	Article: Q137718
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On page 534, the Systems Management Server "Administrator's Guide" incorrectly
	states that /DELETE is a valid command line option for APPCTL:
	
	  /delete
	
	  Removes all SMS program groups from the Program Manager and from the local
	  registry.
	
	The correct command line option is the following:
	
	  /deinstall
	
	The SMS Help file (SMS.HLP) lists the correct command line option for APPCTL.
	
	Additional query words: prodsms sms Appendix B: Client References
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
