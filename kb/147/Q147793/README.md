---
layout: page
title: "Q147793: Specifying User Logon Servers"
permalink: /kb/147/Q147793/
---

## Q147793: Specifying User Logon Servers

	Article: Q147793
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbenv SMSINFO kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be beneficial for you to specify which Microsoft Systems Management
	Server Windows NT Server logon server a Systems Management Server client user
	logs on to. This is especially true when domain controllers for the same domain
	span multiple Systems Management Server sites. The ability to specify logon
	servers ensures that inventory shows up in the proper site databases. This can
	be accomplished by substituting a specified logon server (or servers) for the
	domain entry in the [workgroup] section of the Smsls.ini file (located in the
	Sms\Site.srv\Maincfg.box directory of the site server).
	
	MORE INFORMATION
	================
	
	A sample [workgroup] section specifying that all users in WorkgroupA use logon
	server ServerA or ServerB, and that users in WorkgroupB use the logon server
	ServerC would look like this:
	
	     [workgroup]
	     WorkgroupA=\\ServerA
	     WorkgroupA=\\ServerB
	     WorkgroupB=\\ServerC
	
	For related information about mapping clients in Smsls.ini, see page 92 of the
	"Microsoft Systems Management Server Administrator's Guide."
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv SMSINFO kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbinfo
	
	=============================================================================
	
